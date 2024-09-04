import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {Todo} from '~/entities/todos';

export const api = createApi({
  baseQuery: fetchBaseQuery({baseUrl: 'api/'}),
  tagTypes: ['Todos'],
  endpoints: build => ({
    createTodo: build.mutation({
      query: todo => ({
        url: 'todos',
        method: 'POST',
        body: todo,
      }),
      async onQueryStarted(newTodo, {dispatch, queryFulfilled}) {
        const patchResult = dispatch(
          api.util.updateQueryData('getTodos', undefined, draft => {
            draft.data.push({...newTodo, id: Date.now().toString()});
          })
        );
        try {
          const {data: createdTodo} = await queryFulfilled;
          dispatch(
            api.util.updateQueryData('getTodos', undefined, draft => {
              const index = draft.data.findIndex(
                todo => todo.id === newTodo.id
              );
              if (index !== -1) {
                draft.data[index] = createdTodo;
              }
            })
          );
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags() {
        return [{type: 'Todos', id: 'all'}];
      },
    }),
    getTodos: build.query<{data: Todo[]; message: string}, void>({
      query: () => ({
        // url: `todos${status ? `?status=${status}` : ''}`,
        url: 'todos',
        method: 'GET',
      }),
      providesTags: [
        {type: 'Todos', id: 'all'},
        // {type: 'Todos', id: arg},
      ],
    }),
    updateTodo: build.mutation({
      query: todo => ({
        url: `todos/${todo.id}`,
        method: 'PUT',
        body: todo,
      }),
      async onQueryStarted({id, ...patch}, {dispatch, queryFulfilled}) {
        console.log('updateTodo', id, patch);
        const patchResult = dispatch(
          api.util.updateQueryData('getTodos', undefined, draft => {
            const todoToUpdate = draft.data.find(t => t.id === id);
            if (todoToUpdate) {
              Object.assign(todoToUpdate, patch);
            }
          })
        );
        console.log('patchResult', patchResult);
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags(_, __, arg) {
        return [
          {type: 'Todos', id: arg.id},
          {type: 'Todos', id: 'all'},
        ];
      },
    }),
    deleteTodo: build.mutation({
      query: id => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(id, {dispatch, queryFulfilled}) {
        const patchResult = dispatch(
          api.util.updateQueryData('getTodos', undefined, draft => {
            const index = draft.data.findIndex(todo => todo.id === id);
            if (index !== -1) {
              draft.data.splice(index, 1);
            }
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: [{type: 'Todos', id: 'all'}],
    }),
  }),
});

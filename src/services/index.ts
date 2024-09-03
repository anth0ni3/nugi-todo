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
      providesTags(__, _, ___) {
        return [
          {type: 'Todos', id: 'all'},
          // {type: 'Todos', id: arg},
        ];
      },
    }),
    updateTodo: build.mutation({
      query: todo => ({
        url: `todos/${todo.id}`,
        method: 'PUT',
        body: todo,
      }),
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
      invalidatesTags(_, __, arg) {
        return [
          {type: 'Todos', id: arg.id},
          {type: 'Todos', id: 'all'},
        ];
      },
    }),
  }),
});

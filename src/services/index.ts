import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({baseUrl: 'api/'}),
  endpoints: build => ({
    createTodo: build.mutation({
      query: todo => ({
        url: 'todos',
        method: 'POST',
        body: todo,
      }),
    }),
    getTodos: build.query({
      query: () => ({
        url: 'todos',
        method: 'GET',
      }),
    }),
    updateTodo: build.mutation({
      query: todo => ({
        url: `todos/${todo.id}`,
        method: 'PUT',
        body: todo,
      }),
    }),
    deleteTodo: build.mutation({
      query: id => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

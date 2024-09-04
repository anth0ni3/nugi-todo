import {http, HttpResponse} from 'msw';

import {Todo} from '../entities/todos';
import {wait} from '../utils/wait';
import {exampleTodos} from './seed';

// Helper function to get todos from localStorage
const getTodos = (): Todo[] => {
  let todos = localStorage.getItem('todos');
  if (!todos) {
    saveTodos(exampleTodos);
  }
  return todos ? JSON.parse(todos) : exampleTodos;
};

// Helper function to save todos to localStorage
const saveTodos = (todos: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const handlers = [
  // GET all todos
  http.get('/api/todos', async ({request}) => {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const status = searchParams.get('status');
    await wait();
    let todos = getTodos();
    switch (status) {
      case 'completed':
        todos = todos.filter(todo => todo.isCompleted);
        break;
      case 'ongoing':
        todos = todos.filter(todo => !todo.isCompleted);
        break;
      default:
        break;
    }
    return HttpResponse.json({
      data: todos,
      message: 'Todos returned succesfully',
    });
  }),

  // GET a single todo
  http.get('/api/todos/:id', async ({params}) => {
    await wait();
    if (!params.id) {
      return HttpResponse.json(
        {error: 'No todo Id received.', status: 401},
        {status: 401}
      );
    }
    const todos = getTodos();
    const todo = todos.find(t => t.id === params.id);
    if (!todo) {
      return HttpResponse.json({message: 'Todo not found'}, {status: 404});
    }
    return HttpResponse.json({data: todo, message: 'todo found'});
  }),

  // POST a new todo
  http.post<never, Pick<Todo, 'title'>>('/api/todos', async ({request}) => {
    await wait();
    const {title} = await request.json();
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      isCompleted: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const todos = getTodos();
    todos.push(newTodo);
    saveTodos(todos);

    return HttpResponse.json(
      {data: newTodo, message: 'Created new todo'},
      {status: 201}
    );
  }),

  // PUT (update) a todo
  http.put<{id: string}, Todo>('/api/todos/:id', async ({request, params}) => {
    await wait();
    if (!params.id) {
      return HttpResponse.json(
        {error: 'No todo Id received.', status: 401},
        {status: 401}
      );
    }
    const updatedTodoData = await request.json();
    const todos = getTodos();
    const todoIndex = todos.findIndex(t => t.id === params.id);

    if (todoIndex == -1) {
      return HttpResponse.json(
        {status: 404, error: 'Todo not found'},
        {status: 404}
      );
    }

    todos[todoIndex] = {
      ...todos[todoIndex],
      ...updatedTodoData,
      updatedAt: new Date().toISOString(),
    };
    saveTodos(todos);
    return HttpResponse.json({
      data: todos[todoIndex],
      message: 'todo updated',
    });
  }),

  // DELETE a todo
  http.delete<{id: string}, Todo>('/api/todos/:id', async ({params}) => {
    await wait();
    if (!params.id) {
      return HttpResponse.json(
        {error: 'No todo Id received.', status: 401},
        {status: 401}
      );
    }
    const todos = getTodos();
    const updatedTodos = todos.filter(t => t.id !== params.id);

    if (updatedTodos.length >= todos.length) {
      return HttpResponse.json(
        {error: 'Todo not found', status: 404},
        {status: 404}
      );
    }
    saveTodos(updatedTodos);
    return HttpResponse.json({message: 'Todo deleted successfully'});
  }),

  //Error for any other req
  http.all('/api/*', async () => {
    await wait();
    return HttpResponse.error();
  }),
];

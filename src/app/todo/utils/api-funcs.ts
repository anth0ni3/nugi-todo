import {Todo} from '~/entities/todos';
import Store from '~/lib/store';
import {api} from '~/services';

export async function getAllTodos(_status?: string) {
  const queryResult = Store.dispatch(api.endpoints.getTodos.initiate());
  try {
    const result = await queryResult;
    return result;
  } catch (error) {
    console.error(error);
  } finally {
    queryResult.unsubscribe();
  }
}

export async function addTodo(todo: Partial<Todo>) {
  const queryResult = Store.dispatch(api.endpoints.createTodo.initiate(todo));
  try {
    const result = await queryResult;
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function updateTodo(id: string, todo: Partial<Todo>) {
  const queryResult = Store.dispatch(
    api.endpoints.updateTodo.initiate({id, ...todo})
  );
  try {
    const result = await queryResult;
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteTodo(id: string) {
  const queryResult = Store.dispatch(api.endpoints.deleteTodo.initiate(id));
  try {
    const result = await queryResult;
    return result;
  } catch (error) {
    console.error(error);
  }
}

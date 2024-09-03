import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {PlusIcon} from 'lucide-react';
import {
  ActionFunctionArgs,
  useFetcher,
  useLoaderData,
  useSearchParams,
} from 'react-router-dom';

import {Todo} from '~/entities/todos';
import {Button} from '~/ui/button';
import {Separator} from '~/ui/separator';

import {StatusFilter} from '../components/status-filter';
import {TodoItem} from '../components/todo-item';
import {addTodo, deleteTodo, getAllTodos, updateTodo} from '../utils/api-funcs';

export async function loader() {
  // const url = new URL(request.url);
  // const status = url.searchParams.get('status');
  const res = await getAllTodos();
  return {todos: res?.data?.data};
}

export async function action({request}: ActionFunctionArgs) {
  const formData = await request.formData();
  // const formData = await request.json();

  const intent = formData.get('intent');
  const id = formData.get('id');
  const title = formData.get('title');
  // const isCompleted = formData.get('isCompleted') === 'true';

  switch (intent) {
    case 'add':
      await addTodo({title: title as string});
      break;
    case 'update-completed':
      const isCompleted = formData.get('isCompleted');
      await updateTodo(id as string, {isCompleted: isCompleted === 'on'});
      break;
    case 'update-title':
      await updateTodo(id as string, {title: title as string});
      break;
    case 'delete':
      await deleteTodo(id as string);
      break;
    default:
      // throw new Error('Unknown intent');
      console.log('Unknown intent', intent);
  }

  return null;
}

function Todos() {
  const [searchParams] = useSearchParams();
  const {todos} = useLoaderData() as {todos: Todo[]};
  const [showAddTodo, setShowAddTodo] = React.useState(false);
  const status = searchParams.get('status') as 'completed' | 'ongoing' | null;

  const filteredTodos = React.useMemo(() => {
    return todos?.filter(todo => {
      switch (status) {
        case 'completed':
          return todo.isCompleted;
        case 'ongoing':
          return !todo.isCompleted;
        default:
          return true;
      }
    });
  }, [todos, status]);

  const [optimisticTodos, setOptimisticTodos] =
    React.useState<Partial<Todo>[]>(filteredTodos);

  const fetcher = useFetcher();

  React.useLayoutEffect(() => {
    if (fetcher.data && fetcher.state === 'idle') {
      if (fetcher.data.intent === 'add') {
        setOptimisticTodos(prevTodos =>
          prevTodos.map(todo =>
            todo.id === fetcher.data.tempId
              ? {...todo, id: fetcher.data.newId}
              : todo
          )
        );
      }
    }
  }, [fetcher.data, fetcher.state]);

  return (
    <div className="space-y-2">
      <section className="flex items-center justify-between gap-2 py-3">
        <h3 className="grow text-title-large">Todos</h3>
        <StatusFilter />
        <Button variant="primary" icon onClick={() => setShowAddTodo(true)}>
          <PlusIcon className="icon-sm text-fgColor-emphasis" />
        </Button>
      </section>

      {optimisticTodos?.map((todo, idx) => (
        <React.Fragment key={todo.id}>
          <TodoItem
            todo={todo}
            setOptimisticTodos={setOptimisticTodos}
            setShowAddTodo={setShowAddTodo}
          />
          {idx < optimisticTodos?.length - 1 && <Separator />}
        </React.Fragment>
      ))}
      <AnimatePresence>
        {showAddTodo ? (
          <motion.div
            className="origin-top overflow-hidden"
            initial={{height: 0}}
            animate={{height: showAddTodo ? 'auto' : 0}}
            exit={{height: 0}}
            transition={{duration: 0.1, type: 'spring'}}
          >
            <TodoItem
              setShowAddTodo={setShowAddTodo}
              setOptimisticTodos={setOptimisticTodos}
              todo={{
                id: 'new',
                title: '',
                isCompleted: status === 'completed' ? true : false,
              }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export const Component = Todos;

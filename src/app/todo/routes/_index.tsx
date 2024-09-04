import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {PlusIcon} from 'lucide-react';
import {
  ActionFunctionArgs,
  useFetcher,
  // useLoaderData,
  useSearchParams,
} from 'react-router-dom';

// import {Todo} from '~/entities/todos';
import {api} from '~/services';
// import {api} from '~/services';
import {Button} from '~/ui/button';
import {Separator} from '~/ui/separator';

import {ManageTodo} from '../components/manage-todo';
import {StatusFilter} from '../components/status-filter';
import {TodoItem} from '../components/todo-item';
import {addTodo, deleteTodo, getAllTodos, updateTodo} from '../utils/api-funcs';

export async function loader() {
  const res = await getAllTodos();
  return {todos: res?.data?.data};
}

export async function action({request}: ActionFunctionArgs) {
  const formData = await request.formData();
  // const formData = await request.json();

  const intent = formData.get('intent');
  const id = formData.get('id') as string;
  const title = formData.get('title') as string;

  switch (intent) {
    case 'add':
      await addTodo({title});
      return {success: true};
    case 'update-completed':
      const isCompleted = formData.get('isCompleted');
      console.log('isCompleted', isCompleted);
      await updateTodo(id, {isCompleted: isCompleted === 'on'});
      return {success: true};
    case 'update-title':
      await updateTodo(id, {title});
      return {success: true};
    case 'delete':
      await deleteTodo(id);
      return {success: true};
    default:
      console.log('Unknown intent', intent);
  }

  return null;
}

function Todos() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status') as 'completed' | 'ongoing' | null;

  const fetcher = useFetcher({
    key: 'todos',
  });
  const {data} = api.useGetTodosQuery();
  const todos = data?.data;
  const [isAddingTodo, setIsAddingTodo] = React.useState(false);

  React.useEffect(() => {
    if (fetcher.data?.success) {
      setIsAddingTodo(false);
    }
  }, [fetcher.data]);

  const filteredTodos = React.useMemo(() => {
    if (!status) return todos;
    return todos?.filter(todo => todo.isCompleted === (status === 'completed'));
  }, [status, todos]);

  return (
    <div className="space-y-2">
      <section className="flex items-center justify-between gap-2 py-3">
        <h3 className="grow text-title-large">Todos</h3>
        <StatusFilter />
        <Button variant="primary" icon onClick={() => setIsAddingTodo(true)}>
          <PlusIcon className="icon-sm text-fgColor-emphasis" />
        </Button>
      </section>

      {filteredTodos?.map((todo, idx) => (
        <React.Fragment key={todo.id}>
          <TodoItem todo={todo} />
          {idx < filteredTodos?.length - 1 && <Separator />}
        </React.Fragment>
      ))}
      <AnimatePresence>
        {isAddingTodo && (
          <motion.div
            className="origin-top"
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: isAddingTodo ? 'auto' : 0}}
            exit={{opacity: 0, height: 0}}
            layout
            transition={{duration: 0.1, type: 'spring'}}
          >
            <ManageTodo
              intent="add"
              todo={{
                id: 'new',
                title: '',
                isCompleted: false,
              }}
              // isEditing={isAddingTodo}
              setIsEditing={setIsAddingTodo}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const Component = Todos;

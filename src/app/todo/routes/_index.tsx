import React from 'react';
import {Reorder} from 'framer-motion';
import {PlusIcon} from 'lucide-react';
import {useSearchParams} from 'react-router-dom';

import {Todo} from '~/entities/todos';
import {Button} from '~/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/ui/select';
import {Separator} from '~/ui/separator';

import {TodoItem} from '../components/todo-item';

function Todos() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [todos, setTodos] = React.useState<Todo[]>([
    {
      id: '1',
      title: 'Todo 1',
      isCompleted: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      title: 'Todo 2',
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3',
      title: 'Todo 3',
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  const status = searchParams.get('status');

  const filteredTodos = React.useMemo(() => {
    if (status === 'all' || !status) {
      return todos;
    }
    return todos.filter(todo => todo.isCompleted === (status === 'completed'));
  }, [status, todos]);

  return (
    <div className="space-y-5">
      <section className="flex items-center justify-between gap-1">
        <h3 className="grow text-title-large">Todos</h3>
        <Select
          onValueChange={value =>
            setSearchParams(
              prev => {
                if (value === 'all') {
                  prev.delete('status');
                  return prev;
                }
                prev.set('status', value);
                return prev;
              },
              {
                replace: true,
              }
            )
          }
          value={searchParams.get('status') || 'all'}
        >
          <SelectTrigger className="ml-auto w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="ongoing">Ongoing</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
        <Button
          variant="ghost"
          size="lg"
          icon
          onClick={() =>
            setTodos([
              ...todos,
              {
                id: (todos.length + 1).toString(),
                title: '',
                isCompleted: false,
                createdAt: new Date(),
                updatedAt: new Date(),
              },
            ])
          }
        >
          <PlusIcon className="icon-sm text-fgColor-emphasis" />
        </Button>
      </section>

      <Reorder.Group
        className=" py-4"
        axis="y"
        values={todos}
        onReorder={setTodos}
      >
        {filteredTodos.map((todo, idx) => (
          <React.Fragment key={todo.id}>
            <TodoItem todo={todo} />
            {idx < todos.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </Reorder.Group>
    </div>
  );
}

export const Component = Todos;

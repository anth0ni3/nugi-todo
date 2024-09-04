import React from 'react';
import {PenIcon, XIcon} from 'lucide-react';
import {useFetcher} from 'react-router-dom';

import {Todo} from '~/entities/todos';
import {Button} from '~/ui/button';
import {Checkbox} from '~/ui/checkbox';

import {ManageTodo} from './manage-todo';

export function TodoItem({
  todo,
  // setOptimisticTodos,
}: {
  todo: Partial<Todo>;
  // setShowAddTodo?: React.Dispatch<React.SetStateAction<boolean>>;;
}) {
  const fetcher = useFetcher({
    key: 'todos',
  });
  const [isEditing, setIsEditing] = React.useState(!todo?.title || false);

  {
    todo.id == '1' ? console.log(todo.isCompleted) : null;
  }

  // const isCompleted = fetcher.formData
  //   ? // ? // use optimistic value if submitting
  //     fetcher.formData?.get('isCompleted') === 'on'
  //   : // fall back to the database state
  //     todo.isCompleted;

  // const title = fetcher.formData
  //   ? (fetcher.formData?.get('title') as string)
  //   : todo.title;

  React.useEffect(() => {
    if (fetcher.data?.success) {
      setIsEditing(false);
    }
  }, [fetcher.data]);

  return (
    <div className="group/item flex h-10 items-center gap-1">
      {isEditing ? (
        <ManageTodo
          todo={todo}
          intent="update-title"
          setIsEditing={setIsEditing}
        />
      ) : (
        <>
          {/* mark todo as completed. use optimistic update */}

          <Checkbox
            className="mr-1"
            defaultChecked={todo.isCompleted}
            name="isCompleted"
            type="submit"
            onCheckedChange={e => {
              fetcher.submit(
                {
                  id: todo.id!,
                  intent: 'update-completed',
                  isCompleted: e ? 'on' : 'off',
                },
                {method: 'post'}
              );
            }}
          />

          <p
            className="text-body-medium font-medium"
            style={{
              textDecoration: todo.isCompleted ? 'line-through' : 'none',
            }}
          >
            {todo.title}
          </p>
          <Button
            size="sm"
            variant="ghost"
            icon
            onClick={() => {
              setIsEditing(true);
            }}
            className="ml-auto opacity-0 transition-opacity group-hover/item:opacity-100"
          >
            <PenIcon className="icon-sm text-control-iconColor" />
          </Button>

          <Button
            size="sm"
            variant="ghost"
            icon
            onClick={() => {
              //we should wrap this in a form but we're using it here so we can use optimistic todos
              fetcher.submit(
                {
                  id: todo.id!,
                  intent: 'delete',
                },
                {
                  method: 'post',
                }
              );
            }}
            className="!text-button-danger-fgColor  opacity-0 transition-opacity group-hover/item:opacity-100"
          >
            <XIcon className="icon-sm !text-button-danger-fgColor" />
          </Button>
        </>
      )}
    </div>
  );
}

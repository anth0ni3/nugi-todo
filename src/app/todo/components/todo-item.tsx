import React from 'react';
import {CheckIcon, PenIcon, XIcon} from 'lucide-react';
import {useFetcher} from 'react-router-dom';

import {Todo} from '~/entities/todos';
import {Button} from '~/ui/button';
import {Checkbox} from '~/ui/checkbox';
import {Input} from '~/ui/input';

export function TodoItem({
  todo,
  setShowAddTodo,
  setOptimisticTodos,
}: {
  todo: Partial<Todo>;
  setShowAddTodo?: React.Dispatch<React.SetStateAction<boolean>>;
  setOptimisticTodos?: React.Dispatch<React.SetStateAction<Partial<Todo>[]>>;
}) {
  const fetcher = useFetcher();
  const [isEditing, setIsEditing] = React.useState(!todo?.title || false);
  const [title, setTitle] = React.useState(todo.title || '');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const isCompleted = fetcher.formData
    ? // ? // use optimistic value if submitting
      fetcher.formData?.get('isCompleted') === 'on'
    : // fall back to the database state
      todo.isCompleted;

  React.useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleAddTodo = () => {
    if (todo.id === 'new') {
      const tempId = `temp-${Date.now()}`;
      setOptimisticTodos?.(prev => [
        ...prev,
        {id: tempId, title, isCompleted: false},
      ]);
      fetcher.submit(
        {
          title,
          intent: 'add',
          tempId, // Add this line
        },
        {
          method: 'post',
        }
      );
      setShowAddTodo?.(false);
      setTitle('');
    }
  };

  return (
    <div className="group/item flex h-10 items-center gap-1">
      {isEditing ? (
        <>
          <input type="hidden" name="id" value={todo.id} />
          <Input
            ref={inputRef}
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full px-0.5"
            name="title"
            prefix={
              <Button
                variant="ghost"
                size="sm"
                icon
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setShowAddTodo?.(false);
                }}
              >
                <XIcon className="icon-sm text-control-iconColor" />
              </Button>
            }
            suffix={
              <Button
                variant="ghost"
                size="sm"
                form="update-title"
                disabled={!title || title === todo.title}
                onClick={() => {
                  setIsEditing(false);
                  // add todo
                  if (todo.id === 'new') {
                    handleAddTodo();
                    return;
                  }
                  // update todo
                  fetcher.submit(
                    {
                      title,
                      id: todo.id!,
                      intent: 'update-title',
                    },
                    {
                      method: 'post',
                    }
                  );
                }}
                icon
              >
                <CheckIcon className="icon-sm text-control-iconColor" />
              </Button>
            }
          />
        </>
      ) : (
        <>
          {/* mark todo as completed. use optimistic update */}
          <fetcher.Form method="post">
            <input type="hidden" name="intent" value="update-completed" />
            <input type="hidden" name="id" value={todo.id} />
            <Checkbox
              className="mr-1"
              defaultChecked={isCompleted}
              name="isCompleted"
              type="submit"
            />
          </fetcher.Form>
          <p
            className="text-body-medium font-medium"
            style={{
              textDecoration: isCompleted ? 'line-through' : 'none',
            }}
          >
            {title}
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
              setOptimisticTodos?.(prev => {
                return prev.filter(t => t.id !== todo.id);
              });
              //we should wrap this in a form but we're using it here so we can use optimistic todos
              {
                todo.id !== 'new' &&
                  fetcher.submit(
                    {
                      id: todo.id!,
                      intent: 'delete',
                    },
                    {
                      method: 'post',
                    }
                  );
              }
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

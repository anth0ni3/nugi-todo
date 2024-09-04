import React from 'react';
import {CheckIcon, XIcon} from 'lucide-react';
import {useFetcher} from 'react-router-dom';

import {Todo} from '~/entities/todos';
import {Button} from '~/ui/button';
import {Input} from '~/ui/input';

export function ManageTodo({
  todo,
  setIsEditing,
  intent,
}: {
  todo: Partial<Todo>;
  intent: string;
  //   isEditing: boolean;
  setIsEditing?: (isEditing: boolean) => void;
}) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [title, setTitle] = React.useState(todo.title || '');

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const fetcher = useFetcher({
    // key: 'todos',
  });

  return (
    <fetcher.Form
      method="post"
      onSubmit={() => setIsEditing?.(false)}
      className="w-full"
    >
      <input type="hidden" name="id" value={todo.id} />
      <Input
        ref={inputRef}
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full overflow-hidden px-0.5"
        name="title"
        prefix={
          <Button
            variant="ghost"
            size="sm"
            icon
            type="button"
            onClick={() => {
              setIsEditing?.(false);
            }}
          >
            <XIcon className="icon-sm text-control-iconColor" />
          </Button>
        }
        suffix={
          <Button
            variant="ghost"
            size="sm"
            name="intent"
            type="submit"
            value={intent}
            disabled={!title || title === todo.title}
            icon
          >
            <CheckIcon className="icon-sm text-control-iconColor" />
          </Button>
        }
      />
    </fetcher.Form>
  );
}

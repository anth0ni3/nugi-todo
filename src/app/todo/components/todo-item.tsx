import React from 'react';
import {Reorder, useDragControls} from 'framer-motion';
import {CheckIcon, GripIcon, PenIcon, XIcon} from 'lucide-react';

// import { useFetcher} from 'react-router-dom';

import {Todo} from '~/entities/todos';
import {Button} from '~/ui/button';
import {Checkbox} from '~/ui/checkbox';
import {Input} from '~/ui/input';

export function TodoItem({todo}: {todo: Todo}) {
  const controls = useDragControls();
  // const fetcher = useFetcher();
  const [isEditing, setIsEditing] = React.useState(!todo?.title || false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isCompleted, setIsCompleted] = React.useState(todo.isCompleted);
  const [title, setTitle] = React.useState(todo.title);

  // TODO: Add fetcher to update the todo item. use optimistic update

  // TODO: remember to convert to json before sending to the backend

  return (
    <Reorder.Item
      value={todo}
      className="group/item flex h-12 items-center gap-1"
      dragListener={false}
      dragControls={controls}
    >
      {isEditing ? (
        // <fetcher.Form method="post">
        <Input
          ref={inputRef}
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="pr-0.5"
          suffix={
            <Button
              variant="ghost"
              size="sm"
              disabled={!title}
              onClick={() => {
                setIsEditing(false);
                // update todo
                // optimistic update
                // update todos
              }}
              icon
            >
              <CheckIcon className="icon-sm text-control-iconColor" />
            </Button>
          }
        />
      ) : (
        // </fetcher.Form>
        <>
          <button
            className="grid place-content-center"
            onPointerDown={e => controls.start(e)}
          >
            <GripIcon className="size-3.5 text-control-iconColor opacity-60" />
          </button>
          {/* TODO: mark todo as completed. use optimistic update */}
          <Checkbox
            className="mr-1"
            onCheckedChange={v =>
              setIsCompleted(v === 'indeterminate' ? false : v)
            }
            checked={isCompleted}
          />
          <p
            className="text-body-large"
            style={{textDecoration: isCompleted ? 'line-through' : 'none'}}
          >
            {title}
          </p>
          <Button
            size="sm"
            variant="ghost"
            icon
            onClick={() => {
              setIsEditing(true);
              inputRef.current?.focus();
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
              //delete todo
              //optimistic update
              //update todos
            }}
            className="!text-button-danger-fgColor  opacity-0 transition-opacity group-hover/item:opacity-100"
          >
            <XIcon className="icon-sm !text-button-danger-fgColor" />
          </Button>
        </>
      )}
    </Reorder.Item>
  );
}

import {useSearchParams} from 'react-router-dom';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/ui/select';

export function StatusFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <Select
      onValueChange={value => {
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
        );
      }}
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
  );
}

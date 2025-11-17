import { Button } from '@/components/ui/button';
import { PlusCircleIcon } from 'lucide-react';

export default function CreateProductButton({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} className="cursor-pointer">
      <PlusCircleIcon className="mr-2 h-4 w-4" />
      Create Product
    </Button>
  );
}

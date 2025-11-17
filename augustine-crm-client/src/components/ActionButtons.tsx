import { PencilSquareIcon } from '@heroicons/react/24/outline';

export const EditButton = () => {
  return (
    <button
      type="button"
      disabled
      className="inline-flex items-center justify-center p-2 text-muted-foreground 
        border border-gray-200 rounded-lg bg-white cursor-not-allowed 
        opacity-60 hover:bg-gray-50 transition-colors"
      title="Edit"
    >
      <PencilSquareIcon className="w-4 h-4" />
    </button>
  );
};
import { TrashIcon } from 'lucide-react';

export const DeleteButton = ({ onDelete }: { onDelete: () => void }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center p-2 text-red-700 
        border border-red-500 rounded-lg bg-white cursor-pointer 
        hover:bg-red-50 transition-colors"
      title="Delete"
      onClick={onDelete}
    >
      <TrashIcon className="w-4 h-4" />
    </button>
  );
};

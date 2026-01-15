// noteNode.js

import { BaseNode } from '../components/BaseNode';
import { StickyNote } from 'lucide-react';

export const NoteNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Note"
      icon={<StickyNote size={16} />}
      handles={[]} // Notes have no connections
    >
      <div className="flex flex-col gap-1">
        <textarea 
          placeholder="Type a note here..."
          className="w-full px-2 py-1 text-sm bg-yellow-50 border border-yellow-100 rounded outline-none min-h-[80px] resize-none text-slate-700"
        />
      </div>
    </BaseNode>
  );
}

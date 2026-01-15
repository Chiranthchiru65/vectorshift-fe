// noteNode.js

import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';
import { AutoResizeInput } from '../components/AutoResizeInput';
import { StickyNote } from 'lucide-react';

export const NoteNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <BaseNode
      id={id}
      title="Note"
      icon={<StickyNote size={16} />}
      handles={[]} // Notes have no connections
    >
      <div className="flex flex-col gap-1">
        <AutoResizeInput 
           value={text}
           onChange={handleChange}
           placeholder="Type a note here..."
           minHeight="140px"
           className="!bg-yellow-50 !border-yellow-100 focus:!border-yellow-300 text-slate-700"
        />
      </div>
    </BaseNode>
  );
}
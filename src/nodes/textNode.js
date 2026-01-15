// textNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { FileText } from 'lucide-react';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Text"
      icon={<FileText size={16} />}
      handles={[
        { type: 'source', position: Position.Right, id: 'output' }
      ]}
    >
      <div className="flex flex-col gap-1">
        <label className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Text</label>
        <textarea 
          value={currText} 
          onChange={handleTextChange}
          className="w-full px-2 py-1 text-sm bg-slate-50 border border-slate-200 rounded outline-none focus:border-purple-400 transition-colors resize-none min-h-[40px]"
          rows={2}
        />
      </div>
    </BaseNode>
  );
}
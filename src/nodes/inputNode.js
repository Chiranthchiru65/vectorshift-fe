// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { Type } from 'lucide-react';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Input"
      icon={<Type size={16} />}
      handles={[
        { type: 'source', position: Position.Right, id: 'value' }
      ]}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Name</label>
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange}
            className="w-full px-2 py-1 text-sm bg-slate-50 border border-slate-200 rounded outline-none focus:border-purple-400 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Type</label>
          <select 
            value={inputType} 
            onChange={handleTypeChange}
            className="w-full px-2 py-1 text-sm bg-slate-50 border border-slate-200 rounded outline-none focus:border-purple-400 transition-colors cursor-pointer"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
}
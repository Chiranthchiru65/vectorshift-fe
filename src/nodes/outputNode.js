// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { ArrowRightSquare } from 'lucide-react';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Output"
      icon={<ArrowRightSquare size={16} />}
      handles={[
        { type: 'target', position: Position.Left, id: 'value' }
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
            value={outputType} 
            onChange={handleTypeChange}
            className="w-full px-2 py-1 text-sm bg-slate-50 border border-slate-200 rounded outline-none focus:border-purple-400 transition-colors cursor-pointer"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
}
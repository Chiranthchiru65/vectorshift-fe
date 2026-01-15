// conditionNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { AutoResizeInput } from '../components/AutoResizeInput';
import { GitBranch } from 'lucide-react';

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || '');

  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Condition"
      icon={<GitBranch size={16} />}
      handles={[
        { type: 'target', position: Position.Left, id: 'input' },
        { type: 'source', position: Position.Right, id: 'true', style: { top: '33%', background: '#22c55e', border: '2px solid white' } },
        { type: 'source', position: Position.Right, id: 'false', style: { top: '66%', background: '#ef4444', border: '2px solid white' } }
      ]}
    >
      <div className="flex flex-col gap-3">
        <AutoResizeInput 
          label="Condition"
          value={condition}
          onChange={handleConditionChange}
          placeholder="value > 10"
          className="font-mono text-xs" // Code-like font for conditions
        />
        <div className="flex justify-between px-1">
          <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider">True</span>
          <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">False</span>
        </div>
      </div>
    </BaseNode>
  );
}
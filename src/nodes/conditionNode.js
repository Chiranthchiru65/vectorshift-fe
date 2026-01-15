// conditionNode.js

import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { GitBranch } from 'lucide-react';

export const ConditionNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Condition"
      icon={<GitBranch size={16} />}
      handles={[
        { type: 'target', position: Position.Left, id: 'input' },
        { type: 'source', position: Position.Right, id: 'true', style: { top: '33%', background: '#22c55e' } },
        { type: 'source', position: Position.Right, id: 'false', style: { top: '66%', background: '#ef4444' } }
      ]}
    >
      <div className="flex flex-col gap-2">
        <input 
          type="text" 
          placeholder="if (value > 10)..."
          className="w-full px-2 py-1 text-xs bg-slate-50 border border-slate-200 rounded outline-none"
        />
        <div className="flex justify-between text-[10px] font-bold">
          <span className="text-green-600">TRUE</span>
          <span className="text-red-600">FALSE</span>
        </div>
      </div>
    </BaseNode>
  );
}

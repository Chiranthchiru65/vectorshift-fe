// databaseNode.js

import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { Database } from 'lucide-react';

export const DatabaseNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Database"
      icon={<Database size={16} />}
      handles={[
        { type: 'target', position: Position.Left, id: 'query' },
        { type: 'source', position: Position.Right, id: 'data' }
      ]}
    >
      <div className="flex flex-col gap-2">
        <label className="text-[10px] text-slate-400 uppercase font-medium">Query</label>
        <textarea 
          placeholder="SELECT * FROM users..."
          className="w-full px-2 py-1 text-xs bg-slate-50 border border-slate-200 rounded outline-none min-h-[50px]"
        />
      </div>
    </BaseNode>
  );
}

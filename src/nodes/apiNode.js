// apiNode.js

import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { Globe } from 'lucide-react';

export const APINode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="API Call"
      icon={<Globe size={16} />}
      handles={[
        { type: 'target', position: Position.Left, id: 'request' },
        { type: 'source', position: Position.Right, id: 'response' }
      ]}
    >
      <div className="flex flex-col gap-2">
        <select className="w-full px-2 py-1 text-xs bg-slate-50 border border-slate-200 rounded outline-none">
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
        <input 
          type="text" 
          placeholder="https://api.example.com"
          className="w-full px-2 py-1 text-xs bg-slate-50 border border-slate-200 rounded outline-none"
        />
      </div>
    </BaseNode>
  );
}

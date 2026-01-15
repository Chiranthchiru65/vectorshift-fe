// apiNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { AutoResizeInput } from '../components/AutoResizeInput';
import { Globe } from 'lucide-react';

export const APINode = ({ id, data }) => {
  const [method, setMethod] = useState(data?.method || 'GET');
  const [url, setUrl] = useState(data?.url || '');

  const handleMethodChange = (e) => {
    setMethod(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

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
        <div className="flex flex-col gap-1">
           <label className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Method</label>
           <select 
             value={method}
             onChange={handleMethodChange}
             className="w-full px-2 py-2 text-sm bg-slate-50 border border-slate-200 rounded outline-none focus:border-purple-400 transition-colors cursor-pointer"
           >
             <option>GET</option>
             <option>POST</option>
             <option>PUT</option>
             <option>DELETE</option>
           </select>
        </div>
        <AutoResizeInput 
          label="URL"
          value={url}
          onChange={handleUrlChange}
          placeholder="https://api.example.com"
        />
      </div>
    </BaseNode>
  );
}
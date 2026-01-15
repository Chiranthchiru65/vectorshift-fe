// textNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { AutoResizeInput } from '../components/AutoResizeInput';
import { FileText } from 'lucide-react';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div className="w-full" style={{ minWidth: '200px' }}>
      <BaseNode
        id={id}
        title="Text"
        icon={<FileText size={16} />}
        handles={[
          { type: 'source', position: Position.Right, id: 'output' }
        ]}
      >
        <div className="flex flex-col gap-1">
          <AutoResizeInput 
            label="Text" 
            value={currText} 
            onChange={handleTextChange} 
            placeholder="Type something here..."
          />
        </div>
      </BaseNode>
    </div>
  );
}

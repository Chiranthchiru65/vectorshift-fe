// databaseNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { AutoResizeInput } from '../components/AutoResizeInput';
import { Database } from 'lucide-react';

export const DatabaseNode = ({ id, data }) => {
  const [query, setQuery] = useState(data?.query || '');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

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
        <AutoResizeInput 
          label="Query"
          value={query}
          onChange={handleQueryChange}
          placeholder="SELECT * FROM users..."
          minHeight="60px"
          className="font-mono text-xs" // Monospace for SQL looks better
        />
      </div>
    </BaseNode>
  );
}
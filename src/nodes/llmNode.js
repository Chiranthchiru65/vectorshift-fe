// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { MessageSquare } from 'lucide-react';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      icon={<MessageSquare size={16} />}
      handles={[
        { type: 'target', position: Position.Left, id: 'system', style: { top: '33%' } },
        { type: 'target', position: Position.Left, id: 'prompt', style: { top: '66%' } },
        { type: 'source', position: Position.Right, id: 'response' }
      ]}
    >
      <div className="flex flex-col gap-2">
        <p className="text-sm text-slate-600 leading-relaxed">
          This is a Large Language Model. Connect your prompts and system instructions to generate responses.
        </p>
      </div>
    </BaseNode>
  );
}
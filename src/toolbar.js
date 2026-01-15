// toolbar.js

import { DraggableNode } from "./draggableNode";
// import { Type, MessageSquare, Output, FileText } from "lucide-react";
import {
  Type,
  MessageSquare,
  FileText,
  ChevronsLeftRightEllipsis,
} from "lucide-react";

export const PipelineToolbar = () => {
  return (
    <div className="p-4 flex flex-col h-full">
      <div className="mb-6">
        <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
          Components
        </h2>
        <div className="flex flex-col gap-3">
          <DraggableNode
            type="customInput"
            label="Input"
            icon={<Type size={16} />}
          />
          <DraggableNode
            type="llm"
            label="LLM"
            icon={<MessageSquare size={16} />}
          />
          <DraggableNode
            type="customOutput"
            label="Output"
            icon={<ChevronsLeftRightEllipsis size={16} />}
          />
          <DraggableNode
            type="text"
            label="Text"
            icon={<FileText size={16} />}
          />
        </div>
      </div>
    </div>
  );
};

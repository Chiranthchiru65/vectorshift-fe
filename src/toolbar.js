// toolbar.js

import { DraggableNode } from "./draggableNode";
import {
  Type,
  MessageSquare,
  ArrowRightSquare,
  FileText,
  StickyNote,
  Globe,
  Database,
  GitBranch,
  Clock,
} from "lucide-react";

export const PipelineToolbar = () => {
  const components = [
    {
      type: "customInput",
      label: "Input",
      icon: <Type size={18} />,
      category: "IO",
    },
    {
      type: "customOutput",
      label: "Output",
      icon: <ArrowRightSquare size={18} />,
      category: "IO",
    },
    {
      type: "text",
      label: "Text",
      icon: <FileText size={18} />,
      category: "IO",
    },
    {
      type: "llm",
      label: "LLM",
      icon: <MessageSquare size={18} />,
      category: "Models",
    },
    {
      type: "api",
      label: "API Call",
      icon: <Globe size={18} />,
      category: "Integration",
    },
    {
      type: "database",
      label: "Database",
      icon: <Database size={18} />,
      category: "Integration",
    },
    {
      type: "condition",
      label: "Condition",
      icon: <GitBranch size={18} />,
      category: "Logic",
    },
    {
      type: "timer",
      label: "Delay",
      icon: <Clock size={18} />,
      category: "Logic",
    },
    {
      type: "note",
      label: "Note",
      icon: <StickyNote size={18} />,
      category: "Utils",
    },
  ];

  const categories = ["IO", "Models", "Integration", "Logic", "Utils"];

  return (
    <div className="p-4 flex flex-col h-full overflow-y-auto">
      <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-1">
        Components
      </h2>

      <div className="flex flex-col gap-8">
        {categories.map((cat) => (
          <div key={cat}>
            <h3 className="text-[10px] font-bold text-slate-400 uppercase mb-3 px-1">
              {cat}
            </h3>
            <div className="flex flex-col gap-2">
              {components
                .filter((c) => c.category === cat)
                .map((node) => (
                  <DraggableNode
                    key={node.type}
                    type={node.type}
                    label={node.label}
                    icon={node.icon}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

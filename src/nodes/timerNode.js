// timerNode.js

import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";
import { Clock } from "lucide-react";

export const TimerNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Delay"
      icon={<Clock size={16} />}
      handles={[
        { type: "target", position: Position.Left, id: "start" },
        { type: "source", position: Position.Right, id: "end" },
      ]}
    >
      <div className="flex items-center gap-2">
        <input
          type="number"
          defaultValue={1000}
          className="w-full px-2 py-1 text-sm bg-slate-50 border border-slate-200 rounded outline-none"
        />
        <span className="text-xs text-slate-400">mss</span>
      </div>
    </BaseNode>
  );
};

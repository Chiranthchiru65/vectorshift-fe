// textNode.js

import { useState, useEffect } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";
import { AutoResizeInput } from "../components/AutoResizeInput";
import { FileText } from "lucide-react";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [handles, setHandles] = useState([]);

  useEffect(() => {
    // Regex matches {{ variableName }}
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

    const matches = [];
    let match;

    // find all matches
    while ((match = regex.exec(currText)) !== null) {
      matches.push(match[1]); // match[1] is the captured group (the variable name)
    }

    // emove duplicates using Set
    const uniqueVariables = [...new Set(matches)];

    // create handle objects for each variable
    const newHandles = uniqueVariables.map((variable, index) => ({
      id: variable,
      type: "target",
      position: Position.Left,
      //  distribute them evenly if there are multiple
      style: { top: `${((index + 1) * 100) / (uniqueVariables.length + 1)}%` },
    }));

    // add the permanent "output" handle on the right
    newHandles.push({
      id: "output",
      type: "source",
      position: Position.Right,
    });

    setHandles(newHandles);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div className="w-full" style={{ minWidth: "200px" }}>
      <BaseNode
        id={id}
        title="Text"
        icon={<FileText size={16} />}
        handles={handles}
      >
        <div className="flex flex-col gap-1">
          <AutoResizeInput
            label="Text"
            value={currText}
            onChange={handleTextChange}
            placeholder="Type {{variable}} to add inputs..."
          />

          {handles.length > 1 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {handles
                .filter((h) => h.type === "target")
                .map((h) => (
                  <span
                    key={h.id}
                    className="text-[10px] bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded border border-indigo-100 font-mono"
                  >
                    {h.id}
                  </span>
                ))}
            </div>
          )}
        </div>
      </BaseNode>
    </div>
  );
};

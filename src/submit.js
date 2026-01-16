// submit.js

import { useStore } from "./store";
import { Play } from "lucide-react";
import { shallow } from "zustand/shallow";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    console.log("Nodes:", nodes);
    console.log("Edges:", edges);

    const payload = { nodes, edges };
  };

  return (
    <button
      type="button"
      onClick={handleSubmit}
      className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors shadow-sm text-sm font-medium"
    >
      <Play size={16} fill="currentColor" />
      <span>Run Pipeline</span>
    </button>
  );
};

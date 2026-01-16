// submit.js

import { useStore } from "./store";
import { Play } from "lucide-react";
import { shallow } from "zustand/shallow";
import { parsePipeline } from "./services/pipelineService";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    try {
      const { num_nodes, num_edges, is_dag } = await parsePipeline(
        nodes,
        edges
      );

      alert(
        `Pipeline Analysis:\n\n` +
          `• Total Nodes: ${num_nodes}\n` +
          `• Total Edges: ${num_edges}\n` +
          `• Valid DAG: ${
            is_dag ? "Yes (No Loops Found) " : "No (Cycle Detected) "
          }`
      );
    } catch (error) {
      alert(
        "Error: Could not connect to the pipeline analysis server. Is the backend running?"
      );
    }
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

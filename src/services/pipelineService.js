import { API_BASE_URL } from "../config";

/**
 * Sends the pipeline structure to the backend for analysis.
 * @param {Array} nodes - List of nodes from ReactFlow
 * @param {Array} edges - List of edges from ReactFlow
 * @returns {Promise<Object>} - The analysis result { num_nodes, num_edges, is_dag }
 */
export const parsePipeline = async (nodes, edges) => {
  try {
    const response = await fetch(`${API_BASE_URL}/pipelines/parse`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nodes, edges }),
    });

    if (!response.ok) {
      throw new Error(
        `Server responded with ${response.status}: ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Pipeline Service Error:", error);
    throw error; // Re-throw so the UI can handle the alert
  }
};

// submit.js

import { Play } from 'lucide-react';

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);

    const handleSubmit = async () => {
        // Step 1: Log the payload for verification
        console.log('--- Pipeline Submission Payload ---');
        console.log('Nodes:', nodes);
        console.log('Edges:', edges);
        
        // Step 2: Prepare the data to be sent (this will be used in the next step)
        const payload = { nodes, edges };
        
        // Just for now to show we captured it
        alert(`Captured ${nodes.length} nodes and ${edges.length} edges! Check console for details.`);
    };

    return (
        <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors shadow-sm text-sm font-medium"
        >
            <Play size={16} fill="currentColor" />
            <span>Run Pipeline</span>
        </button>
    );
}
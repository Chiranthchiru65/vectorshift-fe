// submit.js

import { Play } from 'lucide-react';

export const SubmitButton = () => {
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
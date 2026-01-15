import { PipelineToolbar } from "../toolbar";
import { PipelineUI } from "../ui";
import { SubmitButton } from "../submit";

export const DashboardLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* Top Header */}
      <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm z-10">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">V</span>
          </div>
          <h1 className="text-lg font-semibold text-slate-800">
            VectorShift Pipeline
          </h1>
        </div>
        <SubmitButton />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-64 bg-white border-r border-slate-200 flex flex-col h-full shadow-sm z-10">
          <PipelineToolbar />
        </div>

        {/* Canvas Area */}
        <div className="flex-1 h-full relative">
          <PipelineUI />
        </div>
      </div>
    </div>
  );
};

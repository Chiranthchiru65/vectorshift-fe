// draggableNode.js

export const DraggableNode = ({ type, label, icon }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className="cursor-grab min-w-[80px] h-[48px] flex items-center gap-3 px-4 rounded-lg bg-white border border-slate-200 hover:border-purple-500 hover:shadow-md transition-all duration-200 text-slate-700 hover:text-purple-600"
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        draggable
      >
        <span className="text-slate-400 group-hover:text-purple-500 transition-colors">
          {icon}
        </span>
        <span className="text-sm font-medium">{label}</span>
      </div>
    );
  };
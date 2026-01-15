// BaseNode.js
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ 
  id, 
  data, 
  title, 
  children, 
  handles = [], 
  icon 
}) => {
  return (
    <div className="w-[240px] bg-white rounded-lg border border-slate-200 shadow-sm hover:border-purple-500 hover:shadow-md transition-all duration-200 group">
      {/* Handles */}
      {handles.map((handle, index) => (
        <Handle
          key={`${id}-handle-${index}`}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={{
            ...handle.style,
            width: '10px',
            height: '10px',
            background: '#7c3aed', // purple-600
            border: '2px solid white',
          }}
          className={`!bg-purple-600 hover:!bg-purple-700 hover:scale-125 transition-transform ${handle.className || ''}`}
        />
      ))}

      {/* Header */}
      <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
        {icon && <span className="text-slate-500 group-hover:text-purple-600 transition-colors">{icon}</span>}
        <span className="text-sm font-semibold text-slate-700">{title}</span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        {children}
      </div>
    </div>
  );
};

import React, { useState } from 'react'
import CardBox from '../CardBox'
import { Dot } from 'lucide-react'

// Props: tasks, onDropTask, onEditTask, onDeleteTask
const TodoContainer = ({ tasks = [], onDropTask, onEditTask, onDeleteTask }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    try {
      const task = JSON.parse(e.dataTransfer.getData('application/json'));
      onDropTask(task, 'To-Do');
    } catch (error) {
      console.error('Error dropping task:', error);
    }
  };

  return (
    <div 
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`bg-slate-200 rounded px-2 sm:px-3 py-3 sm:py-5 flex h-full w-full flex-col overflow-auto transition-all ${isDragOver ? 'bg-blue-200 ring-2 ring-blue-400' : ''}`}
    >
      {/* Header - Responsive */}
      <div className='flex items-center gap-2'>
        <Dot color="#000000" size={40} className="sm:size-[50px]"/>
        <h2 className='font-bold text-sm sm:text-base'> To-Do ({tasks.length})</h2>
      </div>

      {/* Tasks List */}
      <div className='flex-1 overflow-y-auto'>
        {tasks.map(task => (
          // Pass edit and delete handlers to CardBox
          <CardBox 
            key={task.id} 
            task={task}
            onEditClick={onEditTask}
            onDeleteClick={onDeleteTask}
          />
        ))}
        {tasks.length === 0 && (
          <p className='text-gray-500 text-center py-10 text-sm'>No tasks yet</p>
        )}
      </div>
    </div>
  )
}

export default TodoContainer

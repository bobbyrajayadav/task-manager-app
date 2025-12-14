import React from 'react'
import { Edit, Trash2 } from 'lucide-react'

const CardBox = ({ task, onEditClick, onDeleteClick }) => {
  // Helper: Get priority color based on priority level
  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High':
        return 'bg-red-400';
      case 'Medium':
        return 'bg-yellow-400';
      case 'Low':
        return 'bg-green-400';
      default:
        return 'bg-gray-400';
    }
  };

  // Helper: Format date to readable format
  const formatDate = (dateString) => {
    if (!dateString) return 'No date';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  // Handle drag start
  const handleDragStart = (e) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('application/json', JSON.stringify(task));
  };

  return (
    <div 
      draggable 
      onDragStart={handleDragStart}
      className='bg-white shadow flex flex-col justify-between p-3 sm:p-4 m-1 sm:m-2 rounded cursor-move hover:shadow-lg hover:scale-105 transition-all group'
    >
      
      <div>
        {/* Task Title */}
        <h2 className='font-bold mb-2 text-sm sm:text-base'>{task.title}</h2>

        {/* Task Description */}
        <p className='text-xs sm:text-sm text-gray-600 line-clamp-2'>{task.description || 'No description'}</p>

        {/* Priority & Due Date Row */}
        <div className='flex justify-between mt-3 sm:mt-4 gap-2'>
          <h3 className={`${getPriorityColor(task.priority)} rounded px-2 py-1 text-xs font-medium`}>
            {task.priority}
          </h3>
          <h3 className='text-xs text-gray-500'>{formatDate(task.dueDate)}</h3>
        </div>
      </div>

      {/* Action Buttons - Edit & Delete */}
      {/* Show on hover using group-hover */}
      <div className='flex gap-1 sm:gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity'>
        {/* Edit Button */}
        <button
          onClick={() => onEditClick(task)}
          className='flex-1 flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium transition-colors'
        >
          <Edit size={14} className="sm:size-4" />
          <span className="hidden sm:inline">Edit</span>
        </button>

        {/* Delete Button */}
        <button
          onClick={() => onDeleteClick(task.id)}
          className='flex-1 flex items-center justify-center gap-1 bg-red-500 hover:bg-red-600 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium transition-colors'
        >
          <Trash2 size={14} className="sm:size-4" />
          <span className="hidden sm:inline">Delete</span>
        </button>
      </div>
    </div>
  )
}

export default CardBox

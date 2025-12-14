import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const EditTaskModal = ({ isOpen, task, onClose, onSave, onDelete }) => {
  // Form state - populated from task prop
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    status: 'To-Do',
    dueDate: '',
  });

  // Update form whenever task changes
  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        priority: task.priority,
        status: task.status,
        dueDate: task.dueDate ? task.dueDate.split('T')[0] : '', // Convert ISO to date input format
      });
    }
  }, [task, isOpen]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle save button click
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert('Please enter a task title');
      return;
    }

    // Create updated task object
    const updatedTask = {
      ...task,
      title: formData.title,
      description: formData.description,
      priority: formData.priority,
      status: formData.status,
      dueDate: formData.dueDate ? new Date(formData.dueDate).toISOString() : '',
    };

    onSave(updatedTask);
    onClose();
  };

  // Handle delete button click
  const handleDelete = () => {
    // Show confirmation dialog
    const confirmed = window.confirm(
      `Are you sure you want to delete "${task.title}"?\n\nThis action cannot be undone.`
    );

    if (confirmed) {
      onDelete(task.id);
      onClose();
    }
  };

  if (!isOpen || !task) return null;

  return (
    // Responsive modal: Fixed height on mobile, auto on larger screens
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto p-4 sm:p-6">
        {/* Modal Header - Responsive */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg sm:text-2xl font-bold text-gray-800">Edit Task</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form - Responsive */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Task Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
              Task Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter task title"
              className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Task Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter task description"
              rows="3"
              className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>

          {/* Priority, Status & Due Date - Responsive Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Priority Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                Priority
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            {/* Status Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option>To-Do</option>
                <option>In-Progress</option>
                <option>Completed</option>
              </select>
            </div>
          </div>

          {/* Due Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
              Due Date
            </label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Button Group - Responsive */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4">
            {/* Delete Button - Red */}
            <button
              type="button"
              onClick={handleDelete}
              className="flex-1 px-3 sm:px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium transition-colors"
            >
              Delete
            </button>

            {/* Cancel Button */}
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-3 sm:px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
            >
              Cancel
            </button>

            {/* Save Button - Blue */}
            <button
              type="submit"
              className="flex-1 px-3 sm:px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;

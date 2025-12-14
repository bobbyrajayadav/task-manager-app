import React from "react";

// Props receive kar rahe hain taaki App.jsx se connect ho sake
const Sorting = ({ filterPriority, setFilterPriority, sortBy, setSortBy }) => {
  return (
    // Responsive flex: wrap on mobile, responsive gap and padding
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full">
      {/* --- PRIORITY FILTER --- */}
      <select
        className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer w-full sm:w-auto"
        value={filterPriority}
        onChange={(e) => setFilterPriority(e.target.value)}
      >
        <option value="All">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      {/* --- SORTING --- */}
      <select
        className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer w-full sm:w-auto"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="due_asc">Closest Due Date</option>
      </select>
    </div>
  );
};

export default Sorting;





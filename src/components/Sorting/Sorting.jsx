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

{/* <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6 shrink-0">
  <div className="flex gap-3 items-center w-full sm:w-auto">
    <div className="relative group">
      <div className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-blue-400 hover:ring-1 hover:ring-blue-400/20 transition-all cursor-pointer">
        <Filter size={14} className="text-slate-500" />
        <select
          className="bg-transparent text-sm font-medium text-slate-700 focus:outline-none cursor-pointer appearance-none pr-6 z-10"
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
        >
          <option value="All">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <ChevronDown
          size={14}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />
      </div>
    </div>

    <div className="relative group">
      <div className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-blue-400 hover:ring-1 hover:ring-blue-400/20 transition-all cursor-pointer">
        <ArrowUpDown size={14} className="text-slate-500" />
        <select
          className="bg-transparent text-sm font-medium text-slate-700 focus:outline-none cursor-pointer appearance-none pr-6 z-10"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="due_asc">Closest Due Date</option>
        </select>
        <ChevronDown
          size={14}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />
      </div>
    </div>
  </div>

  <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
    {processedTasks.length} Tasks
  </div>
</div>; */}

// ### 🔗 Isko `App.jsx` mein kaise lagana hai?

// Ab `App.jsx` mein jahan woh bada code tha, wahan bas ye line likhni hogi:

// ```jsx
// import Sorting from './Sorting'; // Import karna mat bhoolna

// // ... App component ke andar return mein ...

// {/* Jahan dropdowns chahiye wahan ye lagayein */}
// <Sorting
//   filterPriority={filterPriority}
//   setFilterPriority={setFilterPriority}
//   sortBy={sortBy}
//   setSortBy={setSortBy}
// />

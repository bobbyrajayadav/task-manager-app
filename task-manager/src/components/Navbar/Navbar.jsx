import React from "react";
import { Plus } from "lucide-react";

const Navbar = ({ onAddClick }) => {
  
  return (
    // Responsive Navbar: flex-wrap on mobile, padding responsive
    <div className="flex flex-col sm:flex-row justify-between p-3 sm:p-5 bg-white rounded mb-4 shadow-md items-start sm:items-center gap-3 sm:gap-0">
      {/* App Title Section */}
      <div className="flex items-center gap-2">
        {/* App Icon */}
        <div className="bg-blue-600 text-white p-1.5 rounded-lg flex-shrink-0">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            ></path>
          </svg>
        </div>
        
        {/* App Title - responsive text */}
        <h1 className="text-lg sm:text-xl font-bold tracking-tight text-gray-800">
          TaskFlow
        </h1>
      </div>

      {/* Add Task Button - Full width on mobile, auto on larger screens */}
      <button 
        onClick={onAddClick}
        className="w-full sm:w-auto bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center sm:justify-start gap-2 shadow-sm"
      >
        <Plus size={20} />
        <span>Add Task</span>
      </button>
    </div>
  );
};

export default Navbar;

// import React from 'react';
// import { Plus } from 'lucide-react'; // Icon ke liye

// export default function Navbar({ onOpenModal }) {
//   return (
//     <nav className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10 flex justify-between items-center shadow-sm">
//       {/* App Title */}
//       <div className="flex items-center gap-2">
//         <div className="bg-blue-600 text-white p-2 rounded-lg">
//           {/* Simple logo icon */}
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
//           </svg>
//         </div>
//         <h1 className="text-2xl font-bold tracking-tight text-gray-800">TaskFlow</h1>
//       </div>

//       {/* Add Task Button */}
//       <button
//         onClick={onOpenModal}
//         className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm"
//       >
//         <Plus size={20} />
//         <span className="hidden sm:inline">Add Task</span> {/* Mobile pe text chhup jayega, sirf icon dikhega */}
//       </button>
//     </nav>
//   );
// }

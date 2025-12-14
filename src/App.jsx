import {React, useState, useEffect} from "react";
import Navbar from "./components/Navbar/Navbar";
import TodoContainer from "./components/Containers/TodoContainer";
import InProgressContainer from "./components/Containers/InProgressContainer";
import CompletedContainer from "./components/Containers/CompletedContainer";
import Sorting from "./components/Sorting/Sorting";
import AddTaskModal from "./components/AddTaskModal";
import EditTaskModal from "./components/EditTaskModal";
import tasksData from "./data/tasks.json";


const App = () => {
  // ============================================
  // STATE MANAGEMENT
  // ============================================
  
  // Tasks array
  const [tasks, setTasks] = useState([]);
  
  // Add Task Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Edit Task Modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null); // Currently selected task for editing
  
  // Sorting & Filtering
  const [filterPriority, setFilterPriority] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  // ============================================
  // EFFECT 1: Load initial tasks from localStorage or JSON
  // Runs only once when component mounts
  // ============================================
  useEffect(() => {
    const STORAGE_KEY = "taskManagerTasks"; // localStorage key name

    // Check if tasks exist in localStorage
    const savedTasks = localStorage.getItem(STORAGE_KEY);

    if (savedTasks) {
      // Agar localStorage mein data hai, to use karo
      try {
        const parsedTasks = JSON.parse(savedTasks);
        setTasks(parsedTasks);
        console.log("✅ Tasks loaded from localStorage");
      } catch (error) {
        // Agar error aaye parsing mein, then load from JSON
        console.error("Error parsing localStorage data:", error);
        setTasks(tasksData);
        console.log("✅ Tasks loaded from JSON (localStorage was corrupted)");
      }
    } else {
      // Agar localStorage empty hai, to JSON se load karo aur localStorage mein save karo
      setTasks(tasksData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasksData));
      console.log("✅ Tasks loaded from JSON and saved to localStorage");
    }
  }, []); // Empty dependency array = run only once on mount

  // ============================================
  // EFFECT 2: Save tasks to localStorage whenever they change
  // Runs every time tasks array changes
  // ============================================
  useEffect(() => {
    if (tasks.length > 0) {
      const STORAGE_KEY = "taskManagerTasks";
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      console.log("💾 Tasks saved to localStorage");
    }
  }, [tasks]); // Dependency: run whenever tasks changes

  // ============================================
  // Handler: Add new task
  // Called when user submits the "Add Task" form
  // ============================================
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]); // Add new task to array (useEffect will save it)
  };

  // ============================================
  // Handler: Update task status on drag & drop
  // Called when user drops a task in another column
  // ============================================
  const handleDropTask = (droppedTask, newStatus) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === droppedTask.id
          ? { ...task, status: newStatus } // Update status of dropped task
          : task
      )
    ); // useEffect will save updated tasks
  };

  // ============================================
  // Handler: Open edit modal
  // Called when user clicks "Edit" button on task card
  // ============================================
  const handleEditClick = (task) => {
    setEditingTask(task); // Set which task to edit
    setIsEditModalOpen(true); // Open modal
  };

  // ============================================
  // Handler: Save edited task
  // Called when user clicks "Save" button in edit modal
  // ============================================
  const handleSaveTask = (updatedTask) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === updatedTask.id
          ? updatedTask // Replace with updated task
          : task
      )
    );
    console.log("✏️ Task updated:", updatedTask.title);
  };

  // ============================================
  // Handler: Delete task
  // Called when user confirms delete in edit modal
  // ============================================
  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.filter(task => task.id !== taskId) // Remove task with this ID
    );
    console.log("🗑️ Task deleted with ID:", taskId);
  };

  // ============================================
  // Function: Filter and Sort Tasks
  // Takes statusFilter ("To-Do", "In-Progress", "Completed")
  // Returns filtered and sorted array
  // ============================================
  const filteredAndSortedTasks = (statusFilter) => {
    // Step 1: Filter tasks by status
    let filtered = tasks.filter(task => task.status === statusFilter);

    // Step 2: Apply priority filter (if not "All")
    if (filterPriority !== "All") {
      filtered = filtered.filter(task => task.priority === filterPriority);
    }

    // Step 3: Apply sorting
    filtered.sort((a, b) => {
      if (sortBy === "newest") {
        // Newest first = sort by createdAt descending
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortBy === "oldest") {
        // Oldest first = sort by createdAt ascending
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else if (sortBy === "due_asc") {
        // By due date = sort ascending (closest first)
        // Tasks without due date go to end
        const aDate = a.dueDate ? new Date(a.dueDate) : new Date("9999-12-31");
        const bDate = b.dueDate ? new Date(b.dueDate) : new Date("9999-12-31");
        return aDate - bDate;
      }
      return 0;
    });

    return filtered;
  };

  // Get tasks for each column (filtered and sorted)
  const todoTasks = filteredAndSortedTasks("To-Do");
  const inProgressTasks = filteredAndSortedTasks("In-Progress");
  const completedTasks = filteredAndSortedTasks("Completed");

  // ============================================
  // RENDER
  // ============================================
  return (
    <div className="flex flex-col h-screen p-3 sm:p-5 bg-gray-50">
      {/* Navbar - top section */}
      <Navbar onAddClick={() => setIsModalOpen(true)} />

      {/* Sorting & Filtering Controls - Responsive */}
      <div className="mb-4 overflow-x-auto">
        <Sorting 
          filterPriority={filterPriority}
          setFilterPriority={setFilterPriority}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      {/* Three Columns - Responsive Layout */}
      {/* Mobile: stack vertically, Tablet/Desktop: 3 columns */}
      <div className="flex flex-col lg:flex-row justify-between gap-3 sm:gap-4 flex-1 overflow-hidden">
        {/* Column 1: To-Do Tasks */}
        <div className="w-full lg:w-1/3 min-h-0">
          <TodoContainer 
            tasks={todoTasks} 
            onDropTask={handleDropTask}
            onEditTask={handleEditClick}
            onDeleteTask={handleDeleteTask}
          />
        </div>

        {/* Column 2: In-Progress Tasks */}
        <div className="w-full lg:w-1/3 min-h-0">
          <InProgressContainer 
            tasks={inProgressTasks} 
            onDropTask={handleDropTask}
            onEditTask={handleEditClick}
            onDeleteTask={handleDeleteTask}
          />
        </div>

        {/* Column 3: Completed Tasks */}
        <div className="w-full lg:w-1/3 min-h-0">
          <CompletedContainer 
            tasks={completedTasks} 
            onDropTask={handleDropTask}
            onEditTask={handleEditClick}
            onDeleteTask={handleDeleteTask}
          />
        </div>
      </div>

      {/* Modal: Add New Task Form */}
      <AddTaskModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onAddTask={handleAddTask}
      />

      {/* Modal: Edit Existing Task Form */}
      <EditTaskModal
        isOpen={isEditModalOpen}
        task={editingTask}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default App;

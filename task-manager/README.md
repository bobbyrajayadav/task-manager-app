# TaskFlow - Task Manager App 📋

A responsive **Trello-style Task Management** web application built with React and Tailwind CSS. Manage your tasks efficiently with drag-and-drop functionality, filtering, sorting, and persistent storage.

## ✨ Features

### 📌 Core Features
- **3-Column Board Layout** - Organize tasks into To-Do, In-Progress, and Completed columns
- **Add Tasks** - Create new tasks with title, description, priority, and due date via modal form
- **Edit Tasks** - Click any task to edit all fields including status
- **Delete Tasks** - Remove tasks with confirmation dialog to prevent accidental deletion
- **Drag & Drop** - Move tasks between columns using HTML5 Drag & Drop API (instant status update)

### 🔍 Filtering & Sorting
- **Priority Filter** - Filter by High, Medium, Low, or All priorities
- **Sort Options**:
  - Newest First
  - Oldest First
  - Closest Due Date (tasks without due dates appear at the end)

### 💾 Data Management
- **Load from JSON** - Initial tasks loaded from `tasks.json`
- **localStorage Persistence** - All changes automatically saved to browser storage
- **Auto-sync** - Updates persist across page refreshes

### 📱 Responsive Design
- **Mobile First** - Optimized for phones (< 640px)
- **Tablet Support** - Better layout for tablets (640px - 1024px)
- **Desktop Experience** - Full 3-column board on desktop (> 1024px)
- **Touch Friendly** - Easy to use on all screen sizes

### ⚡ UI/UX Enhancements
- Smooth animations and transitions
- Hover effects on task cards
- Visual feedback when dragging over drop zones
- Modal dialogs for task creation and editing
- Responsive font sizes and spacing

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Installation Steps

1. **Clone/Download the project**
   ```bash
   cd task-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 📦 Available Scripts

### npm run dev
Starts the Vite development server with hot module reloading (HMR).
```bash
npm run dev
```
App runs on `http://localhost:5173`

### npm run build
Creates an optimized production build in the `dist/` folder.
```bash
npm run build
```

### npm run preview
Preview the production build locally before deploying.
```bash
npm run preview
```

---

## 📁 Folder Structure

```
task-manager/
│
├── src/
│   ├── App.jsx                          # Main app with state management
│   ├── App.css                          # Global styles
│   ├── main.jsx                         # React DOM entry point
│   ├── index.css                        # Tailwind CSS imports
│   │
│   ├── components/
│   │   ├── AddTaskModal.jsx             # Modal for creating tasks
│   │   ├── EditTaskModal.jsx            # Modal for editing tasks
│   │   ├── CardBox.jsx                  # Individual task card
│   │   │
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx               # Top navigation bar
│   │   │
│   │   ├── Sorting/
│   │   │   └── Sorting.jsx              # Filter & sort controls
│   │   │
│   │   └── Containers/
│   │       ├── TodoContainer.jsx        # To-Do column
│   │       ├── InProgressContainer.jsx  # In-Progress column
│   │       └── CompletedContainer.jsx   # Completed column
│   │
│   └── data/
│       └── tasks.json                   # Initial tasks data
│
├── public/                              # Static assets
├── index.html                           # Main HTML file
├── vite.config.js                       # Vite config
├── tailwind.config.js                   # Tailwind config
├── package.json                         # Dependencies
└── README.md                            # This file
```

---

## 🛠️ Technology Stack

### Frontend Framework
- **React 19** - UI library with hooks
- **Vite** - Fast build tool and dev server

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

### Icons
- **lucide-react** - SVG icon library

### Features
- **localStorage** - Browser storage for persistence
- **HTML5 Drag & Drop API** - Native drag-and-drop

---

## 📋 How to Use

### Creating a Task
1. Click **"Add Task"** button in navbar
2. Fill task details:
   - Title (required)
   - Description (optional)
   - Priority (Low/Medium/High)
   - Due Date (optional)
3. Click **"Add Task"**

### Editing a Task
1. Hover over task card
2. Click **"Edit"** button (blue)
3. Modify any field including Status
4. Click **"Save"**

### Deleting a Task
1. Hover over task card
2. Click **"Delete"** button (red)
3. Confirm deletion
4. Task is removed

### Moving Tasks (Drag & Drop)
1. Drag any task card
2. Hover over another column (highlights)
3. Release to drop
4. Status updates automatically

### Filtering Tasks
Use **Priority Filter** dropdown:
- All Priorities (default)
- High (only high priority)
- Medium (only medium priority)
- Low (only low priority)

### Sorting Tasks
Use **Sort By** dropdown:
- **Newest First** - By creation date
- **Oldest First** - By creation date
- **Closest Due Date** - By due date

---

## 💾 Data Persistence

### How It Works
1. **First Visit**: Tasks load from `tasks.json` → Saved to `localStorage`
2. **Next Visits**: Load from `localStorage` (faster)
3. **Every Update**: Auto-saved to `localStorage`

### Storage Key
- **Name**: `taskManagerTasks`
- **Content**: Complete tasks array in JSON format

---

## 🌐 Deployment

### Deploy to Vercel (Easiest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Click Deploy
5. **Done!** App is live

### Deploy to GitHub Pages
1. Update `vite.config.js`:
   ```javascript
   export default {
     base: '/task-manager/',
     ...
   }
   ```
2. Build: `npm run build`
3. Push to GitHub
4. Enable GitHub Pages in settings
5. Live at `https://username.github.io/task-manager`

### Deploy to Netlify
1. Build: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag & drop `dist/` folder
4. **Done!**

---

## 🔧 Troubleshooting

**Tasks not saving?**
- Check if localStorage is enabled in browser settings

**Drag & Drop not working?**
- Use a modern browser (Chrome, Firefox, Safari, Edge)

**Styles broken?**
- Clear cache: `npm run build && npm run preview`

**Port 5173 in use?**
- Use different port: `npm run dev -- --port 3000`

---

## 📝 Features Status

| Feature | Status |
|---------|--------|
| Add/Edit/Delete Tasks | ✅ |
| Drag & Drop | ✅ |
| Priority Filter | ✅ |
| Sorting | ✅ |
| localStorage Persistence | ✅ |
| Responsive Design | ✅ |
| Clean UI | ✅ |

---

## 📚 Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [MDN: Drag & Drop](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

---

## 📄 License

MIT License - Feel free to use this project!

---

## 🎉 Version

**v1.0.0** - December 2025

**Happy Task Managing! 🚀**

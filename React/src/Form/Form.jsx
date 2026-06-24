import { useMemo, useState } from "react";
import "../App.css";
import TaskForm from "./components/TaskForm";
import TaskSearch from "./components/TaskSearch";
import TaskFilter from "./components/TaskFilter";
import TaskSort from "./components/TaskSort";
import TaskList from "./components/TaskList";
import Pagination from "./components/Pagination";

function Form() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const [page, setPage] = useState(1);
  const limit = 5;

  function addTask(task) {
    setTasks(prev => [
      {
        id: Date.now(),
        title: task.title,
        description: task.description,
        priority: task.priority,
        completed: false,
        createdAt: new Date().toISOString()
      },
      ...prev
    ]);
  }

  function updateTask(updatedTask) {
    setTasks(prev =>
      prev.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
    setEditingTask(null);
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(task => task.id !== id));
  }

  function toggleComplete(id) {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  const processedTasks = useMemo(() => {
    let result = [...tasks];

    if (search.trim()) {
      result = result.filter(task =>
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filterStatus !== "all") {
      result = result.filter(task =>
        filterStatus === "completed"
          ? task.completed
          : !task.completed
      );
    }

    if (sortBy === "newest") {
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    if (sortBy === "oldest") {
      result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    if (sortBy === "title") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortBy === "priority") {
      const order = { high: 1, medium: 2, low: 3 };
      result.sort((a, b) => order[a.priority] - order[b.priority]);
    }

    return result;
  }, [tasks, search, filterStatus, sortBy]);

  const totalPages = Math.ceil(processedTasks.length / limit);

  const paginatedTasks = processedTasks.slice(
    (page - 1) * limit,
    page * limit
  );

  function resetControls() {
    setSearch("");
    setFilterStatus("all");
    setSortBy("newest");
    setPage(1);
  }

  return (
    <div className="tm-page">
      <div className="tm-header">
        <h1>Task Manager</h1>
      </div>

      <TaskForm
        onAddTask={addTask}
        onUpdateTask={updateTask}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />

      <hr className="tm-divider" />

      <div className="tm-card">
        <div className="tm-controls">
          <div className="tm-controls-search">
            <TaskSearch
              search={search}
              setSearch={setSearch}
              setPage={setPage}
            />
          </div>

          <div className="tm-controls-filter">
            <TaskFilter
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
              setPage={setPage}
            />
          </div>

          <div className="tm-controls-sort">
            <TaskSort
              sortBy={sortBy}
              setSortBy={setSortBy}
              setPage={setPage}
            />
          </div>

          <div className="tm-controls-reset">
            <button className="tm-btn tm-btn-reset" onClick={resetControls}>Reset Search / Filter / Sort</button>
          </div>
        </div>
      </div>

      <TaskList
        tasks={paginatedTasks}
        onDelete={deleteTask}
        onEdit={setEditingTask}
        onToggle={toggleComplete}
      />

      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
}

export default Form;
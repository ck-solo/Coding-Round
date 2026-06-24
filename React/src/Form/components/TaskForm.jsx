import { useEffect, useState } from "react";

function TaskForm({ onAddTask, onUpdateTask, editingTask, setEditingTask }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium"
  });

  useEffect(() => {
    if (editingTask) {
      setFormData(editingTask);
    }
  }, [editingTask]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Title is required");
      return;
    }

    if (editingTask) {
      onUpdateTask(formData);
    } else {
      onAddTask(formData);
    }

    setFormData({
      title: "",
      description: "",
      priority: "medium"
    });
  }

  function cancelEdit() {
    setEditingTask(null);
    setFormData({
      title: "",
      description: "",
      priority: "medium"
    });
  }

  return (
    <form className="tm-card" onSubmit={handleSubmit}>
      <h2>{editingTask ? "Edit Task" : "Add Task"}</h2>

      <div className="tm-field">
        <label className="tm-label">Title</label>
        <input
          className="tm-input"
          name="title"
          placeholder="Enter task title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className="tm-field">
        <label className="tm-label">Description</label>
        <textarea
          className="tm-textarea"
          name="description"
          placeholder="Enter task description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div className="tm-field">
        <label className="tm-label">Priority</label>
        <select
          className="tm-select"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div className="tm-form-actions">
        <button className="tm-btn tm-btn-primary" type="submit">
          {editingTask ? "Update Task" : "Add Task"}
        </button>

        {editingTask && (
          <button className="tm-btn tm-btn-secondary" type="button" onClick={cancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default TaskForm;
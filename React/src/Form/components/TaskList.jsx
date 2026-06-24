function TaskList({ tasks, onDelete, onEdit, onToggle }) {
  if (tasks.length === 0) {
    return (
      <div className="tm-empty">
        <h3>No tasks found</h3>
        <p>Add a task above or adjust your filters.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="tm-section-header">
        <h2>Task List</h2>
        <span className="tm-task-count">{tasks.length} task{tasks.length !== 1 ? 's' : ''}</span>
      </div>

      {tasks.map(task => (
        <div
          key={task.id}
          className={`tm-task-card ${task.completed ? 'tm-task-completed' : 'tm-task-pending'}`}
        >
          <div className="tm-task-top">
            <h3 className={`tm-task-title${task.completed ? ' tm-strikethrough' : ''}`}>
              {task.title}
            </h3>
            <div className="tm-task-badges">
              <span className={`tm-badge tm-badge-priority-${task.priority}`}>{task.priority}</span>
              <span className={`tm-badge ${task.completed ? 'tm-badge-completed' : 'tm-badge-pending'}`}>
                {task.completed ? 'Completed' : 'Pending'}
              </span>
            </div>
          </div>

          {task.description && (
            <p className="tm-task-desc">{task.description}</p>
          )}

          <div className="tm-task-actions">
            <button
              className={`tm-btn ${task.completed ? 'tm-btn-warning' : 'tm-btn-success'}`}
              onClick={() => onToggle(task.id)}
            >
              {task.completed ? 'Mark Pending' : 'Mark Complete'}
            </button>

            <button className="tm-btn tm-btn-ghost" onClick={() => onEdit(task)}>Edit</button>

            <button className="tm-btn tm-btn-danger" onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
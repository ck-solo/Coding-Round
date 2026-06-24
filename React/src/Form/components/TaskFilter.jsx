function TaskFilter({ filterStatus, setFilterStatus, setPage }) {
  function handleFilter(e) {
    setFilterStatus(e.target.value);
    setPage(1);
  }

  return (
    <div>
      <select className="tm-select" value={filterStatus} onChange={handleFilter}>
        <option value="all">All Tasks</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}

export default TaskFilter;
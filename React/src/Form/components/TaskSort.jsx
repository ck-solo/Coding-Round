function TaskSort({ sortBy, setSortBy, setPage }) {
  function handleSort(e) {
    setSortBy(e.target.value);
    setPage(1);
  }

  return (
    <div>
      <select className="tm-select" value={sortBy} onChange={handleSort}>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="title">Title A-Z</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
}

export default TaskSort;
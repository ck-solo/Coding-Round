function TaskSearch({ search, setSearch, setPage }) {
  function handleSearch(e) {
    setSearch(e.target.value);
    setPage(1);
  }

  return (
    <div>
      <input
        className="tm-input"
        type="text"
        placeholder="Search by title or description"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default TaskSearch;
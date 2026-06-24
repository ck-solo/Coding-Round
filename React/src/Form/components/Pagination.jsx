function Pagination({ page, totalPages, setPage }) {
  if (totalPages <= 1) return null;

  return (
    <div className="tm-pagination">
      <button
        className="tm-btn tm-btn-secondary"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>

      <span className="tm-pagination-info">
        Page {page} of {totalPages}
      </span>

      <button
        className="tm-btn tm-btn-secondary"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
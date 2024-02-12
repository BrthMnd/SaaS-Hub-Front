/* eslint-disable react/prop-types */
export function ButtonPagination({ table }) {
  const tableIndex = table.getState().pagination.pageIndex;
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="First group"
      style={{ fontSize: "5px", width: "50px", whiteSpace: "nowrap" }}
    >
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => table.setPageIndex(0)}
      >
        Primera pagina
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => table.previusPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Anterior
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Actual {tableIndex + 1}
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => table.setPageIndex(tableIndex + 1)}
      >
        {tableIndex + 2}
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => table.setPageIndex(tableIndex + 2)}
      >
        {tableIndex + 3}
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => table.setPageIndex(tableIndex + 3)}
      >
        {tableIndex + 4}...
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Siguiente
      </button>

      <strong style={{ fontSize: "15px" }}>
        {tableIndex + 1} de {table.getPageCount()}
      </strong>
    </div>
  );
}

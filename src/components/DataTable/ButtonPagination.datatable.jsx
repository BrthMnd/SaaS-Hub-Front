export function ButtonPagination({ table, totalPages, setPageIndex }) {
  const tableState = table.getState();
  const tableIndex = tableState?.pageIndex ?? 0;

  console.log("tableState:", tableState);

  return (
    <div className="btn-group" role="group" aria-label="First group" style={{ fontSize: "5px", width: "50px", whiteSpace: "nowrap" }}>
      <button type="button" className="btn btn-outline-secondary" onClick={() => setPageIndex(0)}>
        Primera página
      </button>

      <button type="button" className="btn btn-outline-secondary" onClick={() => setPageIndex(Math.max(tableIndex - 1, 0))}>
        Anterior
      </button>

      <button type="button" className="btn btn-outline-secondary">
        Actual {tableIndex + 1}
      </button>

      <button type="button" className="btn btn-outline-secondary" onClick={() => setPageIndex(tableIndex + 1)}>
        {tableIndex + 2}
      </button>

      <button type="button" className="btn btn-outline-secondary" onClick={() => setPageIndex(tableIndex + 2)}>
        {tableIndex + 3}
      </button>

      <button type="button" className="btn btn-outline-secondary" onClick={() => setPageIndex(tableIndex + 3)}>
        {tableIndex + 4}...
      </button>

      <button type="button" className="btn btn-outline-secondary" onClick={() => setPageIndex(Math.min(tableIndex + 1, totalPages - 1))}>
        Siguiente
      </button>

      <strong style={{ fontSize: "15px" }}>
        {tableIndex + 1} de {totalPages}
      </strong>
    </div>
  );
}

/* eslint-disable react/prop-types */
export function SearchDatatable({ filter }) {
  return (
    <>
      <div
        className="input-group input-group-sm"
        style={{
          width: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          name="table_search"
          className="form-control float-right"
          placeholder="Search"
          onChange={(e) => filter(e.target.value)}
        />

        <div className="input-group-append">
          <button type="submit" className="btn btn-default">
            <i className="fas fa-search"></i>
          </button>
          <button type="submit" className="btn btn-default">
            <i className="fas fa-plus " style={{ fontSize: "auto" }}></i>
          </button>
          <button type="submit" className="btn btn-default">
            <span>Excel</span>
          </button>
          <button type="submit" className="btn btn-default">
            <span>PDF</span>
          </button>
        </div>
      </div>
    </>
  );
}

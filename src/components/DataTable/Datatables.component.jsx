import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import { SearchDatatable } from "./Search.datatable";
import { ButtonPagination } from "./ButtonPagination.datatable";
import { flexRender } from "@tanstack/react-table";

const DatatablesComponents = ({ data, columns }) => {
  const filasPorPagina = 6;
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  const [pagination, setPagination] = useState({
    pageIndex: 0, 
    pageSize: data.length, // Aquí capturo el total de datos para que el pagesize no se ponga auto en 10
  });
  
  

  const Tble = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
      pageIndex,
      pagination,
    },
    onSortingChange: (newSorting) => {
      setSorting(newSorting);
      setPageIndex(0); // Reset pageIndex when sorting changes
    },
    onGlobalFilterChange: (newFiltering) => {
      setFiltering(newFiltering);
      setPageIndex(0); // Reset pageIndex when filtering changes
    },
  });

  const indiceInicio = pageIndex * filasPorPagina;
  const indiceFin = indiceInicio + filasPorPagina;

  return (
    <div className="card justify-content-center">
      <div className="card-header">
        <h3 className="card-title">Usuarios</h3>
        <div className="card-tools">
          <SearchDatatable filter={setFiltering} />
        </div>
      </div>
      <div
        className="card-body table-responsive p-0"
        style={{ height: " 385px" }}
      >
        <table className="table table-head-fixed text-nowrap">
          <thead>
            {Tble.getHeaderGroups().map((HeaderG) => (
              <tr key={HeaderG.id}>
                {HeaderG.headers.map((Hea) => (
                  <th
                    className="th-sortable"
                    key={Hea.id}
                    onClick={Hea.column.getToggleSortingHandler()}
                  >
                    <span>
                      {flexRender(
                        Hea.column.columnDef.header,
                        Hea.getContext()
                      )}
                      {
                        {
                          asc: <i className="fas fa-sort-alpha-up-alt "></i>,
                          desc: (
                            <i className="fas fa-sort-alpha-down-alt  "></i>
                          ),
                        }[Hea.column.getIsSorted() ?? null]
                      }
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {Tble.getRowModel()
              .rows.slice(indiceInicio, indiceFin)
              .map((fila) => (
                <tr key={fila.id}>
                  {/* {console.log(fila.original)} */}
                  {fila.getVisibleCells().map((celda) => (
                    <td key={celda.id}>
                      {flexRender(
                        celda.column.columnDef.cell,
                        celda.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <ButtonPagination
        table={Tble}
        totalPages={Math.ceil(data.length / filasPorPagina)}
        setPageIndex={setPageIndex}
      />
    </div>
  );
};

export { DatatablesComponents };

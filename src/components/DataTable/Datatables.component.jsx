/* eslint-disable react/prop-types */
import { SearchDatatable } from "./Search.datatable";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { ButtonPagination } from "./ButtonPagination.datatable";

import { useState } from "react";
export function DatatablesComponents({ data, columns }) {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

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
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Usuarios</h3>
        <div className="card-tools">
          <SearchDatatable filter={setFiltering} />
        </div>
      </div>
      <div
        className="card-body table-responsive p-0"
        style={{ height: " 300px" }}
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
            {Tble.getRowModel().rows.map((rows) => (
              <tr key={rows.id}>
                {rows.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ButtonPagination table={Tble} />
    </div>
  );
}

import { DatatablesComponents } from "../../components/DataTable/Datatables.component.jsx";
import { ApiGet } from "../../hooks/useApi.jsx";
// import data from "./data.json";
export function UsersRoute() {
  const handleUpdate = (row) => {
    console.log(row);
  };
  const handleDelete = (row) => {
    console.log(row);
  };
  const columns = [
    { header: "ID", accessorKey: "idusuario" },
    { header: "Nombre", accessorKey: "nombre" },
    { header: "Correo", accessorKey: "correo" },
    { header: "Fecha de Creacion", accessorKey: "fecha_creacion" },
    { header: "Genero", accessorKey: "genero" },
    { header: "Estado", accessorKey: "estado.nombre" },
    { header: "Rol", accessorKey: "rol.nombre" },
    {
      header: "Actions",
      cell: (row) => (
        <>
          <button className="btn btn-sm btn-warning" onClick={() => handleUpdate(row.row._valuesCache)}>
            Actualizar
          </button>

          <button className="btn btn-sm btn-danger" onClick={() => handleDelete(row.row._valuesCache)}>
            Eliminar
          </button>
        </>
      ),
    },
  ];
  const [data, error, loading] = ApiGet("/user");
  return loading ? (
    <h1> Pregunta</h1>
  ) : (
    <>
      <h1>Usuarios</h1>
      {error && <h1>Error</h1>}
      <DatatablesComponents columns={columns} data={data} />
    </>
  );
}

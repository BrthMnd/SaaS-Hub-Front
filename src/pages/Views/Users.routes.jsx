import { DatatablesComponents } from "../../components/DataTable/Datatables.component.jsx";
import { ApiGet } from "../../hooks/useApi.jsx";
import AlertDelete from "../../components/alertDelete.component.jsx";
import Modal from "../../components/modal.component.jsx";

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

          {/* //TODO no borrar este ejemplo del evento onclick para el botón de actualizar */}
          {/* <button className="btn btn-sm btn-warning" onClick={() => handleUpdate(row.row._valuesCache)}>
            Actualizar
          </button> */}


          <Modal title="Actualizar" onGuardar={handleUpdate} nameBtn="Actualizar" classBtn="btn btn-sm btn-warning">
            <h4>Contenido para actualizar usuario (pendiente)</h4>
          </Modal>



          <AlertDelete titleA="Eliminar" onGuardarA={() => handleDelete(row.row._valuesCache)} nameBtnA="Eliminar" classBtnA="btn btn-sm btn-danger">
            <div class="alert alert-danger" role="alert">
              ¿Deseas eliminar este usuario?
            </div>
          </AlertDelete>

          {/* <button className="btn btn-sm btn-danger" onClick={() => handleDelete(row.row._valuesCache)}>
            Eliminar
          </button> */}
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

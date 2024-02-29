import { DatatablesComponents } from "../../components/DataTable/Datatables.component.jsx";
import { ApiGet, ApiDelete } from "../../hooks/useApi.jsx";
import AlertDelete from "../../components/Modal/alertDelete.component.jsx";
import Modal from "../../components/Modal/modal.component.jsx";
import { useState } from "react";

// import data from "./data.json";
export function UsersRoute() {
  const [deleteUserId, setDeleteUserId] = useState(null);

  const handleUpdate = (row) => {
    console.log(row);
  };

  const handleDelete = async (row) => {
    try {
      const userId = row.idusuario;
      console.log(row.idusuario);
      await ApiDelete(`/user`, userId);
      // Update the state or fetch the data again to reflect the changes
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      // Handle error if needed
    }
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

          {/* <button className="btn btn-sm btn-dark" onClick={() => handleDelete(row.row._valuesCache)}>
            Eliminar
          </button> */}

          <Modal
            title="Actualizar"
            onGuardar={handleUpdate}
            nameBtn="Actualizar"
            classBtn="btn btn-sm btn-warning"
          >
            <h4>Contenido para actualizar usuario (pendiente)</h4>
          </Modal>

          <AlertDelete
            titleA="Eliminar"
            onSaveA={() => handleDelete(row.row._valuesCache)}
            nameBtnA="Eliminar"
            classBtnA="btn btn-sm btn-danger"
            userId={row.row._valuesCache.idusuario} // Pass idusuario as a prop
          >
            <div class="alert alert-danger" role="alert">
              ¿Deseas eliminar este usuario?
            </div>
          </AlertDelete>
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

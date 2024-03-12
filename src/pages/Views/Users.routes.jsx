import { DatatablesComponents } from "../../components/DataTable/Datatables.component.jsx";
import AlertDelete from "../../components/Modal/alertDelete.component.jsx";
import Modal from "../../components/Modal/modal.component.jsx";
import { Toaster } from "react-hot-toast";
import { useUserContext } from "../../context/users/users.reducers.jsx";
import { useEffect } from "react";

export function UsersRoute() {
  const { users, loading, error, LoadUser } = useUserContext();
console.log(users)
const handleUpdate = () => {
  console.log("Update")
}
const handleDelete =()=>{

  console.log("Delete")
}
  useEffect(() => {
    LoadUser();
  }, []);
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
            onSave={handleUpdate}
            nameBtn="Actualizar"
            classBtn="btn btn-sm btn-outline-info col-md-6 mr-1"
          >
            <h4>Contenido para actualizar usuario (pendiente)</h4>
          </Modal>

          <AlertDelete
            titleA="Eliminar"
            onSaveA={() => handleDelete(row.row._valuesCache)}
            nameBtnA="Eliminar"
            classBtnA="btn btn-sm btn-outline-danger col-md-6"
            userId={row.row._valuesCache.idusuario} // Pass idusuario as a prop
          >
            <div className="alert alert-danger text-center" role="alert">
              <span>
                ¿Deseas eliminar a{" "}
                <strong>{row.row._valuesCache.nombre}</strong>?
              </span>
            </div>
          </AlertDelete>
        </>
      ),
    },
  ];

  console.log("Los usuarios son:",users)
  return loading && !users ? (
    <h1> Cargando...</h1>
  ) : (
    <>
      <h1>Usuarios</h1>
      {error && <h1>Error</h1>}
      <DatatablesComponents columns={columns} data={users} />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

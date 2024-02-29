const Modal = ({
  isOpen,
  onClose,
  onGuardar,
  children,
  title,
  nameBtn,
  classBtn,
}) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <>
      <button
        className={classBtn}
        data-toggle="modal"
        data-target="#exampleModalLong"
      >
        {nameBtn}
      </button>

      <section
        className={`modal fade ${isOpen ? "show d-block" : ""}`}
        id="exampleModalLong"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <header className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {title}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </header>
            <div className="modal-body overflow-auto">{children}</div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-sm btn-secondary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className={classBtn}
                onClick={onGuardar}
                data-dismiss="modal"
              >
                {title}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Modal;

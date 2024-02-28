const AlertDelete = ({
  isOpen,
  onClose,
  onSaveA,
  children,
  titleA,
  nameBtnA,
  classBtnA,
}) => {
  return (
    <>
      <button
        className={classBtnA}
        data-toggle="modal"
        data-target="#exampleModalSmall"
      >
        {nameBtnA}
      </button>

      <div
        className={`modal fade ${isOpen ? "show d-block" : ""}`}
        id="exampleModalSmall"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalSmallTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-dialog" role="document">
          <div className="modal-content">
            <main className="modal-body overflow-auto">{children}</main>
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-sm btn-secondary"
                data-dismiss="modal"
                onClick={onClose}
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-sm btn-danger"
                onClick={onSaveA}
                data-dismiss="modal"
              >
                {titleA}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertDelete;

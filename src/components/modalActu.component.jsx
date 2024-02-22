import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    const closeModal = () => {
        onClose();
    };

    return (
        <>
            <button className="btn btn-sm btn-warning" data-toggle="modal" data-target="#exampleModalLong">
                Actualizar
            </button>

            <div className={`modal fade ${isOpen ? 'show d-block' : ''}`} id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Actualizar</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body overflow-auto">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-sm btn-warning">Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;

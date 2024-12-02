import './Modal.css'

export const Modal = ({ setOpenModal }) => {
  return (
    <div className="ui-modal">
      <div className="modal-content">
        <h2>Hola, soy un modal</h2>
        <p>Aquí puedes agregar cualquier contenido.</p>
      </div>
      <button className="w-[100px] h-[100px]" onClick={() => setOpenModal(false)}>
        Cerrar Modal
      </button>
    </div>
  )
}

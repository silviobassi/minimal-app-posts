import classes from '../routes/Modal.module.css'
import { useNavigate } from 'react-router-dom'

function Modal({ children }) {
  const navigate = useNavigate()

  function onClose() {
    navigate(-1)
  }

  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  )
}

export default Modal

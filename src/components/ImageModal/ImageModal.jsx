import Modal from 'react-modal';
import s from './ImageModal.module.css';

function ImageModal({ image, onClose }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
      onKeyDown={handleKeyDown}
    >
      <button className={s.closeButton} onClick={onClose}>Close</button>
      <img src={image.urls.full} alt={image.alt_description} className={s.image} />
    </Modal>
  );
}

export default ImageModal;
import "./modal.scss";

const Modal = ({ isOpen, onClose, images }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {images.map((image, index) => (
          <img
            src={image}
            alt={`Demo ${index}`}
            key={index}
            style={{ width: "100%", margin: "10px 0" }}
          />
        ))}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

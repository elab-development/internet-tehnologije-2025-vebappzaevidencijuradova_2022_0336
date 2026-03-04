export default function Modal({ open, title, children, onClose }) {
  if (!open) return null;

  return (
   <div onClick={onClose} className="modal-overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <div className="modal-header">
          <h3>{title}</h3>
          <button onClick={onClose} className="btn btn-ghost">
            ✕
          </button>
        </div>
          <div className="modal-body">{children}</div>      
        </div>
    </div>
  );
}

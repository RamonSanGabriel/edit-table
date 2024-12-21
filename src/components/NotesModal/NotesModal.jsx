import { useState, useEffect } from 'react';
import css from './NotesModal.module.css';

const NotesModal = ({ closeModal, data, notesModalOpen }) => {
  const [formState, setFormState] = useState({
    id: '',
    name: '',
    description: '',
    rating: '',
    notes: '',
  });
  useEffect(() => {
    document.body.style.overflow = notesModalOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [notesModalOpen]);
  return (
    <div className={css.modalContainer}>
      <div className={css.modal}>
        <button onClick={closeModal} className={css.closeBtn}>
          X
        </button>

        <div className={css.notesFormGroup}>
          <ul>
            {
              data.find((item) => item.id === data.id)
              /*   .map((item, index) => (
                <li key={index}>{item.notes}</li>
              )) */
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotesModal;

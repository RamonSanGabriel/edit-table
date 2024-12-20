import { useState } from 'react';
import css from './NotesModal.module.css';

const NotesModal = ({ closeModal }) => {
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    rating: '',
    notes: '',
  });
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={css.modalContainer}>
      <div className={css.modal}>
        <button onClick={closeModal} className={css.closeBtn}>
          X
        </button>
        <form>
          <div className={css.notesFormGroup}>
            <label htmlFor="notes">
              <p>Notes</p>
              <textarea
                className={css.textAreaNotes}
                name="notes"
                id="notes"
                placeholder="Based on your rating, tell us your experience..."
                rows="25"
                cols="50"
                value={formState.notes}
                onChange={handleChange}
              >
                console.log(textarea);
              </textarea>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NotesModal;

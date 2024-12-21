import { useState } from 'react';
import css from './NotesModal.module.css';

const NotesModal = ({ closeModal, data, handleModalNotes, contentItem }) => {
  const [formState, setFormState] = useState({
    id: '',
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
              <p>
                Notes
                {/* {data.notes} */}
              </p>
              {data
                .filter((item) => {
                  return item.name === item;
                })
                .map((item) => (
                  <div key={item.id} className={css.divModalContent}>
                    {/*      <p>
                    <b>Name: </b>
                    <i>{item.name}</i>
                  </p>
                  <p>
                    <b>Description: </b>
                    <i>{item.description}</i>
                  </p>
                  <p>
                    <b>Rating: </b>
                    <i>{item.rating}</i>
                  </p> */}
                    <p className={css.tdNotes}>{item.notes}</p>
                  </div>
                ))}
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NotesModal;

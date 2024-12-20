import { useState } from 'react';
import css from './Modal.module.css';

export const InitialContacts = [{}];

const Modal = ({ closeModal, onSubmit, handleNewData }) => {
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
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formState.name.trim() === '' ||
      formState.description.trim() === '' ||
      formState.rating.trim() === '' ||
      formState.notes.trim() === ''
    )
      return;
    onSubmit(formState);
    closeModal();
    console.log(formState.name);
  };
  return (
    <div className={css.modalContainer}>
      <div className={css.modal}>
        <button onClick={closeModal} className={css.closeBtn}>
          X
        </button>
        <form onSubmit={handleSubmit}>
          <div className={css.formGroup}>
            <label htmlFor="name">
              <p>Full name</p>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Agent, Guest or Owner"
                autoComplete="off"
                value={formState.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="description">
              <p>Description</p>
              <select
                name="description"
                id="description"
                autoComplete="off"
                value={formState.description}
                onChange={handleChange}
              >
                <option value="Guest">Guest</option>
                <option value="Agent">Agent</option>
                <option value="Owner">Owner</option>
              </select>
            </label>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="rating">
              <p>Rating</p>
              <select
                name="rating"
                id="rating"
                value={formState.rating}
                onChange={handleChange}
              >
                <option value="Good">Good</option>
                <option value="Bad">Bad</option>
                <option value="Pending">Pending</option>
              </select>
            </label>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="notes">
              <p>Notes</p>
              <textarea
                name="notes"
                id="notes"
                placeholder="Enter a brief note about this person"
                value={formState.notes}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className={css.submitCancel}>
            <button
              type="submit"
              onClick={handleSubmit}
              onSubmit={handleNewData}
            >
              Submit
            </button>
            <button type="cancel" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

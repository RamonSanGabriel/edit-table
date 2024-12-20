import { useState } from 'react';
import css from './Modal.module.css';

export const InitialContacts = [{}];

const Modal = ({ closeModal, onSubmit, handleNewData }) => {
  /*   const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [review, setReview] = useState('');
  const [remarks, setRemarks] = useState(''); */
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    review: '',
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
                value={formState.description}
                onChange={handleChange}
              >
                <option value="guest">Guest</option>
                <option value="agent">Agent</option>
                <option value="owner">Owner</option>
              </select>
            </label>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="review">
              <p>Review</p>
              <select
                name="review"
                id="review"
                value={formState.review}
                onChange={handleChange}
              >
                <option value="good">Good</option>
                <option value="bad">Bad</option>
                <option value="pending">Pending</option>
              </select>
            </label>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="description">
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
          <button
            className={css.submitBtn}
            type="submit"
            onClick={handleSubmit}
            onSubmit={handleNewData}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

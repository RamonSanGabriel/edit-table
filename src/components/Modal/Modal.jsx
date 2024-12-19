import { useState } from 'react';
import css from './Modal.module.css';

export const InitialContacts = [{}];

const Modal = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [review, setReview] = useState('');
  const [remarks, setRemarks] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    review: '',
    upload: '',
    action: '',
  });

  const handleChange = () => {
    setFormState({
      ...formState,
      name,
      description,
      review,
      [e.target.value]: e.target.value,
    });
  };
  const handleSubmit = () => {
    e.preventDefault();
  };
  return (
    <div className={css.modalContainer}>
      <div className={css.modal}>
        <button onClick={closeModal} className={css.closeBtn}>
          X
        </button>
        <form onSubmit={handleSubmit}>
          <div className={css.formGroup}>
            <label htmlFor="page">
              <p>Full name</p>
              <input
                type="text"
                name="page"
                id="page"
                placeholder="Enter Agent, Guest or Owner"
              />
            </label>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="description">
              <p>Description</p>
              <select name="description" id="description">
                <option value="agent">Guest</option>
                <option value="guest">Agent</option>
                <option value="owner">Owner</option>
              </select>
            </label>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="status">
              <p>Review</p>
              <select name="status" id="status">
                <option value="live">Good</option>
                <option value="draft">Bad</option>
                <option value="approved">Pending</option>
              </select>
            </label>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="description">
              <p>Remarks</p>
              <textarea
                name="remarks"
                id="remarks"
                placeholder="Enter a brief note about this person"
              />
            </label>
          </div>
          <button className={css.submitBtn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

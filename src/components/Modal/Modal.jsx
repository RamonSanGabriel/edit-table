import css from './Modal.module.css';

const Modal = ({ closeModal }) => {
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
              <p>Name</p>
              <input
                type="text"
                name="page"
                id="page"
                placeholder="Enter the page name"
              />
            </label>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="description">
              <p>Status</p>
              <select name="description" id="description">
                <option value="agent">Live</option>
                <option value="guest">Draft</option>
                <option value="owner">Approved</option>
              </select>
            </label>
          </div>
          <div className={css.formGroup}>
            <label htmlFor="status">
              <p>Status</p>
              <select name="status" id="status">
                <option value="live">Live</option>
                <option value="draft">Draft</option>
                <option value="approved">Approved</option>
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
              ></textarea>
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

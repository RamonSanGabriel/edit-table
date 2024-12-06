import css from './Modal.module.css';

const Modal = () => {
  const handleSubmit = () => {
    alert('Form submitted');
  };
  return (
    <div className={css.modalContainer}>
      <div className={css.modal}>
        <form onSubmit={handleSubmit}>
          <div className={css.formGroup}>
            <label htmlFor="page">
              <p>Page</p>
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
              <p>Description</p>
              <textarea
                name="description"
                id="description"
                placeholder="Enter the page description"
              ></textarea>
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
          <button className={css.submitBtn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

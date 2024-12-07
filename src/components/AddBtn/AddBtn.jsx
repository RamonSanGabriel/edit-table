import css from './AddBtn.module.css';

const AddBtn = ({ setModalOpen }) => {
  return (
    <div>
      <button className={css.addBtn} onClick={() => setModalOpen(true)}>
        Add
      </button>
    </div>
  );
};

export default AddBtn;

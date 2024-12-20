import { TbNotes } from 'react-icons/tb';

const NotesBtn = ({ setNotesModalOpen }) => {
  return (
    <div>
      <button className={css.addBtn} onClick={() => setNotesModalOpen(true)}>
        <TbNotes />
      </button>
    </div>
  );
};

export default NotesBtn;

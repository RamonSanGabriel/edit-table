import { FaPencilAlt, FaTrashAlt, FaUpload } from 'react-icons/fa';
import { TbNotes } from 'react-icons/tb';
import css from './Table.module.css';

const Table = ({ data, handleDelete, setNotesModalOpen }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Notes</th>
            <th>Upload</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.rating}</td>
              <td>
                {' '}
                <span>
                  <button className={css.tdButton} onClick={setNotesModalOpen}>
                    <TbNotes />
                  </button>
                </span>
              </td>
              <td className={css.tdUpload}>
                <span>
                  <button className={css.tdButton}>
                    <FaUpload />
                  </button>
                </span>
              </td>
              <td className={css.tdActions}>
                <span>
                  <button
                    className={css.tdButton}
                    onClick={() => handleDelete(index)}
                  >
                    <FaTrashAlt />
                  </button>
                </span>
                <span>
                  <button className={css.tdButton}>
                    <FaPencilAlt />
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

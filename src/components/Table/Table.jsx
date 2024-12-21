import { FaPencilAlt, FaTrashAlt, FaUpload } from 'react-icons/fa';
import { TbNotes } from 'react-icons/tb';
import css from './Table.module.css';

const Table = ({ data, handleDelete, handleEdit, handleModalNotes }) => {
  return (
    <div>
      {/* <div className={css.tableWrapper}> */}
      <table className={css.tableWrapper}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Notes</th>
            <th className={css.thUpload}>Upload</th>
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
                <p className={css.tdNotes}>{item.notes}</p>
                <span className={css.tbNotesIcon}>
                  <button
                    className={css.tdButton}
                    // onClick={() => handleEdit(index)}
                    onClick={() => handleModalNotes(index)}
                    // {...() => handleEdit(index)}
                  >
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
                  <button
                    className={css.tdButton}
                    onClick={() => handleEdit(index)}
                  >
                    <FaPencilAlt />
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* </div> */}
    </div>
  );
};

export default Table;

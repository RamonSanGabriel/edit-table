import { FaPencilAlt, FaTrashAlt, FaUpload } from 'react-icons/fa';
import css from './Table.module.css';

const Table = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Upload</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Agent Name</td>
            <td className={css.tdDescription}>This is an agent</td>
            <td className={css.tdStatus}>Bad</td>
            <td className={css.tdStatus}>
              <span>
                <button className={css.tdButton}>
                  <FaUpload />
                </button>
              </span>
            </td>
            <td className={css.tdIcons}>
              <span>
                <button className={css.tdButton}>
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
          <tr>
            <td>Guest Name</td>
            <td className={css.tdDescription}>This is a guest</td>
            <td className={css.tdStatus}>Good</td>
            <td className={css.tdStatus}>
              <span>
                <button className={css.tdButton}>
                  <FaUpload />
                </button>
              </span>
            </td>
            <td className={css.tdIcons}>
              <span>
                <button className={css.tdButton}>
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
          <tr>
            <td>Owner Name</td>
            <td className={css.tdDescription}>This is an owner</td>
            <td className={css.tdStatus}>For review</td>
            <td className={css.tdStatus}>
              <span>
                <button className={css.tdButton}>
                  <FaUpload />
                </button>
              </span>
            </td>
            <td className={css.tdIcons}>
              <span>
                <button className={css.tdButton}>
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
        </tbody>
      </table>
    </div>
  );
};

export default Table;

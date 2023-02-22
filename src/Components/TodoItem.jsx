import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

const TodoItem = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const viewMod = {};
  const editMode = {};
  if (editing) {
    viewMod.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdateDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li className="item">
      <div className="content" style={viewMod}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        { itemProp.title}
        <div className="btn">
          <button type="button" onClick={handleEditing}>
            <AiFillEdit
              style={{ color: '5e5e5e', fontSize: '16px' }}
            />
          </button>
          <button type="button" onClick={() => delTodo(itemProp.id)}>
            <FaTrash
              style={{ color: '5e5e5e', fontSize: '16px' }}
            />
          </button>
        </div>

      </div>
      <input
        type="text"
        value={itemProp.title}
        className="textInput"
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};
export default TodoItem;

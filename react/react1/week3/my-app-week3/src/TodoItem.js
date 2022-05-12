import React, { useState } from 'react'

function TodoItem({id, description, deadline, delItem, updateDescription}) {
  const [checked, setChecked] = useState(false);
  const [editing, setEditing] = useState(false);
  const [updatingDescription, setUpdatingDescription] = useState('');

  const changedBox = (event) => {
    setChecked(event.target.checked)
  }

  const handelDelet = () => {
    delItem(id)
  }

  const handleEdit = () => {
    setEditing(true);
    setUpdatingDescription(description);
  };
  
const handleUpdateDescription = (e) => {
    const value = e.target.value;
    setUpdatingDescription(value);
};

 //update function
const updateDescByNewValue = () => {
        setEditing(false);
        updateDescription(id, updatingDescription);};

  return (
    <div>
      <ul>
      <div><label htmlFor="is"><span style={checked ? { textDecorationLine: 'line-through'} : {}}> {description} | {deadline} </span><input type="checkbox" id="is" onChange={changedBox}></input> 
          <button onClick={handelDelet}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
          </label>
          {editing ? (<div><input type="text" value={updatingDescription} onChange={handleUpdateDescription}/></div>) : (null)}
          <br/>
          {editing ? (<button onClick={updateDescByNewValue}>Update</button>) : (null)}
        </div>
        </ul>
      </div>
  )
}

export default TodoItem;
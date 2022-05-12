import React, { useState } from 'react'

function TodoItem({id, description, deadline, delItem, updateDescription}) {
  const [checkedbBox, setCheckedBok] = useState(false);
  const [editing, setEditing] = useState(false);
  const [updatingDescription, setUpdatingDescription] = useState('');

  const changedBox = (event) => {
    setCheckedBok(event.target.checked)
  }

  const handDelet = () => {
    delItem(id)
  }

  const handEdit = () => {
    setEditing(true);
    setUpdatingDescription(description);
  };
  
const handUpdateDescription = (e) => {
    const value = e.target.value;
    setUpdatingDescription(value);
};

const updateDesc = () => {
    setEditing(false);
    updateDescription(id, updatingDescription);};

  return (
    <div>
      <div><label htmlFor="is"><span style={checkedbBox ? { textDecorationLine: 'line-through'} : {}}> {description} | {deadline} </span><input type="checkbox" id="is" onChange={changedBox}></input> 
          <button onClick={handDelet}>Delete</button>
          <button onClick={handEdit}>Edit</button>
          </label>
          {editing ? (<div><input type="text" value={updatingDescription} onChange={handUpdateDescription}/></div>) : (null)}
          <br/>
          {editing ? (<button onClick={updateDesc}>Update</button>) : (null)}
        </div>
      </div>
  )
}

export default TodoItem;
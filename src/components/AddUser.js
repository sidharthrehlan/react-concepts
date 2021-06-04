import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "store/userReducer";

function AddUser() {
  const userRef = useRef("");
  const dispatch = useDispatch();
  const onSubmitForm = (e) => {
    e.preventDefault();
    const username = userRef.current.value;
    dispatch(addUser({ firstname: username }));
  };

  return (
    <section>
      <h2>Add User Form</h2>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="firstname">First name</label>
        <input type="text" name="firstname" id="firstname" ref={userRef} />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default AddUser;

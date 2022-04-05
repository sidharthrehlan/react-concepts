import React, { useState } from 'react';
import Records from './Records';

function Search() {
  const [id, setId] = useState();
  const [result, setResult] = useState({});

  const changeHandler = (e) => {
    setId(e.target.value);
  };

  const storeLocally = (user) => {
    let userObj = [];

    const userData = localStorage.getItem('userInfo');
    if (userData) {
      let parsedUserData = JSON.parse(userData);
      userObj = [...parsedUserData, user];
    } else {
      userObj.push(user);
    }

    localStorage.setItem('userInfo', JSON.stringify(userObj));
  };

  const findLocally = (id) => {
    let searchUser = null;
    const userData = localStorage.getItem('userInfo');
    if (userData) {
      let parsedUserData = JSON.parse(userData);
      searchUser = parsedUserData.find((user) => user.id === parseInt(id));
    }
    return searchUser;
  };

  const callSearchApi = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const user = await response.json();
      storeLocally(user);
      setResult(user);

      //  searchUser({ user: user.title, userId: user.id });
    } catch (e) {
      console.log(e);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    //find in localstorage
    let searchedUser = findLocally(id);
    if (!searchedUser) {
      callSearchApi(id);
    } else {
      setResult(searchedUser);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input onChange={changeHandler} type='text' name='id' id='id' />
        <input type='submit' value='Search' />
      </form>
      <Records title={result.title} id={result.id} />
    </div>
  );
}

export default Search;

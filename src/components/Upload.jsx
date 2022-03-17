import React, { useRef, useState } from 'react';
import axios from 'axios';

function Upload() {
  const imageFile = useRef();
  const [file, setFile] = useState();

  const changeHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const fileupload = (e) => {
    // console.log(e);
    // const file = imageFile.current.value;

    //upload file through axios
    // axios
    //   .post('localhost:4000', {
    //     file: file,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    const url = 'http://localhost:5000/single/';
    const data = new FormData();
    data.append('image', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    return axios.post(url, data, config);
  };

  return (
    <div>
      <form onSubmit={fileupload}>
        <input onChange={changeHandler} type='file' name='image' />
        <input type='submit' value='submit' />
      </form>
    </div>
  );
}

export default Upload;

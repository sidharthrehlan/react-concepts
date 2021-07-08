import React, { useState } from "react";
import axios from "axios";
import Message from "./components/Message";
import Progress from "./components/Progress";

const url_api = "http://localhost:5000/upload";
const base_api = "http://localhost:5000/";

function App() {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose file");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const changeHandler = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("file", file);

    try {
      const res = await axios.post(url_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          console.log(progressEvent);
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        },
      });
      //clear progress bar
      setTimeout(() => {
        setUploadPercentage(0);
      }, 10000);

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
      setMessage("File Uploaded");
    } catch (error) {
      if (error.response.status === 500) {
        setMessage("there was a problem with the server");
      } else {
        setMessage(error.response.data.msg);
      }
      setUploadPercentage(0);
    }
  };
  return (
    <>
      {message && <Message msg={message} />}
      <form onSubmit={submitHandler}>
        <Progress percentage={uploadPercentage} />
        <input
          type="file"
          name="customFile"
          id="customFile"
          onChange={changeHandler}
        />
        <button type="submit">Submit</button>
      </form>
      {uploadedFile && (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3 className="text-center">{uploadedFile.fileName}</h3>
            <img
              style={{ width: "100%" }}
              src={base_api + uploadedFile.filePath}
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;

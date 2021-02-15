import { useState } from "react";
import "./App.css";

function App() {
  const [_file, _setFile] = useState();

  const _onFileChange = (event) => {
    // this.setState({ selectedFile: event.target.files[0] });
    _setFile(event.target.files[0]);
  };

  const fileData = () => {
    if (_file) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {_file.name}</p>

          <p>File Type: {_file.type}</p>
          <p>FileSize: {_file.size}</p>

          <p>Last Modified: {_file.lastModifiedDate.toDateString()}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };
  console.log("_file", _file);
  return (
    <div className="app">
      <header className="header">
        <h1>React Pick A File</h1>
      </header>
      <div>
        <input type="file" onChange={_onFileChange} />
      </div>
      {fileData()}
    </div>
  );
}

export default App;

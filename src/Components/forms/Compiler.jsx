import axios from "axios";
import React, { useState } from "react";
import "./Compiler.css";

function Comipler() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("cpp");

  const handleSubmit = async () => {
    const payload = {
      language,
      code,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:3001/api/v1/run",
        payload
      );
      setOutput(data.output);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className="compiler-main">
      <div>
        <label>Language: </label>
        <select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option value="cpp">C++</option>
          <option value="py">Python</option>
        </select>
        <br />
      </div>
      <textarea
        rows="20"
        cols="75"
        value={code}
        onChange={(e) => {
          setCode(e.target.value);
        }}
      ></textarea>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <p>{output}</p>
    </div>
  );
}

export default Comipler;

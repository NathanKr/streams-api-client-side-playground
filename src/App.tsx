import { useState } from "react";
import "./App.css";

function App() {
  const [numChunks,setNumChunks]=useState<number>(0);

  async function fetchData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const reader = response.body?.getReader();

    while (true) {
      const resultObj = await reader?.read();
      if (resultObj) {
        const { value, done } = resultObj;
        setNumChunks(numChunks+1)
        if (done) break;
        console.log("Received", value);
      } else {
        console.error("error is undefined");
        break;
      }
    }

    console.log('Response fully received');
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch</button>
      <p>number of chunks : {numChunks}</p>
    </div>
  );
}

export default App;

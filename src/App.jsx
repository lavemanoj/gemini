import {useState} from "react";
import "./App.css";

function App(){
  const[text, setText] = useState("");
  const[results, setResults] = useState([]);
  console.log(results)
  return <>
  <div class="leo">
  <h2>Gemini</h2>
  <input class="but" type="text" placeholder="enter to search"  onChange={(e) => setText(e,EventTarget.value)}/>
  <button class="button"
  onClick={() => {
    fetch("/api/search?text=" + text)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
      })
      .catch((error) => {
        console.error("Failed to search!", error);
      });
  }}>Click Me
  </button>
  </div>

  <ul>
    {results.map((item, index) => (
      <li key={index}>
        <a href={item.url} target="_blank">
          {item.title}
          {item.url}
        </a>
      </li>
    ))}
  </ul>
  /</>
}

export default App;
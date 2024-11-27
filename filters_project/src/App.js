import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [elements, setElements] = useState([
    { 'title': 'test1', 'score': 1 },
    { 'title': 'test2', 'score': 4 },
    { 'title': 'test3', 'score': 2 },
    { 'title': 'test4', 'score': 8 },
    { 'title': 'test5', 'score': 5 },
    { 'title': 'test6', 'score': 9 },
    { 'title': 'test7', 'score': 3 },
    { 'title': 'test8', 'score': 2 },
    { 'title': 'test9', 'score': 4 },
  ]);
  const [filtered, setFiltered] = useState("");
  const [checkbox, setCheckbox] = useState({
    dobre: false,
    srednie: false,
    slabe: false,
  })

  const filteredElements = elements.filter((e) => {
    const matchText = e.title.toLowerCase().includes(filtered.toLowerCase());

    const matchCategory = 
    (checkbox.dobre && e.score >= 7) ||
    (checkbox.srednie && e.score >=4 && e.score < 7) ||
    (checkbox.slabe && e.score < 4)

    return matchText && (matchCategory || Object.values(checkbox).every(v => !v));
  });

  const handleCheckbox = (categories) => {
    setCheckbox((prev) => ({
      ...prev,
      [categories]: !prev[categories]
    }));
  };
  

  return (
    <div className="App">
      {filteredElements.map((item, index) => (
        <div key={index}>
          <strong>Title: </strong>{item.title}<br />
          <strong>Score: </strong>{item.score}
        </div>
      ))}
      <input 
        type="text"   
        placeholder="Wpisz nazwę..."
        value={filtered}
        onChange={(e) => {
          setFiltered(e.target.value);
        }}
      />
      <div>
        <label>
          <input 
            type="checkbox" 
            checked={checkbox.dobre}
            onChange = {() => handleCheckbox("dobre")}
          />
          dobre
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={checkbox.srednie}
            onChange = {() => handleCheckbox("srednie")}
          />
          średnie
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={checkbox.slabe}
            onChange = {() => handleCheckbox("slabe")}
          />
          słabe
        </label>
      </div>
    </div>
  );
}

export default App;

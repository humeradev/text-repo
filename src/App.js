import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("light"); // State to manage the theme mode

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark"); 
      document.body.style.backgroundColor = '#525252';
      
    } else {
      setMode("light"); 
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <div className={`App ${mode}`}>
      <NavBar mode={mode} toggleMode={toggleMode} />
      <Alert alert={null} />
      <div className="container">
        <TextForm heading="Enter your text to analyze below" />
      </div>
    </div>
  );
}

export default App;
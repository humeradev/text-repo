import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light"); // State to manage the theme mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#004040";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <div className={`App ${mode}`}>
        <NavBar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Text Utills- Word Counter, Caracter Counter, Remove Extra Spaces "
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            />
            <Route path="/about" element={<About  mode={mode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

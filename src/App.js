import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Enabled", "success");
      document.title = "Dark Mode Enabled";

      setTimeout(() => {
        document.title = "TextUtils2";
      }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "Light Mode Enabled";

      setTimeout(() => {
        document.title = "TextUtils2";
      }, 2000);
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />

      <div className="container my-4 mx-5">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<Textform head="Enter the Text to analyse" mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

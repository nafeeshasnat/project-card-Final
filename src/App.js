import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import BackgroundBlue from './Components/BackgroundBlue';
import Loading from './Components/Loading';
import GuestChecklist from "./GuestChecklist/GuestChecklist";


function App() {
  return (
    <div className="App">
      {/* <BackgroundBlue />
      <Loading /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><BackgroundBlue /> <Loading/></>} />
          <Route path="/guest-checklist" element={<GuestChecklist/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

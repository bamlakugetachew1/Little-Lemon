import "./App.css";
import HomePage from "./componets/HomePage";
import ReservePage from "./componets/ReservePage";
import ConfirmedBooking from "./componets/ConfirmedBooking";
import { Routes, Route, useNavigate } from "react-router-dom";
import { submitAPI } from "./utils/TimeGenerator";

function App() {
  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <>
      <Routes>
        <Route
          path="/reserve"
          element={<ReservePage submitForm={submitForm} />}
        ></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>
    </>
  );
}

export default App;

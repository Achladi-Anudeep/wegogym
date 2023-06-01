import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Careers,
  Home,
  Location,
  Membership,
  NutritionCounseling,
  Offers,
  PersonalTraining,
  TrainClasses,
} from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="classes" element={<TrainClasses />} />
        <Route path="location" element={<Location />} />
        <Route path="careers" element={<Careers />} />
        <Route path="membership" element={<Membership />} />
        <Route path="nutrion-counseling" element={<NutritionCounseling />} />
        <Route path="offers" element={<Offers />} />
        <Route path="personal-training" element={<PersonalTraining />} />
      </Routes>
    </>
  );
}

export default App;

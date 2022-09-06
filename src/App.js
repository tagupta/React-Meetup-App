import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUp/AllMeetUp";
import NewMeetUpPage from "./pages/NewMeetUp/NewMeetUp";
import FavoritesPage from "./pages/Favorites/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetUpsPage />} />
        <Route path="/new-meetup" element={<NewMeetUpPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;

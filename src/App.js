import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUp/AllMeetUp";
import NewMeetUpPage from "./pages/NewMeetUp/NewMeetUp";
import FavoritesPage from "./pages/Favorites/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetUpsPage />} />
          <Route path="/new-meetup" element={<NewMeetUpPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

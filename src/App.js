import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import DestinationPage from "./pages/destinationPage";
import CrewPage from "./pages/crewPage";
import TechPage from "./pages/techPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/destination" element={<DestinationPage />}></Route>
        <Route path="/crew" element={<CrewPage />}></Route>
        <Route path="/technology" element={<TechPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

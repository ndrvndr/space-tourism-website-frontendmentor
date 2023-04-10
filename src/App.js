import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import DestinationPage from "./pages/destinationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/destination" element={<DestinationPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

import Home from "./pages/Home";
import User from "./pages/User";
import { GithubProvider } from "./context/GithubContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <GithubProvider>
      <Router>
        <main className="app-main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:login" element={<User />} />
          </Routes>
        </main>
      </Router>
    </GithubProvider>
  );
};

export default App;

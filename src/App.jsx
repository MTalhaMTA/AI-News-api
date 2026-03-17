import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "../src/screens/Loginscreen";
import UserFormScreen from "./screens/UserFormScreen";
import SignupPage from "../src/screens/SignupPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/user-form" element={<UserFormScreen />} />

        
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Homep from "./pages/home/Homep";
import Profile from "./pages/profile/Profile";
import Login from './pages/login/Login';
import Register from './pages/register/Register';



function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Homep />}/>
          <Route exact path="/profile/:username" element={<Profile />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} /> 
        </Routes>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Homep from "./pages/home/Homep";
import Profile from "./pages/profile/Profile";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";



function App() {

  const {user} = useContext(AuthContext);

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={user ? <Homep /> : <Register />}/>
          <Route exact path="/profile/:username" element={<Profile />} />
          <Route exact path="/login" element={user ? <Navigate to = "/" /> : <Login />} />
          <Route exact path="/register" element={user ? <Navigate to = "/" /> : <Register />} /> 
        </Routes>
    </Router>
  );
}

export default App;

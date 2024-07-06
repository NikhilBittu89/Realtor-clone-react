

 // Or wherever you placed your Tailwind CSS file
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Offers from "./pages/Offers";
function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/sig-in" element={<Signin />} /> 
        <Route path="/sig-up" element={<Signup />} /> 
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
        <Route path="/offers" element={<Offers />} /> 
      </Routes>
    </Router>
    
    </>
  
  );
}

export default App;

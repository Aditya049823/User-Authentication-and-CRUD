import { useSelector } from "react-redux"
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { useState } from "react";
import Register from "./components/Register";


function App() {

  const user=useSelector((state)=>state.user.currentUser);

  const [showLogin, setShowLogin] = useState(true);

  if (user) return <Dashboard />;
  return showLogin ? (
    <Login switchToRegister={() => setShowLogin(false)} />
  ) : (
    <Register switchToLogin={() => setShowLogin(true)} />
  );
}

export default App

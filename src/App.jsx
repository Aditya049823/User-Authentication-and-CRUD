import { useSelector } from "react-redux"
//import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { Suspense, useState } from "react";
import Register from "./components/Register";
import { lazy } from "react";

const DashboardComponent=lazy(()=>import('./components/Dashboard'));

function App() {

  const user=useSelector((state)=>state.user.currentUser);

  const [showLogin, setShowLogin] = useState(true);

  if(user){
    return(
      <Suspense fallback={<div>Loading...</div>}>
        <DashboardComponent/>
      </Suspense>
    )
  }

  return showLogin ? (
    <Login switchToRegister={() => setShowLogin(false)} />
  ) : (
    <Register switchToLogin={() => setShowLogin(true)} />
  );
}

export default App

import { useState } from 'react';
import './App.css'
import AllRoutes from './components/AllRoutes'
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
function App() {
  const [auth, isAuth] = useState(false);
  return (
    <>
    <div className="body">
    <NavBar auth={auth} isAuth={isAuth}/>
    <AllRoutes/>
    </div>
    </>
  )
}

export default App

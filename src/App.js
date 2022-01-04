import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from "react-router-dom";
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import Login from './components/Login';
import NotFound from './components/NotFound';
import SignUp from './components/SignUp';
function App() {
  return (
    <div>
      <HeaderComponent/>
    <h1 hidden>hi</h1>
    <FooterComponent/>
    </div>
  );
}

export default App;

import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.scss";
import Home from "./pages/home/Home";
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";


function App() {
  return (
    <Routes>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/users" exact>
          <UserList />
        </Route>
      </div>
    </Routes>

  );
}

export default App;

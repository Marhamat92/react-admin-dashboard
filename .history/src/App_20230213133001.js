import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.scss";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import newUser from "./pages/newUser/newUser";
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";



function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/newUser" element={<newUser />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
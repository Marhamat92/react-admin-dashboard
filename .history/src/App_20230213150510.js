import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.scss";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ProductList from "./pages/productList/ProductList";



function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
      </div>
    </>

  );
}

export default App;

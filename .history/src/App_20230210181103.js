import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.scss";
import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";


function App() {
  return (
    <RouterProvider>
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
    </RouterProvider>

  );
}

export default App;

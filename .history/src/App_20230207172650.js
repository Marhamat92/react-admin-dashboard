import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        other pages
      </div>
    </div>
  );
}

export default App;

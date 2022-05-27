import './App.css';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import Widget from './components/Widget';

function App() {
  return (
    <div className="app">

      {/* Side Navbar */}
      <SideBar />

      <Feed />

      <Widget />
    </div>
  );
}

export default App;

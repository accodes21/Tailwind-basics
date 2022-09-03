import './App.css';
import Channel from './components/Channel';
import SideBar from './components/SideBar';

function App() {
  return (
    <h1 className="flex">
      <SideBar/>
      <Channel/>
    </h1>
  );
}

export default App;

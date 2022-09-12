import './App.css';
import Channel from './components/Channel';
import Content from './components/Content';
import SideBar from './components/SideBar';

function App() {
  return (
    <h1 className="flex">
      <SideBar/>
      <Channel/>
      <Content/>
    </h1>
  );
}

export default App;

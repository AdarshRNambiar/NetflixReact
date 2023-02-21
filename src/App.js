import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/RowPost/Rowpost";
import {originals,action,comedy,romance,horror} from './Urls';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Rowpost url={originals} title="Netflix Originals"></Rowpost>
      <Rowpost url={action} title="Action" isSmall></Rowpost>
      {/* isSmall is checking for the True or False to make it or can use as isSmall={true} */}
      <Rowpost url={comedy} title="Comedy" isSmall></Rowpost>
      <Rowpost url={horror} title="Horror" isSmall></Rowpost>
      <Rowpost url={romance} title="Romance" isSmall></Rowpost>
    </div>
  );
}

export default App;

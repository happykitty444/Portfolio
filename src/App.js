import './App.css';
import Header from './Header';
import MainItems from './MainItems';
import AboutMe from './AboutMe';

function App() {
  return (
    <div className="App" style={{width:"100%", height:"400vh"}}>
      <Header/>
      <AboutMe/>
      <MainItems/>
    </div>
  );
}

export default App;

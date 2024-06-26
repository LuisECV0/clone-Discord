 import './App.css';
 import Header from './components/header.js';
 import Body from './components/body.js';

function App() {
  return (
    <div className="App"> 
      <Header />
      <div className="background-icons">
          <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/664b1d55ec9b7c26d37eceed_dis_Icon_Crown%20(1).webp" alt="" className="icon crown-icon" />
          <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/662632b7f75202aa67c25126_turnip.webp" alt="" className="icon turnip-icon" />
          <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/664b1d8fe64b8c656d8da82f_potion.webp" alt="" className="icon potion-icon" />
          <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/662632b7f75202aa67c25126_turnip.webp" alt="" className="icon turnip-icon" />
          <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/664b1d8fe64b8c656d8da82f_potion.webp" alt="" className="icon potion-icon" />
      </div>
      <Body />
    </div>
  );
}
export default App;

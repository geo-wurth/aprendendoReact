import breastsecaps from './assets/images/logo.png'
import Navbar from './components/navbar';
import Camisetas from './views/camisetas';
import Bones from './views/bones';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App = () =>
{
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path={ '/' } element={ <ContentApp/> }></Route>
          <Route path={ '/camisetas' } element={ <Camisetas/> }></Route>
          <Route path={ '/bones' } element={ <Bones/> }></Route>
      </Routes>
    </>
  )
}

const ContentApp = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ breastsecaps } alt="logo" />
        <a
          className="App-link"
          href="https://breasts-e-caps.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acesse minha loja
        </a>
      </header>
    </div>
  );
}

export default App;

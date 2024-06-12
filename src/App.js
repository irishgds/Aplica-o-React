import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/Aplicacao';
import Comentarios from './pages/Comentario';
import reactLogo from './assets/minha_foto.png';

const App = () => {
  return (
    <Router>
      <div style={{ textAlign: 'center' }}>
      <div className="container">
        <header>
          <img src={reactLogo} alt="Foto Logo" className ="minha-foto" />
          <h1>Meu Primeiro Aplicativo React - Iris</h1>
          <nav>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ display: 'inline', margin: '10px' }}>
                <Link to="/">Inicio</Link>
              </li>
              <li style={{ display: 'inline', margin: '10px' }}>
                <Link to="/aplicacao">Aplicação</Link>
              </li>
              <li style={{ display: 'inline', margin: '10px' }}>
                <Link to="/comentarios">Comentários</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aplicacao" element={<About />} />
            <Route path="/comentarios" element={<Comentarios />} />
          </Routes>
        </main>
      </div>
      </div>
    </Router>
  );
};

export default App;
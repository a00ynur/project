import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Solutions from './Components/solucoes/Solutions';
import Contatos from './Components/contatos/Contatos';
import Blog from './Components/Blog/Blog';
import Servicos from './Components/servicos/Servicos';
import NossoTime from './Components/NossoTime/NossoTime';
import SobreNos from './Components/SobreNos/SobreNos';
import ScrollToTop from './Components/Utils/ScrollToTop';
import Faq from './Components/Faq/Faq';
import NotFound from './Components/NotFound';
import Modal from './Components/modal/Modal';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solucoes" element={<Solutions />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/nosso-time" element={<NossoTime />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

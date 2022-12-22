import Faq from "./Components/Faq/Faq";
import ServicesCards from "./Components/ServicesCards/ServicesCards";
import './App.css';
import { AccordionContainer } from "./Components/Faq/Faq";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <ServicesCards/>
      <Faq/>
      <AccordionContainer/>
    </div>
  );
}

export default App;

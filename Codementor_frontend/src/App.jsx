import { HashRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Debugger from './Pages/Debugger'
import Documentation from './Pages/Documentation'
import Explainer from './Pages/Explainer';
import Optimization from './Pages/Optimization'
import Refactoring from './Pages/Refactoring'
import Review from './Pages/Review';
import Translator from './Pages/Translator'

import Layout from './Layout';

export default function App() {
  return (
    
    <Router>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Debugger" element={<Debugger />} />
        <Route path="/Documentation" element={<Documentation />} />
        <Route path="/Explainer" element={<Explainer />} />
        <Route path="/Optimization" element={<Optimization />} />
        <Route path="/Refactoring" element={<Refactoring />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Translator" element={<Translator />} />
      </Route>
    </Routes>
    </Router>
    
  );
}

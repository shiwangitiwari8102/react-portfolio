
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
 import './App.css';
 import './public/assets/css/animate.min.css';
 import './public/assets/css/flaticon.min.css';
 import './public/assets/css/fontawesome-5.14.0.min.css';
 import './public/assets/css/nice-select.min.css';
  import './public/assets/css/slick.min.css';
import './public/assets/css/style.css';
import './app/global.css';


function App() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/:user" element={<Home />} /> */}
        </Routes>
    </Router>
    );
}

export default App;
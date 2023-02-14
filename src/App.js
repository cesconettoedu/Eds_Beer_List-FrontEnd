import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Enter from './pages/Enter';

function App() {
  return (
     <Router>
      <Routes>
        <Route path='/' element={<Enter />} />
        {/* <Route path='/home' element={<Home />} />
        <Route path='/list' element={<List />} />
        <Route path='/add' element={<Add />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

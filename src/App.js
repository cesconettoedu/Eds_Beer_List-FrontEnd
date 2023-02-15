import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Enter, List, AddBeer } from './pages';

function App() {

  const addre = "http://localhost:8080/api/beers"

  return (
     <Router>
      <Routes>
        <Route path='/' element={<Enter />} />
        <Route path='/list' element={<List addre={addre} />} />
        <Route path='/add' element={<AddBeer />} />
      </Routes>
    </Router>
  );
}

export default App;

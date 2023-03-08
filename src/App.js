import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Enter, List, AddBeer, SingleBeer } from './pages';
import { Future } from './components';

function App() {

  const addre = "http://localhost:8080/api/beers"

  return (
     <Router>
      <Routes>
        <Route path='/' element={<Enter />} />
        <Route path='/list' element={<List addre={addre} />} />
        <Route path='/add' element={<AddBeer addre={addre} edit={false}/>} />
        <Route path='/edit/:id' element={<AddBeer addre={addre} edit={true}/>} />
        <Route path='/:id' element={<SingleBeer addre={addre}/>} />
        <Route path='/future' element={<Future />} />
      </Routes>
    </Router>
  );
}

export default App;

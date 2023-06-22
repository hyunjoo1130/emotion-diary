import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';
import RouteTest from './components/RouteTest';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h1>헬로우</h1>
        {/* CSR : Client Side Rendering */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/diary' element={<Diary />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;

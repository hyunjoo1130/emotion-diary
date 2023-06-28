import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';

// COMPONENTS
import Header from './components/Header';
import Button from './components/Button';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header
          leftTxt={<Button name={'BACK'} onclick={() => {}} />}
          centerTxt={'center'}
          rightTxt={<Button name={'NEXT'} onclick={() => {}} />}
        />
        <h1>Hello</h1>
        {/* CSR : Client Side Rendering */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/diary/:id' element={<Diary />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from "./components/Login";
import TestBlog from "./components/TestBlog";
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Register/>} />
        <Route exact path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

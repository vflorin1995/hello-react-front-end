import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/fetch';
import Greet from './Greet';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

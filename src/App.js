// import './App.css';
import Nav from './components/nav/Nav';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <Nav />
      </div>
    </Suspense>
  );
}

export default App;

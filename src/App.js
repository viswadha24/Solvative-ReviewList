import './App.css';
import { Route,Routes } from 'react-router-dom';
import NewReview from './Components/NewReview/NewReview';
import ReviewsList from './Components/ReviewsList/ReviewsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h2>APP .js</h2>
        <Routes>
          <Route path="/" element={<ReviewsList />} />
          <Route path="/new" element={<NewReview />} />
        </Routes>
      </header>

    </div>
  );
}

export default App;

import './App.css';
import Counter from './component/counter';
import Suveyform from './component/survey';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Surveyformik from './component/surveyformik';
function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Counter />} />
      <Route path="sur" element={<Suveyform />} />
      <Route path="for" element={<Surveyformik />} />
    </Routes>
  </BrowserRouter>,
      
    </div>
  );
}

export default App;

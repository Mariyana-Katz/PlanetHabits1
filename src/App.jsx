
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HabitTrackerDashboard from './Pages/HabitTrackerDashboard';
import Home from './Pages/Home';
import MyProgres from './Pages/MyProgres'

function App() {
  return (
     
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<HabitTrackerDashboard />} />
        <Route path="/progres" element={<MyProgres/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

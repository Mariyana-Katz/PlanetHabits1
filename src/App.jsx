import { BrowserRouter, Routes, Route } from "react-router-dom";
import HabitTrackerDashboard from "./Pages/HabitTrackerDashboard";
import Home from "./Pages/Home";
import MyProgres from "./Pages/MyProgres";
import Preferences from "./Pages/Preferences";

function App() {
  return (
    // BrowserRouter lets you use client-side routing in your React app. It needed when you have more pages.
    // It enables navigation between different components without reloading the page.
    // The Routes component contains all your Route definitions.
    // Each Route specifies a path and the component to render for that path.
    <BrowserRouter>
      {/*In Routes are defines which component shows at which path*/}
      <Routes>
        {/* The path "/" is the root of your application, which will render the Home component. */}
        {/* The path "/dashboard" will render the HabitTrackerDashboard component. */}
        {/* The path "/progres" will render the MyProgres component. */}
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<HabitTrackerDashboard />} />
        <Route path="/progres" element={<MyProgres />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

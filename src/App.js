
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";


import Inicio from './routes/Inicio'

import AdminInicio from './routes/Admin/Inicio'

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Inicio/>} />


            <Route path="/admin" element={<AdminInicio/>} />
        </Routes>
    </Router>
  );
}

export default App;

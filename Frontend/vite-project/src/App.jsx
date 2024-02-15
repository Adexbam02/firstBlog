import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Navbar,
  NotFound
} from "./components/index";
import Write from "./components/write/Write";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use path="/" for the home route */}
        <Route path="write" element={<Write />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

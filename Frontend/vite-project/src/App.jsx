import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Navbar
} from "./components/index";

const App = () => {
  return (
    // <div>App</div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;

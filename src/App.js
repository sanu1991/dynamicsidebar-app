import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dynamicsidebar-app" exact element={<Layout />}></Route>
        <Route path="/blogs" exact element={<Blogs />}></Route>
        <Route path="/contact" exact element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
    // <>
    //   <Layout />
    // </>
  );
}

export default App;

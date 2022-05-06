
import "./App.css";
import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";
import Signup from "./components/Auth/Signup/Signup";
import CheckOut from "./components/CheckOut/CheckOut";
import About from "./components/Home/About";
import Blog from "./components/Home/Blog";
import Contact from "./components/Home/Contact";
import Footer from "./components/Home/Footer";
import Home from "./components/Home/Home";
import NotFound from "./components/Home/NotFound/NotFound";

function App() {
    return (
        <div>
            
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                    path="/checkout/:serviceId"
                    element={
                        <RequireAuth>
                            <CheckOut/>
                        </RequireAuth>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            
            <Footer/>
        </div>
    );
}


export default App;

//tools
import { AppProvider } from "./context";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//components
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SingleBookPage from "./pages/SingleBookPage/SingleBookPage";
import BooksPage from "./pages/BooksPage/BooksPage";
import AboutPage from "./pages/AboutPage/AboutPage";



function App() {
  return (
    <AppProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header/>
          <main className="main">
            <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/book/:id" element={<SingleBookPage/>} />
              <Route path="/books" element={<BooksPage/>} />
              <Route path="/about" element={<AboutPage/>} />
            </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
    </AppProvider>
    
  );
}

export default App;

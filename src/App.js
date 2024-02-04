import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//components
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BookPage from "./pages/BookPage/BookPage";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header/>
        <main className="main">
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/book" element={<BookPage/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//components
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main className="main">
          <Routes>
            <Route path="/" element={<MainPage/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

import { MoviesGrid } from "../src/components/MoviesGrid/MoviesGrid";
import styles from "./App.module.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import { LandingPage } from "./components/LandingPage/LandingPage";




function App() {
  return (
   <Router>
    <header>
      <Link to="/">
        <h1 className={styles.title}>Movies</h1>
        </Link>
      <Link to="/"></Link>
      <br />
      <Link to="/movie"></Link>
    </header>
    <main>
      <Routes>
        <Route exact path="/movies/:movieId" element={<MovieDetails />} />
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route path="/">404</Route>
      </Routes>
    </main>
   </Router>
  );
}

export default App;

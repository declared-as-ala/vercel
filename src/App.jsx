import { GoogleLogin } from "@react-oauth/google";
import Layout from "./components/layout";
import { ArrowRightArc } from "./components/svg";
import { UserProvider } from "./context/UserContext";
import { LoginPop } from "./components/pop";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Onboarding from "./pages/onboarding";
import Profile from "./pages/profile";
import Search from "./pages/search";
import Library from "./pages/library";
import Discover from "./pages/discover";
import ArticleDetail from "./components/ArticleDeatil";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
        <Layout>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/page/:title" element={<ArticleDetail />} />
            <Route path="/library" element={<Library />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;

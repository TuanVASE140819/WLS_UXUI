import "./styles/globals.scss";
// import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import MainNav from "./components/mainNav/MainNav";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Footer from "./components/footer/Footer";

// pages
import Home from "./pages/home/Home";
import Contacts from "./pages/contacts/Contacts";


import Post from "./pages/post/Post";
import Search from "./pages/search/Search";
import Events from "./pages/events/Events";
import TopSchool from "./pages/topSchool/TopSchool";
import SearchResults from "./pages/searchResults/SearchResults";
import UserInfo from "./pages/userInfo/UserInfo";
import Forum from "./pages/forum/Forum";
import Mession from "./pages/mession/Mession";
import SchoolDetail from "./pages/schoolDetail/SchoolDetail";

import InforUser from "./pages/inforUser/InforUser";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
function App() {
  // const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <MainNav />
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/information" element={<InforUser />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/events" element={<Events />} />
        <Route path="/topSchool" element={<TopSchool />} />
        <Route path="/searchResults" element={<SearchResults />} />
        <Route path="/userInfo" element={<UserInfo />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/mession" element={<Mession />} />
        <Route path="/schoolDetail" element={<SchoolDetail />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

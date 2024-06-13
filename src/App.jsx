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
import EventVote from "./pages/event-vote/event-vote";
import TopSchool from "./pages/topSchool/TopSchool";
import SearchResults from "./pages/searchResults/SearchResults";
import UserInfo from "./pages/userInfo/UserInfo";
import Forum from "./pages/forum/Forum";
import Mession from "./pages/mession/Mession";
import SchoolDetail from "./pages/schoolDetail/SchoolDetail";

import InforUser from "./pages/inforUser/InforUser";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import News from "./pages/news/News";
import ProfilePage from "./pages/profilePage/ProfilePage";

import { Helmet } from "react-helmet";

import Gift from "./pages/gift/Gift";
import Member from "./pages/member/Member";
import Connects from "./pages/connects/Connects";
import ConnectFriends from "./pages/connect-friends/Connect-friends";
import VotingCategory from "./pages/voting-category/voting-category";
import InviteFriends from "./components/inviteFriends/invitefriends";
import DetailContent from "./pages/detail-content/DetailContent";
import SuggestToFriends from "./pages/SuggestToFriends/SuggestToFriends";

import Minigame from "./pages/miniGame/miniGame";
import Quiz from "./pages/Quiz/quiz";
import Events from "./pages/EventAll/Events";
import Notification from "./pages/notification/notification";
import ExamResults from "./pages/examResults/ExamResults";
import ExchangeHistory from "./pages/exchangeHistory/exchangeHistory";
import ForgotPassword from "./pages/Forgot_password/Forgot_password";
import Dial from "./pages/dial/Dial";
import Rotation from "./pages/rotation/rotation";
function App() {
  // const { user } = useContext(Context);

  return (
    <BrowserRouter>
      <Helmet>
        <title>We Love School</title>
        <meta
          name="description"
          content="We Love School - Nơi chia sẻ thông tin về các trường đại học, cao đẳng, trung học, tiểu học trên cả nước"
        />
        <meta
          name="keywords"
          content="We Love School, trường đại học, trường cao đẳng, trường trung học, trường tiểu học"
        />
      </Helmet>
      <MainNav />
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
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
        <Route path="/mission" element={<Mession />} />
        <Route path="/schoolDetail" element={<SchoolDetail />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/forum-detail" element={<ProfilePage />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/menber" element={<Member />} />
        <Route path="/connect-friends" element={<ConnectFriends />} />
        <Route path="/voting-category" element={<VotingCategory />} />
        <Route path="/inviteFriends" element={<InviteFriends />} />
        <Route path="/detail-content" element={<DetailContent />} />
        <Route path="/suggest-to-friends" element={<SuggestToFriends />} />
        <Route path="/event-vote" element={<EventVote />} />
        <Route path="/miniGame" element={<Minigame />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/connects" element={<Connects />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/exam-results" element={<ExamResults />} />
        <Route path="/exchange-history" element={<ExchangeHistory />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dial" element={<Dial />} />
        <Route path="/rotation" element={<Rotation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

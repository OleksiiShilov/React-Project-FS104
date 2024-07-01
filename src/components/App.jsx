import Header from "./Header/Header";
import WelcomeSection from "./WelcomeSection/WelcomeSection";
import Footer from "./Footer/Footer";
import Messages from "./Messages/Messages";
import Library from "./Library/Library";
import TestChildren from "./TestChildren/TestChildren";
import Profile from "./Profile/Profile";
// import profileData from "../assets/users.json";

const App = () => {
  const message = "Hello world!";
  const libraryBooks = [
    { id: "id: 1", title: "The Fellowship of the Ring" },
    { id: "id: 2", title: "The Two Towers" },
    { id: "id: 3", title: "The Return of the King" },
  ];

  return (
    <>
      <Header />

      <WelcomeSection />
      <Library books={libraryBooks} />
      <Messages author="Oleksii" message={message} />
      <TestChildren>
        <h1>Card title</h1>
        <p>Text between opening and closing tag</p>
      </TestChildren>
      <Profile />
      <Footer />
    </>
  );
};

export default App;

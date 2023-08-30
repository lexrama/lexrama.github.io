import Header from "../components/Header";
import Footer from "../components/Footer";
import FlickrCard from "../components/FlickrCard";

import ProfilePicture from "../assets/gradpic.jpeg";

import "./Home.scss";

export default function Home() {
  return (
    <div className="Home">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <h1>Hi, I'm Alexa.</h1>
        <p>
          Hello! I'm Alexa (she/her), and I'm a recent graduate from Stanford
          University where Symbolic Systems, concentrating in Human-Centered
          Artificial Intelligence. I'm passionate about UI/UX design and
          development, ethics and diversity in tech, and mental health. Please
          feel free to connect with me for more information!
        </p>
        <img className="profile-pic" src={ProfilePicture} alt="Profile" />
      </div>
      <FlickrCard className="flickr-card" />
      <Footer className="footer" />
    </div>
  );
}

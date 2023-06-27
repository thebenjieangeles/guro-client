import landingPage from "../assets/landingPage.png";

function About() {
  return (
    <div
      style={{
        backgroundImage: `url(${landingPage})`,
        backGroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "#FFFBE0",
      }}
      className="h-screen flex justify-center items-center"
    >
      About
    </div>
  );
}

export default About;

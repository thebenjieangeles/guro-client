import homePage from "../assets/homePage.png";

function Home() {
  return (
    <div>
      <div className="bg-blue-800 h-[79rem] flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col items-center gap-16 md:flex-row md:justify-between md:w-3/4 lg:w-1/2">
          <div className="text-center md:text-left">
            <h1 className="text-6xl mb-5 md:text-9xl lg:text-12xl text-yellow-500 font-bold">
              Guro App
            </h1>
            <p className="text-4xl mb-5 md:text-5xl lg:text-7xl text-neutral-50 font-bold">
              Welcome to our class
            </p>
          </div>
          <img
            src={homePage}
            alt="Homepage"
            className="h-70 w-70 md:scale-90 xl:scale-75 2xl:scale-90 ml-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

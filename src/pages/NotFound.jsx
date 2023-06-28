import notFound from "../assets/notFound.png";

function NotFound() {
  return (
    <div>
      <div className="h-[70rem] md:h-[73rem] lg:h-[77rem] xl:h-[77rem] 2xl:h-[78rem] flex flex-col justify-center items-center gap-6">
        <div className="m-30 w-30 h-30 flex flex-col items-center gap-16 md:flex-row md:justify-between ">
          <div className="text-center md:text-left ">
            <img
              src={notFound}
              alt="Homepage"
              className=" w-25 h-25 md:w-1/2 md:h-1/2 lg:w-3/4 lg:h-3/4 xl:h-1/2 xl:w-1/2"
            />
          </div>
          <div className="text-center md:text-left lg:text-left xl:text-left">
            <h1 className="w-64 md:w-80 lg:w-90 text-3xl md:text-4xl lg:text-6xl  text-orange-400 font-bold mb-5">
              Page Not Found
            </h1>
            <p className="w-64 md:w-96 text-base md:text-lg lg:text-2xl text-black font-bold ">
              I apologize for the inconvenience. It seems that you've entered an
              incorrect endpoint for the page. Please double-check the URL and
              ensure it is accurate. If you need assistance, you can click on
              the home page to navigate back to the main section of the website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

import policiesPage from "../assets/policiesPage.png";

function Policies() {
  return (
    <div>
      <div className="bg-green-900 h-[66rem] md:h-[73rem] lg:h-[77rem] xl:h-[77rem] 2xl:h-[78rem] flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col items-center gap-16 md:flex-row md:justify-between md:w-3/4 lg:w-1/2">
          <div className="text-center md:text-left">
            <h1 className="md:w-[35rem] text-4xl mb-5 md:text-6xl lg:text-8xl text-black font-bold">
              Classroom Policies
            </h1>
            <p className="text-2xl mb-7 md:text-3xl lg:text-5xl text-neutral-50 font-bold ">
              <ul>
                <li>Educational background</li>
                <li>Teaching Experience</li>
                <li>Fun facts</li>
              </ul>
            </p>
          </div>
          <div className="relative">
            <img
              src={policiesPage}
              alt="Policies Image"
              className="h-70 w-70 md:scale-90 xl:scale-75 2xl:scale-150 ml-auto"
            />
            <div className="absolute bottom-0 left-[60%] -right-[25%] top-2/3">
              <p className="text-2xl w-full  text-white font-bold "></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policies;

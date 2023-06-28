import newsArticle_a from "../assets/newsArticle_a.png";
import newsArticle_b from "../assets/newsArticle_b.png";
import newsArticle_c from "../assets/newsArticle_c.png";

function Policies() {
  return (
    <div>
      <div className="bg-green-900 h-screen gap-5 md:h-[73rem] lg:h-[77rem] xl:h-[77rem] 2xl:h-[78rem] ">
        <div className="text-center md:text-left">
          <h1 className=" w-full text-center text-4xl p-5 md:text-6xl lg:text-8xl text-black font-bold">
            Classroom Policies
          </h1>
        </div>
        <div className="flex flex-col grid-cols-2 gap-4 w-[25rem] h-[25rem] md:flex-row md:justify-between md:w-[35rem] lg:w-[35rem] xl:w-[35rem] 2xl:w-[35rem] ">
          <img
            src={newsArticle_a}
            alt="News Article_a Image"
            className="h-65 w-65 md:scale-70 xl:scale-75 2xl:scale-90 ml-auto"
          />
          <img
            src={newsArticle_b}
            alt="News Article_b Image"
            className="h-65 w-65 md:scale-70 xl:scale-75 2xl:scale-90 ml-auto"
          />
          <img
            src={newsArticle_c}
            alt="News Article_c Image"
            className="h-65 w-65 md:scale-70 xl:scale-75 2xl:scale-90 ml-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Policies;

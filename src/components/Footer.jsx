import { icon } from "@fortawesome/fontawesome-svg-core";
import mailIcon from "../assets/mailIcon.svg";
import githubIcon from "../assets/githubIcon.svg";
import facebookIcon from "../assets/facebookIcon.svg";
import telephoneIcon from "../assets/telephoneIcon.svg";

function Footer() {
  return (
    <footer className="bg-orange-400 py-10">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center sm:flex-row">
        <div className="text-white text-center flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-center gap-5">
          <div className="mb-4 sm:mb-0">
            <p className="text-sm">
              © 2023{" "}
              <span className="text-2xl font-bold text-[#008080]">G</span>
              uro <span className="text-2xl font-bold text-[#008080]">A</span>
              pp. All rights reserved.
            </p>
            <p className="text-sm mb-2">Built with React and Tailwind CSS</p>
          </div>
          <div className="flex items-center justify-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="Github Icon" className="h-10 w-10" />
            </a>
            <a href="mailto:your-email@example.com">
              <img src={mailIcon} alt="Mail Icon" className="h-10 w-10" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookIcon}
                alt="Facebook Icon"
                className="h-10 w-10"
              />
            </a>
            <a href="tel:09181234567">
              <img
                src={telephoneIcon}
                alt="Telephone Icon"
                className="h-10 w-10"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

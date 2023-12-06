import "./AboutMe.css";
import { SiGmail } from "react-icons/si";
import { BsInstagram, BsDiscord,BsLinkedin  } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
const AboutMe = () => {
  return (
    <div>
      <div className="text-3xl text-center pt-16 font-bold text-slate-300">
        Contact Me
      </div>
      <div className="text-center text-4xl mt-2 text-slate-300 pb-20">
        <div className="flex justify-center pr-20">
          <div className="">
            <a href="mailto:vincent7564756@gmail.com">
              <div className="flex w-[50px] h-[50px] pt-6">
                <div className="align-middle text-xl">
                  <span>
                    <SiGmail size={50} color="dc2626" />
                  </span>
                  <span className="pl-1"> &nbsp;Vincent7564756@gmail.com</span>
                </div>
              </div>
            </a>
            <a href="https://www.instagram.com/vincent756">
              <div className="flex w-[50px] h-[50px] pt-6">
                <span>
                  <BsInstagram
                    size={50}
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl"
                  />
                </span>
                <div className="align-middle pr-1 pl-3 pt-4 text-xl">@vincent756</div>
              </div>
            </a>
            <a href="https://discord.com/">
              <div className="flex w-[50px] h-[50px] pt-7">
                <div>
                  <BsDiscord size={50} color="#6366f1" />
                </div>
                <span className="align-middle pt-4 pl-3 text-xl">
                  <span className="pr-1">Soon </span>
                  <span> Hee#1187</span>
                </span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/vin-cent/">
              <div className="flex w-[50px] h-[50px] pt-8">
                <div className="">
                  <BsLinkedin size={50} color="#3b82f6" />
                </div>
                <span className="align-middle pl-3 text-xl pt-5">
                  <span className="pr-1">Vin </span>
                  <span> Cent</span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;

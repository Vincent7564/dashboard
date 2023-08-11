import "./AboutMe.css";
import {SiGmail} from 'react-icons/si' 
import {BsInstagram,BsDiscord} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
const AboutMe = () => {
    return (
      <div>
      <div className="text-3xl text-center pt-16 font-bold text-slate-300">Contact Me</div>
        <div className="text-center text-4xl pt-5 mt-10 text-slate-300">
          
          <div className="flex justify-center pr-20">
            <div className="">
              <a href="https://mail.google.com/mail/">
                <div className="flex justify-between w-[75px] h-[75px] pt-5">
                  <div className="align-middle pl-3 text-xl">
                    <span><SiGmail size={50} color="dc2626" /></span>
                    <span> &nbsp;Vincent7564756@gmail.com</span>
                    </div>
                </div>
              </a>
              <a href="https://www.instagram.com/vincent756">
                <div className="flex justify-between w-[75px] h-[75px] pt-5">
                  <span><BsInstagram size={50} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl"/></span>
                  <div className="align-middle pl-3 text-xl">@vincent756</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/vin-cent/">
                <div className="flex w-[75px] h-[75px] pt-5">
                <div><AiFillLinkedin size={60} color="#3b82f6" /></div>
                  <span className="align-middle pl-3 text-xl">
                    <span className="pr-1">Vin </span>
                    <span> Cent</span>
                  </span>
                </div>
                </a>
          <a href="https://discord.com/">
            <div className="flex w-[75px] h-[75px] pt-5">
              <div><BsDiscord size={50} color="#6366f1" /></div>
              <span className="align-middle pl-3 text-xl">
                <span className="pr-1">Soon </span>
                <span> Hee#1187</span>
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
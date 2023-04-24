import "./AboutMe.css";
const AboutMe = () => {
    return (
        <div className="text-center text-xl pt-5">
          You can Reach me At
          <div className="flex justify-center pr-20">
            <div className="">
              <a href="https://mail.google.com/mail/">
                <div className="flex justify-between w-[50px] h-[50px] pt-5">
                  <img src={require("../Images/gmail.png")} alt="" />
                  <div className="align-middle pl-3 text-sm">Vincent7564756@gmail.com</div>
                </div>
              </a>
              <a href="https://www.instagram.com/vincent756">
                <div className="flex justify-between w-[50px] h-[50px] pt-5">
                  <img src={require("../Images/instagram.png")} alt="" />
                  <div className="align-middle pl-3 text-sm">@vincent756</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/vin-cent/">
                <div className="flex w-[50px] h-[50px] pt-5">
                  <img src={require("../Images/linkedin.png")} alt="" />
                  <span className="align-middle pl-3 text-sm">
                    <span className="pr-1">Vin </span>
                    <span> Cent</span>
                  </span>
                </div>
                </a>
          <a href="https://mail.google.com/mail/">
            <div className="flex w-[50px] h-[50px] pt-5">
              <img src={require("../Images/discord.png")} alt="" />
              <span className="align-middle pl-3 text-sm">
                <span className="pr-1">Soon </span>
                <span> Hee#1187</span>
              </span>
            </div>
          </a>
        </div>
        </div>
    </div>
  );
};
export default AboutMe;
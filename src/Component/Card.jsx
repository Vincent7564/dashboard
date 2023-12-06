import Github from "../Images/github-mark.svg";
const Card = (props) => {
  return (
    <div>
      <div class="max-w-[16rem] rounded-lg overflow-hidden shadow-xl basis-1/3 bg-sky-200/50 wrapper transform transition duration-500 hover:scale-110 hover:shadow-3xl cursor-pointer">
        <img
          style={{ width: "400px", height: "200px" }}
          src={require("../Images/" + props.img)}
          alt={props.img}
          key={props.img}
        />
        <div className="px-6 py-4">
          <div class="font-bold text-l mb-2">{props.title}</div>
          <p class="text-slate-300 text-xs"><b>{props.desc}</b></p>
        </div>
        <div className="px-6 pt-4 pb-2">{props.tag}</div>
        {props.hyperlink ? 
        <div className="flex justify-end pr-2 pb-3 mr-0 mt-auto ml-auto mb-0 object-right-bottom">
          <a href={props.hyperlink}>
            <img src={Github} alt="git" width="30px" height="30px" />
          </a>
        </div> : <></>}
      </div>
    </div>
  );
};

export default Card;

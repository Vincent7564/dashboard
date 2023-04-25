import Github from "../Images/github-mark.svg";
const Card = (props) => {
  if (!props.hyperlink) {
    return (
      <div class="max-w-[16rem] rounded overflow-hidden shadow-xl basis-1/3 bg-sky-200/50">
        <img
          class="w-full h-100"
          src={require("../Images/" + props.img)}
          alt={props.img}
        />
        <div className="px-6 py-4">
          <div class="font-bold text-l mb-2">{props.title}</div>
          <p class="text-gray-700 text-xs">{props.desc}</p>
        </div>
        <div className="px-6 pt-4 pb-2">{props.tag}</div>
      </div>
    );
  }
  return (
    <div>
      <div class="max-w-[16rem] rounded overflow-hidden shadow-xl basis-1/3 bg-sky-200/50">
        <img
          class="w-full h-100"
          src={require("../Images/" + props.img)}
          alt={props.img}
        />
        <div className="px-6 py-4">
          <div class="font-bold text-l mb-2">{props.title}</div>
          <p class="text-gray-700 text-xs">{props.desc}</p>
        </div>
        <div className="px-6 pt-4 pb-2">{props.tag}</div>
        <span className="flex justify-end pr-2 pb-3">
          <a href={props.hyperlink}>
            <img src={Github} alt="git" width="30px" height="30px" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Card;

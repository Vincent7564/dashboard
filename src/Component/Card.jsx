const Card = (props) => {
  return (
    <div class="max-w-xs rounded overflow-hidden shadow-xl basis-1/3 bg-sky-200/50">
      <img
        class="w-full h-100"
        src= {require('../Images/' + props.img)}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div class="font-bold text-xl mb-2">{props.title}</div>
        <p class="text-gray-700 text-base">
          {props.desc}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
          {props.tag}
      </div>
    </div>
  );
};

export default Card;

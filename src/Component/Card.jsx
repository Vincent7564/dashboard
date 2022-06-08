import Tag from './Tag'

const Card = (props) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-2xl basis-1/3">
      <img
        class="w-full"
        src= {props.img}
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{props.title}</div>
        <p class="text-gray-700 text-base">
          {props.desc}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
          {props.tag}
      </div>
    </div>
  );
};

export default Card;

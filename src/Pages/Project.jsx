import Card from "../Component/Card";
import "./Language.css";
import Tag from "../Component/Tag";

function Project() {
  const dataSet = [
    {
      image: "React.jpeg",
      Hashtag: ["React JS", "Javascript", "Axios", "Tailwind CSS"],
      title: "Weather App",
      desc: "Weather App using Weather API in React",
      hyperlink: "https://github.com/Vincent7564/Weather-App"
    },
    {
      image: "Vue.jpg",
      Hashtag: ["value1", "value2", "value5"],
      title: "Vue JS",
      desc: "Vue JS Implementation",
    },
    {
      image: "AngularJS.png",
      Hashtag: ["value1 ", " value2"],
      title: "Angular JS",
      desc: "Angular JS Implementation",
    },
    {
      image: "AngularJS.png",
      Hashtag: ["value1 ", " value2"],
      title: "Angular JS",
      desc: "Angular JS Implementation",
    },
    {
      image: "AngularJS.png",
      Hashtag: ["value1 ", " value2"],
      title: "Angular JS",
      desc: "Angular JS Implementation",
    },
  ];

  return (
    <div className="App">
      <div className="text-3xl pb-5 text-center pt-5 font-bold">List Projects i've created</div>
      <div className=" ml-64 mr-64 text-center text-2xl pb-5 pl-20 pr-5">
        <div className="flex justify-around">
            <span><button className=" w-[250px] h-[50px] border-8 backdrop-blur-sm">Web</button></span>
            <span><button className="w-[250px] h-[50px] border-8 backdrop-blur-sm">AI</button></span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-6 pt-5">
          {dataSet.map((data) => (
            <Card
              title={data.title}
              desc={data.desc}
              tag={data.Hashtag.map((Hashtag) => (
                <Tag tag={Hashtag} />
              ))}
              img={data.image}
              hyperlink = {data.hyperlink}
            />  
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;

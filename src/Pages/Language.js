import Card from "../Component/Card";
import "./Language.css";
import Tag from "../Component/Tag";
import Header from "../Component/Header";

function Language() {
  const dataSet = [
    {
      image: "React.jpeg",
      Hashtag: ["value1", "value2", "value4", "value4"],
      title: "React JS",
      desc: "React JS Implementation",
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
      <div className="flex justify-center"> 
        <div className="grid grid-cols-3 gap-6 pt-6">
          {dataSet.map((data) => (
            <Card
              title={data.title}
              desc={data.desc}
              tag={data.Hashtag.map((Hashtag) => (
                <Tag tag={Hashtag} />
              ))}
              img={data.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Language;

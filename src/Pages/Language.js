import Card from "../Component/Card";
import "./Language.css";
import Tag from "../Component/Tag";
import Header from "../Component/Header";

function Language() {
  const dataSet = [
    {
      image: "React.jpeg",
      title: "React JS",
      desc: "Javascript Framework",
    },
    {
      image: "laravel-8.jpg",
      title: "Laravel",
      desc: "PHP Framework",
    },
    {
      image: "JavaScript-logo.png",
      title: "Javascript",
      desc: "Javascript",
    },
    {
      image: "Tailwind.png",
      title: "Tailwind CSS",
      desc: "CSS Framework",
    },
    {
      image: "Microsoft-SQL-Server.png",
      title: "SQL Server",
      desc: "Database",
    },
    {
      image: "Java.jpg",
      title: "Java",
      desc: "Java",
    },
    {
      image: "Net.png",
      title: ".Net C#",
      desc: "C# Framework",
    },
    {
      image: "Python-Symbol.png",
      title: "Phyton",
      desc: "Phyton",
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
              img={data.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Language;

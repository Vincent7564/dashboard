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
    {
      image: "Express.jpg",
      title: "Express JS",
      desc: "Javascript Framework for Backend",
    },
    {
      image: "Mongodb.png",
      title: "Mongo DB",
      desc: "No SQL Database",
    },
    {
      image: "NodeJS.png",
      title: "Node JS",
      desc: "Javascript Framework",
    },
  ];

  return (
    <div className="App">
            <div className="text-3xl text-center pt-16 font-bold text-slate-300">Technical Stack / Tools</div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-6 pt-6">  
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

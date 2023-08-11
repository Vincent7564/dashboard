import Card from "../Component/Card";
import "./Language.css";
import Tag from "../Component/Tag";

function Project() {
  const dataSet = [
    {
      image: "openweather.jpg",
      Hashtag: ["React JS", "Javascript", "Axios", "Tailwind CSS"],
      title: "Weather App",
      desc: "Weather App using Weather API in React to show the specific country the temperature and location",
      hyperlink: "https://github.com/Vincent7564/Weather-App"
    },
    {
      image: "PeduliSekitar.png",
      Hashtag: ["Laravel", "PHP", "JQuery", "Bootstrap"],
      title: "Peduli Sekitar",
      desc: "Peduli sekitar is a school project which have a similarity use such as Kitabisa.com , basically this website is for helping people with open donation",
      hyperlink: "https://github.com/Vincent7564/Weather-App"
    },
    {
      image: "Amazingbookstore.png",
      Hashtag: ["Laravel", "PHP", "Bootstrap","MariaDB"],
      title: "Amazing Bookstore",
      desc: "Amazing book store is a website for renting a book which have an auth for admin and customer built in laravel",
      hyperlink: "https://github.com/Vincent7564/Weather-App"
    },
    {
      image: "International_Pokémon_logo.svg.png",
      Hashtag: ["React JS", "Tailwind CSS","Webpack"],
      title: "Poke-Wiki",
      desc: "A Simple Pokemon Finder Base on their name using Poke-Api.co with Tailwind and React, Collab with my friends",
      hyperlink: "https://github.com/laurensiavee/poke-wiki"
    },
    {
      image: "JavaScript-logo.png",
      Hashtag: ["Javascript", "CSS","HTML 5",'Fetch API','ES6'],
      title: "30 Days Javascript",
      desc: "A 30 days challenge of Javascript using Vanilla JS, CSS and few API using Fetch with ES6",
      hyperlink: "https://github.com/Vincent7564/learn-javascript"
    },
    {
      image: "V&V.png",
      Hashtag: ["Node JS", "Tailwind CSS","React JS","Express JS","MongoDB"],
      title: "V&V E-Commerce Shop",
      desc: "A Website with a E-Commerce background website with own ideas, There's Backend tho, this github button will redirect to Frontend but you can explore it in my repo",
      hyperlink: "https://github.com/Vincent7564/E-Commerce-Frontend"
    },

  ];

  return (
    <div className="App">
      <div className="text-3xl text-center pt-16 font-bold text-slate-300">Project List</div>
      <div className=" ml-64 mr-64 text-center text-2xl pb-5 pl-20 pr-5">
        {/* <div className="flex justify-around">
            <span><button className=" w-[250px] h-[50px] border-8 backdrop-blur-sm">Web</button></span>
            <span><button className="w-[250px] h-[50px] border-8 backdrop-blur-sm">AI</button></span>
        </div> */}
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-6 pt-5">
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

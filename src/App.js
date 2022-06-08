import logo from "./logo.svg";
import Card from "./Component/Card";
import "./App.css";
import Tag from "./Component/Tag";

function App() {

  const dataSet = [
    {
      image: require(".//Images/Sunset.png"),
      Hashtag : ['value1','value2','value4'],
      title:"React JS",
      desc: "React JS Implementation"
    },
    {
      image: require(".//Images/Sunset.png"),
      Hashtag : ['value1','value2','value5'],
      title:"Vue JS",
      desc: "Vue JS Implementation"
    },
    {
      image: require(".//Images/Sunset.png"),
      Hashtag : ['value1 ',' value2'],
      title:"Angular JS",
      desc: "Angular JS Implementation"
    },
    {
      image: require(".//Images/Sunset.png"),
      Hashtag : ['value1 ',' value2'],
      title:"Angular JS",
      desc: "Angular JS Implementation"
    },
    {
      image: require(".//Images/Sunset.png"),
      Hashtag : ['value1 ',' value2'],
      title:"Angular JS",
      desc: "Angular JS Implementation"
    },
  ]

  return (
    
    <div className="App">
      <div className="grid grid-cols-3 justify-items-center gap-8" >
        {dataSet.map((data)=>(
          <Card title={data.title} desc={data.desc} tag=
          {(
            data.Hashtag.map((Hashtag) => (
                <Tag tag={Hashtag}/>
                ))  
            )} img={data.image} />
            
          ))
        }
      </div>
    </div>
  );
}

export default App;

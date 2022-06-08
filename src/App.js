import logo from "./logo.svg";
import Card from "./Component/Card";
import "./App.css";
import Tag from "./Component/Tag";

function App() {


  // const tag = ['#value1','#value2','#value3']

  const image= require(".//Images/Sunset.png");

  const CardShow = () => {
      for(let i=0 ;i<dataSet.length;i++){

      }
  }

  const dataSet = [
    {
      image: require(".//Images/Sunset.png"),
      Hashtag : ['#value1 ',' #value2 '],
    },
  ]

  return (
    <div className="App">
      <div className="flex flex-row justify-evenly">
        <Card title="Testing" desc="Testing dlu ya bisa apa engga" tag="#JS" img={image} />
        <Card title="Testing" desc="Testing dlu ya bisa apa engga" tag=
        {dataSet.map((data) => (
          data.Hashtag.map((Hashtag) => (
              <Tag tag={Hashtag}/>
              ))  
          ))
        }
        img={dataSet[0].image}/>
        <Card />
      </div>
    </div>
  );
}

export default App;

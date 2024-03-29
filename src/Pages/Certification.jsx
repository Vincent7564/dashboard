import Card from "../Component/Card";
const Certificate = [
  {
    img: "SCL.png",
    title: "Shopee Code League",
    desc: "Shopee Code League is an international event that held by Shopee, this event to encourage a coder to participate in a code competition especially in Data Structures and Algorithms",
  },
];

const Certification = () => {
  return (
    <>
          <div className="text-3xl text-center pt-16 font-bold text-slate-300">Certification</div>
    <div className="flex justify-center pt-10">
      <div className="grid grid-cols-3 gap-6 pt-5">
        {Certificate.map((certificate) => (
          <Card
          key={certificate.img}
            title={certificate.title}
            img={certificate.img}
            desc={certificate.desc}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Certification;

const WorkingExperience = () => {
  const experiences = [
    {
      company: "PT. Adicipta Inovasi Teknologi (Grha Adicipta)",
      position: "Fullstack Developer",
      duration: "Feb 2022 - Feb 2023",
      description: [
        "•	Implements software feature for Clients needs",
        "•	Used VB.Net & C# as main programming language and SQL Server as Database",
        "•	Experienced in Waterfall Software Development Life Cycle",
        "•	Made stored procedure for several function required in development",
        "•	Tested software feature post development phase",
        "•	Created API with REST Architecture using C#",
        "•	Maintained new feature after deployment to production",
        "•	Actively contributed to a group project where we analyzed and solved user problems, problem-solving and analytical skills.",
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <div>
      <div className="text-3xl text-center pt-16 pb-16 font-bold text-slate-300">
        Working Experiences
      </div>

      <div className="flex justify-center align-middle">
        {experiences.map((experience, index) => (
          <div
            className="bg-white rounded shadow p-4 mb-4  transition duration-300"
            key={index}
          >
            <h3 className="text-xl font-semibold mb-2">{experience.company}</h3>
            <p className="text-lg mb-1">{experience.position}</p>
            <p>{experience.duration}</p>
            &nbsp;
            {experience.description.map((description, index) => (
              <p key={index}>{description}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingExperience;

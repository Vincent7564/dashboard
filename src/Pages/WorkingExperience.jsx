const WorkingExperience = () =>{
    const experiences = [
        {
          company: 'PT. Adicipta Inovasi Teknologi (Grha Adicipta)',
          position: 'Fullstack Developer',
          duration: 'Feb 2022 - Feb 2023',
          description: ['•	Implements software feature for Clients needs',
            '•	Used VB.Net & C# as main programming language and SQL Server as Database',
            '•	Experienced in Waterfall Software Development Life Cycle',
            '•	Made stored procedure for several function required in development',
            '•	Tested software feature post development phase',
            '•	Created API with REST Architecture using C#',
            '•	Maintained new feature after deployment to production',
            '•	Actively contributed to a group project where we analyzed and solved user problems, problem-solving and analytical skills.', 
        ],
        },
        // Add more experiences as needed
      ];
    
      return (
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-slate-300">Working Experience</h2>
          {experiences.map((experience, index) => (
            <div
              className="bg-white rounded shadow p-4 mb-4 hover:bg-slate-300 hover:text-zinc-900 transition duration-300"
              key={index}
            >
              <h3 className="text-xl font-semibold mb-2">{experience.company}</h3>
              <p className="text-lg mb-1">{experience.position}</p>
              <p >{experience.duration}</p>
              &nbsp;
              {experience.description.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
            </div>
          ))}
        </div>
      );
    };
    

export default WorkingExperience;
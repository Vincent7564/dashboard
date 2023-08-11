import GitHubCalendar from "react-github-calendar";
import Github from "../Images/github-mark.svg";
const Calendar = () => {
  return (
    <div>
      <div className="text-3xl text-center pt-16 font-bold text-slate-300">
        Github Calendar
      </div>

      <div className="m-10 mr-96 ml-96 mt-10 mb-10 bg-gray-600">
        <span className="flex pt-10 align-middle text-2xl text-white">
          <a href="https://github.com/Vincent7564">
            <img src={Github} alt="git" width="50px" height="50px" />
          </a>{" "}
          &nbsp; Github Activity
        </span>
        <span className="flex pt-4 align-middle pr-[60rem] text-lg text-white">
          <a href="https://github.com/Vincent7564">
            <img src={Github} alt="git" width="25px" height="25px" />
          </a>{" "}
          &nbsp; Username : Vincent7564
        </span>
        <div className="pl-10 pt-10 pb-10  flex align-middle text-white">
          <GitHubCalendar
            username="vincent7564"
            blockMargin={5}
            blockRadius={3}
            blockSize={16}
            showWeekdayLabels={true}
            colorScheme="light"
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;

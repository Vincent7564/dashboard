import GitHubCalendar from "react-github-calendar";
import Github from '../Images/github-mark.svg';
const Calendar = () => {

  return (
    <div className="bg-black">
        <span className="flex pt-10 align-middle text-2xl text-white">
        <a href="https://github.com/Vincent7564">
        <img src={Github} alt="git" width="50px" height= "50px" /></a> &nbsp; Github Activity
        </span>
      <div className="pl-10 pt-10 pb-10 flex align-middle text-white">
        <GitHubCalendar
          username="vincent7564"
          blockMargin={10}
          blockRadius={2}
          blockSize={16}
          showWeekdayLabels={true}
          colorScheme="light"
          
        />
      </div>
    </div>
  );
};

export default Calendar;

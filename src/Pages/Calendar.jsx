import GitHubCalendar from "react-github-calendar";

const Calendar = () => {
  return (
    <div>
        <span className="flex pt-10 align-middle text-2xl">
        Github Activity
        </span>
      <div className="pl-10 pt-10 flex align-middle">
        <GitHubCalendar
          username="vincent7564"
          blockMargin={10}
          blockRadius={2}
          blockSize={16}
        />
      </div>
    </div>
  );
};

export default Calendar;

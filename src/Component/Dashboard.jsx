import AnchorLink from 'react-anchor-link-smooth-scroll';
const Dashboard = () => {
  return (
    <div>
      <div class="grid grid-rows-3 grid-flow-col gap-4 align-middle">
        <div class="row-span-3 text-white text-center">
            <span className="text-5xl align-middle pt-20">Vin Cent</span>
            <span className="text-5xl align-middle pt-5">Software Engineer</span>
            <span className="text-xl align-middle pt-8">Hi, I'm Vin Cent. I'm a Web Developer. I'm currently just graduated from University!</span>
            <span className="text-xl align-middle pt-4">I love code and learn about IT Development also explore new repository in Github</span>
            <span className="text-xl align-middle pt-4">Other than that, I love to Gaming and Travelling</span>
            <span className="text-xl align-middle pt-4">As a Developer, I have 1 years of Experience as a Fullstack Developer on IT Consultant Company</span>
        </div>
        <div class="col-span-2 ..."></div>
        <div class="row-span-2 col-span-2 ..."></div>
      </div>
      <div class="bottom-0 right-0">
        <AnchorLink href='#home'>
            <button class="bg-sky-400 text-white py-2 px-4 rounded-lg mb-10 mr-10 fixed bottom-0 right-0">
                Scroll to Top
            </button>
        </AnchorLink>
    </div>
    </div>
  );
};

export default Dashboard;

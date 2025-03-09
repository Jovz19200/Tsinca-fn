
// const Stack = require('@mui/material')

const Link = require("react-router-dom")

const HeroSection = () => {
  return (
    <div
      className="flex w-[98%] min-h-[300px] sm:min-h-[554px] h-full py-2 rounded-md relative mx-auto ss "
      data-testid="hero-section"
    >
      <div className="absolute left-[40px] top-1/2 transform -translate-y-1/2 space-y-4">
        <h1 className="sm:text-[48px] text-[30px] font-bold text-white md:max-w-[60%]">
          Your Organization Training Management System
        </h1>
      </div>
    </div>
  );
};

module.exports = HeroSection;
const {useEffect }  = require('react');
const { useLocation, useNavigationType } = require('react-router-dom');

const SmoothScroll = ({ children }) => {
  const location = useLocation();
  const navType = useNavigationType();
  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location, navType]);
  return <div>{children}</div>;
};
module.exports =  SmoothScroll;
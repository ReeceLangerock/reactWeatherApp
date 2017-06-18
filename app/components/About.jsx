var React = require("react");
var {Link} = require("react-router");

var About = props => {
  return (
    <div>

      <div>
        <h1 className="text-center">About</h1>
        <p>
          This is a Weather App built in React following Andrew Mead's Udemy React Course.</p><p> Check out the course
          {" "}
          <Link to="https://www.udemy.com/the-complete-react-web-app-developer-course">
            Here
          </Link>
          {" "}
        </p>

        <p>
          Check out the GitHub repo
          {" "}
          <Link to="https://github.com/ReeceLangerock/reactWeatherApp">
            Here
          </Link>
          {" "}
        </p>
      </div>
    </div>
  );
};

module.exports = About;

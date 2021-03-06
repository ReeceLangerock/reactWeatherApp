var React = require("react");
var {Link} = require("react-router");


var Example = props => {
  return (
    <div>
      <h1 className="text-center page-title" >Example</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Chicago'>Chicago</Link>
        </li>
        <li>
          <Link to='/?location=Berlin'>Berlin</Link>

        </li>
        <li>
          <Link to='/?location=Tokyo'>Tokyo</Link>

        </li>

      </ol>
    </div>
  );
};

module.exports = Example;

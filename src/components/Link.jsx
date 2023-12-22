import "/src/styles/Link.css";
import PropTypes from 'prop-types';
function Link(props) {
  return (
    <div className="link-container">
      <a className="social-link" href={props.socialurl} target="blank">
        {props.sitename}
      </a>
    </div>
  );
}

Link.propTypes = {
  socialurl: PropTypes.string.isRequired,
  sitename: PropTypes.string.isRequired
};

export default Link;

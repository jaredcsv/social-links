import "/src/styles/Link.css";
import PropTypes from 'prop-types';
function Link(props) {
  return (
    <a className="social-link" href={props.socialurl} target="blank">
      <div className="link-container" >
        {props.sitename}
      </div>
    </a>
  );
}

Link.propTypes = {
  socialurl: PropTypes.string.isRequired,
  sitename: PropTypes.string.isRequired
};

export default Link;

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import "./index.css";

const Card = ({ name, population }) => (
  <>
    <div data-testid="card" className="card">
      <div className="card-row">
        <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" />
        <div className="card-col">
          <p data-testid="cityname" className="city">
            {name} Weather
          </p>
          <p data-testid="population" className="population">
            {population} people
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Card;


Card.propTypes = {
  name: PropTypes.string,
  population: PropTypes.string,
};

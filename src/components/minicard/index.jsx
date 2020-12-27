import moment from "moment";
import PropTypes from "prop-types";
import "./index.css";

const MiniCard = ({ datetime, iconcode, temperature }) => {
  return (
    <div className="minicard">
      <p className="date">{moment.unix(datetime).format("ll")}</p>
      <div className="cloud-icon">
        <img
          alt={iconcode}
          src={`http://openweathermap.org/img/wn/${iconcode}@2x.png`}
        />
      </div>
      <p className="temperature">{temperature} &#176;</p>
    </div>
  );
};

export default MiniCard;

MiniCard.propTypes = {
  datetime: PropTypes.number,
  iconcode: PropTypes.string,
  temperature: PropTypes.number,
};

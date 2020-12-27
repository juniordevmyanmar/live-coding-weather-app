import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.css'

const Status = ({ icon, data, unit }) => (
  <div data-testid="status" className="flex px-6">
    <FontAwesomeIcon icon={icon} className="px-2" style={{ color: '#374151' }} />
    <p className="m-0 text-gray-800">
      {data}&nbsp;{unit}
    </p>
  </div>
)

export default Status

Status.propTypes = {
  icon: PropTypes.object,
  data: PropTypes.number,
  unit: PropTypes.string,
}

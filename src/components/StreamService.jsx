import PropTypes from 'prop-types';
import { GET_IMG } from '../store/vars';

const StreamService = ({ data }) => {
  return (
    <div className="stream">
      <h3>Watch on these services</h3>
      <div className="stream-content">
        {data.networks.map((serv) => (
          <div key={serv.id} className="stream-content__item">
            <img src={GET_IMG + 'w45' + serv.logo_path} />
            <p>{serv.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

StreamService.propTypes = {
  data: PropTypes.object.isRequired,
};

export default StreamService;

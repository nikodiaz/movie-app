import PropTypes from 'prop-types';
import Youtube from 'react-youtube';

const Trailer = ({ youtubeTrailer, playing, setPlaying }) => {
  return (
    <>
      {playing && (
        <section className="detail-trailer">
          <Youtube
            className="trailer"
            videoId={youtubeTrailer[0].key}
            key={youtubeTrailer[0].id}
            containerClassName={'youtube-container amru'}
            opts={{
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 1,
                controls: 0,
                cc_load_policy: 0,
                fs: 0,
                iv_load_policy: 0,
                modestbranding: 0,
                rel: 0,
                showinfo: 0,
              },
            }}
          />
          <button onClick={() => setPlaying(false)} className="play close">
            Close
          </button>
        </section>
      )}
    </>
  );
};

Trailer.propTypes = {
  youtubeTrailer: PropTypes.array,
  playing: PropTypes.bool,
  setPlaying: PropTypes.func,
};

export default Trailer;

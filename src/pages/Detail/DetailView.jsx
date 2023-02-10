import Hero from '../../components/Hero';
import PropTypes from 'prop-types';
import Cast from '../../components/Cast';
import Trailer from '../../components/Trailer';
import { useState } from 'react';
import Description from '../../components/Description';
import Layout from '../../components/Layout/Layout';

function DetailView({ movie, cast, youtubeTrailer }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="detail">
      <Layout>
        <section className="detail-description">
          <div className="detail-description__overview">
            <Hero data={movie}>
              <Description data={movie} setPlaying={setPlaying} />
            </Hero>

            {/* <---- TRAILER ----> */}
            {youtubeTrailer.length > 0 ? (
              <Trailer
                youtubeTrailer={youtubeTrailer}
                playing={playing}
                setPlaying={setPlaying}
              />
            ) : null}
            {/* <---- CAST ----> */}
            {cast.length > 0 ? <Cast cast={cast} /> : null}
          </div>
        </section>
      </Layout>
    </div>
  );
}

DetailView.propTypes = {
  movie: PropTypes.object.isRequired,
  cast: PropTypes.array.isRequired,
  youtubeTrailer: PropTypes.array.isRequired,
};

export default DetailView;

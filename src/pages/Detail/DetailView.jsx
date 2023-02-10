import Hero from '../../components/Hero';
import PropTypes from 'prop-types';
import Cast from '../../components/Cast';
import Trailer from '../../components/Trailer';
import { useState } from 'react';
import Description from '../../components/Description';
import Layout from '../../components/Layout/Layout';
import List from '../../components/List';
import Card from '../../components/Card';

function DetailView({ movie, cast, youtubeTrailer, similar }) {
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
            <List title="Similar">
              {similar &&
                similar.map((item) => <Card key={item.id} data={item} />)}
            </List>
          </div>
        </section>
      </Layout>
    </div>
  );
}

DetailView.propTypes = {
  movie: PropTypes.object.isRequired,
  cast: PropTypes.array.isRequired,
  similar: PropTypes.array,
  youtubeTrailer: PropTypes.array.isRequired,
};

export default DetailView;

import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
    album: PropTypes.object.isRequired,
};


function Album({ album }) {

    return (
        <div className="album" >
            <div className="album__thumbnail" >
                <img src={album.img} />
            </div>
            <div className="album__title" >
                <h3>{album.title}</h3>

            </div>
        </div >
    );
}

export default Album;
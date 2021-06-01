import React from 'react';
import PropTypes from 'prop-types';
import "./index.scss";
import Album from '../Album';
AlbumList.propTypes = {
    _AlbumList: PropTypes.array
};
AlbumList.defaultProps = {
    _AlbumList: []
};


function AlbumList({ _AlbumList }) {

    return (
        <div>
            <h1>Xin chào</h1>
            {
                _AlbumList.map(album => (
                    <div key={album.id} className="list-of-album">
                        <Album album={album} />
                    </div>
                ))
            }

        </div >
    );
}

export default AlbumList;
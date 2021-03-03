import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Album from '../Album';

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AlbumList({ albumList }) {
    console.log(albumList);
    return (    
        <ul className="album-list">
            {albumList.map(album => (
                <li key={album.id}>
                    <Album album={album}/>
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;
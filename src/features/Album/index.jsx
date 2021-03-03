import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';
import './style.scss';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc thịnh hành',
            thumbnaiUrl:'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/f/d/b/1/fdb16f040f87300969fbe291303d8120.jpg'
        },
        {
            id: 2,
            name: 'Nhạc việt',
            thumbnaiUrl:'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/b/c/5/9bc565601c8b71b99c9bde9f88922a05.jpg'
        },
        {
            id: 3,
            name: 'Nhạc trữ tình',
            thumbnaiUrl:'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/d/2/f/c/d2fc5d3c4627fc52220de11e07153e0f.jpg'
        }
    ];
    return (
        <div>
            <h3 className="catory__name">Bạn có thể thích?</h3>
            <AlbumList albumList = {albumList}/>
        </div>
    );
}

export default AlbumFeature;
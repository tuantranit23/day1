import React from 'react';
import AlbumList from './components/AlbumList';
AlbumFeture.propTypes = {

};

function AlbumFeture(props) {
    const list = [
        {
            id: 11,
            img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/3/e/6/53e6ea1c2937cf64632b30ea801b4975.jpg',
            title: 'Mình chỉ là bạn thôi'
        },
        {
            id: 22,
            img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/5/0/3/e503462c5f376ec69840ea3d8af07718.jpg',
            title: 'Yêu thương ngày đó'
        },
        {
            id: 33,
            img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/4/3/6/c/436c1b2337b77e373dee6344c917c50a.jpg',
            title: 'Hôm nay tôi cô đơn'
        },
        {
            id: 44,
            img: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/f/a/0/6fa057bf9204516bc4148a0bc947be82.jpg',
            title: 'Sài gòn đau lòng quá'
        }

    ]
    return (
        <div>
            <AlbumList _AlbumList={list} />
        </div>
    );
}

export default AlbumFeture;
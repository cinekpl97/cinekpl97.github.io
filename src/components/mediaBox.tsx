import React from 'react';
import Media from 'react-bootstrap/Media'
import Image from 'react-bootstrap/Image'
import '../custom.css'
import Icon from '../iconForText.png'

export default function MediaBox(): JSX.Element {
    return (
        <Media className='mediabox'>
            <Image
                src={Icon}
                roundedCircle
                width={90}
                height={90}
                className="mediaBoxImage"
            ></Image>
            <Media.Body className="mediaBoxBody">
                <h5>Media Heading</h5>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus.ddddddddddddddddddddddddddddddddd
                    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff    
                </p>
            </Media.Body>
        </Media>
    );
}


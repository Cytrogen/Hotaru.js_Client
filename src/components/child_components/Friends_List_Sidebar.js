import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

import imgURL from './static/avatar.png';

import '../style.css';

const FriendsListSidebar = () => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);

    return (
        <div
            style={{
                width: '240px',
                height: "100vh",
                backgroundColor: 'rgba(43, 45, 49)'
            }}
        >
            <Container>
                <Row xs='1' className='align-items-center' style={{ color: '' }}>
                    <Col>
                        <h2
                            className='unfocused-text-color'
                            style={{
                                fontSize: '12px',
                                padding: '18px 8px 4px 18px'
                            }}
                        >
                            Private Messages
                        </h2>
                    </Col>
                    <Col className='d-flex flex-row'>
                        <div
                            className='rounded-1'
                            style={{
                                width: '100%',
                                backgroundColor: isHover ? 'rgba(53, 55, 60)' : 'rgba(43, 45, 49)'
                            }}
                            onMouseEnter={ handleMouseEnter }
                            onMouseLeave={ handleMouseLeave }
                        >
                            <a
                                className='unfocused-text-color'
                                style={{
                                    textDecoration: 'none',
                                }}
                                href='/channels/@me'
                            >
                                <div className='m-2'>
                                    <img
                                        className='rounded-circle'
                                        style={{
                                            width: '32px',
                                            height: '32px',
                                            marginRight: '12px'
                                        }}
                                        src={imgURL}
                                    />
                                    <span>Dummy</span>
                                </div>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FriendsListSidebar;

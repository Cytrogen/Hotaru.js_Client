import { useState } from 'react';

import { Container, Row, Col } from 'reactstrap';
import { Icon } from '@iconify/react';

import imgURL from '../static/avatar.png';

const FriendsListSidebar = () => {
    const [hoverStates, setHoverStates] = useState({});

    const updateHoverState = (item, isHovered) => {
        setHoverStates(prev => ({ ...prev, [item]: isHovered }));
    }

    return (
        <div style={{ width: '240px', height: "100vh", backgroundColor: 'rgba(43, 45, 49)' }}>
            <Container>
                <Row xs="1" className="align-items-center">
                    <Col className="mb-3">
                        <a href="/channels/@me" className="d-flex flex-row rounded-1" style={{ color: 'rgba(128, 133, 142)', textDecoration: 'none', padding: '18px 8px 4px 8px' }}>
                            <Icon icon="game-icons:three-friends" style={{ color: 'rgba(148, 155, 164)', fontSize: '28px' }} />
                            <span className="mx-3">Friends</span>
                        </a>
                    </Col>

                    <Col>
                        <h2 style={{ fontSize: '12px', padding: '18px 8px 4px 18px', color: 'rgba(128, 133, 142)' }}>Private Messages</h2>
                    </Col>

                    <Col className="d-flex flex-row">
                        <div
                            className="rounded-1"
                            onMouseEnter={ () => updateHoverState('online', true) }
                            onMouseLeave={ () => updateHoverState('online', false) }
                            style={{ width: '100%', backgroundColor: hoverStates['online'] ? 'rgba(53, 55, 60)' : 'rgba(43, 45, 49)' }}
                        >
                            <a style={{ color: 'rgba(128, 133, 142)', textDecoration: 'none' }} href="/channels/@me/dummy">
                                <div className="m-2">
                                    <img className="rounded-circle" style={{ width: '32px', height: '32px', marginRight: '12px' }} src={ imgURL } />
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

import { Container, Row, Col } from 'reactstrap';
import { Icon } from '@iconify/react';

import '../style.css';
import {useState} from "react";

const Chat = () => {
    const [isHover, setIsHover] = useState(false);

    const tabBarStyle = {
        backgroundColor: isHover ? 'rgba(57, 60, 65)' : 'rgba(49, 51, 56)'
    };

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);

    return (
        <Container className='mx-0'>
            <Row xs='1'>
                <Col
                    style={{
                        height: '48px',
                        padding: '8px',
                        fontSize: '16px',
                        borderBottom: 'solid 3px rgba(45, 47, 52)'
                    }}
                >
                    <div
                        className='d-flex flex-row align-items-stretch align-items-center text-center'
                        style={{ minHeight: '32px' }}
                    >
                        <div className='d-flex flex-row align-items-center'>
                            <Icon
                                icon='ls:friend'
                                className='mx-2'
                                style={{ fontSize: '24px', color: 'rgba(128, 132, 142)' }}
                            />
                            <span className='fw-bold text-white mx-2'>Friends</span>
                            <span
                                className='mx-2'
                                style={{
                                    width: '1px',
                                    height: '24px',
                                    backgroundColor: 'rgba(63, 65, 71)'
                                }}
                            />
                        </div>
                        <div className='d-flex flex-row align-items-center' style={{ color: 'rgba(128, 132, 142)' }}>
                            <span className='px-2 mx-2' style={ tabBarStyle } onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>Online</span>
                            <span className='px-2 mx-2' style={ tabBarStyle } onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>All</span>
                            <span className='px-2 mx-2' style={ tabBarStyle } onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>Pending</span>
                            <span className='px-2 mx-2' style={ tabBarStyle } onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>Blocked</span>
                            <span className='text-white rounded-2' style={{ padding: '2px 8px', margin: '0px 8px', backgroundColor: 'rgba(36, 128, 70)' }}>Add Friend</span>
                        </div>
                    </div>
                </Col>
                <Col className='d-flex flex-column' style={{ height: '100vh', borderRight: 'solid 3px rgba(63, 65, 71)' }}>
                    <div className='rounded-2 mt-3 ms-3 me-2 px-3 py-2' style={{ color: 'rgba(148, 155, 164)', backgroundColor: 'rgba(30, 31, 34)', fontSize: '16px' }}>
                        Search
                        <Icon icon="mingcute:search-2-line" className='float-end text-white fs-4'/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Chat;

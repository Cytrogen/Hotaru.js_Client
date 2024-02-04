import { Container, Row, Col } from 'reactstrap';

import FriendsTabbar from "./Friends_Tabbar";
import ActiveFriendsList from "./Active_Friends_List";
import ActiveEventsSection from "./Active_Events_Section";
import FriendsListSideBar from "../private_message_common/Friends_List_Sidebar";

const PrivateMessageHomepage = () => {
    return (
        <>
            <FriendsListSideBar />
            <Container fluid className="mx-0">
                <Row xs="1">
                    <Col className="d-flex flex-row justify-content-between" style={{ height: '48px', padding: '8px', fontSize: '16px', borderBottom: 'solid 3px rgba(45, 47, 52)' }}>
                        <FriendsTabbar />
                    </Col>

                    <Col className="d-flex flex-row">
                        <ActiveFriendsList />
                        <ActiveEventsSection />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PrivateMessageHomepage;

import { Container, Row, Col } from "reactstrap";

import FriendsListSideBar from "../private_message_common/Friends_List_Sidebar";
import PrivateMessageTabbar from "./Private_Message_Tabbar";

const PrivateMessageChatpage = () => {
    return (
        <>
            <FriendsListSideBar />
            <Container fluid className="mx-0">
                <Row xs="1">
                    <Col className="d-flex flex-row justify-content-between" style={{ height: '48px', padding: '8px', fontSize: '16px', borderBottom: 'solid 3px rgba(45, 47, 52)' }}>
                        <PrivateMessageTabbar />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PrivateMessageChatpage;

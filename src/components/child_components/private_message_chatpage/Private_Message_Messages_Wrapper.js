import { Container, Row, Col } from "reactstrap";

const PrivateMessageMessagesWrapper = () => {
    return (
        <Container className="p-0">
            <Row xs="1">
                <Col>
                    <ol style={{ minHeight: '0', overflow: 'hidden', listStyle: 'none' }}>
                        <li className="position-relative" style={{ outline: 'none' }}>sk</li>
                    </ol>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default PrivateMessageMessagesWrapper;

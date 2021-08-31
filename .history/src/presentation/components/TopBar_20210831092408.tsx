import { Container, Navbar } from "react-bootstrap";

const TopBar = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home"><span className="text-success">i</span>NVENTORY</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Stores Manager</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopBar;
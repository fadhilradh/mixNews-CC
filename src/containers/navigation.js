import { Nav } from "../components";

export default function NavContainer() {
   return (
      <Nav>
         <Nav.Wrapper>
            <Nav.Link color="#C82828">Home</Nav.Link>
            <Nav.Link color="#6AA0DC">Business</Nav.Link>
            <Nav.Link color="#BE82B9">Health</Nav.Link>
            <Nav.Link color="#c39b41">Sports</Nav.Link>
            <Nav.Link color="#78aa6e">Technology</Nav.Link>
         </Nav.Wrapper>
      </Nav>
   );
}

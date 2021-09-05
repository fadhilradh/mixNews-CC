import { Container, Wrapper, Link } from "./nav.style";

export default function Nav({ children, ...restProps }) {
   return <Container {...restProps}>{children}</Container>;
}

Nav.Wrapper = function NavWrapper({ children, ...restProps }) {
   return <Wrapper {...restProps}>{children}</Wrapper>;
};

Nav.Link = function NavLink({ children, ...restProps }) {
   return <Link {...restProps}>{children}</Link>;
};

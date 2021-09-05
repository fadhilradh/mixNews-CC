import {
   Background,
   Logo,
   Title,
   Wrapper,
   Divider,
   Subtitle,
   Row,
} from "./header.style";

export default function Header({ children, ...restProps }) {
   return <Background {...restProps}>{children}</Background>;
}

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
   return <Wrapper {...restProps}>{children}</Wrapper>;
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
   return <Logo {...restProps}>{children}</Logo>;
};

Header.Title = function HeaderTitle({ children, ...restProps }) {
   return <Title {...restProps}>{children}</Title>;
};

Header.Subtitle = function HeaderSubtitle({ children, ...restProps }) {
   return <Subtitle {...restProps}>{children}</Subtitle>;
};

Header.Divider = function HeaderDivider({ children, ...restProps }) {
   return <Divider {...restProps}>{children}</Divider>;
};

Header.Row = function HeaderRow({ children, ...restProps }) {
   return <Row {...restProps}>{children}</Row>;
};

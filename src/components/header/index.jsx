import { Backround, Wrapper } from "./styles/header"

 function Header({children, ...restProps}) {
  return (
    <Backround {...restProps}>
      {children}
    </Backround>
  )
}

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
  return  (
    <Wrapper {...restProps}>
      {children}
    </Wrapper>
  )
}



export default Header



import { useState } from "react";
import { Header } from "../components";
import NavContainer from "./navigation";

export default function HeaderContainer() {
   const [dividerColor, setDividerColor] = useState("#494D58");
   const [selectedTopic, setSelectedTopic] = useState("all");
   return (
      <>
         <Header>
            <Header.Wrapper>
               <Header.Logo>
                  <Header.Row>
                     <Header.Title color="#494D58">MIX</Header.Title>
                     <Header.Title color="#E09B1B">News</Header.Title>
                  </Header.Row>

                  <Header.Subtitle>by Fadhil Radhian</Header.Subtitle>
               </Header.Logo>

               <NavContainer />
            </Header.Wrapper>

            <Header.Divider color={dividerColor} />
         </Header>
      </>
   );
}

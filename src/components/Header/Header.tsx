import { Dropdown } from "../Dropdown";
import {
  Container,
  HamburguerContainer,
  Info,
  Main,
  MobileContainer,
  Title,
  WebContainer,
} from "./Header.styles";
import { theme } from "../..";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";
import { DropdownContent } from "../DropdownContent/DropdownContent";
import { ChooseGroup } from "../ChooseGroup/ChooseGroup";
import { GroupProducts } from "../GroupProducts/GroupProducts";
import { SideBar } from "../SideBar/SideBar";
import { useState } from "react";
import { SearchOutlined } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    {
      title: "test test test test test",
    },
    {
      title: "test",
    },
    {
      title: "test",
    },
  ];
  return (
    <>
      <Container>
        <WebContainer>
          <h1>STICKER IT</h1>
          <Main>
            <DropdownContent title="stickers">
              <GroupProducts />
            </DropdownContent>
            <DropdownContent title="labels">
              <GroupProducts />
            </DropdownContent>
            <Title>create a design</Title>
            <DropdownContent title="help me choose">
              <ChooseGroup />
            </DropdownContent>
            <Title>reorder</Title>
          </Main>
          <Info>
            <Dropdown dropdownType="second" items={items} title="support" />
            <Dropdown dropdownType="second" items={items} title="support" />
            <PersonIcon className="icon" />
            <SearchOutlined className="icon" />
            <ShoppingBagIcon className="icon" />
          </Info>
        </WebContainer>
      </Container>
      <MobileContainer>
        <HamburguerContainer onClick={() => setIsOpen(true)}>
          <MenuIcon className="hamburguer" />
        </HamburguerContainer>
        <h1>STICKER IT</h1>
        <ShoppingBagIcon className="bag" />
        {isOpen ? <SideBar setIsOpen={setIsOpen} /> : null}
      </MobileContainer>
    </>
  );
};

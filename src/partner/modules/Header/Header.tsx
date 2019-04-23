import React from "react";
import { NavLink } from "react-router-dom";
import {
  HeaderContainer,
  HeaderLogoContainer,
  Logo,
  HeaderTitleContainer,
  Title,
  HeaderUserImgContainer,
  UserImg,
} from "src/partner/modules/ui";

export interface IHeaderProps {
  title: string;
  user?: boolean;
}

export const Header: React.FC<IHeaderProps> = ({ title, user }) => {
  return (
    <header>
      <HeaderContainer user={user}>
        <HeaderLogoContainer>
          <Logo src={require("../../../images/poc-chef-logo.png")} alt="Poc-Chef" />
        </HeaderLogoContainer>
        <HeaderTitleContainer>
          <Title>{title}</Title>
        </HeaderTitleContainer>
        <HeaderUserImgContainer>
          <NavLink to="/user/profile">
            <UserImg src={require("../../../images/person.png")} alt="Poc-Chef" />
          </NavLink>
        </HeaderUserImgContainer>
      </HeaderContainer>
    </header>
  );
};

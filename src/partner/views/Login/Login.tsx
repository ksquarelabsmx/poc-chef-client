import React, { useContext } from "react";
import { loginService } from "src/common/services";
import { RouteComponentProps } from "react-router-dom";
import { NotificationContext } from "src/providers";
import { MainDivContainer } from "src/common/ui/MainDivContainer";
import { WrapperDiv, ImgIcon } from "src/partner/modules/ui/Login";
import { LoginEmailForm } from "./LoginEmailForm";
import { currentEventsRoute } from "src/partner/routes";
import { LogoTitle } from "src/common/ui/LogoTitle";

export const Login: React.FC<RouteComponentProps> = props => {
  const notificationContext = useContext(NotificationContext.NotificationContext);

  if (loginService.isUserLogged()) {
    props.history.push(currentEventsRoute);
    return null;
  }

  return (
    <MainDivContainer partner={true}>
      <WrapperDiv>
        <LogoTitle />
        <ImgIcon height="35px" width="38px" src={require("src/images/group.svg")} />
        <LoginEmailForm
          {...props}
          handleShowNotification={notificationContext.handleShowNotification}
        />
        <ImgIcon height="53px" width="64px" src={require("src/images/group-2.svg")} />
      </WrapperDiv>
    </MainDivContainer>
  );
};

import React from "react";
import styled from "styled-components";
import DefaultLayout from '../components/layout/DefaultLayout';
import Container from "../components/common/Container";
import LoginForm from "../components/auth/LoginForm";

const StyledLoginBox = styled.div`
  background-color: white;
`;

const StyledLoginContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding-block: 48px;
`;



const LoginPage = () => {
  return (
    <DefaultLayout>
      <StyledLoginBox>
        <StyledLoginContainer>
          <div>
            <img width="480" alt="img" src="https://picsum.photos/id/43/400/300"></img>
          </div>
          <div>
            <LoginForm></LoginForm>
          </div>
        </StyledLoginContainer>
      </StyledLoginBox>
    </DefaultLayout>);
}

export default LoginPage;
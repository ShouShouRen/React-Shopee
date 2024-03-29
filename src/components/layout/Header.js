import React, { useContext } from "react";
import Container from "../common/Container";
import { styled } from "styled-components";
import Logo from "../../images/logo.png";
import { Input } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import AuthContext from "../auth/AuthContext";

const StyledHeader = styled.header`
  background-color: #d1011c;
  width: 100vw;
  padding-block: 16px;
`;

const StyledHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigator = styled.div`
  a {
    margin-inline: 4px;
    color: white;
    text-decoration: none;
  }
`;

const Toolbar = styled.div`
  display: flex;
  color: white;
  cursor: pointer;
  a {
    margin-inline: 6px;
    text-decoration: none;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderSection>
          <Navigator>
            <a href="#!">蝦皮購物</a>
            <a href="#!">下載</a>
            <a href="#!">追蹤我們</a>
            <a href="#!">部落格</a>
          </Navigator>
          <Toolbar>
            <a href="#!">通知</a>
            <a href="#!">幫助中心</a>
            {isAuthenticated ? (
              <div>
                <a href="#!">Peter</a>
                <span onClick={() => logout()}>登出</span>
              </div>
            ) : (<Link to="/login">登入/註冊</Link>)}
          </Toolbar>
        </StyledHeaderSection>
        <StyledHeaderSection>
          <Link to="/">
            <img src={Logo} alt="logo" height={48} width={180} />
          </Link>
          <Box>
            <Input.Search style={{ marginRight: 8 }} placeholder="在商城搜尋 " onSearch={(value) => console.log(value)} enterButton></Input.Search>
            <Link to="/cart">
              <ShoppingCartOutlined style={{ fontSize: 32, color: 'white' }} />
            </Link>
          </Box>
        </StyledHeaderSection>
      </Container>
    </StyledHeader>
  );
}

export default Header;

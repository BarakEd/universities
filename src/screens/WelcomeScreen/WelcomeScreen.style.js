import styled from 'styled-components';
import homepage from '../../assets/homepage.svg';
import { TextField, Button } from '@material-ui/core';

const ScreenWrapper = styled.div`
height: calc(100% - 60px);
width: 100%;
flex-direction: row-reverse;
display: flex;  
`;

const ImageWrapper = styled.img.attrs({
  src: homepage,
  alt: "",
})`
height: 100%;
width: 50%;
`;

const LoginWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginInput = styled(TextField).attrs({
  variant: 'outlined',
})``;

const LoginText = styled.h3``;

const InputWrapper = styled.div`
  height: 25%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const LoginButton = styled(Button).attrs({
  variant: 'contained',
  color: 'primary',
})`
    height: 56px;
    text-transform: none;
    text-decoration: none;
`;

const styles = {
  ScreenWrapper,
  ImageWrapper,
  LoginWrapper,
  LoginText,
  LoginInput,
  InputWrapper,
  LoginButton,
}

export default styles;
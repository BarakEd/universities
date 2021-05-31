import styled from 'styled-components';
import { Button } from '@material-ui/core';

const Container = styled.div`
height: 165px;
width: 100%;
display: flex;  
justify-content: center;
align-items: center;
`;

const SearchWrapper = styled.div`
height: 100%;
width: 50%;
display: flex;  
flex-direction: column;
justify-content: center;
>div{
  height: 48px;    
  align-items: center;
  display: flex;
  border-radius: 4px 0px 0px 4px;
}
`;

const SearchButton = styled(Button).attrs({
  color: "primary",
  variant: "contained",
})`
.MuiButton-root.MuiButton-containedPrimary {
}
  border-radius: 0px 4px 4px 0px;
  height: 50px;
`;

const styles = {
  Container,
  SearchWrapper,
  SearchButton,
}

export default styles;
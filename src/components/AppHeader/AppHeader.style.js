import styled from 'styled-components';

const Header = styled.div`
display: flex;
justify-content: space-between;
height: 60px;
width: 100%;
background-color: #0277bd;
`;

const NameWrapper = styled.div`
    padding: 0 30px;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
`;

const styles = {
  Header,
  NameWrapper,
}

export default styles;
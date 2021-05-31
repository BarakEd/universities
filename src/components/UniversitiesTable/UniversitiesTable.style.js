import styled from 'styled-components';
import { CircularProgress, IconButton, TableCell, TableRow } from '@material-ui/core';

const TableContainer = styled.div`
height: calc(100% - 200px);
width: 100%;
display: flex;  
justify-content: center;
align-items: center;
`;

const TableWrapper = styled.div`
height: 100%;
width: 80%;
display: flex;  
flex-direction: column;
`;
const StyledIconButton = styled(IconButton).attrs({
})`
  padding: 5px;
`;

const Loader = styled(CircularProgress)`
    position: absolute; 
 `;

const HeaderTableCell = styled(TableCell)`
  font-size: 18px !important;
  font-weight: 600 !important;
  /* padding: 6px 24px 6px 16px !important; */
`;

const BodyTableCell = styled(TableCell).attrs({})``;

const HeaderTableRow = styled(TableRow)`
  height: 60px;
`;

const NoResults = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
`;

const styles = {
  TableContainer,
  TableWrapper,
  Loader,
  StyledIconButton,
  HeaderTableCell,
  BodyTableCell,
  NoResults,
  HeaderTableRow,
}

export default styles;
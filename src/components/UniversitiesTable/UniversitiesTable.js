import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './UniversitiesTable.style';
import { Star, StarBorder } from '@material-ui/icons';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  headingCell:{
    fontSize: '20px',
    fontWeight: '600',
    padding: '5px',
  }
});

const UniversitiesTable = ({ onStarClick, isFetching, pinnedUniversity, universities }) => {
  const classes = useStyles();

  const renderTableRow = (row) => {
    const isPinned = pinnedUniversity === row?.name;
    const IconComponent = isPinned ? Star : StarBorder; 
    const iconColor = isPinned ? 'primary' : 'inherit'; 

    return (
      <TableRow className="HeaderTableRow" key={row?.name}>
        <styles.BodyTableCell className="BodyTableCell">{row?.name}</styles.BodyTableCell>
        <styles.BodyTableCell className="BodyTableCell">{row?.country}</styles.BodyTableCell>
        <styles.BodyTableCell className="BodyTableCell">{row['state-province']}</styles.BodyTableCell>
        <styles.BodyTableCell className="BodyTableCell">{row?.web_pages[0]}</styles.BodyTableCell>
        <styles.BodyTableCell className="BodyTableCell">
          <styles.StyledIconButton className="StyledIconButton" onClick={ () => onStarClick(row?.name) }>
            <IconComponent color={iconColor} />
          </styles.StyledIconButton>
        </styles.BodyTableCell>
      </TableRow>
    );
  }

  const renderTable = () => {
    return (
        <styles.TableWrapper className="TableWrapper" className="TableWrapper">
          <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="simple table">
              <TableHead>
                <styles.HeaderTableRow>
                  <styles.HeaderTableCell className="HeaderTableCell">Name</styles.HeaderTableCell>
                  <styles.HeaderTableCell className="HeaderTableCell">Country</styles.HeaderTableCell>
                  <styles.HeaderTableCell className="HeaderTableCell">State</styles.HeaderTableCell>
                  <styles.HeaderTableCell className="HeaderTableCell">Domain</styles.HeaderTableCell>
                  <styles.HeaderTableCell className="HeaderTableCell">Starred</styles.HeaderTableCell>
                </styles.HeaderTableRow>
              </TableHead>
              <TableBody>
                {universities?.map?.((row) => (renderTableRow(row)))}
              </TableBody>
            </Table>
          </TableContainer>
        </styles.TableWrapper>
    );
  }

  if(universities?.length === 0){
    return (
      <styles.NoResults className="NoResults">
        Results not found
      </styles.NoResults>
    )
  }

  return (
    <styles.TableContainer className="TableContainer">
      {isFetching ? <styles.Loader className="Loader" size={60}/> : renderTable()}
      </styles.TableContainer>
  )}

export default UniversitiesTable;
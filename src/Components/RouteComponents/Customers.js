import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import "bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  paper: {
    padding: 10,
    backgroundColor: "#7777",
  },
});

const Customers = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>
              <b>#ID</b>
            </TableCell>
            <TableCell>
              <b>First Name</b>
            </TableCell>
            <TableCell>
              <b>Last Name</b>
            </TableCell>
            <TableCell>
              <b>Email</b>
            </TableCell>
            <TableCell>
              <b>Phone</b>
            </TableCell>
            <TableCell>
              <b>Status</b>
            </TableCell>
            <TableCell>
              <b>Action</b>
            </TableCell>
          </TableHead>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Customers;

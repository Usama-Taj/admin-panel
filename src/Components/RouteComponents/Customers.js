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
import customers from "../../Data/customers";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import { IconButton } from "@material-ui/core";

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
  const cust = customers;
  return (
    <Paper className={classes.paper}>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="right">
                <b>#ID</b>
              </TableCell>
              <TableCell align="right">
                <b>First Name</b>
              </TableCell>
              <TableCell align="right">
                <b>Last Name</b>
              </TableCell>
              <TableCell align="right">
                <b>Email</b>
              </TableCell>
              <TableCell align="right">
                <b>Phone</b>
              </TableCell>
              <TableCell align="right">
                <b>Status</b>
              </TableCell>
              <TableCell align="right">
                <b>Action</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cust.map(
              ({ id, first_name, last_name, email, phone, status }, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {id}
                  </TableCell>
                  <TableCell align="right">{first_name}</TableCell>
                  <TableCell align="right">{last_name}</TableCell>
                  <TableCell align="right">{email}</TableCell>
                  <TableCell align="right">{phone}</TableCell>
                  <TableCell align="right">{status}</TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                      <ViewComfyIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Customers;

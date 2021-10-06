import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";

import { Link } from "react-router-dom";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@material-ui/core";

const OrderDetailTable = ({orderdetails, handleDelete }) => {
  //const { posts, handleDelete } = props;
  return (
    <TableContainer
      component={Paper}
      elevation={3}
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Sub Total</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderdetails.map((orderdetail) => (
            <TableRow key={orderdetail.quantity}>
              <TableCell component="th" scope="row">
                {orderdetail.quantity}
              </TableCell>
              <TableCell align="right">{orderdetail.quantity}</TableCell>
              <TableCell align="right">{orderdetail.subTotal}</TableCell>
              <TableCell align="right">
                <Box display="flex" flexDirection="row">
                  <IconButton color="primary" aria-label="update">
                    <Link to={`/update/${orderdetail.quantity}`}>
                      <UpdateIcon />
                    </Link>
                  </IconButton>

                  <IconButton color="secondary" aria-label="delete">
                    <DeleteIcon onClick={() => handleDelete(orderdetail.quantity)} />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderDetailTable;
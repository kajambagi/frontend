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

const BookOrderTable = ({bookorders, handleDelete }) => {
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
            <TableCell align="right">Order Id</TableCell>
            <TableCell align="right">Order Date</TableCell>
            <TableCell align="right">Order Total</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Shipping Address</TableCell>
            <TableCell align="right">Payment Method</TableCell>
            <TableCell align="right">Recipient Number</TableCell>
            <TableCell align="right">Recipient Phone</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookorders.map((bookorder) => (
            <TableRow key={bookorder.orderId}>
              <TableCell component="th" scope="row">
                {bookorder.orderId}
              </TableCell>
              <TableCell align="right">{bookorder.orderDate}</TableCell>
              <TableCell align="right">{bookorder.orderTotal}</TableCell>
              <TableCell align="right">{bookorder.status}</TableCell>
              <TableCell align="right">{bookorder.shippingAddress}</TableCell>
              <TableCell align="right">{bookorder.paymentMethod}</TableCell>
              <TableCell align="right">{bookorder.recipientName}</TableCell>
              <TableCell align="right">{bookorder.recipientPhone}</TableCell>
              <TableCell align="right">
                <Box display="flex" flexDirection="row">
                  <IconButton color="primary" aria-label="update">
                    <Link to={`/update/${bookorder.orderId}`}>
                      <UpdateIcon />
                    </Link>
                  </IconButton>

                  <IconButton color="secondary" aria-label="delete">
                    <DeleteIcon onClick={() => handleDelete(bookorder.orderId)} />
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

export default BookOrderTable;
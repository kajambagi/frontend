import React, { Component } from "react";
import { TextField, Button, Paper, Typography, Box } from "@material-ui/core";
import axios from "axios";

class UpdateBookOrder extends React.Component {
  state = {
    bookorder: {
        orderId: "",
        orderDate: "",
          orderTotal: "",
          status: "",
          shippingAddress: "",
          paymentMethod: "",
          recipientName: "",
          recipientPhone: "",
    },
  };
  componentDidMount() {
   /* axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ bookorder: res.data });
      })
      .catch((error) => console.log(error));*/
  }
  handleChange = (event) => {
    const bookorder = { ...this.state.bookorder };
    bookorder[event.target.name] = event.target.value;
    this.setState({ bookorder:bookorder });
    this.setState({ bookorder });
  };

  handleSubmit = (event) => {
    event.preventDefault();
   /* axios
      .put(
        `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`,
        this.state.post
      )
      .then((res) => {
        console.log(res.data);
        alert("Updated Post successfully!!");
        this.props.history.push("/posts");
      })
      .catch((error) => {
        console.log(error);
        return;
      })*/
  };

  render() {
    return (
      <div>
        <Typography variant="h3">Update BookOrder</Typography>

        <form
          style={{
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "30px",
          }}
          onSubmit={this.handleSubmit}
        >
          <Paper elevation={3} style={{ padding: "15px" }}>
            <TextField
              id="filled-basic"
              label="Order Id"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="orderId"
              value={this.state.post.userId}
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label="Order Date"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="OrderDate"
              value={this.state.post.id}
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label="Order Total"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="orderTotal"
              value={this.state.post.title}
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label="Status"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="status"
              value={this.state.post.body}
              onChange={this.handleChange}
            />
            <TextField
            id="filled-basic"
            label="Shipping Address"
            variant="standard"
            fullWidth
            style={{ marginBottom: "10px" }}
            name="shippingAddres"
            value={this.state.post.body}
            onChange={this.handleChange}
          />
          <TextField
              id="filled-basic"
              label="Payment Method"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="paymentMethod"
              value={this.state.post.body}
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label="Recipient Name"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="recipientName"
              value={this.state.post.body}
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label="Recipient Phone"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="recipientPhone"
              value={this.state.post.body}
              onChange={this.handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
            >
              update
            </Button>
          </Paper>
        </form>
      </div>
    );
  }
}

export default UpdateBookOrder;
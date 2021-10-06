import React, { Component } from "react";
import { TextField, Button, Paper, Typography, Box } from "@material-ui/core";
import axios from "axios";

class UpdateOrderDetail extends React.Component {
  state = {
    orderdetail: {
        quantity: "",
       subTotal: "",
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
    const orderdetail = { ...this.state.orderdetail };
    orderdetail[event.target.name] = event.target.value;
    this.setState({ orderdetail:orderdetail});
    this.setState({ orderdetail });
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
        <Typography variant="h3">Update OrderDetail</Typography>

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
              label="Quantity"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="quantity"
              value={this.state.orderdetail.quantity}
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label="Sub Total"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="subTotal"
              value={this.state.orderdetail.subTotal}
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

export default UpdateOrderDetail;
import React, { Component } from "react";
import { TextField, Button, Paper, Typography, Box } from "@material-ui/core";
//import axios from "axios";
import Joi from "joi-browser";

class AddBookOrder extends React.Component {
  state = {
  BookOrder: {
  orderDate: "",
	orderTotal: "",
	status: "",
	shippingAddress: "",
	paymentMethod: "",
	recipientName: "",
	recipientPhone: "",
  },
    errors: {},
    errMsg: "",
  };

  // schema to validate
  schema = {
	orderDate:Joi.number().min(1000).required(),
  OrderTotal: Joi.number().min(1000).required(),
	status: Joi.string().min(3).max(30).alphanum().required(),
  shippingAddress: Joi.string().min(3).max(30).alphanum().required(),
	paymentMethod: Joi.string().min(3).max(30).alphanum().required(),
	recipientName: Joi.string().min(3).max(30).alphanum().required(),
  recipientPhone: Joi.number().min(1000).required(),
  };

  handleChange = (event) => {
    // event.target.name - name of field
    // event.target.value - value entered by the user
    //this.setState({ [event.target.name]: event.target.value }); userId,id
    const bookorder = { ...this.state.bookorder };
    //post["userId"] = 1001;
    //post["id"] = 200;
    //post["title"] = "Post 200";
    //post.body = "Post 200 body";
    console.log(bookorder);
    //post[userId] = 100
    //post[]
    bookorder[event.target.name] = event.target.value;
    this.setState({ bookorder: bookorder });
    this.setState({ bookorder });
  };

  // form validation method
  validate = () => {
    const errors = {};
    // Validate account details with schema
    const result = Joi.validate(this.state.bookorder, this.schema, {
      abortEarly: false,
    });
    console.log(result);

    // Initialize error object with errors, if validate method returns errors
    if (result.error !== null) {
      for (let err of result.error.details) {
        errors[err.path[0]] = err.message;
      }
    }
    console.log(errors);
    // return null if no errors otherwise return errors
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // const post = {
    //   userId: this.state.userId,
    //   id: this.state.id,
    //   title: this.state.title,
    //   body: this.state.body,
    // };
    const errors = this.validate(); // null / errors
    // Set state error object with errors or empty object based on
    // errors return by the validate() method
    this.setState({ errors: errors || {} });
    // if errors exists in the form , return to the login page
    console.log(errors);

    if (errors) return;
    // axios
    //   .post("https://jsonplaceholder.typicode.com/posts", this.state.post)
    //   .then((res) => {
    //     console.log(res.data);
    //     alert("Added Post successfully!!");
    //     this.props.history.push("/posts");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     this.setState({ errMsg: error.response.data.message });
    //   });
  };
  render() {
    return (
      <div>
        <Typography variant="h3">Add BookOrder</Typography>
        {this.state.errMsg && (
          <div className="alert alert-danger" role="alert">
            {this.state.errMsg}
          </div>
        )}
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
              label="OrderDate "
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="orderDate "
              value={this.state.orderDate}
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.orderDate }
              </p>
            )}
            <TextField
              id="filled-basic"
              label="OrderTotal "
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="orderTotal "
              value={this.state.orderTotal }
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.orderTotal}
              </p>
            )}
            <TextField
              id="filled-basic"
              label="Status "
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="status"
              value={this.state.status}
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.status }
              </p>
            )}
            <TextField
              id="filled-basic"
              label="Shipping Address "
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="shippingAddress "
              value={this.state.shippingAddress }
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.shippingAddress }
              </p>
            )}
            <TextField
              id="filled-basic"
              label="Payment Method "
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="paymentMethod "
              value={this.state.paymentMethod }
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.paymentMethod}
              </p>
            )}
            <TextField
              id="filled-basic"
              label="Recipient Name "
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="recipientName "
              value={this.state.recipientName }
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.recipientName }
              </p>
            )}
            <TextField
              id="filled-basic"
              label="Recipient Phone "
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="recipientPhone "
              value={this.state.recipientPhone}
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.recipientPhone }
              </p>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Add
            </Button>
          </Paper>
        </form>
      </div>
    );
  }
}

export default AddBookOrder;
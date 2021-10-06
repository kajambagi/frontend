import React, { Component } from "react";

  import { Link } from "react-router-dom";

  import { Button, Container, Box } from "@material-ui/core";
  import axios from "axios";
  import OrderDetailTable from "./orderdetailtable";
  
  
  class OrderDetail extends React.Component {
    state = {
      orderdetails: [],
    };
    componentDidMount() {
      // axios
        //.get("https://jsonplaceholder.typicode.com/posts")
        //.then((response) => this.setState({ posts: response.data }))
        //.catch((error) => console.log(error));
    }
  
    handleDelete = (quantity) => {
      console.log(quantity);
   //  axios
        // .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        // .then((res) => {
        //   alert("Deleted post successfully!");
        //   console.log(res);
        //   const posts = this.state.posts.filter((p) => p.id == id);//1
        //   this.setState({ posts: posts });
        // })
        // .catch((error) => console.log(error));
    };
    render() {
      return (
        <div>
          <Container>
            <Box
              style={{ float: "right", marginTop: "20px", marginBottom: "10px" }}
            >
              <Link to="/addorderdetail" style={{ textDecoration: "none" }}>
                <Button variant="outlined" color="primary">
                  Add OrderDetail
                </Button>
              </Link>
            </Box>
            <OrderDetailTable
              orderdetails={this.state.orderdetails}
              handleDelete={this.handleDelete}
            />
          </Container>
        </div>
      );
    }
  }
  
  export default OrderDetail;
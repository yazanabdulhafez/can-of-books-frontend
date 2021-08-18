import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import {Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

class BestBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  componentDidMount = () => {
    // const { user } = this.props.auth0;
    const BooksUrl = `http://localhost:8000/books?email=fso361435@gmail.com`;
    // const myBooks = `${process.env.REACT_APP_SERVER_URL}/books?email=${user.email}`;
   let rwe =axios.get(BooksUrl)
    .then(response=>{
      console.log(response.data);
       this.setState({ 
      books: response.data 
    })

    }).catch(err => console.error(err));
    console.log(rwe);
   
  };
  render() {
    return (
      <>
        {this.state.books.length > 0 &&
          this.state.books.map((element,index) => {
            return (
             
              <Card key={index} style={{ width: "18rem",height: '10vw' }}>
                  <Card.Title style={{ backgroundColor: "#752435", color: "#E2BCB7", height: '4vw' }} as="li">
                    book Name:
                    {element.name}
                  </Card.Title>
                  <Card.Body>
                  <Card.Text>description: {element.description}</Card.Text>
                  <Card.Text>status: {element.status}</Card.Text>
                  </Card.Body>
              </Card>
              
            );
          })}
      </>
    );
  }
}

export default withAuth0(BestBook);
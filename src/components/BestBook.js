import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Card, ListGroup, Button, Container } from "react-bootstrap";
import BookFormModal from "./BookFormModal";
import UpdateForm from "./UpdateForm";

class BestBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddBookForm: false,
      books: [],
      name: "",
      description: "",
      status: "",
      showUpdate: false,
      index: 0,
    };
  }

  // componentDidMount = () => {
  //   if (this.props.auth0.isAuthenticated) {
  //     this.props.auth0.getIdTokenClaims()
  //       .then(result => {
  //         const jwt = result.__raw;
  //         const config = {
  //           headers: { "Authorization": `Bearer ${jwt}` },
  //           method: 'get',
  //           baseURL: process.env.REACT_APP_SERVER_URL,
  //           url: '/test'
  //         }
  //         axios(config)
  //           .then(axiosResults => console.log(axiosResults.data))
  //           .catch(err => console.error(err));
  //       })
  //       .catch(err => console.error(err));
  //   }
  // }
  componentDidMount = () => {

    const BooksUrl = `${process.env.REACT_APP_SERVER_URL}/books?email=${this.props.auth0.user.email}`;

    let rwe = axios.get(BooksUrl)
      .then(response => {
        console.log(response.data);
        this.setState({
          books: response.data
        })

      }).catch(err => console.error(err));
    console.log(rwe);

  };

  //////////*****************////////////////////////

  showAddBookForm = () => {
    this.setState({ showAddBookForm: !this.state.showAddBookForm, showUpdate: false });
  };
  closeAddBookForm = () => {
    this.setState({ showAddBookForm: false, showUpdate: false });
  };

  updateBookName = (e) => this.setState({ name: e.target.value });
  updateDiscOfBook = (e) => this.setState({ description: e.target.value });
  updateStatusOfBook = (e) => this.setState({ status: e.target.value });


  //////////*****************////////////////////////


  addBook = (e) => {
    e.preventDefault();
    const bodyData = {
      bookName: this.state.name,
      bookDescription: this.state.description,
      bookStatus: this.state.status,
      email: this.props.auth0.user.email,
    };
    axios.post(`${process.env.REACT_APP_SERVER_URL}/books`, bodyData).then((Response) => {
      this.setState({
        books: Response.data.books,
      });
    });
  };

  //////////*****************////////////////////////
  deleteBook = (index) => {

    const query = {
      email: this.props.auth0.user.email,
    };
    this.setState({
      showUpdate: false
    })
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/books/${this.state.books[index]._id}`, { params: query })
      .then((res) => {
        this.setState({
          books: res.data.books,
        });
      });
  };


  showUpdateForm = (idx) => {
    console.log(idx);
    this.setState({
      index: idx,
      showUpdate: !this.state.showUpdate,
    });
  };

  update = (e) => {
    e.preventDefault();
    console.log(e);
    const reqBody = {
      bookName: this.state.name,
      bookStatus: this.state.status,
      bookDescription: this.state.description,
      email: this.props.auth0.user.email,
    };
    console.log(this.state.index._id);
    console.log(reqBody);
    axios.put(`${process.env.REACT_APP_SERVER_URL}/books/${this.state.index}`, reqBody).then((response) => {
      this.setState({
        books: response.data.books
      });
    });
  };



  render() {
    return (
      <>
        <Button
          onClick={this.showAddBookForm}
          style={{ marginBottom: "30px", backgroundColor: "#465475", color: "white", border: "none" }}
        >
          ADD A NEW BOOK
        </Button>
        {this.state.showAddBookForm && (
          <BookFormModal
            closeAddBookForm={this.closeAddBookForm}
            addBook={this.addBook}
            updateBookName={this.updateBookName}
            updateDiscOfBook={this.updateDiscOfBook}
            updateStatusOfBook={this.updateStatusOfBook}
          />
        )}
        {this.state.showUpdate && (
          <UpdateForm
            update={this.update}
            updateBookName={this.updateBookName}
            updateDiscOfBook={this.updateDiscOfBook}
            updateStatusOfBook={this.updateStatusOfBook}
            books={this.state.books[this.state.index]}
          />
        )}
        <div style={{ display: "flex", flexWrap: "wrap",marginBottom:'20px'}}>
          {this.state.books.map((element, indx) => {
            return (
              <>
                <Card style={{ width: "18rem",height:'20vw' , margin: "50px auto" }}>
                  <Container>
                  <ListGroup variant="flush">
                    <ListGroup.Item as="li">
                      Book Name:
                      {element.name}
                    </ListGroup.Item>
                    <ListGroup.Item>Description: {element.description}</ListGroup.Item>
                    <ListGroup.Item>Status: {element.status}</ListGroup.Item>
                  </ListGroup>
                  </Container>
                  <Card.Footer>
                  <Button
                    className="m-3 btn btn-danger"
                    onClick={() => this.deleteBook(indx)}
                    style={{ backgroundColor: "#465475", color: "white", border: "none" }}
                  >
                    Delete Book
                  </Button>
                  <Button
                    className="m-3"
                    onClick={() => this.showUpdateForm(indx)}
                    style={{ backgroundColor: "#465475", color: "white", border: "none" }}
                  >
                    Update Book
                  </Button>
                  </Card.Footer>
                </Card>
              </>
            );
          })}
        </div>
      </>
    );
  }
}
export default withAuth0(BestBook);

///**///////////////////////// */
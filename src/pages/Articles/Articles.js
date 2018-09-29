import React, { Component } from "react";
import Results from "../../components/Results";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    articles: [],
    title: "",
    startYear: "",
    endYear: "",
    article: "",
    saved: ""
  };

  //Test NYT query working
  queryTest = () => {
    console.log("Pizza is great!");
    API.queryNewYorkTimes()
      .then(res => console.log("Response from NYT: ", res))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({
          articles: res.data,
          title: "",
          startYear: "",
          endYear: ""
        })
      )
      .catch(err => console.log(err));
  };

  handleSaveButton = (event, articleData) => {
    console.log(articleData);
    API.saveArticle(articleData);
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("YOYOYO");
    if (this.state.title && this.state.startYear && this.state.endYear) {
      API.queryNewYorkTimes(
        this.state.article,
        this.state.startYear,
        this.state.endYear
      )
        .then(res => {
          this.setState({ articles: res.data.response.docs });
          console.log("this.state.articles: ", this.state.articles);
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>
                <strong>
                  <i className="fa fa-newspaper-o" /> New York Times Search
                </strong>
              </h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="startYear"
                placeholder="startYear (required)"
              />
              <Input
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name="endYear"
                placeholder="endYear (Optional)"
              />
              <FormBtn
                disabled={!(this.state.startYear && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Article
              </FormBtn>
            </form>
            {/* <FormBtn onClick={this.queryTest}>
              
                Check NYT API
              </FormBtn> */}
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              {this.state.articles.map(article => (
                <div>
                  {this.state.articles.length > 1 ? (
                    <Results
                      // apiresults={this.state.results}
                      // handleClick={this.handleClick}
                      url={article.web_url}
                      title={article.headline.main}
                      date={article.pub_date}
                      key={article._id}
                      _id={article._id}
                      onChange={this.handleSaveButton}
                    />
                  ) : (
                    <div />
                  )}
                </div>
              ))}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;

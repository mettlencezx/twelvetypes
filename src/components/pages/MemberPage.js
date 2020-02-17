import _ from "lodash";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button, Card, Image, Placeholder } from "semantic-ui-react";

import { signIn } from "../../actions/index";
import twelveType from "../../api/twelveType";
import Divider from "../child/Divider";

const cards = [
  {
    avatar: "https://react.semantic-ui.com/images/avatar/large/helen.jpg",
    date: "Joined in 2013",
    header: "Premium Personality Profile",
    description: "Primary Contact",
    link: "http://twelvetypes-test.individua1.pay.clickbank.net/"
  },
  {
    avatar: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    date: "Joined in 2013",
    header: "Matthew",
    description: "Primary Contact",
    link: "http://twelvetypes-test.individua1.pay.clickbank.net/"
  },
  {
    avatar: "https://react.semantic-ui.com/images/avatar/large/molly.png",
    date: "Joined in 2013",
    header: "Molly",
    description: "Primary Contact",
    link: "http://twelvetypes-test.individua1.pay.clickbank.net/"
  }
];

class MemberArea extends Component {
  state = { loading: true, purchased: false, downloadLink: "" };
  componentDidUpdate = async () => {
    window.scrollTo(0, 0);

    if (localStorage.getItem("authToken") === null) {
      this.props.history.push("/login");
    } else {
      if (this.state.loading) {
        try {
          const response = await twelveType.get("/user/checkProduct", {
            headers: {
              Authorization: "Bearer " + this.props.token
            }
          });
          this.setState({
            loading: false,
            downloadLink: response.data.response,
            purchased: response.data.response != null ? true : false
          });
          console.log(response);
        } catch (err) {
          this.setState({
            loading: false
          });
          console.log(err);
        }
      }
    }
  };

  componentDidMount = async () => {
    window.scrollTo(0, 0);

    if (localStorage.getItem("authToken") === null) {
      this.props.history.push("/login");
    } else {
      try {
        const response = await twelveType.get("/user/checkProduct", {
          headers: {
            Authorization: "Bearer " + this.props.token
          }
        });
        this.setState({
          loading: false,
          downloadLink: response.data.response,
          purchased: response.data.response != null ? true : false
        });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  };

  handleLoadingClick = () => {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };

  render() {
    const { loading } = this.state;

    return (
      <div className="ui vertical stripe quote segment">
        <Divider title={`Welcom to your Library, `} username={this.props.username} />
        <div className="ui stackable grid container">
          <div className="row">
            <div className="sixteen wide column">
              <Card.Group doubling itemsPerRow={3} stackable>
                {_.map(cards, card => (
                  <Card key={card.header}>
                    {loading ? (
                      <Placeholder>
                        <Placeholder.Image square />
                      </Placeholder>
                    ) : (
                      <Image src={card.avatar} />
                    )}

                    <Card.Content>
                      {loading ? (
                        <Placeholder>
                          <Placeholder.Header>
                            <Placeholder.Line length="very short" />
                            <Placeholder.Line length="medium" />
                          </Placeholder.Header>
                          <Placeholder.Paragraph>
                            <Placeholder.Line length="short" />
                          </Placeholder.Paragraph>
                        </Placeholder>
                      ) : (
                        <Fragment>
                          <Card.Header>{card.header}</Card.Header>
                          <Card.Meta>{card.date}</Card.Meta>
                          <Card.Description>{card.description}</Card.Description>
                        </Fragment>
                      )}
                    </Card.Content>

                    <Card.Content extra>
                      {this.state.purchased ? (
                        <a href={this.state.downloadLink} target="_blank" rel="noopener noreferrer">
                          <Button disabled={loading} primary>
                            Download
                          </Button>
                        </a>
                      ) : (
                        <a
                          href={
                            `http://twelvetypes-test.individua1.pay.clickbank.net/?email=` +
                            this.props.email +
                            `&name=` +
                            this.props.username
                          }
                        >
                          <Button disabled={loading} primary>
                            Learn More
                          </Button>
                        </a>
                      )}
                      <Button disabled={loading}>Share</Button>
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    archetype: state.auth.archetype,
    username: state.auth.username,
    register: state.auth.register,
    token: state.auth.token,
    answers: state.quiz.answers,
    result: state.quiz.result,
    email: state.auth.email
  };
};

export default connect(mapStateToProps, { signIn })(MemberArea);

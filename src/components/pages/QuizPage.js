import React from "react";
import twelveType from "../../api/twelveType";
import ListQuiz from "../child/ListQuiz";
import { Progress, Modal, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { addQuiz, addAnswers, addTemp, resetTemp, changeTemp } from "../../actions";

class QuizPage extends React.Component {
  state = { percent: 0, open: false, mobile: false, placeholder: true };

  show = size => this.setState({ size, open: true }); // open modal configuration
  close = () => this.setState({ open: false }); // close modal configuration

  componentDidMount = async () => {
    window.scrollTo(0, 0);
    const response = await twelveType.get("/quizQuestion", {
      params: { id: 1 }
    });
    this.setState({
      placeholder: false
    });

    if (window.innerWidth <= 800 && window.innerHeight <= 800) {
      this.setState({
        mobile: true
      });
    }
    this.props.addQuiz(response.data.question);
  };

  onInputChange = (answer, question) => {
    const changeAnswer = this.props.temp.indexOf(answer);
    if (changeAnswer !== -1) {
      this.props.changeTemp(answer); // mutable redux
    } else {
      if (this.props.temp.length >= 3) {
        this.show("mini"); // showing modal
      } else {
        this.props.addTemp(answer);
      }
    }
  };

  componentDidUpdate = prevProps => {
    if (prevProps.temp.length !== this.props.temp.length) {
      if (this.props.temp.length === 3) {
        window.scrollTo({ top: 200, behavior: "smooth" });
      }
    }
  };

  onNextButton = async id => {
    this.setState(
      {
        placeholder: true
      },
      () => window.scrollTo({ top: 0, behavior: "smooth" })
    );

    const response = await twelveType.get("/quizQuestion", {
      params: { id: id }
    });
    this.props.addQuiz(response.data.question);
    this.props.addAnswers(this.props.temp);
    this.props.resetTemp();

    this.setState(prevState => ({
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 10,
      placeholder: false
    }));

    if (id > 10) {
      this.props.history.push("/register");
    }
  };

  render() {
    const { open, size } = this.state;
    return (
      <div className="ui center aligned vertical stripe quote segment">
        <Progress percent={this.state.percent} indicating progress className="progress-custom" />
        <ListQuiz
          onChangeAnswer={this.onInputChange.bind(this)}
          onNextButton={this.onNextButton}
          mobile={this.state.mobile}
          placeholder={this.state.placeholder}
        />

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Notification</Modal.Header>
          <Modal.Content>
            <p>Sorry, you already choose top three answers</p>
          </Modal.Content>
          <Modal.Actions>
            <Button positive onClick={this.close.bind()}>
              Okay
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    username: state.auth.username,
    archetype: state.auth.archetype,
    token: state.auth.token,
    temp: state.quiz.temp
  };
};

export default connect(mapStateToProps, { addQuiz, addAnswers, addTemp, resetTemp, changeTemp })(QuizPage);

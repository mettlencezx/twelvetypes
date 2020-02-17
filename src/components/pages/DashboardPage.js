import React from "react";
import { connect } from "react-redux";
import twelveType from "../../api/twelveType";
import Divider from "../child/Divider";
import { updateUser, storeResult, signOut, signIn, resetAnswers } from "../../actions/index";
import { Container, Image, Header } from "semantic-ui-react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import PlaceholderDashboard from "../child/placeholder/PlaceholderDashboard";
import HeaderPersonalised from "../child/personalised/HeaderPersonalised";

class DashboardPage extends React.Component {
  constructor() {
    super();
    this.state = {
      placeholder: true,
      optionsPie: {
        labels: ["A"],
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 10
        }
      },
      seriesPie: [100],
      chart: false
    };
  }

  componentDidUpdate = async prevProps => {
    window.scrollTo(0, 0);
    if (localStorage.getItem("authToken") === null) {
      this.props.history.push("/login");
    }
    if (this.props.archetype !== prevProps.archetype) {
      if (this.props.archetype.length > 0 && this.props.answers.length === 0) {
        try {
          const response = await twelveType.get("/user/quizResult", {
            headers: {
              Authorization: "Bearer " + this.props.token
            },
            params: {
              answers: this.props.archetype
            }
          });
          // this.props.updateUser(response.data.user.name, response.data.user.archetype, response.data.user.created_at, this.props.token)
          this.props.storeResult(response.data.percentage);

          // pie update data
          const newPieLabels = Object.keys(response.data.top_answers);
          const newPieSeries = [];
          const newPieColors = [];
          newPieLabels.map(data => {
            if (response.data.top_answers[data] !== 0) {
              newPieSeries.push(response.data.top_answers[data]);
              if (data === "caregiver") {
                newPieColors.push("#d53f98");
              } else if (data === "creator") {
                newPieColors.push("#895ba5");
              } else if (data === "explorer") {
                newPieColors.push("#46b4e8");
              } else if (data === "warrior") {
                newPieColors.push("#2f3192");
              } else if (data === "idealist") {
                newPieColors.push("#f2cd46");
              } else if (data === "jester") {
                newPieColors.push("#b84f9e");
              } else if (data === "lover") {
                newPieColors.push("#d63f40");
              } else if (data === "magician") {
                newPieColors.push("#eaae42");
              } else if (data === "everyman") {
                newPieColors.push("#60bb46");
              } else if (data === "rebel") {
                newPieColors.push("#771818");
              } else if (data === "ruler") {
                newPieColors.push("#e0c542");
              } else if (data === "sage") {
                newPieColors.push("#49a687");
              }
            }
            return true;
          });

          this.setState({
            seriesPie: newPieSeries,
            optionsPie: {
              labels: newPieLabels,
              legend: { show: false },
              colors: newPieColors
            },
            chart: true,
            placeholder: false
          });
        } catch {
          this.props.history.push("/login");
        }
      }
    }
    // else if (this.props.archetype === '') {
    //   this.props.history.push('/quiz')
    // }
  };

  componentDidMount = async () => {
    window.scrollTo(0, 0);

    if (localStorage.getItem("authToken") === null) {
      this.props.history.push("/login");
    }
    if (this.props.answers.length > 0) {
      try {
        const response = await twelveType.get("/user/quizResult", {
          headers: {
            Authorization: "Bearer " + this.props.token
          },
          params: {
            answers: this.props.answers
          }
        });
        this.props.updateUser(
          response.data.user.name,
          response.data.user.archetype,
          response.data.user.created_at,
          this.props.token,
          response.data.user.email
        );
        this.props.storeResult(response.data.percentage);

        // pie update data
        const newPieLabels = Object.keys(response.data.top_answers);
        const newPieSeries = [];
        const newPieColors = [];
        newPieLabels.map(data => {
          if (response.data.top_answers[data] !== 0) {
            newPieSeries.push(response.data.top_answers[data]);
            if (data === "caregiver") {
              newPieColors.push("#d53f98");
            } else if (data === "creator") {
              newPieColors.push("#895ba5");
            } else if (data === "explorer") {
              newPieColors.push("#46b4e8");
            } else if (data === "warrior") {
              newPieColors.push("#2f3192");
            } else if (data === "idealist") {
              newPieColors.push("#f2cd46");
            } else if (data === "jester") {
              newPieColors.push("#b84f9e");
            } else if (data === "lover") {
              newPieColors.push("#d63f40");
            } else if (data === "magician") {
              newPieColors.push("#eaae42");
            } else if (data === "everyman") {
              newPieColors.push("#60bb46");
            } else if (data === "rebel") {
              newPieColors.push("#771818");
            } else if (data === "ruler") {
              newPieColors.push("#e0c542");
            } else if (data === "sage") {
              newPieColors.push("#49a687");
            }
          }
          return true;
        });

        const newBarSeries = Object.keys(response.data.top_answers).reduce((carry, key) => {
          return [
            ...carry,
            {
              name: key,
              data: [response.data.top_answers[key]]
            }
          ];
        }, []);

        this.setState({
          seriesBar: newBarSeries, //update chart
          seriesPie: newPieSeries,
          optionsPie: {
            labels: newPieLabels,
            legend: { show: false },
            colors: newPieColors
          },
          chart: true,
          placeholder: false
        });
      } catch {
        this.props.history.push("/login");
      }
    } else if (this.props.archetype.length > 0 && this.props.answers.length === 0) {
      try {
        const response = await twelveType.get("/user/quizResult", {
          headers: {
            Authorization: "Bearer " + this.props.token
          },
          params: {
            answers: this.props.archetype
          }
        });
        console.log(response);
        this.props.updateUser(
          response.data.user.name,
          response.data.user.archetype,
          response.data.user.created_at,
          this.props.token,
          response.data.user.email
        );
        this.props.storeResult(response.data.percentage);

        // pie update data
        const newPieLabels = Object.keys(response.data.top_answers);
        const newPieSeries = [];
        const newPieColors = [];
        newPieLabels.map(data => {
          if (response.data.top_answers[data] !== 0) {
            newPieSeries.push(response.data.top_answers[data]);
            if (data === "caregiver") {
              newPieColors.push("#d53f98");
            } else if (data === "creator") {
              newPieColors.push("#895ba5");
            } else if (data === "explorer") {
              newPieColors.push("#46b4e8");
            } else if (data === "warrior") {
              newPieColors.push("#2f3192");
            } else if (data === "idealist") {
              newPieColors.push("#f2cd46");
            } else if (data === "jester") {
              newPieColors.push("#b84f9e");
            } else if (data === "lover") {
              newPieColors.push("#d63f40");
            } else if (data === "magician") {
              newPieColors.push("#eaae42");
            } else if (data === "everyman") {
              newPieColors.push("#60bb46");
            } else if (data === "rebel") {
              newPieColors.push("#771818");
            } else if (data === "ruler") {
              newPieColors.push("#e0c542");
            } else if (data === "sage") {
              newPieColors.push("#49a687");
            }
          }
          return true;
        });

        this.setState({
          seriesPie: newPieSeries,
          optionsPie: {
            labels: newPieLabels,
            legend: { show: false },
            colors: newPieColors
          },
          chart: true,
          placeholder: false
        });
      } catch {
        this.props.history.push("/login");
      }
    }
  };

  // onRetakeQuiz = () => {
  //   this.props.updateUser(this.props.username, "", this.props.token)
  //   this.props.history.push('/quiz')
  // }
  onSignOut = () => {
    localStorage.removeItem("authToken");
    this.props.updateUser("", "", "", "");
    this.props.resetAnswers();
    this.props.signOut();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="ui vertical stripe quote segment">
        <Divider title={`Here Are Your Results, `} username={this.props.username} />
        <div className="ui stackable grid container">
          {this.state.placeholder ? (
            <PlaceholderDashboard />
          ) : (
            <div className="row">
              <HeaderPersonalised title="Archetype Personality Summary"></HeaderPersonalised>
              <div className="seven wide column">
                <Chart options={this.state.optionsPie} series={this.state.seriesPie} type="donut" />
              </div>
              <div className="nine wide column">
                {this.props.result.map(data => {
                  var archetype = Object.keys(data)[0];
                  return (
                    <Container key={archetype}>
                      <div className="ui grid">
                        <div className="four wide column border-right-bottom">
                          <Image
                            verticalAlign="middle"
                            src={`https://api.individualogist.com/img/archetype/logos/${Object.keys(data)[0]}.webp`}
                          />
                        </div>
                        <div className="twelve wide column border-bottom">
                          <Header as="h2" className={archetype}>
                            <Header.Content>{data[archetype] + " " + archetype}</Header.Content>
                          </Header>
                          <p className="text-silver">{data.interpretation.content}</p>
                        </div>
                      </div>
                      {/* <Header as="h2" className={archetype}>
                        <Image
                          src={`https://individualogist.com/wp-content/themes/indivi-wp/img/icons/${
                            Object.keys(data)[0]
                          }.webp`}
                        />
                        <Header.Content>{data[archetype] + " " + archetype}</Header.Content>
                      </Header>
                      <p>{data.interpretation.content}</p>
                      <br /> */}
                    </Container>
                  );
                })}
              </div>
            </div>
          )}
          <div className="ui centered column row remove-padding">
            {this.state.placeholder ? (
              ""
            ) : (
              <Link to="/personalised" className="ui huge submit button custom-background-orange">
                Learn More About My Archetypes
              </Link>
            )}
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
    result: state.quiz.result
  };
};

export default connect(mapStateToProps, {
  updateUser,
  storeResult,
  signOut,
  resetAnswers,
  signIn
})(DashboardPage);

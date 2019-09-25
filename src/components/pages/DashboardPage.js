import React from 'react';
import { connect } from 'react-redux';
import twelveType from '../../api/twelveType';
import Divider from '../child/Divider';
import { updateUser, storeResult, signOut, signIn, resetAnswers } from '../../actions/index';
import { Container, Image, Header, Placeholder } from 'semantic-ui-react';
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom'

class DashboardPage extends React.Component {
  constructor() {
    super()
    this.state = {
      placeholder: true,
      optionsPie: {
        labels: ['A'],
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 10
        }
      },
      seriesPie: [100],
      chart: false
    }
  }

  componentDidUpdate = async (prevProps) => {
    window.scrollTo(0, 0)
    if(this.props.archetype !== prevProps.archetype) {
      if (this.props.archetype.length > 0 && this.props.answers.length === 0) {
        try {
          const response = await twelveType.get('/user/quizResult', {
            headers: {
              Authorization: 'Bearer ' + this.props.token
            },
            params:  {
              answers: this.props.archetype }
          })
          // this.props.updateUser(response.data.user.name, response.data.user.archetype, response.data.user.created_at, this.props.token)
          this.props.storeResult(response.data.percentage)

          // pie update data
          const newPieLabels = Object.keys(response.data.top_answers)
          const newPieSeries = []
          const newPieColors = []
          newPieLabels.map((data) => {
            newPieSeries.push(response.data.top_answers[data])
            if(data === 'caregiver') {
              newPieColors.push('#d53f98')
            } else if(data === 'creator') {
              newPieColors.push('#895ba5')
            } else if(data === 'explorer') {
              newPieColors.push('#46b4e8')
            } else if(data === 'hero') {
              newPieColors.push('#2f3192')
            } else if(data === 'innocent') {
              newPieColors.push('#f2cd46')
            } else if(data === 'jester') {
              newPieColors.push('#b84f9e')
            } else if(data === 'lover') {
              newPieColors.push('#d63f40')
            } else if(data === 'magician') {
              newPieColors.push('#eaae42')
            } else if(data === 'member') {
              newPieColors.push('#60bb46')
            } else if(data === 'outlaw') {
              newPieColors.push('#771818')
            } else if(data === 'ruler') {
              newPieColors.push('#e0c542')
            } else if(data === 'sage') {
              newPieColors.push('#49a687')
            }
            return true
          })

          this.setState({
            seriesPie: newPieSeries,
            optionsPie: {
              labels: newPieLabels,
              legend: { show:false},
              colors: newPieColors
            },
            chart: true,
            placeholder: false
          })
        } catch {
          console.log('error bro');
        }
      }
    }
  }

  componentDidMount = async () => {
    window.scrollTo(0, 0)

    if(localStorage.getItem('authToken') === null) {
      this.props.history.push('/login')
    }
    if (this.props.answers.length > 0) {
      try {
        const response = await twelveType.get('/user/quizResult', {
          headers: {
            Authorization: 'Bearer ' + this.props.token
          },
          params:  {
            answers: this.props.answers }
        })
        this.props.updateUser(response.data.user.name, response.data.user.archetype, response.data.user.created_at, this.props.token)
        this.props.storeResult(response.data.percentage)

        // pie update data
        const newPieLabels = Object.keys(response.data.top_answers)
        const newPieSeries = []
        const newPieColors = []
        newPieLabels.map((data) => {
          newPieSeries.push(response.data.top_answers[data])
          if(data === 'caregiver') {
            newPieColors.push('#d53f98')
          } else if(data === 'creator') {
            newPieColors.push('#895ba5')
          } else if(data === 'explorer') {
            newPieColors.push('#46b4e8')
          } else if(data === 'hero') {
            newPieColors.push('#2f3192')
          } else if(data === 'innocent') {
            newPieColors.push('#f2cd46')
          } else if(data === 'jester') {
            newPieColors.push('#b84f9e')
          } else if(data === 'lover') {
            newPieColors.push('#d63f40')
          } else if(data === 'magician') {
            newPieColors.push('#eaae42')
          } else if(data === 'member') {
            newPieColors.push('#60bb46')
          } else if(data === 'outlaw') {
            newPieColors.push('#771818')
          } else if(data === 'ruler') {
            newPieColors.push('#e0c542')
          } else if(data === 'sage') {
            newPieColors.push('#49a687')
          }
          return true
        })

        const newBarSeries = Object.keys(response.data.top_answers).reduce((carry, key) => {
          return [
            ...carry,
            {
              name: key,
              data: [response.data.top_answers[key]]
            }
          ]
        }, []);

        this.setState({
          seriesBar: newBarSeries, //update chart
          seriesPie: newPieSeries,
          optionsPie: {
            labels: newPieLabels,
            legend: { show:false},
            colors: newPieColors
          },
          chart: true,
          placeholder: false
        })

      } catch {
        console.log('error bro');
      }
    } else if (this.props.archetype.length > 0 && this.props.answers.length === 0) {
      try {
        const response = await twelveType.get('/user/quizResult', {
          headers: {
            Authorization: 'Bearer ' + this.props.token
          },
          params:  {
            answers: this.props.archetype }
        })
        this.props.updateUser(response.data.user.name, response.data.user.archetype, response.data.user.created_at, this.props.token)
        this.props.storeResult(response.data.percentage)

        // pie update data
        const newPieLabels = Object.keys(response.data.top_answers)
        const newPieSeries = []
        const newPieColors = []
        newPieLabels.map((data) => {
          newPieSeries.push(response.data.top_answers[data])
          if(data === 'caregiver') {
            newPieColors.push('#d53f98')
          } else if(data === 'creator') {
            newPieColors.push('#895ba5')
          } else if(data === 'explorer') {
            newPieColors.push('#46b4e8')
          } else if(data === 'hero') {
            newPieColors.push('#2f3192')
          } else if(data === 'innocent') {
            newPieColors.push('#f2cd46')
          } else if(data === 'jester') {
            newPieColors.push('#b84f9e')
          } else if(data === 'lover') {
            newPieColors.push('#d63f40')
          } else if(data === 'magician') {
            newPieColors.push('#eaae42')
          } else if(data === 'member') {
            newPieColors.push('#60bb46')
          } else if(data === 'outlaw') {
            newPieColors.push('#771818')
          } else if(data === 'ruler') {
            newPieColors.push('#e0c542')
          } else if(data === 'sage') {
            newPieColors.push('#49a687')
          }
          return true
        })

        this.setState({
          seriesPie: newPieSeries,
          optionsPie: {
            labels: newPieLabels,
            legend: { show:false},
            colors: newPieColors
          },
          chart: true,
          placeholder: false
        })

      } catch {
        console.log('error bro');
      }
    }
  }

  // onRetakeQuiz = () => {
  //   this.props.updateUser(this.props.username, "", this.props.token)
  //   this.props.history.push('/quiz')
  // }
  onSignOut = () => {
    localStorage.removeItem('authToken')
    this.props.updateUser('','','','')
    this.props.resetAnswers()
    this.props.signOut()
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="ui vertical stripe quote segment">
        <Divider title={`Here Are Your Results, ${this.props.username}`} />
        <div className="ui stackable grid container">
      { this.state.placeholder ?
        <div className="row">
          <div className="seven wide column">
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          </div>
          <div className="nine wide column">
            <Placeholder>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder>
            <Placeholder>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder>
            <Placeholder>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder>
            <Placeholder>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder>
          </div>
        </div>
      :
        <div className="row">
          <div className="seven wide column">
            <Chart
              options={this.state.optionsPie}
              series={this.state.seriesPie}
              type="donut"
            />
          </div>
          <div className="nine wide column">
            <Header as='h2' className="custom">Archetype Personality Summary</Header>
            { this.props.result.map((data) => {
              var archetype = Object.keys(data)[0]
              return <Container key={archetype}>
              <Header as='h2' className={archetype}>
                <Image src={`https://individualogist.com/wp-content/themes/indivi-wp/img/icons/${Object.keys(data)[0]}.webp`} />
                <Header.Content>{data[archetype] + " " + archetype}</Header.Content>
              </Header>
              <p>{data.interpretation.content}</p>
              <br/>
            </Container>
            }) }
          </div>
        </div>
      }
        <div className="ui centered column row remove-padding">
          { this.state.placeholder ?
            <Placeholder>
              <Placeholder.Line />
            </Placeholder>
          :
            <Link to='/archetype' className="ui huge submit button custom-background-orange">Learn More About My Archetypes</Link>
          }
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    archetype: state.auth.archetype,
    username: state.auth.username,
    register: state.auth.register,
    token: state.auth.token,
    answers: state.quiz.answers,
    result: state.quiz.result
  }
}

export default connect(
  mapStateToProps, {
    updateUser, storeResult, signOut, resetAnswers, signIn
  }
)(DashboardPage);
import React from "react"
import twelveType from "../../api/twelveType"
import Divider from "../child/Divider"
import { connect } from "react-redux"
import { storeResult } from "../../actions"
import Chart from "react-apexcharts"

class DemoResultPage extends React.Component {
  constructor() {
    super()
    this.state = {
      optionsBar: {
        chart: {
          stacked: true,
          stackType: "100%",
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        dataLabels: {
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          width: 0
        },
        xaxis: {
          categories: [""],
          type: "Top Archetype",
          labels: {
            show: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        fill: {
          opacity: 1,
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.35,
            gradientToColors: undefined,
            inverseColors: false,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [90, 0, 100]
          }
        },

        legend: {
          position: "bottom",
          horizontalAlign: "right"
        }
      },
      seriesBar: [
        {
          name: "blue",
          data: [100]
        },
        {
          name: "green",
          data: [0]
        },
        {
          name: "yellow",
          data: [0]
        }
      ],
      optionsPie: {
        labels: ["A"]
      },
      seriesPie: [100]
    }
  }
  componentDidMount = async () => {
    window.scrollTo(0, 0)
    const response = await twelveType.get("/user/quizResult", {
      params: { answers: this.props.answers }
    })

    // pie update data
    const newPieLabels = Object.keys(response.data.top_answers)
    const newPieSeries = []
    newPieLabels.map(data => {
      newPieSeries.push(response.data.top_answers[data])
      return true
    })

    const newBarSeries = Object.keys(response.data.top_answers).reduce(
      (carry, key) => {
        return [
          ...carry,
          {
            name: key,
            data: [response.data.top_answers[key]]
          }
        ]
      },
      []
    )

    this.setState({
      seriesBar: newBarSeries, //update chart
      seriesPie: newPieSeries,
      optionsPie: {
        labels: newPieLabels
      }
    })
    this.props.storeResult(response.data.percentage)
  }

  render() {
    const results = []
    this.props.results.map((result, i) => {
      var resultKey = Object.keys(result)
      results.push(
        <div className="ui labeled button" key={i}>
          <div className="ui basic blue button">{resultKey[0]}</div>
          <span className="ui basic left pointing blue label">
            {result[resultKey[0]]}
          </span>
        </div>
      )
      return true
    })

    return (
      <div className="ui vertical stripe quote segment">
        <div>
          <Divider
            title="QUIZ RESULT"
            text="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"
          />
          <div className="ui center aligned grid container">
            {/* {results} */}

            <Chart
              options={this.state.optionsBar}
              height={140}
              series={this.state.seriesBar}
              type="bar"
              width={500}
            />

            <Chart
              options={this.state.optionsPie}
              series={this.state.seriesPie}
              type="donut"
              width="380"
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    username: state.auth.username,
    archetype: state.auth.archetype,
    token: state.auth.token,
    answers: state.quiz.answers,
    results: state.quiz.result
  }
}
export default connect(
  mapStateToProps,
  { storeResult }
)(DemoResultPage)

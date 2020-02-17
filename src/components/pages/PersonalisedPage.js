import React from "react";
import { connect } from "react-redux";
import twelveTypes from "../../api/twelveType";
import { Placeholder, Image, Container, Header } from "semantic-ui-react";
import Divider from "../child/Divider";
import { Link } from "react-router-dom";
import { addPersonalised } from "../../actions";
import HeaderPersonalised from "../child/personalised/HeaderPersonalised";

class PersonalisedPage extends React.Component {
  state = { listArchetype: [], placeholder: true, primaryTraits: "" };

  componentDidMount = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (this.props.result.length > 0) {
      let tmp = [];
      this.props.result.map(data => {
        tmp = [...tmp, Object.keys(data)[0]];
      });
      this.setState(
        {
          listArchetype: tmp
        },
        async () => {
          try {
            const response = await twelveTypes.get("/getPersonalised", {
              headers: {
                Authorization: "Bearer " + this.props.token
              },
              params: {
                archetype: this.state.listArchetype
              }
            });
            this.props.addPersonalised(response.data.data);
            this.setState({
              placeholder: false,
              primaryTraits:
                response.data.data[0].p1 + ", " + response.data.data[1].p1 + ", and " + response.data.data[2].p1
            });
            console.log(response);
          } catch (error) {
            console.log(error);
          }
        }
      );
    } else {
    }
  };

  render() {
    const archetypes = this.props.personalised.map(archetype => {
      return (
        <Container key={archetype.archetype}>
          <Header as="h2" className={archetype.archetype}>
            <Image src={`https://api.individualogist.com/img/archetype/logos/${archetype.archetype}.webp`} />
            <Header.Content>Your {archetype.archetype} Archetype</Header.Content>
          </Header>
          <div class="left-line">
            <p>
              The archetypes forming your personality comprises an incredibly unique combination, representing a
              harmonious synergy between your primary traits: {archetype.p1}.
            </p>
            <h3 className="ui header">Strengths:</h3>
            <p>{archetype.p2}</p>
            <h3 className="ui header">Weaknesses:</h3>
            <p>{archetype.p3}</p>
            <h3 className="ui header">Goals:</h3>
            <p>{archetype.p4}</p>
            <h3 className="ui header">Fears:</h3>
            <p>
              The presence of these archetypes in your personality construct indicate several fears you should be weary
              of.
            </p>
            <p>{archetype.p5}</p>
            <p>
              With that, you will do everything in your power to prevent such from happening and as your personality
              comprises the {this.props.personalised[0].archetype}, {this.props.personalised[1].archetype} and
              {this.props.personalised[2].archetype} archetypes, realizing your fears and weak points will not always
              lead you to the worst scenarios. Instead, taking them in rationally will allow you to prevent or avoid
              them. Being aware of your negative tendencies and thoughts will lead you to higher levels of self-mastery.
            </p>
            <h3 className="ui header">Challenges:</h3>
            <p>
              As a result of these fears, there are several challenges that tend to arise. These are a few examples of
              what could stand in your way through the course of your life.
            </p>
            <p>{archetype.p6}</p>
            <p>
              Each archetype will always have their dragons, as this is one way for their archetype to grow. By slaying
              one dragon, a bigger one will always come up, and each time you do conquer it, you move a tier higher in
              the quest of life.
            </p>
            <h3 className="ui header">Resolution:</h3>
            <p>
              Given that each archetype must face their own dragon/problem, it is necessary to have an idea of a general
              response. When things get rough for you, going back to this core response will help you regain focus on
              beating that dragon.
            </p>
            <p>{archetype.p7}</p>
            <p>
              With these, the whole point of going back to the core idea of your response is to continually evaluate if
              you are living out your archetype in a way that doesn't empower your dragon. Paying attention to key
              indicators can help prevent such from happening, leading you to a healthier, centred, and more self-aware
              sense of self.
            </p>
          </div>
        </Container>
      );
    });

    const HeaderBro = (
      <Container>
        <p>
          {/* The archetypes forming your personality comprises an incredibly unique combination, representing a harmonious
          synergy between your primary traits: {this.props.personalised[0]},{this.props.personalised[1]} and
          {this.props.personalised[3]} */}
        </p>
        <p>Let's start with looking into the core strengths and weaknesses of your personality's archetypes.</p>
      </Container>
    );

    const StrengthsAndWeaknesses = this.props.personalised.map(archetype => {
      return (
        <Container key={archetype.archetype}>
          <Header as="h2" className={archetype.archetype}>
            <Image src={`https://api.individualogist.com/img/archetype/logos/${archetype.archetype}.webp`} />
            <Header.Content>Your {archetype.archetype} Archetype</Header.Content>
          </Header>
          <div class="left-line">
            <h3 className="ui header">Strengths:</h3>
            <p className="text-silver">{archetype.p2}</p>
            <h3 className="ui header">Weaknesses:</h3>
            <p className="text-silver">{archetype.p3}</p>
          </div>
        </Container>
      );
    });

    const Goals = this.props.personalised.map(archetype => {
      return (
        <Container key={archetype.archetype}>
          <Header as="h2" className={archetype.archetype}>
            <Image src={`https://api.individualogist.com/img/archetype/logos/${archetype.archetype}.webp`} />
            <Header.Content>Your {archetype.archetype} Archetype</Header.Content>
          </Header>
          <div class="left-line">
            <h3 className="ui header">Goals:</h3>
            <p className="text-silver">{archetype.p4}</p>
          </div>
        </Container>
      );
    });

    const Fears = this.props.personalised.map(archetype => {
      return (
        <Container key={archetype.archetype}>
          <Header as="h2" className={archetype.archetype}>
            <Image src={`https://api.individualogist.com/img/archetype/logos/${archetype.archetype}.webp`} />
            <Header.Content>Your {archetype.archetype} Archetype</Header.Content>
          </Header>
          <div class="left-line">
            <h3 className="ui header">Fears:</h3>
            <p className="text-silver">{archetype.p5}</p>
          </div>
        </Container>
      );
    });

    const ChallengesAndDragons = this.props.personalised.map(archetype => {
      return (
        <Container key={archetype.archetype}>
          <Header as="h2" className={archetype.archetype}>
            <Image src={`https://api.individualogist.com/img/archetype/logos/${archetype.archetype}.webp`} />
            <Header.Content>Your {archetype.archetype} Archetype</Header.Content>
          </Header>
          <div class="left-line">
            <h3 className="ui header">Challenges &amp; Dragons:</h3>
            <p className="text-silver">{archetype.p6}</p>
          </div>
        </Container>
      );
    });

    const Resolution = this.props.personalised.map(archetype => {
      return (
        <Container key={archetype.archetype}>
          <Header as="h2" className={archetype.archetype}>
            <Image src={`https://api.individualogist.com/img/archetype/logos/${archetype.archetype}.webp`} />
            <Header.Content>Your {archetype.archetype} Archetype</Header.Content>
          </Header>
          <div class="left-line">
            <h3 className="ui header">Resolutions:</h3>
            <p className="text-silver">{archetype.p7}</p>
          </div>
        </Container>
      );
    });

    return (
      <div className="ui vertical stripe quote segment">
        <Divider title="ARCHETYPE RESULTS" />
        {this.state.placeholder ? (
          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <div className="sixteen wide column">
                <Placeholder fluid>
                  <Placeholder.Line length="very short" />
                  <Placeholder.Line length="very long" />
                  <Placeholder.Line length="long" />
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder>
                <Placeholder fluid>
                  <Placeholder.Line length="very short" />
                  <Placeholder.Line length="very long" />
                  <Placeholder.Line length="long" />
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder>
                <Placeholder fluid>
                  <Placeholder.Line length="very short" />
                  <Placeholder.Line length="very long" />
                  <Placeholder.Line length="long" />
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder>
                <Placeholder fluid>
                  <Placeholder.Line length="very short" />
                  <Placeholder.Line length="very long" />
                  <Placeholder.Line length="long" />
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder>
              </div>
            </div>
          </div>
        ) : (
          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <div className="sixteen wide column">
                <h3 className="ui header black">
                  Hi <span className="username">{this.props.username}</span>, here are your personalised results:
                </h3>
              </div>
            </div>
            <p className="marginLeft25">
              The archetypes forming your personality comprises an incredibly unique combination, representing a
              harmonious synergy between your primary traits: <span className="bold">{this.state.primaryTraits}</span>
            </p>
            <p className="marginLeft25">
              Let's start with looking into the core strengths and weaknesses of your personality's archetypes.
            </p>
            <HeaderPersonalised title="Strengths &amp; Weaknesses"></HeaderPersonalised>
            {StrengthsAndWeaknesses}
            <p className="personalised text-silver">
              Each archetype within your personality has specific goals and objectives it yearns to achieve, which could
              shed some much needed light unto your purpose and direction.
            </p>

            <HeaderPersonalised title="Goals"></HeaderPersonalised>
            {Goals}
            <p className="personalised text-silver">
              Following this path, you will eventually fulfill this destiny. Each step you take will contribute to this
              seemingly impossible goal of being able to help others on a grander scale of things. The key is in
              carrying on, no matter how dark the path may be.
            </p>
            <p className="text-silver">
              Now, based on your personality, there are several fears that are likely to stand in your way. Let's
              confront some of the most fears that are commonly associated with your personality archetypes.
            </p>

            <HeaderPersonalised title="Fears"></HeaderPersonalised>
            {Fears}
            <p className="personalised text-silver">
              With that, you will do everything in your power to prevent such from happening and as your personality
              comprises the caregiver, creator and, explorer archetypes, realizing your fears and weak points will not
              always lead you to the worst scenarios. Instead, taking them in rationally will allow you to prevent or
              avoid them. Being aware of your negative tendencies and thoughts will lead you to higher levels of
              self-mastery.
            </p>
            <p className="text-silver">
              As a result of these fears, there are several challenges, or dragons as we like to call them, that tend to
              arise. These are a few examples of what could stand in your way through the course of your life.
            </p>

            <HeaderPersonalised title="Challenges &amp; Dragons"></HeaderPersonalised>
            {ChallengesAndDragons}
            <p className="personalised text-silver">
              Each archetype will always have their dragons, as this is one way for their archetype to grow. By slaying
              one dragon, a bigger one will always come up, and each time you do conquer it, you move a tier higher in
              the quest of life.
            </p>
            <p className="text-silver">
              Given that each archetype must face their own dragon/challenge, it is necessary to have an idea of a
              general resolution or response to those challenges. When things get rough for you, going back to this core
              response will help you regain focus on beating that dragon.
            </p>

            <HeaderPersonalised title="Resolution"></HeaderPersonalised>
            {Resolution}
            <p className="personalised text-silver">
              The whole point of going back to the core idea of your response is to continually evaluate if you are
              living out your archetype in a way that doesn't empower your dragon. Paying attention to key indicators
              can help prevent such from happening, leading you to a healthier, centred, and more self-aware sense of
              self.
            </p>
            <div className="ui centered column row remove-padding">
              <Link to="/offer" className="ui huge submit button custom-background-orange">
                Continue
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    result: state.quiz.result,
    personalised: state.quiz.personalised
  };
};

export default connect(mapStateToProps, { addPersonalised })(PersonalisedPage);

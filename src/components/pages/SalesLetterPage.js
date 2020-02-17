import React from "react";
import twelveTypes from "../../api/twelveType";
import { Placeholder } from "semantic-ui-react";
import Divider from "../child/Divider";
import { connect } from "react-redux";
import Line from "../child/freereading/Line";
import { Link } from "react-router-dom";

// images
// import top from "../../assets/images/free-reading/top.png";

class SalesLetterPage extends React.Component {
  state = { placeholder: true, content: "" };
  componentDidMount = async () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    let params = new URLSearchParams(window.location.search);
    try {
      const response = await twelveTypes.get("/getSalesLetter", {
        headers: {
          Authorization: "Bearer " + this.props.token
        },
        params: {
          archetype: this.props.personalised[0] !== undefined ? this.props.personalised[0].archetype : "caregiver"
        }
      });
      this.setState({
        placeholder: false,
        content: response.data.data
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="ui vertical stripe quote segment">
        <Divider title="FREE READING" />
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
          <div className="main ui intro container">
            <div className="row">
              <div className="sixteen wide column">{/* <Image src={top}></Image> */}</div>
            </div>
            <div className="row">
              <div className="sixteen wide column">
                <h3 className="ui header">
                  Your Next Step Towards Personal Evolution: The Confident, Fulfilling, and Joyful Life Ahead Of You
                </h3>
              </div>
            </div>
            <p>Manifesto of the {this.state.content.s1}</p>
            <p>
              You’ve experienced the thrill of discovering your personality archetypes; coming face-to-face with the
              intimate reality of your most authentic self.
            </p>
            <p>
              It’s exciting, isn’t it? Comforting to know that there might be others like you, and rewarding to have
              your craving for connection satisfied.
            </p>
            <p>You’ve come to understand why you learn, behave, act, and react in certain ways.</p>
            <p>{this.state.content.s2}</p>
            <p>
              Because you’re on a different path, comprising different motivations, with your own unique sense of
              achievement, and a profound sense of purpose.
            </p>
            <p>
              Some say that personalities are malleable, while others believe that a leopard never changes its spots.
              Really, what’s true, and what’s not?
            </p>
            <p>Is it one or the other? A combination of both?</p>
            <p>Or maybe it’s something else.</p>
            <p>
              Point being, personalities are something else entirely. You might be able to change your spots, but in any
              case, you don’t have to!
            </p>
            <p>
              As unsatisfying as that answer sounds, there’s so much complexity in the human mind, body, and spirit that
              there’s almost never a definitive answer to these types of questions.
            </p>
            <p>
              And that admittance is really what sets archetypes apart - it doesn’t seek to change you, but to help you
              evolve and become a happier, wiser, more confident, and more fulfilled version of you.
            </p>
            <Line></Line>
            <h2 className="ui dividing header">Create Distinctions Between Your Current Identity And Desired Self</h2>
            <p>
              There’s much more you wish to achieve, and there’s no telling just how bright and beautiful your future
              can become.
            </p>
            <p>
              Like a blossoming flower, imagine unfurling into the most ideal version of you. What would it look like?
              How would you feel? Would you…
            </p>
            <p>Reflect upon yourself with more kindness than distaste?</p>
            <p>Make remarkable progress on the passions you wish to pursue?</p>
            <p>
              Celebrate your newfound sense of confidence and freedom of expression? Feel more deeply connected with the
              ones you love?
            </p>
            <p>
              But you already know that merely entertaining the thought and working towards that evolution are
              completely different.
            </p>
            <p>If only it were that simple, right?</p>
            <p>Well, it can be…</p>
            <p>
              See, in your subconscious, you’re already aware that the only pre-requisite for becoming more like you, is
              to stop trying to become like anyone else.
            </p>
            <p>
              No matter how hard you try to stray away from the expectations of others, no matter how hard you remain
              resilient to the pressures to become who you feel like you’re not - you find yourself gradually
              transforming into things you told yourself not to become.
            </p>
            <p>The things you remember telling yourself, “that’s not me”.</p>
            <p>
              Perhaps our childish adolescence is a better expression of who we truly are; not our matured and developed
              selves.
            </p>
            <p>
              That’s the harsh reality of life, isn’t it? Eternally struggling between fitting in and embracing that
              missing part of ourselves.
            </p>
            <Line></Line>
            <h2 className="ui dividing header">
              The Lost Piece Of {this.props.username ? this.props.username : "Friend"} You’ve Been Seeking
            </h2>
            <p>{this.state.content.s3}</p>
            <p>
              But what if you could gain a permanent advantage in life by leveraging on these natural gifts? What sort
              of transformation would occur if you used this discovery to guide your decisions, actions, and emotions?
            </p>
            <p>Perhaps you’d…</p>
            <p>Experience the full depths of your relationships with others</p>
            <p>Find yourself saying “Yes” a lot more</p>
            <p>Uncover that courage you needed to pursue your passions</p>
            <p>Rapidly expand your network through genuine connections</p>
            <p>Finally becoming at peace with your true self</p>

            <Line></Line>
            <h2 className="ui dividing header">"Easier Said Than Done?" Well, Not Really</h2>
            <p>Don't be misled, {this.props.username ? this.props.username : "Friend"}!</p>
            <p>{this.state.content.s4}</p>
            <p>Perhaps even you feel that away about yourself sometimes.</p>
            <p>But that’s not true.</p>
            <p>
              {this.state.content.archetype}s are highly motivated, decisive, compassionate, talented, and are capable
              of soaring to great heights, seizing plenty of remarkable achievements for themselves…
            </p>
            <p>…That is, when they’re assured of their personalities, and synchronized with their purpose.</p>
            <p>
              In other words, the deeper you understand yourself, the more self aware you become, and the more
              effortless your aspirations and dreams become!
            </p>
            <p>
              Whether you want to be more at peace with your true self, uncover your biggest “why”, feel more connected
              to the world around you, or live a life of luxury…
            </p>
            <p>
              …It’s possible. And yes, like every other promise in life, it’s easier said than done - but doing it does
              not have to be difficult in the first place!
            </p>
            <Line></Line>
            <h2 className="ui dividing header">Self Discovery Simplified</h2>
            <p>
              Self discovery sounds pretty daunting - it’s intimate; and opens you up to being vulnerable and exposed.
            </p>
            <p>
              Beyond that, trying to unearth your hidden motivations and little-known characteristics can be super
              confusing. You could trial-and-error your way through, but it’s not going to be a bed of roses.
            </p>
            <p>Most (if not all) of us share relatively similar self-discovering struggles:</p>
            <p>…Pursuing certain passions without being sure if they’re aligned to your purpose…</p>
            <p>
              …Chasing after your goals, not knowing if these goals are truly yours or merely influences from others…
            </p>
            <p>
              …Just going along for the ride without being fully in control of defining what you want to experience…
            </p>
            <p>
              No matter how old, how wise, how happy we are, same struggles of awkwardly fumbling our way through remain
              the same; in a desperate race against time to figure out this whole “who we are” thing.
            </p>
            <p>
              But - it doesn’t have to be that way. That’s why we look to archetypes. The original models of
              personality, people, and purpose.
            </p>
            <p>Imagine having a mentor for your most ideal self: One that…</p>
            <p>
              Helps you define the exact things you want - stripped of influences from your upbringing, the media, and
              external environment
            </p>
            <p>Gives you an uncompromising model to follow, aspire to, and strive to be</p>
            <p>Guides you to discover your true purpose, your undiscovered passions, and innate personality</p>
            <p>
              {this.props.username ? this.props.username : "Friend"}, you don’t have to hide behind a face that’s not
              your own, or feel as if life’s just a passing phase.
            </p>

            <Line></Line>
            <h2 className="ui dividing header">There Is A Path For Your Next Evolution</h2>

            <p>
              Every single respectable, purposeful, and successful individual to walk the face of the earth (regardless
              of their archetype and regardless of their personality type), uncovered their personal paths through some
              form of self discovery (consciously or subconsciously).
            </p>
            <p>Sure - our goals, aspirations, destinies, and journeys even, will be different.</p>
            <p>But the path, the process that takes us are eerily similar.</p>
            <p>
              No matter what stage of life you’re at, no matter what struggles you’re encountering, you can still dig
              yourself out of the rut.
            </p>
            <p>You can evolve into the greatest {this.state.content.archetype} the world has ever seen!</p>
            <p>And it all begins with making a defining choice.</p>
            <Line></Line>
            <h2 className="ui dividing header">There Is A Path To A Concrete Purpose</h2>

            <p>
              Humans are fickle beings - our why’s shift along with our moods, and that definite purpose we were so sure
              of just a week ago quickly turns murky.
            </p>
            <p>
              By diving deeper into the archetypes that form the core of your personality, you can learn to develop your
              own concrete purpose.
            </p>
            <p>
              Imagine a solid foundation you can return to whenever motivation dissipates. A self-defining mission that
              will keep you laser-focused, leading you to the goals and successes of your wildest dreams.
            </p>
            <p>Gone will be the days of uncertainty, idleness, and watching the years simply pass you by.</p>
            <h2 className="ui dividing header">There Is A Path To Limitless Growth</h2>
            <p>
              Discover how you can leverage on your {this.state.content.archetype}’s hidden talents and personality
              traits to continuously blossom, and strike off your most desired goals and achievements.
            </p>
            <p>
              Whether you’re gunning for a promotion, looking to make your business work, or simply wanting to improve
              yourself as a revered human being - everything starts within you; not outside of you.
            </p>
            <p>
              Through revealing the dragon standing between you and infinite growth, you’ll learn how to confront it and
              conquer it, giving you the confidence and courage to face anything and everything that might come your
              way.
            </p>
            <Line></Line>
            <h2 className="ui dividing header">There Is A Path To Picture-Perfect Love</h2>
            <p>
              The stronger your relationship with yourself, the more fulfilling and powerful your relationships will be
              with others.
            </p>
            <p>
              Once you’ve become aware of your true self, you can possess the confidence and openness needed to attract
              and retain the partner of your deepest desires.
            </p>
            <p>
              You’ll uncover the exact traits and attributes of others that are not just compatible with you, but will
              complement you to become a “power couple” that constantly encourages and motivates each other.
            </p>
            <p>This is experiencing love and relationships at a completely different level of intimacy.</p>
            <Line></Line>
            <h2 className="ui dividing header">
              Take The First Step To Becoming The Best {this.state.content.archetype} The World Has Ever Seen
            </h2>
            <p>If you’re ready to be inspired… </p>
            <p>
              …To start translating your brilliant ideas into compelling action; to align your direction with purpose
              and passion…
            </p>
            <p>
              Then you must discover this one self-discovery secret that massively successful individuals have used to
              craft the best version of themselves.
            </p>
            <p>
              On behalf of the TwelveTypes team, I’m incredibly excited to introduce a special tool we’ve prepared - for
              self-seekers like you to attain the goals and ambitions of your utmost desires:
            </p>
            <Line></Line>
            <h2 className="ui dividing header">Introducing: Your Personalized Premium Archetype Profile</h2>
            <p>
              Whether you’re searching for more insights about who you are, or why you’re here, this powerful
              personality report reveals everything you need to know about being a {this.state.content.archetype}.
            </p>
            <p>
              …Including deeper insights into your intrinsic strengths and talents, more actionable advice about your
              weaknesses, and a complete exposé of the biggest challenge you will have to conquer as a{" "}
              {this.state.content.archetype}.
            </p>
            <p>
              And of course, just as we model the successes before us, you will have a figure to follow - giving you the
              most experiential and accelerated results possible.
            </p>
            <p>This is a resource that will reside in your repertoire of self improvement tools… Forever.</p>
            <p>
              In other words, {this.props.username ? this.props.username : "Friend"} - this is a journey of epic
              self-discovery; one that’s going to help you fully embrace who you truly are.
            </p>
            <Line></Line>
            <h2 className="ui dividing header">You’ve just dipped your toes… Now get ready to take the plunge!</h2>
            <p>
              The free archetype results you’ve just seen is merely a fraction of the personalised insights and wisdom
              that you can gain immediate access to!
            </p>
            <p>
              Inside of your Premium Archetype Profile, we’ve revealed several mind-blowing{" "}
              {this.state.content.archetype} secrets you can use to massively transform your life:
            </p>
            <div className="ui large bulleted list">
              <div className="item">
                Discover the “X Factor” of your unique personality composition that can make you instantly more
                memorable and magnetic.
              </div>
              <div className="item">
                Avoid making mistakes in personal interactions and passion pursuits by mastering your personality’s
                hidden “achilles heel”.
              </div>
              <div className="item">
                The 2 most fulfilling goals that you secretly want to achieve and help you make your mark on the world.
              </div>
              <div className="item">
                Gain access to a designated and personality-tailored path to conquering your personality’s most
                crippling fears to live a life of courage and constant improvement.
              </div>
              <div className="item">
                Become a “dragon slayer” who overcomes the most impossible challenges and obstacles by leveraging on
                your personality’s unique strengths and talents.
              </div>
              <div className="item">
                Know your remarkable gifts and virtues that define you as a {this.state.content.archetype}.
              </div>
              <div className="item">
                Identify the Shadows of your archetype that are holding you back from achieving more - and then discover
                how you can set them ablaze and live out your best self.
              </div>
              <div className="item">
                Follow a progressive path that will elevate you to the highest levels of what it means to be an esteemed
                and distinguished {this.state.content.archetype}
              </div>
              <div className="item">
                Pin-point the exact place where you are in life right now, and the exact actions you need to take to
                achieve your goals and desires by unearthing the various ways your archetype and personality manifests
                itself.
              </div>
              <div className="item">
                Start killing it in your career with actionable “personality tricks” that you can apply immediately to
                become more influential, noticeable, and valued.
              </div>
              <div className="item">
                Embrace your entrepreneurial spirit when you discover the various industries and business opportunities
                where your personality construct will not only survive, but thrive!
              </div>
            </div>
            <Line></Line>
            <h2 className="ui dividing header">
              Gain Immediate Access To Your Premium Archetype Profile For Just $27.
            </h2>
            <p>
              This is a report that you’ll pour through over, and over again - gaining incrementally more insights, more
              wisdom, and more self-awareness every time you open it up.
            </p>
            <p>
              <em>
                “The National Association of College Stores (NACS) says the average college student will spend $655 on
                textbooks each year, but with a single textbook easily costing as much as $300, that total can easily be
                much higher.”
              </em>
            </p>
            <p>A single college textbook costs TEN TIMES that. And graduates almost NEVER give them a second look.</p>
            <p>No fake inflated prices.</p>
            <p>No fake discounts.</p>
            <p>No silly gimmicks</p>
            <p>
              Just an honest, excellent personality report that has the potential to transform your life, align your
              passions and directions, and reinforce your strengths and special gifts…{" "}
            </p>
            <p>…At a VERY affordable price.</p>
            <Line></Line>
            <h2 className="ui dividing header">Call us crazy, offbeat, or just super strange</h2>
            <p>
              But we LOVE seeing people happy, successful, and living their best lives. Life is, after all, a journey -
              not a competition.
            </p>
            <p>So I’m going to make you an even WILDER guarantee.</p>
            <p>If you don’t fall completely in love your Premium Archetype Profile…</p>
            <p>
              …For ANY reason whatsoever; maybe you’re completely livid for ONE grammatical error we made in the report…
            </p>
            <p>
              Just send in a request to our amazing support team within 60 days from the day you purchased, and we’ll
              give you a refund in FULL.
            </p>
            <p>
              Why? Because that’s how much we believe your Premium Archetype Profile is going to impact in you. And also
              because in the last 6 months, LESS than 5% of the TwelveTypes faction have asked for their money back.
            </p>
            <Line></Line>
            <h2 className="ui dividing header">What would it take to see a grand, enormous change in your life?</h2>
            <p>If all this did was create that spark you needed to wholly accept the truth about who you are…</p>
            <p>Or give you the courage and certainty to trust your instincts when making astronomical decisions…</p>
            <p>
              Or simply serve as a permanent and constant reminder of your life’s single purpose to help you pull
              through the darkest of times…
            </p>
            <p>…Would you agree that it should be a part of your personal growth?</p>
            <p>
              The Premium Archetype Profile was specifically created for the curious inquisitors, the defenders of the
              weak, the wallflowers, and the ones who want to push themselves above and beyond.
            </p>
            <p>
              If this manifesto resonates with you, kindred spirit, then I look forward to welcoming you to our
              TwelveTypes faction!
            </p>
            <div className="ui centered column row remove-padding">
              <a
                href="http://twelvetypes-test.individua1.pay.clickbank.net/"
                className="ui huge submit button custom-background-orange"
              >
                Purchase
              </a>
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
export default connect(mapStateToProps, null)(SalesLetterPage);

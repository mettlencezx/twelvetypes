import React from "react"
import Divider from "./Divider"
import logo from "../../assets/images/logo/logo-color.png"

const About = props => {
  return (
    <div className="ui vertical stripe quote segment">
      <Divider title="ABOUT" />
      <div className="ui center aligned stackable grid container">
        <div className="center aligned row">
          <div className="seven wide column background-orange">
            {/* <h3>"Understanding one's character and others around you will give you a wider perception of how you can fully interact and optimize your interpersonal relationship with people. This improves your intuition and good judgement when it comes to dealing with your personal growth and success"</h3> */}
            <p>
              "Understanding one's character and others around you will give you
              a wider perception of how you can fully interact and optimize your
              interpersonal relationship with people. This improves your
              intuition and good judgement when it comes to dealing with your
              personal growth and success"
            </p>
          </div>
          <div className="seven wide column explorer">
            <div className="content inside background">
              <img alt="TwelveTypes Logo" src={logo} />
            </div>
          </div>
        </div>
        {props.detail ? (
          <div className="center aligned row">
            <div className="twelve wide column background-orange">
              <p>
                Greetings and welcome to TwelveTypes.com, a place where you can
                discover your true potential through our free personality test
                designed specifically to determine not only your specific
                archetype based on the Carl Jung personality test, but also on
                improving your personality traits. By deeply delving into your
                characteristics, you will be able to discover your strengths and
                weaknesses, drastically improving your ability to adapt with the
                world around you, particularly on every important aspects of
                your life such as your personal growth, learning abilities,
                personal and interpersonal relationships. Not only does
                TwelveTypes.com offer you a detailed look into your undiscovered
                character traits, but we can also help you in finding more about
                yourself and what you can become by fully understanding other
                archetypes and how to fully deal with them.
              </p>
              <p>
                Our main goal is to help you discover the “real” you that has
                the ability to become more than what you presently are right
                now, a whole new person, capable of accomplishing wonderful
                things, that is trapped between stagnation and success. We have
                prepared a personality type test that goes beyond pointing out
                your true inner character, but also gives you a better
                perspective on how to reach your goals in life by revealing the
                true potential of your respective archetype. Not only can you
                have a clearer sight of what lies beyond your destiny, but you
                will be able to take hold of your own destiny from the hands of
                fate and rule your life, the way that you want to.
              </p>
              <p>
                As we said before, our sole intention is to bring you out from
                your “inner shell”, that same shell of doubt and reluctance that
                is limiting you from encouraging you to to do your best in what
                you do and become what you want to be. Understand this when we
                say that we believe that everybody and we do mean everybody has
                a great potential lurking within them that needs to be brought
                out through positive nurturing and encouragement. One proven way
                to accomplish that is through discovering their “real” selves,
                in an unbiased and non-judgemental means of self-realization and
                acceptance. But to fully understand ourselves, means that we
                have to find out who we really are and why we behave in such a
                way so that we can learn to develop positive habits that you can
                use in our daily lives.
              </p>
              <p>
                The key in every question in life is understanding the right
                questions that you have to ask for yourself and that is “What do
                you really want your life to become?”. That is why
                TwelveTypes.com is here, to guide you towards achieving those
                specific questions, whether that be becoming a better person for
                others to see or conquering your self-doubts that are slowing
                you down from your specific goals in life, we are always here to
                give you an exponentially unique life-changing experience that
                will eventually lift you up to your full potential, again,
                welcome to TwelveTypes.com!
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default About

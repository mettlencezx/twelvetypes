import React from 'react';
import HeadLine from '../child/HeadLine';
import Divider from '../child/Divider';
import caregiverMale from '../../assets/images/archetypes/Caregiver.jpg';
import caregiverFemale from '../../assets/images/archetypes/CaregiverC.jpg';

class SingleArchetypePage extends React.Component {
  render() {
    return (
      <div className="ui vertical stripe quote segment">
        <Divider title="ARCHETYPE" />
          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <div className="six wide column">
                <img src={caregiverMale} className="ui large bordered rounded image" alt="archetype" />
              </div>
              <div className="eight wide right floated column">
                <h3 className="ui header">Introduction</h3>
                <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics. Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered. Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered. Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
              </div>
            </div>
          </div>

          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <div className="sixteen wide column">
                <h3 className="ui header">Content 1</h3>
                <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics. Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered. Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered. Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
              </div>
            </div>
          </div>

          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <div className="eight wide column">
                <h3 className="ui header">Content 2</h3>
                <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics. Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered. Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered. Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered. Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered. </p>
              </div>
              <div className="six wide right floated column">
                <img src={caregiverFemale} className="ui large bordered rounded image" alt="archetype" />
              </div>
            </div>
          </div>

          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <div className="sixteen wide column">
                <h3 className="ui header">Conclusion</h3>
                <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics. Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered. Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered. Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
              </div>
            </div>
          </div>
        <HeadLine />
      </div>
    )
  }
}

export default SingleArchetypePage;
import React from 'react';
import 'node_modules/bs-stepper/dist/css/bs-stepper.min.css';
import BsStepper from 'bs-stepper';

class Stepper extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.stepper = new BsStepper(document.querySelector(`#${this.props.name}`), {
      linear: false,
      Animation: true,
    });
  }

  render() {
    return (
      <div id={this.props.name} className="bs-stepper">
        <div className="bs-stepper-header" role="tablist">
          
        </div>
        <div className="bs-stepper-contnt">
          {
            this.props.children.map(step => {
              
            })
          }
        </div>
      </div>
    );
  }
}
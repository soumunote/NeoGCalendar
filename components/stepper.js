import React from 'react';
import 'node_modules/bs-stepper/dist/css/bs-stepper.min.css';
import BsStepper from 'bs-stepper';

class Step extends React.Component {


}

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
          {
            this.props.children
              .filter(step => step instanceof Step)
              .map(step => 
                <div class="step" data-target={`#${this.props.id}.content`}>
                  <button type="button" class="step-trigger" role="tab" arial-controls={`${this.props.}.content`} id={`${this.props.id}.trigger`}>
                    <span class="bs-stepper-circle">{step.props.no}</span>
                    <span class="bs-stepper-label">{step.props.label}</span>
                  </button>
                </div>
              })
          }
        </div>
        <div className="bs-stepper-contnt">
          {
            this.props.children
              .filter(step => step instanceof Step)
              .map(step => {
                <div id={`${this.props.id}.content`} class="content" role="tabpanel" aria-labelledby={`${this.props.id}.trigger`}>
                  {step.children}
                </div>
              })
          }
        </div>
      </div>
    );
  }
}
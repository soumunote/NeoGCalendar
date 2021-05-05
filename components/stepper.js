import React from 'react';
import PropTypes from 'prop-types';
import 'node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'node_modules/bs-stepper/dist/css/bs-stepper.min.css';
import BsStepper from 'bs-stepper';

class Step extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={this.props.id} className="content" role="tabpanel" aria-labelledby={`${this.props.id}.trigger`}>
        {this.props.children}
      </div>
    );
  }
}

Step.propTypes = {
  id: PropTypes.string.isRequired,
  no: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
}

class Stepper extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.stepper = new BsStepper(document.querySelector(`#${this.props.id}`), {
      linear: false,
      Animation: true,
    });
  }

  render() {
    return (
      <div id={this.props.id} className="bs-stepper">
        <div className="bs-stepper-header" role="tablist">
          {
            React.Children.map(this.props.children, step => 
              <div className="step" data-target={`#${step.props.id}`}>
                <button type="button" className="step-trigger" role="tab" arial-controls={step.props.id} id={`${step.props.id}.trigger`}>
                  <span className="bs-stepper-circle">{step.props.no}</span>
                  <span className="bs-stepper-label">{step.props.label}</span>
                </button>
              </div>
            )
          }
        </div>
        <div className="bs-stepper-contnt">
          {
            React.Children.map(this.props.children, content =>
              <div id={content.props.id} className="content" role="tabpanel" aria-labelledby={`${content.props.id}.trigger`}>
                {content.props.children}
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

Stepper.propTypes = {

}

export default Stepper;
export { Step };

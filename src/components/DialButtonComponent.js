
import React from 'react';
import { Icon, withTaskContext } from '@twilio/flex-ui';



const buttonStyle = {
  marginLeft: '1em',
};
class DialButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick() {
    const attributes = this.props.task.attributes;

    this.props.flex.Actions.invokeAction("StartOutboundCall", {
        destination: attributes.numberToCall,
        taskAttributes : {
            parcelId : attributes.parcelId,
            name: attributes.name,
            numberToCall: attributes.numberToCall
        }
    });
  }

  //render buttons just for the custom task
  render() {
    //console.log(this.props.task.attributes);
    if (this.props.task.attributes.type != 'obd-dial') {
        return (
            <div></div>
        )
    }
    else return (
      <>
        {
            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained Twilio-Button MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall" style={buttonStyle} onClick={this.onClick.bind(this)}>{this.props.buttonName}</button>
        }
      </>
    );
  }
}

export default withTaskContext(DialButtonComponent);
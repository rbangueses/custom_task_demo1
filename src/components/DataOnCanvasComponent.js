import './DataOnCanvasComponent.css';


class DataOnCanvasComponent extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {}
  }

  

  render() { 
    
    const { task } = this.props;
    console.log("changing display name to: ", task.attributes.name)
    console.log("previous value was: ", this.props.flex.Manager.getInstance().strings.TaskLineOutboundCallHeader );
    this.props.flex.Manager.getInstance().strings.TaskLineOutboundCallHeader = task.attributes.name;
    this.props.flex.Manager.getInstance().strings.TaskLineOutboundCallTitle = task.attributes.name;
    this.props.flex.Manager.getInstance().strings.TaskLineCallAssigned = task.attributes.name;

    return (
      <div key='data-on-canvas-div'>
        <table key='data-on-canvas-table' className='DataOnCanvasTable'>
          <tbody>
          <tr>
            <td>Branch to contact: {task.attributes.name}</td>
          </tr>
          <tr>
              <td>Parcel ID: {task.attributes.parcelId}</td>
          </tr>
          <tr>
              <td>Number to contact: {task.attributes.numberToCall}</td>
          </tr>
          </tbody>
        </table>
        <br></br>    
      </div>  
    )
  }
}

export default DataOnCanvasComponent;
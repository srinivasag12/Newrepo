import React from "react";
import {
  Calendar as ReactBigCalendar,
  momentLocalizer,
} from "react-big-calendar";
// dependency plugin for react-big-calendar
import moment from "moment";
import SweetAlert from "react-bootstrap-sweetalert";
import { ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Card, CardBody, Row, Col } from "reactstrap";
import { events } from "variables/general.js";

const localizer = momentLocalizer(moment);

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events,
      alert: null,
    };
    this.ownerData = [
      { Id: 1, OwnerColor: '#ffaa00' },
      { Id: 2, OwnerColor: 'blue' },
      { Id: 3, OwnerColor: 'green' },
      { Id: 4, OwnerColor: '#e3165b' }
    ];
    this.fields = { value: 'Id' };
    this.data = [
      {
        Id: 1,
        Subject: 'ISM',
        StartTime: new Date(2021, 7, 22, 11, 0),
        EndTime: new Date(2021, 7, 22, 12, 30),
      },
      {
        Id: 2,
        Subject: 'ISPS',
        StartTime: new Date(2021, 7, 18, 10, 0),
        EndTime: new Date(2021, 7, 18, 12, 30),
      },
      {
        Id: 3,
        Subject: 'MLC',
        StartTime: new Date(2021, 7, 15, 11, 30),
        EndTime: new Date(2021, 7, 15, 12, 30),
      },
      {
        Id: 4,
        Subject: 'DMLC',
        StartTime: new Date(2021, 7, 12, 9, 0),
        EndTime: new Date(2021, 7, 12, 12, 0),
      },
    ];

  }
  onPopupOpen(args) {
    if (args.type === 'Editor') {
      let statusElement = args.element.querySelector('#EventType');
      statusElement.setAttribute('name', 'EventType');
    }
  }
  editorTemplate(props) {
    return (props !== undefined ? <table className="custom-event-editor" style={{ width: '100%', cellpadding: '5' }}><tbody>
      <tr><td className="e-textlabel">Summary</td><td colSpan={4}>
        <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} />
      </td></tr>
      <tr><td className="e-textlabel">Vessel Name</td><td colSpan={4}>
      {localStorage.getItem("role") == "owner1" ?
       <DropDownListComponent id="EventType" placeholder='Choose status' data-name="EventType" className="e-field" style={{ width: '100%' }} dataSource={['DEEPWATER PROTEUS', 'DEEPWATER POSEIDON','DHIRUBHAI DEEPWATER KG2','DEEPWATER PONTUS']} value={props.EventType || null}></DropDownListComponent>
        :<DropDownListComponent id="EventType" placeholder='Choose status' data-name="EventType" className="e-field" style={{ width: '100%' }} dataSource={['FEDERAL TAMBO', 'BALTIC LEOPARD','NAVIGARE BACCA', 'SEAMAX FAIRFIELD']} value={props.EventType || null}></DropDownListComponent>
          }
      </td></tr>
      <tr><td className="e-textlabel">Start Date</td><td colSpan={4}>
        <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
      </td></tr>
      <tr><td className="e-textlabel">End Date</td><td colSpan={4}>
        <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
      </td></tr>
      <tr><td className="e-textlabel">Reason</td><td colSpan={4}>
        <textarea id="Description" className="e-field e-input" name="Description" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
      </td></tr></tbody></table> : <div></div>);
  }
  // selectedEvent = (event) => {
  //   alert(event.title);
  // };
  // addNewEventAlert = (slotInfo) => {
  //   this.setState({
  //     alert: (
  //       <SweetAlert
  //         input
  //         showCancel
  //         style={{ display: "block", marginTop: "-100px" }}
  //         title="Input something"
  //         onConfirm={(e) => this.addNewEvent(e, slotInfo)}
  //         onCancel={() => this.hideAlert()}
  //         confirmBtnBsStyle="info"
  //         cancelBtnBsStyle="danger"
  //       />
  //     ),
  //   });
  // };

  // addNewEvent = (e, slotInfo) => {
  //   var newEvents = this.state.events;
  //   newEvents.push({
  //     title: e,
  //     start: slotInfo.start,
  //     end: slotInfo.end,
  //   });
  //   this.setState({
  //     alert: null,
  //     events: newEvents,
  //   });
  // };
  // hideAlert = () => {
  //   this.setState({
  //     alert: null,
  //   });
  // };
  // eventColors = (event, start, end, isSelected) => {
  //   var backgroundColor = "event-";
  //   event.color
  //     ? (backgroundColor = backgroundColor + event.color)
  //     : (backgroundColor = backgroundColor + "default");
  //   return {
  //     className: backgroundColor,
  //   };
  // };

  render() {
    return (
      <>
        <div className="content">
          {this.state.alert}
          <Row>
            <Col className="ml-auto mr-auto" md="12">
              <Card className="card-calendar">
                <CardBody>

                  <ScheduleComponent width='100%' height='550px' currentView="Month"
                    selectedDate={new Date(2021, 7, 22)} ref={schedule => this.scheduleObj = schedule} eventSettings={{ dataSource: this.data }} editorTemplate={this.editorTemplate.bind(this)} showQuickInfo={false} popupOpen={this.onPopupOpen.bind(this)}>
                    <ResourcesDirective>
                      <ResourceDirective field='Id' title='Owner' name='Owners' allowMultiple={false} dataSource={this.ownerData}  idField='Id' allowGroupEdit={false} colorField='OwnerColor'></ResourceDirective>
                    </ResourcesDirective>
                    <ViewsDirective>
                      <ViewDirective option='Day' />
                      <ViewDirective option='Week' />
                      <ViewDirective option='WorkWeek' />
                      <ViewDirective option='Month' />
                      <ViewDirective option='Agenda' />
                    </ViewsDirective>

                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                  </ScheduleComponent>;

                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Calendar;

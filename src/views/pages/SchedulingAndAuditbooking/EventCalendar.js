import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Container, Row, Col, Card } from "reactstrap";
import { useHistory } from "react-router-dom";
import dayjs from "dayjs";
import React from "react";
import { IsmTypeId } from "constants/AppConstants";
import { IspsTypeId } from "constants/AppConstants";
import { MlcTypeId } from "constants/AppConstants";
import "./EventCalendar.scss";
import { Popover } from "antd";

const loadEvents = () => {
  const requests = JSON.parse(localStorage.getItem("requests") || "[]");
  let events = [];

  [...requests].forEach((request) => {
    const { auditType, auditSubType, inspectionType, ...otherProps } = request;
    const audOrInsps = auditType || inspectionType;

    const eventString =
      audOrInsps.length > 1
        ? audOrInsps.map(({ desc }) => desc).join(" , ")
        : audOrInsps[0].desc;

    const eventIdsString =
      audOrInsps.length > 1
        ? audOrInsps.map(({ id }) => id).join(" , ")
        : `${audOrInsps[0].id}`;

    events.push({
      title: `${request.vesselName}`,
      start: dayjs(new Date(request.eta)).format("YYYY-MM-DD"),
      end: dayjs(new Date(request.etd)).format("YYYY-MM-DD"),
      textColor: "black",
      backgroundColor:
        audOrInsps.length > 1 ? "blueviolet" : audOrInsps[0]?.color || "gray",
      details: {
        ...otherProps,
        audOrInsps: [...audOrInsps],
        ...(!!auditSubType ? { auditSubType: auditSubType } : {}),
      },
      eventType: !!auditType ? "A" : "I",
      eventIdsString: eventIdsString,
      eventTypeList: eventString,
      height: "40",
    });
  });

  return events;
};

const EventInfoPopover = (props) => {
  return <Popover />;
};

const autoSizeProps = { xs: "auto", sm: "auto", md: "auto", lg: "auto" };

const EventInfoContent = (eventInfo) => {
  const {
    backgroundColor,
    event: {
      _def: {
        title,
        extendedProps: { details, eventType, eventTypeList },
      },
    },
  } = eventInfo;

  console.log(details);

  return details.audOrInsps?.length > 1 ? (
    <Container style={{ backgroundColor: "white" }}>
      <Row style={{ justifyContent: "flex-start", alignItems: "center" }}>
        <Col
          {...autoSizeProps}
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: 600,
            padding: "2px",
            color: "black",
          }}
        >
          {title}
          {details?.location
            ? ` / ${details.location.toUpperCase()} / ${details.pICName} / `
            : ""}
        </Col>
        {details.audOrInsps.map((audOrInsp) => (
          <Col {...autoSizeProps} style={{ padding: "2.4px" }}>
            <div
              style={{
                backgroundColor: `${audOrInsp.color}`,
                padding: "0 4px",
                borderRadius: "4px",
                color: 'black'
              }}
            >
              <b>{audOrInsp.desc}</b>
            </div>
          </Col>
        ))}
        {/* <Col {...autoSizeProps} style={{ padding: "2px" }}>
          <b style={{ fontSize: "0.8em", fontWeight: 500 }}>
            {eventType === "A" && details.auditSubType?.desc
              ? ` (${details.auditSubType.desc})`
              : ``}
          </b>
        </Col> */}
      </Row>
    </Container>
  ) : (
    <Container style={{ backgroundColor: "white" }}>
      <Row style={{ justifyContent: "flex-start" }}>
        <Col
          {...autoSizeProps}
          style={{
            padding: "2px",
            fontWeight: 500,
            color: "black",
            whiteSpace: "break-spaces",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>
            {title}
            {details?.location
              ? ` / ${details.location.toUpperCase()} / ${details.pICName} / `
              : ""}
            <span
              style={{
                padding: "0 4px",
                backgroundColor: `${details.audOrInsps[0].color}`,
                borderRadius: "4px",
              }}
            >
              <b>{eventTypeList}</b>
            </span>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

const EventCalendar = () => {
  const historyHelper = useHistory();
  const events = [...loadEvents()];
  const [calendarEvents, setCalendarEvents] = React.useState(events);

  const filterAuditsOrInspection = (id, audOrInspType) => () => {
    setCalendarEvents(
      events.filter(({ eventType, eventIdsString }) => {
        console.log(`Id: ${id}, idString: ${eventIdsString}`);
        return (
          `${eventType}`.toUpperCase() === `${audOrInspType}`.toUpperCase() &&
          `${eventIdsString}`.includes(`${id}`)
        );
      })
    );
  };

  return (
    <div className="content">
      <Container>
        <Row>
          <Col>
            <Card className="p-3">
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={(val) => {
                  console.log("Date data: ", val);
                  historyHelper.push("/admin/requestAuditOrInspection", {
                    dateInfo: val.date,
                  });
                }}
                dayMaxEvents={3}
                headerToolbar={{
                  left: "title",
                  right: "all,ism,isps,mlc,vm,vetting,ais prev,next",
                }}
                events={calendarEvents}
                editable={true}
                eventClick={(eventDetail) => {
                  console.log("Clicked event! ", eventDetail);
                }}
                customButtons={{
                  all: {
                    text: "ALL",
                    click: () => setCalendarEvents(events),
                  },
                  ism: {
                    text: "ISM",
                    click: filterAuditsOrInspection(IsmTypeId, "A"),
                  },
                  isps: {
                    text: "ISPS",
                    click: filterAuditsOrInspection(IspsTypeId, "A"),
                  },
                  mlc: {
                    text: "MLC",
                    click: filterAuditsOrInspection(MlcTypeId, "A"),
                  },
                  vm: {
                    text: "VM",
                    click: filterAuditsOrInspection(1, "I"),
                  },
                  vetting: {
                    text: "VETTING",
                    click: filterAuditsOrInspection(2, "I"),
                  },
                  ais: {
                    text: "AIS",
                    click: filterAuditsOrInspection(0, "I"),
                  },
                }}
                eventDrop={(eventDropArg) =>
                  console.log("Event drop arg: ", eventDropArg)
                }
                eventResize={(eventResizeZoneArg) => {
                  console.log("Event resize arg: ", eventResizeZoneArg);
                }}
                eventContent={EventInfoContent}
                weekends={true}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EventCalendar;

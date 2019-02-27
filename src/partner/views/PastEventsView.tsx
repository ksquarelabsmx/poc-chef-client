import React from "react";
import { Header } from "src/partner/modules/Header";
import { EventListContainer } from "src/partner/modules/EventList";
import { EventService } from "src/partner/services";
import { IEvent } from "src/partner/models/Event";
import { dateComparator } from "src/partner/utils/EventListUtils";
import { NotificationContext } from "src/providers";

export interface IPastEventsViewState {
  events: IEvent[];
  isLoading: boolean;
  error?: Error;
}

export class PastEventsView extends React.Component<{}, IPastEventsViewState> {
  state = {
    events: [],
    isLoading: false,
    error: undefined,
  };
  static contextType = NotificationContext.NotificationContext;

  handleEditEvent = (event: IEvent) => {
    const newEvents = this.state.events.map(ev => {
      if (ev["id"] === event["id"]) {
        return event;
      }
      return ev;
    });
    this.setState({ events: newEvents });
  };

  public async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const events = await EventService.eventService.getPastEvents();
      events.sort(dateComparator);
      this.setState({ events, isLoading: false });
    } catch (err) {
      this.setState({
        isLoading: false,
        error: err,
      });
    }
  }

  handleCancelEvent = (eventId: string) => {
    this.context.handleShowNotification("You cannot cancel a past event.");
  };

  public render() {
    if (this.state.isLoading) {
      return (
        <React.Fragment>
          <Header title="Past Events" />
          <p>is loading</p>
        </React.Fragment>
      );
    }

    if (this.state.error) {
      return (
        <React.Fragment>
          <Header title="Past Events" />
          <p>is loading</p>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <Header title="Past Events" />
        <EventListContainer
          handleCancelEvent={this.handleCancelEvent}
          events={this.state.events}
          onEdit={this.handleEditEvent}
        />
      </React.Fragment>
    );
  }
}

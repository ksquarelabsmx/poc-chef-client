import React from "react";
import EventListContainer from "../modules/EventList";
import eventService from "../services/EventService";
import { IEvent } from "../interfaces/Event";
import { CompDateEvent } from "../utils/EventListUtils";

interface ICurrentEventsViewState {
  events: IEvent[];
  isLoading: boolean;
  error?: Error;
}

class CurrentEventsView extends React.Component<{}, ICurrentEventsViewState> {
  state = {
    events: [],
    isLoading: false,
    error: undefined
  };

  public async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const events = await eventService.getCurrentEvents();
      events.sort(CompDateEvent);
      this.setState({ events, isLoading: false });
    } catch (err) {
      this.setState({
        isLoading: false,
        error: err
      });
    }
  }

  public render() {
    if (this.state.isLoading) {
      return <p>is loading</p>;
    }
    if (this.state.error) {
      return <p>An error has occurred</p>;
    }
    return (
      <React.Fragment>
        <EventListContainer events={this.state.events} />
      </React.Fragment>
    );
  }
}

export default CurrentEventsView;

import { IEvent } from "src/partner/models/Event";
import { EventMapper, OrderMapper } from "src/partner/mappers";
import { IOrder } from "../models/Order";

export interface IEventService {
  getCurrentEvents: () => Promise<IEvent[]>;
  getPastEvents: () => Promise<IEvent[]>;
  getOrdersByEventId: (idEvent: string) => Promise<IOrder[]>;
}

export const eventService: IEventService = {
  getCurrentEvents: async () => {
    try {
      const res = await fetch("/api/current_events.json");
      const data = await res.json();
      return data.events.map(EventMapper.toEntity);
    } catch (err) {
      console.error(err);
    }
  },

  getPastEvents: async () => {
    try {
      const res = await fetch("/api/past_events.json");
      const data = await res.json();
      return data.events.map(EventMapper.toEntity);
    } catch (err) {
      console.error(err);
    }
  },

  getOrdersByEventId: async (eventId: string) => {
    try {
      const res = await fetch("/api/event_orders.json");
      const data = await res.json();
      return data.orders.map(OrderMapper.toEntity);
    } catch (err) {
      console.error(err);
    }
  }
};
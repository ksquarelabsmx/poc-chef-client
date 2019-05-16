import reducer, {
  initialState,
  fetchingSucess,
  startFetching,
  fetchingError,
  IState,
} from "./pastEvent";
import { IFluxStandardAction } from "src/common/ducks";
import { IEvent } from "../models";
import { event } from "../models/Event";

describe("Partner's Past Events", () => {
  it("Should return default pastEvent state", () => {
    const emptyAction: IFluxStandardAction = { type: "" };
    const newState: IState = reducer(initialState, emptyAction);
    expect(newState).toBe(initialState);
  });

  it("Should return a new state with isLoading equal to true", () => {
    const newStateFake: IState = { ...initialState, isLoading: true };
    const newState: IState = reducer(initialState, startFetching());
    expect(newState).toEqual(newStateFake);
  });

  it("Should return a new state with events loaded", () => {
    const newEvents: IEvent.IEvent[] = [event(), event()];
    const newStateFake: IState = { ...initialState, isLoading: false, events: newEvents };
    const newState: IState = reducer(initialState, fetchingSucess(newEvents));
    expect(newState).toEqual(newStateFake);
  });

  it("Should return a new state with a error as payload", () => {
    const error = new Error("error at fetching");
    const newStateFake: IState = { ...initialState, isLoading: false, error };
    const newState: IState = reducer(initialState, fetchingError(error));
    expect(newState).toEqual(newStateFake);
  });
});

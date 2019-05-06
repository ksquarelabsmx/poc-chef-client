import { IUserEvent, IUserEventDTO } from "../models/UserEvent";
import { IProductDTO } from "src/partner/models/Product";
import { OrderProductMapper } from ".";
import { IOrderDTO } from "../models/Order";

export const toEntity = (dto: IUserEventDTO): IUserEvent => {
  const h = dto.end_hour / 60;
  const m = dto.end_hour % 60;
  const endHour = new Date();
  endHour.setHours(h);
  endHour.setMinutes(m);

  const eventData: IUserEvent = {
    id: dto.id,
    name: dto.name,
    expirationDate: new Date(dto.expiration_date),
    endHour,
    createdBy: dto.created_by,
    total: dto.total,
    markedAsFinished: dto.marked_as_finished,
    cancelled: dto.cancelled,
    createdAt: dto.created_at,
    updatedAt: dto.updated_at,
    orders: [],
    products: {},
  };
  if (dto.products) {
    dto.products.forEach((product: IProductDTO) => {
      if (product.id) {
        eventData.products[product.id] = OrderProductMapper.toEntity(product);
      }
    });
  }

  return eventData;
};

export const toOrderDTO = (event: IUserEvent): IOrderDTO => {
  const orderDTO: IOrderDTO = {
    id: "",
    user_id: "",
    //user_name: ""  //to be added  later
    event_id: event.id,
    price: 0,
    products: [],
    created_by: "",
    paid: false,
    cancelled: false,
    created_at: Date.now(),
    updated_at: Date.now(),
  };
  const productsKeys = Object.keys(event.products);
  if (productsKeys.length > 0) {
    productsKeys.forEach((key: string) => {
      if (event.products[key].quantity < 1) {
        return;
      }
      orderDTO.products.push(OrderProductMapper.toDTO(event.products[key]));
    });
  }
  return orderDTO;
};
import { IOrder, IOrderDTO } from "../models/Order";
import { numberDecimals } from "src/common/utils/utils";
import { unixDateToString } from "src/common/mappers/DateMapper";

export const toEntity = (dto: IOrderDTO): IOrder => {
  return {
    id: dto.id,
    order: dto.order,
    products: dto.products,
    date: unixDateToString(dto.date),
    total: numberDecimals(dto.total),
    paid: dto.paid,
    checked: false
  };
};
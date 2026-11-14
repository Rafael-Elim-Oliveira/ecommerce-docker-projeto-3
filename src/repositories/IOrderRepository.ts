import { Order, OrderLine } from '../domain/Order';

export interface IOrderRepository {
  create(customer: string, items: OrderLine[], total: number): Promise<Order>;
  
  findByID(id: number): Promise<Order | null>;
}

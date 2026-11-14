import { inject, injectable } from 'inversify';
import { PrismaClient } from '@prisma/client';
import { Order, OrderLine } from '../domain/Order';
import { IOrderRepository } from './IOrderRepository';
import { TYPES } from '../container/types';

@injectable()
export class PrismaOrderRepository implements IOrderRepository {
  constructor(@inject(TYPES.Prisma) private prisma: PrismaClient) {}

  async create(customer: string, items: OrderLine[], total: number): Promise<Order> {
    const row = await this.prisma.order.create({
      data: { customer, items: JSON.stringify(items), total, status: 'confirmed' },
    });
    return { id: row.id, customer: row.customer, items, total: row.total, status: row.status };
  }

  async findByID(id: number): Promise<Order | null> {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: { items: true }
    });
    return order;
  }
}

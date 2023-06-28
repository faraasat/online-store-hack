import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core'

import { InferModel } from 'drizzle-orm'

export const OrdersTable = pgTable(
  'orders',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    image: text('image').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.email),
    }
  }
)

export type User = InferModel<typeof OrdersTable>
export type NewUser = InferModel<typeof OrdersTable, 'insert'>
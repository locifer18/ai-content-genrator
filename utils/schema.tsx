import { boolean, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
    id: serial('id').primaryKey(),
    formData: varchar('formData').notNull(),
    aiResponse: text('aiResponse'),
    templateSlug: varchar('templateSlug').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: timestamp('createdAt',
        { withTimezone: true }).notNull()
});

export const UserSubscription = pgTable('userSubscription', {
    id: serial('id').primaryKey(),
    email: varchar('email').notNull(),
    userName: varchar('userName'),
    active: boolean('active').default(true),
    paymentId: varchar('paymentId'),
    joinData: timestamp('joinData', { withTimezone: true }).notNull()
});
// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `korhas-keeper_${name}`);

export const images = createTable(
  "image",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    url: varchar("url", { length: 256 }).notNull(),
    userId: varchar("userId", { length: 256 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export const players = createTable(
  "player",
  {
    playerId: serial("id").primaryKey(),
    name: varchar("name", {length: 128 }).notNull(),
  },
  (example) => ({
    playerIndex: index("player_idx").on(example.name),
  })
);

export const characters = createTable(
  "character",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    player: varchar("player", { length: 128 }).notNull(),

  },
  (example) => ({
    characterIndex: index("char_idx").on(example.name),
  })
);

export const downtime = createTable(
  "downtime",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 128 }),
    total_points: integer("total_points"),
  },
  (example) => ({
    dtIndex: index("dt_idx").on(example.name),
  })
)
import { relations } from 'drizzle-orm';
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: uuid('id').defaultRandom().primaryKey(),
	email: text('email'),
	createdAt: timestamp('created_at'),
	updatedAt: timestamp('updated_at')
});

export const projects = pgTable('projects', {
	id: uuid('id').defaultRandom().primaryKey(),
	name: text('name'),
	createdAt: timestamp('created_at'),
	updatedAt: timestamp('updated_at')
});

export const usersProjects = pgTable('users_projects', {
	userId: uuid('user_id')
		.notNull()
		.references(() => users.id),
	projectId: uuid('project_id')
		.notNull()
		.references(() => projects.id)
});

export const usersRelations = relations(users, ({ many }) => ({
	usersProjects: many(usersProjects)
}));

export const projectRelations = relations(projects, ({ many }) => ({
	usersProjects: many(usersProjects)
}));

export const usersProjectsRelations = relations(usersProjects, ({ one }) => ({
	project: one(projects, {
		fields: [usersProjects.projectId],
		references: [projects.id]
	}),
	user: one(users, {
		fields: [usersProjects.userId],
		references: [users.id]
	})
}));

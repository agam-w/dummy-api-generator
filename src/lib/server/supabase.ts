export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
	public: {
		Tables: {
			functions_data: {
				Row: {
					created_at: string;
					description: string;
					function_name: string;
					id: number;
					is_function: boolean;
					short_code: string;
					short_name: string;
					updated_at: string;
					uuid: string;
				};
			};
			projects: {
				Row: {
					created_at: string | null;
					id: string;
					name: string | null;
					updated_at: string | null;
				};
				Insert: {
					created_at?: string | null;
					id?: string;
					name?: string | null;
					updated_at?: string | null;
				};
				Update: {
					created_at?: string | null;
					id?: string;
					name?: string | null;
					updated_at?: string | null;
				};
				Relationships: [];
			};
			user_projects: {
				Row: {
					id: number;
					project_id: string;
					user_id: string;
				};
				Insert: {
					id?: number;
					project_id: string;
					user_id?: string;
				};
				Update: {
					id?: number;
					project_id?: string;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'user_projects_project_id_fkey';
						columns: ['project_id'];
						referencedRelation: 'projects';
						referencedColumns: ['id'];
					}
				];
			};
			users: {
				Row: {
					created_at: string | null;
					email: string | null;
					id: string;
					updated_at: string | null;
				};
				Insert: {
					created_at?: string | null;
					email?: string | null;
					id?: string;
					updated_at?: string | null;
				};
				Update: {
					created_at?: string | null;
					email?: string | null;
					id?: string;
					updated_at?: string | null;
				};
				Relationships: [];
			};
			users_projects: {
				Row: {
					project_id: string;
					user_id: string;
				};
				Insert: {
					project_id: string;
					user_id: string;
				};
				Update: {
					project_id?: string;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'users_projects_project_id_projects_id_fk';
						columns: ['project_id'];
						referencedRelation: 'projects';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'users_projects_user_id_users_id_fk';
						columns: ['user_id'];
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}

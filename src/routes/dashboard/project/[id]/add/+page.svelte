<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import type { ResourceSchema } from '$lib/types/resource';
	import Icon from '@iconify/svelte';
	import type { ActionData } from './$types';
	export let form: ActionData;

	let isSubmitting = false;

	let schema: ResourceSchema = [
		{
			name: 'id',
			type: 'id'
		},
		{
			name: 'name',
			type: 'string'
		}
	];

	function delField(idx: number) {
		const newSchema = [...schema]
    newSchema.splice(idx, 1);
    schema = newSchema
	}

	function addField() {
		schema = [...schema, { name: 'field', type: 'string' }];
	}
</script>

<div class="max-w-xl mx-auto py-20">
	<p class="mb-4 dark:text-gray-200 text-xl font-medium">Create a new resource</p>

	<form
		class="space-y-4"
		method="post"
		use:enhance={() => {
			isSubmitting = true;
			return async ({ update }) => {
				await update();
				isSubmitting = false;
			};
		}}
	>
		<div class="flex flex-col space-y-2">
			<label for="" class="font-medium">Name</label>
			<p class="text-sm">
				Enter meaningful resource name, it will be used to generate API endpoints.
			</p>
			<input
				type="text"
				name="name"
				class="dark:bg-gray-500/10 border border-gray-500/20 focus:border-gray-500/50 placeholder:text-gray-500/50 transition ease outline-none p-2 rounded-global"
				placeholder="Example: users, posts"
				required
			/>
		</div>
		<div class="flex flex-col space-y-2">
			<label for="" class="font-medium">Schema</label>
			<p class="text-sm">Define Resource schema, it will be used to generate mock data.</p>
			{#each schema as field, i}
				<div class="flex space-x-2">
					<input
						type="text"
						name="name"
						class="dark:bg-gray-500/10 border border-gray-500/20 focus:border-gray-500/50 placeholder:text-gray-500/50 transition ease outline-none p-2 rounded-global"
						placeholder="Field name"
						value={field.name}
					/>
					<input
						type="text"
						name="name"
						class="dark:bg-gray-500/10 border border-gray-500/20 focus:border-gray-500/50 placeholder:text-gray-500/50 transition ease outline-none p-2 rounded-global"
						placeholder="Field name"
						value={field.type}
					/>
					<Button type="button" onClick={() => delField(i)}><Icon icon="mdi:close" /></Button>
				</div>
			{/each}
			<div class="flex">
				<Button type="button" onClick={addField}><Icon icon="mdi:add" /></Button>
			</div>
		</div>
		<div>
			<Button primary disabled={isSubmitting}>Create</Button>
		</div>
	</form>

	{#if form?.success === false}
		<p>{form?.message}</p>
	{/if}
</div>

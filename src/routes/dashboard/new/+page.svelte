<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import type { ActionData } from './$types';
	export let form: ActionData;

	let isSubmitting = false;
</script>

<div class="max-w-md mx-auto py-20">
	<p class="mb-4 dark:text-gray-200 text-xl font-medium">Create a new project</p>

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
			<label for="">Name</label>
			<input
				type="text"
				name="name"
				class="dark:bg-gray-500/10 border border-gray-500/20 focus:border-gray-500/50 transition ease outline-none p-2 rounded-global"
        required
			/>
		</div>
		<div>
			<Button primary disabled={isSubmitting}>Create project</Button>
		</div>
	</form>

	{#if form?.success === false}
		<p>{form?.message}</p>
	{/if}
</div>

<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-2xl font-medium text-gray-200 mb-4">All projects</h1>

<Button primary href="/dashboard/new">Add new project</Button>

<div class="grid grid-cols-4 my-8">
	{#each data.projects as project}
		<a
			href={`/dashboard/project/${project.id}`}
			class="p-4 rounded h-[100px] global border border-gray-500/30 bg-gray-500/10 hover:bg-gray-500/20 transition ease"
		>
			<p class="font-medium text-lg">{project.name}</p>
		</a>
	{/each}
</div>

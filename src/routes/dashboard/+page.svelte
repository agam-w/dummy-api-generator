<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-xl font-medium dark:text-gray-200 mb-4">Projects</h1>

<Button primary href="/dashboard/new">
	<div class="flex items-center space-x-2">
		<Icon icon="mdi:add" />
		<p>New project</p>
	</div>
</Button>

<div class="grid md:grid-cols-2 lg:grid-cols-4 my-8">
	{#each data.projects as project}
		<a
			href={`/dashboard/project/${project.id}`}
			class="p-4 rounded-global h-[100px] global border-2 border-gray-500/20 hover:bg-gray-500/10 bg-transparent transition ease"
		>
			<p class="font-medium text-lg">{project.name}</p>
		</a>
	{/each}
</div>

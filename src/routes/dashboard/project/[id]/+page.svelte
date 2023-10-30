<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	export let data;

	let baseUrl = '';
	let project = data.project;

	$: apiUrl = `${baseUrl}/api/${project?.id}`;

	onMount(() => (baseUrl = window.location.origin));
</script>

<h1 class="text-xl font-medium dark:text-gray-200">{project?.name}</h1>

<div class="rounded-global overflow-clip border-2 border-gray-500/20 my-8">
	<div class="bg-gray-500/10 p-3 border-b-2 border-b-gray-500/20">
		<p class="font-medium mb-2">API endpoint</p>
		<p class="font-mono text-sm">{apiUrl}<span class="text-gray-500">/:endpoint</span></p>
	</div>
	<div class="p-3">
		<Button primary flex href={`/dashboard/project/${data.project?.id}/add`}>
			<Icon icon="akar-icons:plus" />
			<p>New resource</p></Button
		>
	</div>
</div>

<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import MobileDrawer from '$lib/components/MobileDrawer.svelte';

	let navMenu = [
		{ label: 'Features', path: '/' },
		{ label: 'Docs', path: '/' },
		{ label: 'Pricing', path: '/' }
	];
</script>

<svelte:head>
	<title>Dummy API Generator</title>
</svelte:head>

<div class="min-h-screen bg-[#0f0f0f] text-gray-400">
	<div class="container">
		<nav class="flex items-center justify-between py-8">
			<MobileDrawer>
				<div class="flex flex-1 flex-col">
					{#each navMenu as m}
						<a href={m.path} class="p-4 transition hover:text-primary-500">{m.label}</a>
					{/each}
					<a href="/dashboard" class="p-4 transition hover:text-primary-500">Sign In</a>
				</div>
			</MobileDrawer>

			<p class="text-xl font-semibold text-primary-500">Dummy API Generator</p>

			<div class="hidden flex-1 justify-center space-x-9 md:flex">
				{#each navMenu as m}
					<a href={m.path} class="font-semibold transition hover:text-primary-500">{m.label}</a>
				{/each}
			</div>

			<div class="flex items-center space-x-4">
				<div class="hidden lg:block">
					<Button href="/dashboard" size="sm">Sign In</Button>
				</div>
			</div>
		</nav>

		<main>
			<div class="flex flex-col-reverse justify-center py-20 lg:flex-row lg:py-28">
				<div class="space-y-8 lg:basis-1/2">
					<h1 class="text-center text-5xl font-semibold text-white">AI-Powered <br /> Dummy API Generator</h1>
					<p class="text-center text-lg">
						Say goodbye to time-consuming manual API creation. Our AI engine generates dummy APIs in
						seconds, freeing up your team for more important tasks.
					</p>
				</div>
			</div>

			<div class="py-20">
				<div class="space-y-8 lg:basis-2/3">
					<h2 class="text-4xl font-semibold text-white">Instant API Generation</h2>
					<p class="text-lg">
						Say goodbye to time-consuming manual API creation. Our AI engine generates dummy APIs in
						seconds, freeing up your team for more important tasks.
					</p>
				</div>
			</div>
		</main>
	</div>

	<footer>
		<div class="h-[1px] bg-gradient-to-r from-transparent via-gray-500/30 to-transparent" />
		<div
			class="container flex flex-col items-center justify-between space-y-4 py-4 text-sm lg:flex-row lg:space-y-0 lg:py-8"
		>
			<div>© 2023 Dummy API Generator</div>
			<div class="flex flex-1 justify-end space-x-4">
				{#each navMenu as m}
					<a href={m.path} class="transition hover:text-primary-500">{m.label}</a>
				{/each}
			</div>
		</div>
	</footer>
</div>

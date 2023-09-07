<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import ButtonOutline from '$lib/components/ButtonOutline.svelte';
	import MobileDrawer from '$lib/components/MobileDrawer.svelte';
	import ThemeToggler from '$lib/components/ThemeToggler.svelte';

	// let navMenu = [
	// 	{ label: 'Features', path: '/' },
	// 	{ label: 'Docs', path: '/' },
	// 	{ label: 'Pricing', path: '/' }
	// ];
</script>

<svelte:head>
	<title>Dummy API Generator</title>
</svelte:head>

<div class="min-h-screen dark:bg-[#0f0f0f] dark:text-gray-400">
	<div class="container">
		<nav class="flex items-center justify-between py-8">
			<!-- <MobileDrawer> -->
			<!-- 	<div class="flex flex-1 flex-col"> -->
			<!-- 		{#each navMenu as m} -->
			<!-- 			<a href={m.path} class="p-4 transition hover:text-primary-500">{m.label}</a> -->
			<!-- 		{/each} -->
			<!-- 		<a href="/dashboard" class="p-4 transition hover:text-primary-500">Sign In</a> -->
			<!-- 	</div> -->
			<!-- </MobileDrawer> -->

			<p class="text-xl font-bold text-primary-500">Dummy API Generator</p>

			<!-- <div class="hidden flex-1 justify-center space-x-9 md:flex"> -->
			<!-- 	{#each navMenu as m} -->
			<!-- 		<a href={m.path} class="font-semibold transition hover:text-primary-500">{m.label}</a> -->
			<!-- 	{/each} -->
			<!-- </div> -->

			<div class="flex items-center space-x-4">
				<ThemeToggler />
				<div class="hidden lg:block">
					<ButtonOutline href="/auth/login" size="sm">Sign In</ButtonOutline>
				</div>
			</div>
		</nav>

		<main>
			<div class="flex flex-col-reverse justify-center py-24 lg:flex-row lg:py-28">
				<div class="space-y-10 lg:basis-2/3 text-xl">
					<h1 class="text-center text-5xl font-bold dark:text-white">
						AI-Powered <br /> Dummy API Generator
					</h1>
					<p class="text-center font-medium">
						Say goodbye to time-consuming manual API creation. Our AI engine generates dummy APIs in
						seconds, freeing up your team for more important tasks.
					</p>
					<div class="flex justify-center space-x-4">
						<Button primary href="/auth/login">Get Started</Button>
						<ButtonOutline>Docs</ButtonOutline>
					</div>
				</div>
			</div>

			<div class="flex py-24">
				<div class="space-y-8 lg:basis-2/3">
					<h2 class="text-3xl font-semibold dark:text-white">Simple data modeling</h2>
					<p class="text-xl font-medium">
						Define resource schema and data generators for each field
					</p>
				</div>
			</div>

			<div class="flex py-24">
				<div class="space-y-8 lg:basis-2/3">
					<h2 class="text-3xl font-semibold dark:text-white">Instant API Generation</h2>
					<p class="text-xl font-medium">
						Say goodbye to time-consuming manual API creation. Our AI engine generates dummy APIs in
						seconds, freeing up your team for more important tasks.
					</p>
				</div>
			</div>
		</main>
	</div>

	<footer>
		<div
			class="container flex flex-col items-center justify-between space-y-4 py-4 text-sm lg:flex-row lg:space-y-0 lg:py-8"
		>
			<div>© 2023 Dummy API Generator</div>
			<!-- <div class="flex flex-1 justify-end space-x-4"> -->
			<!-- 	{#each navMenu as m} -->
			<!-- 		<a href={m.path} class="transition hover:text-primary-500">{m.label}</a> -->
			<!-- 	{/each} -->
			<!-- </div> -->
		</div>
	</footer>
</div>

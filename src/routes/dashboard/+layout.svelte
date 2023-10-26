<script lang="ts">
	import LogoutButton from '$lib/components/LogoutButton.svelte';
	import ThemeToggler from '$lib/components/ThemeToggler.svelte';
</script>

<svelte:head>
	<title>Dashboard | APIGen</title>
</svelte:head>

<div class="h-screen dark:bg-[#0f0f0f] dark:text-gray-400">
	<div class="flex h-full">
		<!-- main -->
		<div class="flex flex-col flex-1">
			<!-- header -->
			<div class="border-b border-b-gray-500/20">
				<div class="container flex justify-between p-4">
					<div class="flex items-center">
						<a href="/dashboard" class="text-xl font-semibold text-primary-500">APIGen</a>
					</div>
					<div class="flex items-center">
						<ThemeToggler />
						<LogoutButton />
					</div>
				</div>
			</div>
			<!-- end of header -->

			<div class="container p-4">
				<slot />
			</div>
		</div>
		<!-- end of main -->
	</div>
</div>

<script lang="ts">
	import MobileDrawer from '$lib/components/MobileDrawer.svelte';

	let menus = [
		{ label: 'Dashboard', path: '/dashboard' },
		{ label: 'Settings', path: '/dashboard/settings' },
		{ label: 'Logout', path: '/auth/logout' }
	];
</script>

<svelte:head>
	<title>Dashboard | APIGen</title>
</svelte:head>

<div class="h-screen bg-[#0f0f0f] text-gray-400">
	<div class="flex h-full">
		<!-- sidebar -->
		<div class="hidden md:block w-[200px] p-4 border-r border-r-gray-500/20">
			<p class="text-xl font-semibold mb-4 text-primary-500">APIGen</p>
			<div class="flex flex-col space-y-3">
				{#each menus as m}
					<a href={m.path} class="transition hover:text-gray-300">{m.label}</a>
				{/each}
			</div>
		</div>
		<!-- end of sidebar -->

		<!-- main -->
		<div class="flex flex-col flex-1">
			<!-- header -->
			<div class="flex items-center p-4 border-b border-b-gray-500/20">
				<!-- mobile menu -->
				<div class="flex md:hidden">
					<MobileDrawer>
						<div class="flex flex-1 flex-col p-3">
							{#each menus as m}
								<a href={m.path} class="p-2 transition hover:text-primary-500">{m.label}</a>
							{/each}
						</div>
					</MobileDrawer>
					<p class="ml-2 text-xl font-semibold text-primary-500">APIGen</p>
				</div>

				<!-- breadcrumb -->
				<div class="hidden font-medium text-sm items-center md:flex space-x-2">
					<a class="text-gray-300" href="/">APIGen</a>
					<p class="text-gray-600">/</p>
					<p class="text-gray-500">Dashboard</p>
				</div>
			</div>
			<!-- end of header -->

			<div class="p-4">
				<slot />
			</div>
		</div>
		<!-- end of main -->
	</div>
</div>

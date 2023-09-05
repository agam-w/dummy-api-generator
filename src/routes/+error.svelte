<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="h-screen bg-[#0f0f0f] text-gray-400">
	<div class="h-full justify-center flex flex-col space-y-3 items-center">
		<h1 class="text-5xl font-bold text-white">{$page.status}</h1>
		<p class="text-xl font-medium text-gray-400">{$page.error?.message}</p>
	</div>
</div>

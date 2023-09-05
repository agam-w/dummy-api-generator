<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="max-w-md">
	<p class="mb-4 text-gray-300 text-lg font-semibold">Create a new project</p>

	<form class="space-y-4" method="post" use:enhance>
		<div class="flex flex-col space-y-2">
			<label for="">Name</label>
			<input
				type="text"
				name="name"
				class="bg-gray-500/10 border border-gray-500/20 focus:border-gray-500/50 transition ease outline-none p-2 rounded-global"
			/>
		</div>
		<div>
			<button
				class="flex items-center justify-center space-x-2 bg-primary-500 disabled:bg-primary-300 hover:bg-primary-400 w-full px-4 py-2 rounded-global text-white transition ease"
				>Create new project</button
			>
		</div>
	</form>
</div>

<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<div class="min-h-screen bg-[#0f0f0f] text-gray-500">
	<div class="container py-20">
		<div class="max-w-md mx-auto">
			<h1 class="text-2xl font-bold mb-4 text-white">Login</h1>

			<form class="space-y-4" method="post" use:enhance>
				<div class="flex flex-col">
					<label for="email">Email</label>
					<input class="p-2 rounded-global" name="email" value={form?.email ?? ''} required />
				</div>
				<div class="flex flex-col">
					<label for="email">Password</label>
					<input class="p-2 rounded-global" type="password" name="password" required />
				</div>
				<button class="bg-primary-500 hover:bg-primary-400 w-full px-4 py-2 rounded-global text-white">Sign up</button>
			</form>

			{#if form?.message}
				<p class="my-4 {form?.success ? 'text-green-400' : 'text-red-400'}">{form.message}</p>
			{/if}
		</div>
	</div>
</div>

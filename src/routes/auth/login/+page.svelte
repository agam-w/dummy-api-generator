<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';
	import { onMount } from 'svelte';

	export let data;

	let isDarkTheme = false;

	onMount(() => {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			isDarkTheme = true;
		} else {
			isDarkTheme = false;
		}
	});

	// import { enhance } from '$app/forms';
	// import Icon from '@iconify/svelte';
	// import type { ActionData } from './$types';
	// export let form: ActionData;
	// let isSubmitting = false;
</script>

<div class="min-h-screen dark:bg-[#0f0f0f] dark:text-gray-500">
	<div class="container py-20">
		<div class="max-w-md mx-auto">
			<h1 class="text-3xl font-bold mb-8 text-primary-500 text-center">APIGen</h1>

			<!-- <h1 class="text-2xl font-bold mb-4 text-white">Login</h1> -->

			<!-- <form -->
			<!-- 	class="space-y-4" -->
			<!-- 	method="post" -->
			<!-- 	use:enhance={() => { -->
			<!-- 		isSubmitting = true; -->
			<!-- 		return async ({ update }) => { -->
			<!-- 			await update(); -->
			<!-- 			isSubmitting = false; -->
			<!-- 		}; -->
			<!-- 	}} -->
			<!-- > -->
			<!-- 	<div class="flex flex-col"> -->
			<!-- 		<label for="email">Email</label> -->
			<!-- 		<input class="p-2 rounded-global" name="email" value={form?.email ?? ''} required /> -->
			<!-- 	</div> -->
			<!-- 	<div class="flex flex-col"> -->
			<!-- 		<label for="email">Password</label> -->
			<!-- 		<input class="p-2 rounded-global" type="password" name="password" required /> -->
			<!-- 	</div> -->
			<!-- 	<button -->
			<!-- 		disabled={isSubmitting} -->
			<!-- 		class="flex items-center justify-center space-x-2 bg-primary-500 disabled:bg-primary-300 hover:bg-primary-400 w-full px-4 py-2 rounded-global text-white" -->
			<!-- 	> -->
			<!-- 		{#if isSubmitting} -->
			<!-- 			<Icon class="animate-spin" icon="gg:spinner" /> -->
			<!-- 		{/if} -->
			<!-- 		<p>Sign up</p> -->
			<!-- 	</button> -->
			<!-- </form> -->
			<!---->
			<!-- {#if form?.message} -->
			<!-- 	<p class="my-4 {form?.success ? 'text-green-400' : 'text-red-400'}">{form.message}</p> -->
			<!-- {/if} -->

			<Auth
				additionalData={data}
				supabaseClient={data.supabase}
				view="magic_link"
				providers={['github']}
				redirectTo={`${data.url}/auth/callback`}
				theme={isDarkTheme ? "dark" : "default"}
				appearance={{
					theme: ThemeSupa,
					variables: {
						default: {
							colors: {
								brand: '#22c55e',
								brandAccent: '#4ade80',
								messageText: '#22c55e'
							},
              radii: {
                inputBorderRadius: '0.5rem',
                borderRadiusButton: '0.5rem',
                buttonBorderRadius: '0.5rem'
              }
						}
					}
				}}
			/>
		</div>
	</div>
</div>

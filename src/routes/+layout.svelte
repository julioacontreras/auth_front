<script lang="ts">
	import '$lib/ui/style/main.scss'
	import './style.scss'
	import { onMount } from 'svelte';
	import '$lib/start'

	// Adapters
	import { i18n } from '$lib/core/adapters/i18n'

	// Reactive language
	let t: Record<string, unknown> = {};
	i18n.subscribe((data: unknown) => {
		t = data as Record<string, unknown>;
	});
	
	// Components
	import TopBarMenu from '$lib/ui/components/topBarMenu/index.svelte'
	import Link from '$lib/ui/components/link/index.svelte'

	// Reactive variables
	$: showPage = false

    onMount(async () => {
        i18n.setLang(await i18n.getDefaultLang())
		showPage = true
    })
</script>

<div class="app">
	{#if showPage}
	<TopBarMenu>
		<div slot="end" class="end">
			<Link href="/">
				{t['general.login']}
			</Link>

			<Link href="/register">
				{t['general.register']}
			</Link>
		</div>
	</TopBarMenu>

	<slot />
	{/if}
</div>


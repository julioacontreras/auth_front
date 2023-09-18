<script>
	import '../designSystem/style/main.scss'
	import { onMount } from 'svelte';
	import '@/start'

	// Adapters
	import { i18n } from '@/core/adapters/i18n'
	
	// Components
	import TopBarMenu from '@/designSystem/components/topBarMenu/index.svelte'
	import Link from '@/designSystem/components/link/index.svelte'

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
				{i18n.t('general.login')}
			</Link>

			<Link href="/register">
				{i18n.t('general.register')}
			</Link>
		</div>
	</TopBarMenu>

	<slot />
	{/if}
</div>


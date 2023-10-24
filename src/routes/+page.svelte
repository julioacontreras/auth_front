<script lang="ts">
	// Adapters
	import { i18n } from '$lib/core/adapters/i18n'

	// Use cases
	import { login } from '$lib/businessRules/authentication/useCases/login'

	// Components & views
	import LoginForm from '$lib/ui/views/loginForm/index.svelte'
	import Alert from '$lib/ui/components/alert/index.svelte'

	$: showError = false
	$: messageError = ''

	// Reactive language
	let t: Record<string, string> = {};
	i18n.subscribe((data: unknown) => {
		t = data as Record<string, string>;
	});

    const errorActions = (error: any) => {
		messageError = error.message
		showError = true
	}

	const successActions = (response: any) => {
		showError = false
		if (response.status !== 'ok') {
			showError = true
			return
		}
	}
</script>

<Alert
	type="danger"
	title="Error"
	message={messageError}
	isVisible={showError}
/>
<LoginForm
	titleHeader={t['loginView.title']}
	mandatoryFieldMessage={t['general.mandatoryField']}
	emailNotValidMessage={t['general.emailNotValid']}
	titleLogin={t['general.login']}
	titleEmail={t['general.inputEmail.title']}
	titlePassword={t['general.inputPassword.title']}
	login={login}
	errorActions={errorActions}
	successActions={successActions}
/>

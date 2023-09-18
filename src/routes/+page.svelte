<script lang="ts">
	// Adapters
	import { i18n } from '@/core/adapters/i18n'

	// Use cases
	import { login } from '@/businessRules/authentication/useCases/login'

	// Components & views
	import LoginForm from '@/designSystem/views/loginForm/index.svelte'
	import Alert from '@/designSystem/components/alert/index.svelte'

	$: showError = false
	$: messageError = ''

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
	titleHeader={i18n.t('loginView.title')}
	mandatoryFieldMessage={i18n.t('general.mandatoryField')}
	emailNotValidMessage={i18n.t('general.emailNotValid')}
	titleLogin={i18n.t('general.login')}
	titleEmail={i18n.t('general.inputEmail.title')}
	titlePassword={i18n.t('general.inputPassword.title')}
	login={login}
	errorActions={errorActions}
	successActions={successActions}
/>

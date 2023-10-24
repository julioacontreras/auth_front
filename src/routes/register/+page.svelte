<script lang="ts">
	// Adapters
	import { i18n } from '@/lib/core/adapters/i18n'

	// Use cases
	import { register } from '@/lib/businessRules/authentication/useCases/register'

	// Components & views
	import RegisterForm from '@/lib/ui/views/registerForm/index.svelte'
	import Alert from '@/lib/ui/components/alert/index.svelte'

	// Reactive variables
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
<RegisterForm
	titleHeader={i18n.t('registerView.title')}
	mandatoryFieldMessage={i18n.t('general.mandatoryField')}
	emailNotValidMessage={i18n.t('general.emailNotValid')}
	emailNotMatchMessage={i18n.t('general.emailNotMatch')}
	passwordNotMatchMessage={i18n.t('general.passwordNotMatch')}
	titleRegister={i18n.t('general.register')}
	titleName={i18n.t('general.inputName.title')}
	titleEmail={i18n.t('general.inputEmail.title')}
	titleRepeatEmail={i18n.t('general.inputRepeatEmail.title')}
	titlePassword={i18n.t('general.inputPassword.title')}
	titleRepeatPassword={i18n.t('general.inputRepeatPassword.title')}
	register={register}
	errorActions={errorActions}
	successActions={successActions}
/>

<script lang="ts">
	// Adapters
	import { i18n } from '$lib/core/adapters/i18n'

	// Use cases
	import { register } from '$lib/businessRules/authentication/useCases/register'

	// Components & views
	import RegisterForm from '$lib/ui/views/registerForm/index.svelte'
	import Alert from '$lib/ui/components/alert/index.svelte'

	// Reactive variables
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
<RegisterForm
	titleHeader={t['registerView.title']}
	mandatoryFieldMessage={t['general.mandatoryField']}
	emailNotValidMessage={t['general.emailNotValid']}
	emailNotMatchMessage={t['general.emailNotMatch']}
	passwordNotMatchMessage={t['general.passwordNotMatch']}
	titleRegister={t['general.register']}
	titleName={t['general.inputName.title']}
	titleEmail={t['general.inputEmail.title']}
	titleRepeatEmail={t['general.inputRepeatEmail.title']}
	titlePassword={t['general.inputPassword.title']}
	titleRepeatPassword={t['general.inputRepeatPassword.title']}
	register={register}
	errorActions={errorActions}
	successActions={successActions}
/>

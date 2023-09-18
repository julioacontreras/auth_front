<script lang="ts">
    import './style.scss'
    import { useForm, HintGroup, Hint, email, required } from 'svelte-use-form'
    const form = useForm()

    // Components
    import Stack from  '../../components/stack/index.svelte'
    import InputEmail from  '../../components/inputEmail/index.svelte'
    import InputPassword from  '../../components/inputPassword/index.svelte'
    import Label from  '../../components/label/index.svelte'
    import Loader from  '../../components/loader/index.svelte'
    import Spacer from  '../../components/spacer/index.svelte'

    // Properties
    export let login: any
    export let errorActions: any
    export let successActions: any
    export let titleHeader: string
    export let titleLogin: string
    export let titleEmail: string
    export let titlePassword: string
    export let mandatoryFieldMessage: string
    export let emailNotValidMessage: string

    // Internal properties
    let isLoading: boolean = false

    async function executeLogin () {
        isLoading = true
        try {
            const data = await login()
            successActions(data)
        } catch(error) {
            errorActions(error)
        }
        isLoading = false
    } 
</script>

<section class="loginForm">
    <form use:form>
        <Stack classes="stackLogin">
            <Spacer size="sm" />
            <Label text="{titleHeader}" classes="font-lg"/>
            <Spacer size="sm" />

            <InputEmail placeholder="{titleEmail}" validator={[required, email]} />
            <HintGroup for="email">
                <Hint on="required">{mandatoryFieldMessage}</Hint>
                <Hint on="email" hideWhenRequired>{emailNotValidMessage}</Hint>
            </HintGroup>

            <InputPassword placeholder="{titlePassword}" validator={[required]} />
            <Hint for="password" on="required">{mandatoryFieldMessage}</Hint>

            <button class="primary" disabled={!$form.valid} on:click={executeLogin}>
                {titleLogin}
                {#if isLoading}
                <Loader isVisible={isLoading} size="sm" />
                {/if}
            </button>
        </Stack>
    </form>
</section>

<script lang="ts">
    import './style.scss'
    import { useForm, HintGroup, Hint, email, required, } from 'svelte-use-form'
    import { useValueMatch } from '@/designSystem/events/valueMatch'
    const form = useForm()

    // Components
    import Stack from  '../../components/stack/index.svelte'
    import InputText from  '../../components/inputText/index.svelte'
    import InputEmail from  '../../components/inputEmail/index.svelte'
    import InputPassword from  '../../components/inputPassword/index.svelte'
    import Label from  '../../components/label/index.svelte'
    import Loader from  '../../components/loader/index.svelte'
    import Spacer from  '../../components/spacer/index.svelte'

    // Properties
    export let register: any
    export let errorActions: any
    export let successActions: any
    export let titleHeader: string
    export let titleRegister: string
    export let titleName: string
    export let titleEmail: string
    export let titleRepeatEmail: string
    export let titlePassword: string
    export let titleRepeatPassword: string
    export let mandatoryFieldMessage: string
    export let emailNotValidMessage: string
    export let emailNotMatchMessage: string
    export let passwordNotMatchMessage: string

    // Internal properties
    let isLoading: boolean = false

    async function executeRegister () {
        isLoading = true
        try {
            const data = await register()
            successActions(data)
        } catch(error) {
            errorActions(error)
        }
        isLoading = false
    } 
</script>

<section class="registerForm">
    <form use:form>
        <Stack classes="stackRegister">
            <Spacer size="sm" />
            <Label text="{titleHeader}" classes="font-lg"/>
            <Spacer size="sm" />

            <InputText name="name" placeholder="{titleName}" validator={[required]} />
            <HintGroup for="name">
                <Hint on="required">{mandatoryFieldMessage}</Hint>
            </HintGroup>

            <Spacer size="sm" />

            <InputEmail placeholder="{titleEmail}" validator={[required, email]} />
            <HintGroup for="email">
                <Hint on="required">{mandatoryFieldMessage}</Hint>
                <Hint on="email" hideWhenRequired>{emailNotValidMessage}</Hint>
            </HintGroup>
            <InputEmail name="emaildMatch" placeholder="{titleRepeatEmail}" validator={[required, email, useValueMatch('email')]} />
            <HintGroup for="emaildMatch">
                <Hint on="required">{mandatoryFieldMessage}</Hint>
                <Hint on="email" hideWhenRequired>{emailNotValidMessage}</Hint>
                <Hint on="valueMatch" hideWhenRequired>{emailNotMatchMessage}</Hint>
            </HintGroup>

            <Spacer size="sm" />

            <InputPassword placeholder="{titlePassword}" validator={[required]} />
            <Hint for="password" on="required">{mandatoryFieldMessage}</Hint>
            <InputPassword name="passwordMatch" placeholder="{titleRepeatPassword}" validator={[required, useValueMatch('password')]} />
            <HintGroup for="passwordMatch">
                <Hint on="required">{mandatoryFieldMessage}</Hint>
                <Hint on="valueMatch" hideWhenRequired>{passwordNotMatchMessage}</Hint>
            </HintGroup>

            <button class="primary" disabled={!$form.valid} on:click={executeRegister}>
                {titleRegister}
                {#if isLoading}
                <Loader isVisible={isLoading} size="sm" />
                {/if}
            </button>
        </Stack>
    </form>
</section>

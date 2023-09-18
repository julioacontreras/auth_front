<script lang="ts">
    import { validators } from 'svelte-use-form';

    export let name: string = 'password';
    export let placeholder: string;
    export let validator: any;
</script>

<input type="password" name="{name}" placeholder="{placeholder}" use:validators={validator} autocomplete="on" />

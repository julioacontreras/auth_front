<script lang="ts">
    import { validators } from 'svelte-use-form';

    export let name: string = 'email';
    export let placeholder: string;
    export let validator: any;
</script>

<input type="email" name="{name}" placeholder="{placeholder}" use:validators={validator} autocomplete="off" />
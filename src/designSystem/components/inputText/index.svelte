<script lang="ts">
    import { validators } from 'svelte-use-form';

    export let name: string;
    export let value: string = '';
    export let placeholder: string;
    export let validator: any;
</script>

<input type="text" name="{name}" value="{value}" placeholder="{placeholder}" use:validators={validator}  />

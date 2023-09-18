<script lang="ts">
    import './style.scss'
    export let text: string;
    export let classes: string;
</script>

<p class="label {classes}"> 
    {text}
</p>    

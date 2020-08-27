<script>
  import List from "./List.svelte";
</script>

<List on:cardClicked={(ev) => console.log('App.Svelte', ev.detail)} />

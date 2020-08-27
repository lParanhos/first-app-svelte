<script>
  export let title = "My default title";
  export let cover =
    "https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg";
  export let menbersOnly = false;
  export let id = 0;

  const clickHandler = () => console.log(id);
</script>

<a
  href="https://leandroparanhos.netlify.app/"
  on:click|preventDefault={clickHandler}>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" src={cover} alt="Sunset in the mountains" />
    <div class="px-6 py-4">
      {#if menbersOnly}
        <p>Menbers Only</p>
      {:else}
        <p>&nbsp;</p>
      {/if}
      <div class="font-bold text-xl mb-2">{title}</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
        font-semibold text-gray-700 mr-2 mb-2">
        #photography
      </span>
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
        font-semibold text-gray-700 mr-2 mb-2">
        #travel
      </span>
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
        font-semibold text-gray-700 mr-2 mb-2">
        #winter
      </span>
    </div>
  </div>
</a>

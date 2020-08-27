<script>
  import { each } from "svelte/internal";
  import Card from "./Card.svelte";
  import Compo1 from "./Compo1.svelte";
  import Compo2 from "./Compo2.svelte";

  const data = [
    {
      title: "First Card",
      cover: "https://static.toiimg.com/photo/72975551.cms",
    },
    {
      title: "Second Card",
      menbersOnly: true,
      cover:
        "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
    },
    {
      title: "Third Card",
      cover: "https://static.toiimg.com/photo/72975551.cms",
    },
    {
      title: "Fourth Card",
      cover:
        "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
      menbersOnly: true,
    },
    {
      title: "Fifth Card",
      cover: "https://static.toiimg.com/photo/72975551.cms",
    },
    {
      title: "Sixth Card",
      menbersOnly: true,
      cover:
        "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
    },
  ];

  const [card1, card2] = data;
</script>

<div class="container mx-auto mt-4">
  <div class="grid grid-cols-2 gap-4">
    {#each data as item}
      {@debug item}
      <Card {...item} />
    {/each}
  </div>
</div>

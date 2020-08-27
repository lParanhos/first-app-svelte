<script>
  import { each } from "svelte/internal";
  import Card from "./Card.svelte";

  const data = [
    {
      id: 1,
      title: "First Card",
      cover: "https://static.toiimg.com/photo/72975551.cms",
    },
    {
      id: 2,
      title: "Second Card",
      menbersOnly: true,
      cover:
        "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
    },
    {
      id: 3,
      title: "Third Card",
      cover: "https://static.toiimg.com/photo/72975551.cms",
    },
    {
      id: 4,
      title: "Fourth Card",
      cover:
        "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
      menbersOnly: true,
    },
    {
      id: 5,
      title: "Fifth Card",
      cover: "https://static.toiimg.com/photo/72975551.cms",
    },
    {
      id: 6,
      title: "Sixth Card",
      menbersOnly: true,
      cover:
        "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
    },
  ];
</script>

<div class="container mx-auto mt-4">
  <div class="grid grid-cols-2 gap-4">
    {#each data as item}
      {@debug item}
      <Card {...item} />
    {/each}
  </div>
</div>

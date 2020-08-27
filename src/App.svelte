<script>
  import Card from "./Card.svelte";
  import Compo1 from "./Compo1.svelte";
  import Compo2 from "./Compo2.svelte";

  const data = [
    {
      title: "Meu titulo 1",
      cover: "https://static.toiimg.com/photo/72975551.cms",
    },
    {
      title: "Meu titulo 2",
      cover:
        "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
    },
  ];

  const [card1, card2] = data;
</script>

<div class="container mx-auto mt-4">
  <div class="grid grid-cols-2 gap-4">
    <Card {...card1} />
    <Card {...card2} />
    <Card {...card1} />
    <Card {...card2} />
    <Card {...card1} />
    <Card {...card2} />
    <Card {...card1} />
    <Card {...card2} />
  </div>
</div>

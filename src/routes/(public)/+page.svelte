<script lang="ts">
  import { onMount } from "svelte";
  import type { Vacature } from "$lib/types";
  import Vacatures from "$lib/components/vacatures.svelte";
  import VacatureItem from "$lib/components/vacature.svelte";
  import Perks from "$lib/components/perks.svelte";
  import Wrapper from "$lib/components/wrapper.svelte";
  import Header from "$lib/components/header.svelte";
  import Container from "$lib/components/container.svelte";
  import Statement from "$lib/components/statement.svelte";
  import Contact from "$lib/components/contact.svelte";
  import Footer from "$lib/components/footer.svelte";

  let vacatures: Vacature[] = [];

  const fetchVacatures = () => {
    fetch("/posts")
      .then((response) => response.json())
      .then((data) => {
        vacatures = data;
      });
  };

  onMount(() => fetchVacatures());
</script>

<Wrapper>
  <Header />
  <Container>
    <Statement />
  </Container>
  <Container>
    <Perks />
  </Container>
  <Container>
    <Vacatures>
      {#each vacatures as vacature}
        <VacatureItem {vacature} />
      {/each}
    </Vacatures>
  </Container>
  <Container>
    <Contact />
  </Container>
  <Footer />
</Wrapper>

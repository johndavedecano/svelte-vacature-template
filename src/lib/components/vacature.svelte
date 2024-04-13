<script lang="ts">
  import MdAccountBalance from "svelte-icons/md/MdAccountBalance.svelte";
  import MdPersonPinCircle from "svelte-icons/md/MdPersonPinCircle.svelte";
  import MdKeyboardArrowDown from "svelte-icons/md/MdKeyboardArrowDown.svelte";
  import MdKeyboardArrowUp from "svelte-icons/md/MdKeyboardArrowUp.svelte";
  import MdAccountCircle from "svelte-icons/md/MdAccountCircle.svelte";

  import type { Vacature } from "$lib/types";
  import Icon from "./icon.svelte";

  let expanded = false;

  export let vacature: Vacature = {
    id: "",
    title: "",
    type: "",
    location: "",
    href: "",
    description: "",
    company: "",
  };
</script>

<div class="vacature-item" id="vacatures">
  <div class="vacature-overview">
    <a
      href="/"
      class="expand"
      on:click|preventDefault={() => (expanded = !expanded)}
    >
      <Icon icon={expanded ? MdKeyboardArrowUp : MdKeyboardArrowDown} />
    </a>
    <div class="vacature-content">
      <div class="vacature-title">
        <a
          href={vacature.href}
          on:click|preventDefault={() => (expanded = !expanded)}
        >
          {vacature.title}
        </a>
      </div>
      <div class="vacature-icons">
        <div class="vacature-type">
          <div class="vacature-icon">
            <MdAccountBalance />
          </div>
          {vacature.type}
        </div>
        <div class="vacature-type">
          <div class="vacature-icon">
            <MdPersonPinCircle />
          </div>
          {vacature.location}
        </div>
        <div class="vacature-type">
          <div class="vacature-icon">
            <MdAccountCircle />
          </div>
          {vacature.company}
        </div>
      </div>
    </div>
    <div class="vacature-action">
      <a href={vacature.href}>Solliciteren</a>
    </div>
  </div>
  {#if expanded}
    <div class="vacature-description">
      {vacature.description}
    </div>
  {/if}
</div>

<style>
  .vacatures-title {
    @apply text-2xl lg:text-4xl font-bold text-black mb-4 lg:mb-8;
  }

  .vacature-description {
    @apply py-8;
  }

  .expanded {
    @apply block pr-4;
  }

  .vacature-overview {
    @apply flex w-full;
  }

  .vacature-item {
    @apply flex flex-col border border-slate-200 p-2 lg:p-4 lg:items-center mb-8 rounded-lg;
  }

  .vacature-content {
    @apply flex-1 flex flex-col pr-4 lg:pr-8 mb-4 lg:mb-0;
  }

  .vacature-actions {
    @apply flex flex-col lg:flex-row pt-4;
  }

  .vacature-icons {
    @apply flex items-center gap-4;
  }

  .vacature-icon {
    width: 20px;
    height: 20px;
  }

  .vacature-title {
    @apply font-bold text-black text-lg;
  }

  .vacature-type {
    @apply flex items-center gap-2 text-gray-800;
  }

  .vacature-action a {
    @apply bg-blue-950 inline-flex p-2 text-white rounded-md min-w-28 text-center items-center justify-center;
  }
</style>

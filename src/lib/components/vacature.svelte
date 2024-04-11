<script lang="ts">
  import MdAccountBalance from "svelte-icons/md/MdAccountBalance.svelte";
  import MdPersonPinCircle from "svelte-icons/md/MdPersonPinCircle.svelte";
  import type { Vacature } from "$lib/types";

  export let vacature: Vacature = {
    title: "",
    type: "",
    location: "",
    href: "",
  };
</script>

<div class="vacature-item" id="vacatures">
  <div class="vacature-content">
    <div class="vacature-title">
      <a href={vacature.href}>
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
    </div>
  </div>
  <div class="vacature-action">
    <a href={vacature.href}>Solliciteren</a>
  </div>
</div>

<style>
  .vacatures-title {
    @apply text-2xl lg:text-4xl font-bold text-black mb-4 lg:mb-8;
  }

  .vacature-item {
    @apply flex flex-col lg:flex-row border border-slate-200 p-4 lg:p-8 lg:items-center mb-8 rounded-lg;
  }

  .vacature-content {
    @apply flex-1 flex flex-col pr-0 lg:pr-4 mb-4 lg:mb-0;
  }

  .vacature-actions {
    @apply flex flex-col lg:flex-row;
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

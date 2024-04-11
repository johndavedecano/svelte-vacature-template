<script lang="ts">
  import MdComputer from "svelte-icons/md/MdComputer.svelte";
  import MdVerifiedUser from "svelte-icons/md/MdVerifiedUser.svelte";
  import MdGroup from "svelte-icons/md/MdGroup.svelte";
  import MdMyLocation from "svelte-icons/md/MdMyLocation.svelte";
  import MdPalette from "svelte-icons/md/MdPalette.svelte";
  import MdPieChart from "svelte-icons/md/MdPieChart.svelte";
</script>

<div class="perks">
  <div class="perks-heading">Onze Waarden</div>
  <div class="perks-list">
    <div class="perks-item">
      <div class="perks-icon-wrapper">
        <div class="perks-icon">
          <MdComputer />
        </div>
      </div>
      <div class="perks-title">Innovation</div>
    </div>
    <div class="perks-item">
      <div class="perks-icon-wrapper">
        <div class="perks-icon">
          <MdPieChart />
        </div>
      </div>
      <div class="perks-title">Accountability</div>
    </div>
    <div class="perks-item">
      <div class="perks-icon-wrapper">
        <div class="perks-icon">
          <MdVerifiedUser />
        </div>
      </div>
      <div class="perks-title">Integrity</div>
    </div>
    <div class="perks-item">
      <div class="perks-icon-wrapper">
        <div class="perks-icon">
          <MdGroup />
        </div>
      </div>
      <div class="perks-title">Collaboration</div>
    </div>
    <div class="perks-item">
      <div class="perks-icon-wrapper">
        <div class="perks-icon">
          <MdPalette />
        </div>
      </div>
      <div class="perks-title">Excellence</div>
    </div>
    <div class="perks-item">
      <div class="perks-icon-wrapper">
        <div class="perks-icon">
          <MdMyLocation />
        </div>
      </div>
      <div class="perks-title">Adaptability</div>
    </div>
  </div>
</div>

<style>
  .perks {
    @apply flex flex-col py-8 mb-8;
  }

  .perks-list {
    @apply grid-cols-3 grid grid-rows-2 gap-4;
  }

  .perks-heading {
    @apply text-2xl lg:text-4xl font-bold text-black mb-4 lg:mb-8 text-center;
  }

  .perks-item {
    @apply flex flex-col gap-2 items-center;
  }

  .perks-icon {
    min-height: 40px;
    min-width: 40px;
    @apply text-white;
  }

  .perks-icon-wrapper {
    @apply bg-blue-950 text-white p-8 rounded-3xl w-20 h-20 lg:w-40 lg:h-40 flex items-center justify-center;
  }

  .perks-title {
    @apply font-bold text-lg;
  }
</style>

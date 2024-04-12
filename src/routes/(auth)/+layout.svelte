<script>
  import Wrapper from "$lib/components/wrapper.svelte";
</script>

<Wrapper>
  <div class="login">
    <div class="login-card">
      <slot />
    </div>
  </div>
</Wrapper>

<style>
  .login {
    @apply w-full h-full flex items-center justify-center bg-white lg:bg-slate-100;
  }

  .login-card {
    @apply mx-4 my-8 rounded-xl min-h-80 bg-white shadow-none lg:shadow-lg p-8;
    min-width: 500px;
    max-width: 100%;
  }
</style>

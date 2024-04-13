<script lang="ts">
  import { goto } from "$app/navigation";
  import { isEmpty, isValidEmail } from "$lib/string";
  import type { UserLoginField } from "$lib/types";

  import auth from "$lib/auth";

  let fields: UserLoginField = { email: "", password: "" };
  let loading = false;

  const onSubmit = () => {
    if (!isValidEmail(fields.email)) {
      alert("invalid email address");
      return;
    }

    if (isEmpty(fields.password)) {
      alert("invalid password");
      return;
    }

    loading = true;

    auth
      .login(fields)
      .then(() => goto("/"))
      .catch((error) => alert("invalid credentials"))
      .finally(() => (loading = false));
  };
</script>

<form action="" on:submit|preventDefault={onSubmit}>
  <div class="login-heading">Admin Login</div>
  <p class="login-desc">Manage job posts and website contents.</p>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" required name="email" bind:value={fields.email} />
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input
      type="password"
      required
      name="password"
      bind:value={fields.password}
    />
  </div>
  <div>
    <button class="btn btn-primary login-btn w-full"> Submit </button>
    <!-- <a href="/forgot" class="login-link">Have you forgotten your password?</a> -->
  </div>
</form>

<style>
  .login-heading {
    @apply text-3xl text-black;
  }
  .login-desc {
    @apply text-gray-500 mb-8;
  }
  .login-btn {
    @apply mb-4;
  }
  .login-link {
    @apply text-blue-950;
  }
</style>

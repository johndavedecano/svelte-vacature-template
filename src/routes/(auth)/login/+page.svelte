<script lang="ts">
  import { goto } from "$app/navigation";
  import { isEmpty, isValidEmail } from "$lib/string";
  import type { UserLoginField } from "$lib/types";

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

    fetch("/login", {
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        alert("successfully logged in");
        goto("/");
      })
      .catch((error) => {
        console.error(error);
      })
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
  <button class="btn btn-primary login-btn"> Submit </button>
  <a href="/forgot" class="login-link">Have you forgotten your password?</a>
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

<svelte:head>
<link rel="stylesheet" href="https://unpkg.com/bulma/css/bulma.css">
</svelte:head>
<section class="section">
<div class="container">
  <div class="content">
    <button class="button" on:click={()  => alert('Hello World')}>Hello World</button>
    <slot />
  </div>
</div>
</section>

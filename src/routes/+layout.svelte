<script lang="ts">
	import Footer from "../components/footer.component.svelte";
	import Header from "../components/header.component.svelte";
  import "$lib/styles/__main__.scss";
</script>

<div id="super-container">
    <Header/>
    <main>
      <slot />
    </main>
    <Footer />
  </div>
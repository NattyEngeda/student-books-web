<script>
  // @ts-nocheck

  import { Router, Link, Route } from "svelte-routing"
  import Header from "./layouts/Header.svelte"
  import Footer from "./layouts/Footer.svelte"
  import Home from "./pages/Home.svelte"
  import About from "./pages/About.svelte"
  import Contact from "./pages/Contact.svelte"
  import Profile from "./pages/Profile.svelte"
</script>

<Router>
  <Header />
  <main class="min-h-screen py-20">
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/profile" component={Profile} />
  </main>
  <Footer />
</Router>

<style>
</style>

<script lang="ts">
  import { page } from '$app/stores';
  import { config } from '$src/store/BlogStore';
  import ThemeSwitcher from '$src/components/ThemeSwitcher.svelte';
  import LanguageSwitcher from '$src/components/LanguageSwitcher.svelte';

  export let color: string;
  export const { routeLinks } = config;

  const findRouteColor = (route: string) => {
    return routeLinks?.find((r) => r.route === route)?.color || color;
  };

  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  const closeMenu = () => {
    isMenuOpen = false;
  };
</script>

<nav style={`--accent: ${color};`}>
  <a class="homepage-link" href="/">
    <h1>{config.title}</h1>
  </a>

  <!-- Hamburger button -->
  <button class="hamburger" on:click={toggleMenu} aria-label="Toggle menu">
    ☰
  </button>

  <!-- Desktop nav -->
  <div class="nav-links desktop-only">
    {#each routeLinks as navLink}
      <a
        href={navLink.route}
        title={navLink.description || navLink.label}
        data-sveltekit-preload-data="hover"
        style={`--accent: ${findRouteColor(navLink.route)};`}
        class:active={$page.url.pathname === navLink.route}
      >
        {navLink.label}
      </a>
    {/each}
    <ThemeSwitcher />
  </div>

  <!-- Mobile overlay menu -->
  {#if isMenuOpen}
    <div class="overlay" on:click={closeMenu}>
      <div class="mobile-menu" on:click|stopPropagation>
        <!-- Tombol Close -->
        <button
          class="close-button"
          on:click={closeMenu}
          aria-label="Close menu"
        >
          ✕
        </button>
        {#each routeLinks as navLink}
          <a
            href={navLink.route}
            title={navLink.description || navLink.label}
            data-sveltekit-preload-data="hover"
            style={`--accent: ${findRouteColor(navLink.route)};`}
            class:active={$page.url.pathname === navLink.route}
            on:click={closeMenu}
          >
            {navLink.label}
          </a>
        {/each}
        <ThemeSwitcher />
      </div>
    </div>
  {/if}
</nav>

<style lang="scss">
  @import '$src/styles/media-queries.scss';

  nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--card-background);
    border-bottom: var(--card-border);
    color: var(--foreground);
    padding: 0.5rem;

    a.homepage-link {
      text-decoration: none;
      text-align: center;

      h1 {
        margin: 0;
        color: var(--foreground);
      }
    }

    .nav-links {
      display: flex;
      flex-wrap: wrap;

      a {
        font-weight: 700;
        font-size: 1.2rem;
        color: var(--foreground);
        text-decoration: none;
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        margin: 0.25rem;
        text-align: center;

        &.active,
        &:hover {
          background: var(--accent);
          color: var(--background);
        }
      }
    }

    .hamburger {
      display: none;
      font-size: 2rem;
      background: none;
      border: none;
      color: var(--foreground);
      cursor: pointer;
    }

    @include tablet-down {
      flex-direction: row;
      .hamburger {
        display: block;
      }

      .nav-links.desktop-only {
        display: none;
      }
    }
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  .mobile-menu {
    width: 50%;
    height: 100%;
    background: var(--card-background);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: -4px 0 6px rgba(0, 0, 0, 0.2);
    position: relative;

    .close-button {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--foreground);
      cursor: pointer;
      z-index: 1001;

      &:hover {
        color: var(--accent);
      }
    }

    a {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--foreground);
      text-decoration: none;

      &.active,
      &:hover {
        background: var(--accent);
        color: var(--background);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
      }
    }
  }
</style>

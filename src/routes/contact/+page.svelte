<script lang="ts">
  import type { SupportedSocials, UserSocial } from '$src/types/Socials';
  import { socialNetworks } from '$src/helpers/constants';
  import config from '$src/helpers/config';

  import SocialLink from '$src/components/SocialLink.svelte';
  import Heading from '$src/components/Heading.svelte';
  import EmailForm from './EmailForm.svelte';

  // Static config for contact page
  const { contact } = config;

  // Dynamically fetched data (social metrics)
  export let data;

  // Append usernames, and (if available) metrics to available socials
  let socials: UserSocial[] = socialNetworks
    .map((social, index) => {
      const network: typeof SupportedSocials[number] = social.name;
      const metrics =
        data?.props[
          social.name
            .toLowerCase()
            .replace(/\W/g, '') as keyof typeof data.props
        ] || [];
      return { ...social, user: contact.socials[network], metrics };
    })
    .filter((social) => social.user && social.user.trim() !== ''); // Filter out empty usernames

  // Limit number of socials to display
  let numSocialsToDisplay = contact.socialButtonLimit || 6;

  // Show / hide more socials
  const toggleSocialLimit = () => {
    const defLimit = contact.socialButtonLimit;
    numSocialsToDisplay =
      numSocialsToDisplay === defLimit ? socials.length : defLimit;
  };
</script>

<section class="main">
  <div class="social-wrapper">
    <Heading level="h2" color="var(--accent)">lets_connect</Heading>
    <!-- Links to social media profiles -->
    <div class="social-buttons">
      {#each socials.slice(0, numSocialsToDisplay) as social}
        <SocialLink {...social} />
      {/each}
    </div>
    <!-- Show more/ less button -->
    {#if socials.length > (contact.socialButtonLimit || 6)}
      <button class="toggle-limit" on:click={toggleSocialLimit}>
        {numSocialsToDisplay > (contact.socialButtonLimit || 6)
          ? 'Show Less'
          : 'Show More'}
      </button>
    {/if}
  </div>
  <EmailForm />
</section>

<style lang="scss">
  @import '$src/styles/media-queries.scss';

  section.main {
    width: 90vw;
    margin: 2rem auto 1rem auto;
    text-align: left;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;

    @include tablet-down {
      width: 95vw;
      margin: 1rem auto;
      gap: 1.5rem;
    }

    @include very-tiny-phone {
      width: 100vw;
      margin: 0.5rem auto;
      gap: 1rem;
      padding: 0 0.5rem;
      box-sizing: border-box;
    }

    h2 {
      font-size: 2rem;
      margin: 1rem 0;
      color: var(--accent);

      @include tablet-down {
        font-size: 1.75rem;
        margin: 0.75rem 0;
      }

      @include very-tiny-phone {
        font-size: 1.5rem;
        margin: 0.5rem 0;
      }
    }

    .social-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      min-width: 500px;

      @include tablet-down {
        min-width: 100%;
        gap: 0.75rem;
      }
    }

    .social-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      transition: all ease-in-out 0.25s;

      @include tablet-down {
        gap: 0.75rem;
      }

      @include very-tiny-phone {
        gap: 0.5rem;
      }
    }

    button.toggle-limit {
      background: none;
      border: none;
      border-radius: var(--curve-factor);
      color: var(--foreground);
      font-family: FiraCode, monospace;
      width: fit-content;
      cursor: pointer;
      opacity: 0.5;
      transition: all ease-in-out 0.1s;
      padding: 0.5rem 0;

      @include very-tiny-phone {
        font-size: 0.9rem;
        padding: 0.25rem 0;
      }

      &:hover {
        color: var(--accent);
      }
    }
  }
</style>

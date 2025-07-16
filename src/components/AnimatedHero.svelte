<script lang="ts">
  import TypeIt from 'typeit';
  import { onMount } from 'svelte';

  // Generates a random number of ms between 2 values
  const randomTime = (min: number = 2, max: number = 12) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  onMount(() => {
    const lines = [
      'Hello 👋',
      '\n',
      "I'm Muhamad Alfin Pratama",
      'I build apps 🛠️',
      'that put you first 🥇',
      'with privacy at the core 🔐',
      'and clear and helpful documentation 📚',
      'Thanks for visiting 🥰',
    ];

    const typeWithVariableSpeed = (instance: TypeIt, text: string) => {
      Array.from(text).forEach((char) => {
        instance.type(char).pause(randomTime());
      });
    };

    const typeLineBreak = (instance: TypeIt) => {
      instance.pause(150).break().pause(450);
    };

    const typeItInstance = new TypeIt('.intro');
    typeItInstance.options({ speed: 10, lifeLike: true });

    typeWithVariableSpeed(typeItInstance, lines[0]);
    typeLineBreak(typeItInstance);
    typeLineBreak(typeItInstance);

    typeWithVariableSpeed(typeItInstance, lines[2]);
    typeLineBreak(typeItInstance);

    typeWithVariableSpeed(typeItInstance, lines[3]);
    typeItInstance
      .pause(500)
      .move(-8)
      .type(' free')
      .pause(500)
      .type(' and open source')
      .pause(100)
      .move(8);
    typeLineBreak(typeItInstance);

    typeWithVariableSpeed(typeItInstance, lines[4]);
    typeLineBreak(typeItInstance);
    typeWithVariableSpeed(typeItInstance, lines[5]);
    typeLineBreak(typeItInstance);
    typeWithVariableSpeed(typeItInstance, lines[6]);
    typeLineBreak(typeItInstance);
    typeLineBreak(typeItInstance);

    typeWithVariableSpeed(typeItInstance, lines[7]);
    typeItInstance.pause(500).go();
  });
</script>

<header class="container">
  <h3 class="intro" />
</header>

<style lang="scss">
  .container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
    box-sizing: border-box;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  h3 {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    width: 100%;
    max-width: 100%;
    line-height: 1.25;
    font-weight: 500;
    min-height: clamp(8rem, 20vh, 12rem);
    word-wrap: break-word;
    overflow-wrap: break-word;
    box-sizing: border-box;

    // Responsive breakpoints
    @media (max-width: 768px) {
      font-size: 1rem;
      min-height: 8rem;
      line-height: 1.3;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      min-height: 6rem;
      line-height: 1.4;
    }
  }
</style>

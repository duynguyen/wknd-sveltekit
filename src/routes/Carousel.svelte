<!-- Carousel.svelte -->
<script>
    import { onMount } from 'svelte';
    let currentIndex = 0;
    export let numItems = 3;
  
    // onMount(() => {
    //     console.log('onMount', $$props);
    //   //numItems = $$props.children.length;
    // });
  
    function next() {
      currentIndex = (currentIndex + 1) % numItems;
    }
  
    function prev() {
      currentIndex = (currentIndex - 1 + numItems) % numItems;
    }
  </script>
  
  <div class="relative">
    <div class="overflow-hidden">
      <div class="carousel-container flex transition-all duration-500" style="transform: translateX(-{currentIndex * 100}%)">
        <slot></slot>
      </div>
    </div>
  
    <button class="absolute top-1/2 left-2 transform -translate-y-1/2 z-10" on:click={prev}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button class="absolute top-1/2 right-2 transform -translate-y-1/2 z-10" on:click={next}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
  
  <style>
    .carousel-container {
      width: 100%;
    }
    .carousel-container > :global(*) {
      flex: none;
      width: 100%;
    }
  </style>
  
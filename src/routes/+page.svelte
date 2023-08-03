<section class="">
  <div class="bg-white">
    <div class="max-w-2xl px-4 py-10 mx-auto sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
        Your next adventures can be one of these...
      </h2>
      {#if adventures}
        <!-- <HeroAdventure
          _path={adventures[0]._path}
          href={`/adventures/${adventures[0]._path.split('/').slice(-2).join('/')}`}
          title={adventures[0].title}
          price={adventures[0].price}
          duration={adventures[0].tripLength}
          imageSrc={`${imageSrcBase}${adventures[0].primaryImage._path}`}
        /> -->

        <Carousel numItems={4}>
          {#each adventures.slice(0, 4) as { _path, title, price, tripLength, primaryImage }}
            <AdventureCard
              showDetails={false}
              _path={_path}
              href={`/adventures/${_path.split('/').slice(-2).join('/')}`}
              title={title}
              price={price}
              duration={tripLength}
              imageSrc={`${imageSrcBase}${primaryImage._path}`}
              itemId={`urn:aemconnection:${_path}/jcr:content/data/master`}
            />
          {/each}
        </Carousel>

        <div class=category-buttons>
          {#each categoryFilters as { label, predicate }}
          <button class="category-button" on:click={() => (filteredAdventures = adventures.filter(predicate))}>{label}</button>
        {/each}
        </div>

        <div class="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {#each filteredAdventures as { _path, title, price, tripLength, primaryImage } (_path)}
          <div in:receive="{{key: _path}}"
          out:send="{{key: _path}}" animate:flip={{ duration: 300 }}>
            <AdventureCard
              _path={_path}
              href={`/adventures/${_path.split('/').slice(-2).join('/')}`}
              title={title}
              price={price}
              duration={tripLength}
              imageSrc={`${imageSrcBase}${primaryImage._path}`}
              itemId={`urn:aemconnection:${_path}/jcr:content/data/master`}
            />
            </div>
          {/each}
        </div>
      {:else}
        <div>Adventure could not be loaded. AEM Backend likely hybernated</div>
      {/if}
    </div>
  </div>
</section>

<script>
  import AdventureCard from './AdventureCard.svelte';
  import HeroAdventure from './HeroAdventure.svelte';
  import Carousel from './Carousel.svelte';
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
  import { PUBLIC_AEM_HOST } from '$env/static/public';

	const [send, receive] = crossfade({
		duration: d => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 300,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

  /** @type {import('./$types').PageData} */
  export let data;

  export let adventures = data.adventures;
  const imageSrcBase = PUBLIC_AEM_HOST;
  let categoryFilters = [
    {
      label: 'All',
      predicate: (adventure) => true,
    },
    {
      label: 'One Day',
      predicate: (adventure) => adventure.tripLength === '1 Day',
    },
    {
      label: 'Sport',
      predicate: (adventure) => adventure.title.includes('Ski') || adventure.title.includes('Cycling') || adventure.title.includes('Surf'),
    },
    {
      label: 'Summer',
      predicate: (adventure) => !adventure.title.includes('Ski'),
    },
    {
      label: 'Winter',
      predicate: (adventure) => adventure.title.includes('Ski'),
    },
  ];
  let filteredAdventures = adventures;
</script>

<style lang="postcss">
  .category-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .category-button {
    background-color: #e7e9ed;
    color: rgb(66, 101, 100);
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s;
  }

  .category-button:hover {
    background-color: #1f2937;
  }
</style>

<script>
    import AemImage from '$lib/components/AemImage.svelte';
  
    export let _path;
    export let href;
    export let title;
    export let price;
    export let duration;
    export let imageSrc;
    export let itemId;
    export let showDetails = true;
  
    const aboveFold = ['Bali Surf Camp', 'Beervana in Portland'].includes(title);
  </script>
  
  <div class="group relative" itemscope itemtype='reference' itemfilter='cf' itemid={itemId}>
    <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
      <AemImage
        src={imageSrc}
        alt={title}
        width={542}
        height={605}
        priority={aboveFold}
        loading={aboveFold ? 'eager' : 'lazy'}
        sizes="50vw"
        clazz="w-full h-full object-center object-cover lg:w-full lg:h-full"
        itemprop='primaryImage'
        itemtype='image'
      />
    </div>
    {#if showDetails}
    <div class="mt-4 flex justify-between">
      <p class="mt-1 text-sm text-gray-500" itemprop='tripLength' itemtype='text'>{duration}</p>
      <p class="text-sm font-medium text-gray-900">$<span itemprop='price' itemtype='text'>{price}</span></p>
    </div>
    <h3 class="font-semibold text-gray-700">
      <a href={href}>
        <div itemprop='title' itemtype='text'>
          <span aria-hidden="true" class="absolute inset-0" />
          {title}
        </div>
    </a>
  </h3>
    {/if}

  </div>
  
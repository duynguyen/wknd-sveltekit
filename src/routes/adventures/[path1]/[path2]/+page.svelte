<!-- pages/[...path].svelte -->
<div>
    {#if adventure}
      <article>
        <div class="bg-white" itemscope itemtype='reference' itemfilter='cf' itemid={`urn:aemconnection:${adventure._path}/jcr:content/data/master`}>
          <div class="max-w-2xl px-4 py-10 mx-auto sm:pt-28 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden lg:h-80 lg:aspect-none">
              <AemImage
              src={`${imageSrcBase}${adventure.primaryImage._path}`}
              alt={adventure.title}
              width={1680}
              height={320}
              priority={true}
              loading='eager'
              sizes="80vw"
              clazz="w-full h-full object-center object-cover lg:w-full lg:h-full"
              itemprop='primaryImage'
              itemtype='image'
            />
            </div>
  
            <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
              <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl" itemprop='title' itemtype='text'>{adventure.title}</h1>
              </div>
  
              <div class="mt-4 lg:mt-0 lg:row-span-3">
                <h2 class="sr-only">Product information</h2>
                <p class="text-3xl text-gray-900 mb-10">$<span itemprop='price' itemtype='text'>{adventure.price}</span></p>
                <dl>
                  <div class="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">Activity</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" itemprop='activity' itemtype='text'>{adventure.activity}</dd>
                  </div>
                  <div class="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">Type</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" itemprop='adventureType' itemtype='text'>{adventure.adventureType}</dd>
                  </div>
                  <div class="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">Trip Length</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" itemprop='tripLength' itemtype='text'>{adventure.tripLength}</dd>
                  </div>
                  <div class="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">Group Size</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" itemprop='groupSize' itemtype='text'>{adventure.groupSize}</dd>
                  </div>
                  <div class="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">Difficulty</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" itemprop='difficulty' itemtype='text'>{adventure.difficulty}</dd>
                  </div>
               
                </dl>
            </div>

            <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <div>
                <h3 class="sr-only">Description</h3>
                <div class="space-y-6">
                  <div class="text-base text-gray-900" itemprop='description' itemtype='richtext'>
                    {@html adventure.description.html}
                  </div>
                </div>
              </div>

              <div class="mt-10">
                <h2 class="text-base font-bold text-gray-900">Itinerary</h2>

                <div class="mt-4 space-y-6">
                  <div class="text-sm text-gray-600" itemprop='itinerary' itemtype='richtext'>
                    {@html adventure.itinerary.html}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  {:else}
    <div>Adventure not found or AEM Backend hybernated</div>
  {/if}
</div>

<script>
	import AemImage from '$lib/components/AemImage.svelte';
  import { PUBLIC_AEM_HOST } from '$env/static/public';

  // /_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=3840&amp;q=75

    /** @type {import('./$types').PageData} */
  export let data;
  export let adventure = data?.adventure;
  // console.log('adventure', adventure);

  const imageSrcBase = PUBLIC_AEM_HOST;
  
  // export const revalidate = 60; // revalidate this page every 60 seconds
</script>

<style>
  .lg\\:row-span-3 {
    grid-row: span 3 / auto;
  }
  .lg\\:col-start-1 {
    grid-column-start: 1;
  }
  .lg\\:col-span-2 {
    grid-column-end: span 2;
  }
  .aspect-w-1 {
    width: 100%;
  }
</style>
  
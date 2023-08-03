<script>
    // import { onMount } from 'svelte';
    import { PUBLIC_AEM_HOST } from '$env/static/public';
  
    export let src;
    export let alt;
    export let width;
    export let height;
    export let priority;
    export let loading;
    export let sizes;
    export let clazz;
    export let itemprop;
    export let itemtype;
    // export let style;

    sizes = sizes || '60vw';

    let widths = [384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840];
    let quality = 75;

    export const isInEditor = () => {
      return PUBLIC_AEM_HOST.includes('author');
    };

    /* generate the srcset using src, each width, and the quality*/
    export let srcset = widths.map(w => {
        // const originUrl = `${src}?w=${w}&q=${quality}`;
        //return `/_next/image?url=${encodeURIComponent(originUrl)} ${w}w`;
        //return `${originUrl} ${w}w`;
        return `https://ssc-sparkle.vercel.app/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=${quality} ${w}w`;
        //&amp;w=384&amp;q=75 384w
    }).join(', ');


    // https://ssc-sparkle.vercel.app/_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fnapa-wine-tasting%2FAdobeStock_280313729.jpg&w=1920&q=75
    // https://ssc-sparkle.vercel.app/_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&w=1920&q=75

    // const originSrcUrl = `${src}?w=${width}&q=${quality}`;
    //export let imageSrc = `/_next/image?url=${encodeURIComponent(originSrcUrl)}`;
    //export let imageSrc = `${originSrcUrl} `;
    
    export let imageSrc = isInEditor() ? src : `https://ssc-sparkle.vercel.app/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;

    //_srcset="/_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=3840&amp;q=75 3840w" 
    //src="/_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=3840&amp;q=75" 
  </script>
  
<img 
  alt={alt}
  sizes={sizes}
  srcset={isInEditor() ? '' : srcset}
  src={imageSrc}
  decoding="async" 
  data-nimg="1" 
  class={clazz} 
  loading={loading}
  width={width}
  height={height}
  itemprop={itemprop}
  itemtype={itemtype}
  />
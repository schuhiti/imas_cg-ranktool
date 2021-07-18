
// https://user-first.ikyu.co.jp/entry/preload-images
// preloadのfeature detection
const supportsPreload = (() => {
    try {
      return document.createElement('link').relList.supports('preload');
    } catch (e) {
      return false;
    }
  })();
  
  /**
   * 指定したリソースをpreloadする
   * @param {string} href
   * @param {string} as
   */
  function preload(href, as) {
    if (!supportsPreload) return;
  
    const link = document.createElement('link');
    link.setAttribute('rel', 'preload');
    link.setAttribute('as', as);
    link.setAttribute('href', href);
    link.onload = () => document.head.removeChild(link);
    document.head.appendChild(link);
  }
  
  /**
   * 画像をpreloadする
   * @param {string} href
   */
  function preloadImage(href) {
    preload(href, 'image');
  }
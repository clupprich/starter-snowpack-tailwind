export function fitVids() {
  var selectors = [
    'iframe[src*="player.vimeo.com"]',
    'iframe[src*="youtube.com"]',
    'iframe[src*="youtube-nocookie.com"]',
    'iframe[src*="kickstarter.com"][src*="video.html"]',
    'object',
    'embed'
  ];

  var allVideos = document.querySelectorAll(selectors.join(','));
  allVideos.forEach(function(el) {
    el.parentElement.classList.add('aspect-w-16', 'aspect-h-9')
  })
}

// Sitewide click-to-enlarge for content photography. Opt-out, not opt-in:
// every <img> qualifies unless it sits inside one of the excluded
// containers below. Hero images, homepage cover tiles, and device/browser
// mockup frames are deliberately excluded per D-140 — they're navigation
// or branding surfaces, not photos to inspect closer. SVG diagrams need no
// entry here since this only ever binds to <img> elements.
(function(){
  var EXCLUDE_SELECTOR = [
    '.hero',        // case study + Pretty What hero images
    '.hero-photo',  // BoopShaillyBoop's hero photo (not wrapped in .hero)
    '.tile',        // homepage project cover tiles
    '.phone',       // BoopShaillyBoop phone-frame product mockups
    '.browser',     // BoopShaillyBoop browser-chrome mockups
    '.sam-cursor', '.sam-peek',  // Sam mascot cursor/peek artwork
    '.a-doodle',    // About page decorative scrapbook doodles
    '.sw-icons',    // About page software tool icons
    '.chip-icon',   // SANAT competitor-logo chips
    '.mark',        // Pretty What wordmark
    '.origin',      // Pretty What closing note's small Sam icon
    '.footer-receiver'  // sitewide falling-receiver footer loop, D-145
  ].join(', ');

  var overlay, overlayImg, overlayCap;

  function original(img){
    // The <img src> is always the full-quality source file sitewide; the
    // <source> srcset entries inside the same <picture> are the resized
    // avif/webp derivatives. The lightbox shows the former.
    return img.getAttribute('src');
  }

  function build(){
    overlay = document.createElement('div');
    overlay.className = 'lb-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML =
      '<button class="lb-close" aria-label="Close">&times;</button>' +
      '<figure class="lb-figure"><img class="lb-img" alt=""><figcaption class="lb-cap"></figcaption></figure>';
    document.body.appendChild(overlay);
    overlayImg = overlay.querySelector('.lb-img');
    overlayCap = overlay.querySelector('.lb-cap');

    overlay.addEventListener('click', function(e){
      if (e.target === overlay || e.target.classList.contains('lb-close')) close();
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
    });
  }

  function open(img){
    if (!overlay) build();
    overlayImg.src = original(img);
    overlayImg.alt = img.alt || '';
    overlayCap.textContent = img.alt || '';
    overlay.classList.add('is-open');
    document.body.classList.add('lb-locked');
  }

  function close(){
    overlay.classList.remove('is-open');
    document.body.classList.remove('lb-locked');
  }

  function wire(){
    document.querySelectorAll('img').forEach(function(img){
      if (img.closest(EXCLUDE_SELECTOR)) return;
      if (img.closest('.lb-overlay')) return;
      img.classList.add('lb-enabled');
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      var label = img.alt ? img.alt + ', view larger' : 'View larger';
      img.setAttribute('aria-label', label);
      img.addEventListener('click', function(){ open(img); });
      img.addEventListener('keydown', function(e){
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(img); }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wire);
  } else {
    wire();
  }
})();

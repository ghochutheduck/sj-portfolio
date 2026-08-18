// Shared by every page using the fixed pill header (design.css, header.site-nav).
// Case studies keep their own bespoke pagenav script and never load this file.
(function(){
  var page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav nav a').forEach(function(a){
    var href = a.getAttribute('href');
    // A bare "#work" is index.html's own Work section and stands for that
    // page's identity; every other bare "#..." (Contact -> "#site-footer")
    // is just an in-page anchor on whatever page you're already on, not a
    // distinct destination, so it never gets marked active.
    var target = href === '#work' ? 'index.html' : (href.charAt(0) === '#' ? null : href.split('#')[0]);
    if (target && target === page) a.classList.add('active');
  });

  var lastY = window.scrollY, ticking = false;
  var THRESH = 6, TOP_BUFFER = 40;
  function update(){
    var y = window.scrollY;
    var delta = y - lastY;
    if (Math.abs(delta) > THRESH){
      if (y < TOP_BUFFER) document.body.classList.remove('nav-compact');
      else if (delta > 0) document.body.classList.add('nav-compact');
      else document.body.classList.remove('nav-compact');
      lastY = y;
    }
    ticking = false;
  }
  window.addEventListener('scroll', function(){
    if (!ticking){ requestAnimationFrame(update); ticking = true; }
  }, { passive:true });
})();

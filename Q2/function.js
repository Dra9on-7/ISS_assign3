// For Q2
    // Js code to log page views and clicks
    function getElementType(el) {
      const tag = el.tagName.toLowerCase();
      const type = el.getAttribute('type') || '';
      const role = el.getAttribute('role') || '';
      const aria = el.getAttribute('aria-label') || '';
  
      if (tag === 'img') return 'image';
      if (tag === 'select') return 'drop-down';
      if (tag === 'input' && (type === 'text' || type === 'email')) return 'text input';
      if (tag === 'textarea') return 'text area';
      if (tag === 'a') return 'link';
      if (tag === 'p' || tag === 'h1' || tag === 'h2') return 'text';
      if (role) return role;
      if (aria) return aria;
  
      return tag;
    }
  
    // Log page view
    window.addEventListener('load', () => {
      const timestamp = new Date().toISOString();
      console.log(`${timestamp} , view , page loaded`);
    });
  
    // Log all clicks
    document.addEventListener('click', function (event) {
      const timestamp = new Date().toISOString();
      const elementType = getElementType(event.target);
      console.log(`${timestamp} , click , ${elementType}`);
    });
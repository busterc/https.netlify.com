if (location.href.match(/^http:/i))
  location.replace(location.href.replace(/^http:/i, 'https:'));

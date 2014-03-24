/* from Modernizr
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/storage/sessionstorage.js
 */
hasSessionstorage = (function () {
  var s = 'iCanHasSessionStorage';

  try {
    sessionStorage.setItem(s, s);
    sessionStorage.removeItem(s,s);
    return true;
  }
  catch(e) {
    return false;
  }
})();

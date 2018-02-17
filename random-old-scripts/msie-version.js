// return NaN for real browsers, major version number for IE
msie = parseInt(((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]), 10);

// viewport height and width
// jquery-ish
// https://github.com/jquery/jquery/blob/1.12-stable/src/dimensions.js#L36
body = global.document.body;
doc = global.document.documentElement;

// height

Math.max(
  body.scrollHeight,
  doc.scrollHeight,
  body.offsetHeight,
  doc.offsetHeight,
  doc.clientHeight
);

// width

Math.max(
  body.scrollWidth,
  doc.scrollWidth,
  body.offsetWidth,
  doc.offsetWidth,
  doc.clientWidth
);


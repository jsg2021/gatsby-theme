const regex = /\/\/vimeo\.com\//;

const shouldTransform = url => regex.test(url);

const getHTML = url => `<div class="wideframe-video"><iframe src="${url}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>`;

module.exports = { getHTML, shouldTransform };
const regex = /\/\/vimeo\.com\//;

const shouldTransform = url => {
    try {
        return regex.test(url);
    } catch {
        return false;
    }
}

const getHTML = url => {
    const id = new URL(url).pathname.split('/').pop();
    return `<div class="wideframe-video"><iframe src="//player.vimeo.com/video/${id}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>`;
}

module.exports = { getHTML, shouldTransform };
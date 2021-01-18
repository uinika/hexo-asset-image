const cheerio = require('cheerio');

hexo.extend.filter.register('after_post_render', function (data) {
  let config = hexo.config;
  if (config.post_asset_folder) {
    let link = data.permalink;
    let beginPos = link.split('/', 3).join('/').length + 1;
    let appendLink = '';
    let endPos = link.lastIndexOf('/');
    link = link.substring(beginPos, endPos) + '/' + appendLink;
    let toprocess = ['excerpt', 'more', 'content'];
    for (let i = 0; i < toprocess.length; i++) {
      let key = toprocess[i];
      let $ = cheerio.load(data[key], { ignoreWhitespace: false, xmlMode: false, lowerCaseTags: false, decodeEntities: false });
      $('img').each(function () {
        if ($(this).attr('src')) {
          let src = $(this).attr('src').replace('\\', '/');
          if (!(/http[s]*.*|\/\/.*/.test(src) || /^\s+\//.test(src) || /^\s*\/uploads|images\//.test(src))) {
            let linkArray = link.split('/').filter(function (elem) { return elem != ''; });
            let srcArray = src.split('/').filter(function (elem) { return elem != '' && elem != '.'; });
            if (srcArray.length > 1) { srcArray.shift(); }
            src = srcArray.join('/');
            $(this).attr('src', config.root + link + src);
          }
        } else {
          console.info && console.info($(this));
        }
      });
      data[key] = $.html();
    }
  }
});
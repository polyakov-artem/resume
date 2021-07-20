/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 431:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var pug = __webpack_require__(55);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Cmeta name=\"msapplication-TileColor\" content=\"#FFFFFF\"\u003E\u003Cmeta name=\"theme-color\" content=\"#FFFFFF\"\u003E\u003Cmeta name=\"description\" content=\"Index page\"\u003E\u003Cmeta name=\"keywords\" content=\"index, page\"\u003E\u003Cmeta name=\"author\" content=\"\"\u003E\u003Cmeta name=\"twitter:card\" content=\"summary\"\u003E\u003Cmeta name=\"twitter:site\" content=\"\"\u003E\u003Cmeta name=\"twitter:image\" content=\"\"\u003E\u003Cmeta name=\"twitter:description\" content=\"\"\u003E\u003Cmeta property=\"og:url\" content=\"\"\u003E\u003Cmeta property=\"og:title\" content=\"\"\u003E\u003Cmeta property=\"og:description\" content=\"\"\u003E\u003Cmeta property=\"og:image\" content=\"\"\u003E\u003Cmeta property=\"og:type\" content=\"website\"\u003E\u003Clink rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"assets\u002Ffavicons\u002Fapple-touch-icon.png\"\u003E\u003Clink rel=\"icon\" type=\"image\u002Fpng\" sizes=\"32x32\" href=\"assets\u002Ffavicons\u002Ffavicon-32x32.png\"\u003E\u003Clink rel=\"icon\" type=\"image\u002Fpng\" sizes=\"16x16\" href=\"assets\u002Ffavicons\u002Ffavicon-16x16.png\"\u003E\u003Clink rel=\"manifest\" href=\"assets\u002Ffavicons\u002Fsite.webmanifest\"\u003E\u003Clink rel=\"mask-icon\" href=\"assets\u002Ffavicons\u002Fsafari-pinned-tab.svg\" color=\"#2b5797\"\u003E\u003Clink rel=\"shortcut icon\" href=\"assets\u002Ffavicons\u002Ffavicon.ico\"\u003E\u003Cmeta name=\"msapplication-TileColor\" content=\"#2b5797\"\u003E\u003Cmeta name=\"msapplication-config\" content=\"assets\u002Ffavicons\u002Fbrowserconfig.xml\"\u003E\u003Cmeta name=\"theme-color\" content=\"#ffffff\"\u003E\u003Ctitle\u003EРезюме\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody class=\"resume\"\u003E\u003Cmain class=\"resume__main\"\u003E\u003Cdiv class=\"resume__column-info\"\u003E\u003Carticle class=\"person resume__person\"\u003E\u003Cdiv class=\"person__img-wrap\"\u003E\u003Cimg" + (" class=\"person__img\""+pug.attr("src", __webpack_require__(579)/* .default */ .Z, true, true)+" alt=\"Фото\"") + "\u003E\u003C\u002Fdiv\u003E\u003Ch1 class=\"person__name\"\u003E\u003Cspan\u003EПоляков \u003C\u002Fspan\u003EАртем Викторович\u003C\u002Fh1\u003E\u003Cul class=\"info\"\u003E\u003Cli class=\"info__item\"\u003E\u003Cspan class=\"info__item-header\"\u003E\u003Csvg class=\"info__icon\"\u003E\u003Cuse href=\"#info\"\u003E\u003C\u002Fuse\u003E\u003C\u002Fsvg\u003E\u003Cspan class=\"info__item-name\"\u003EВозраст:\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"info__item-text\"\u003E32\u003C\u002Fspan\u003E\u003C\u002Fli\u003E\u003Cli class=\"info__item\"\u003E\u003Cspan class=\"info__item-header\"\u003E\u003Csvg class=\"info__icon info__icon_place\"\u003E\u003Cuse href=\"#place\"\u003E\u003C\u002Fuse\u003E\u003C\u002Fsvg\u003E\u003Cspan class=\"info__item-name\"\u003EГород:\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"info__item-text\"\u003EНабережные Челны\u003C\u002Fspan\u003E\u003C\u002Fli\u003E\u003Cli class=\"info__item\"\u003E\u003Cspan class=\"info__item-header\"\u003E\u003Csvg class=\"info__icon\"\u003E\u003Cuse href=\"#phone\"\u003E\u003C\u002Fuse\u003E\u003C\u002Fsvg\u003E\u003Cspan class=\"info__item-name\"\u003EТелефон:\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Ca class=\"link info__link\" href=\"tel:+12345\"\u003E12345678910\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"info__item\"\u003E\u003Cspan class=\"info__item-header\"\u003E\u003Csvg class=\"info__icon info__icon_email\"\u003E\u003Cuse href=\"#email\"\u003E\u003C\u002Fuse\u003E\u003C\u002Fsvg\u003E\u003Cspan class=\"info__item-name\"\u003EE-mail:\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Ca class=\"link info__link\" href=\"mailto:Polyakov.Artem.V@yandex.ru?subject=Резюме\"\u003EPolyakov.Artem.V@yandex.ru\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Farticle\u003E\u003Csection class=\"section section-about resume__section\"\u003E\u003Ch3 class=\"title-h3 section__title\"\u003EО себе\u003C\u002Fh3\u003E\u003Cp class=\"section-about__text\"\u003E Очень увлечен темой веб-разработки и стараюсь посвятить все свободное время совершенствованию\nв этом направлении. Постоянно стремлюсь улучшить качество структуры проекта и кода на основе опыта, \nполученного при разборе чужих работ и чтении документации. В планах освоить React\u002FRedux на конкурентоспособном уровне.\u003C\u002Fp\u003E\u003C\u002Fsection\u003E\u003Csection class=\"section section-hobby resume__section\"\u003E\u003Ch3 class=\"title-h3 section__title\"\u003EУвлечения\u003C\u002Fh3\u003E\u003Cul class=\"hobbies\"\u003E\u003Cli class=\"hobbies__item\"\u003E\u003Csvg class=\"hobbies__icon\"\u003E\u003Cuse href=\"#monitor\"\u003E\u003C\u002Fuse\u003E\u003C\u002Fsvg\u003E\u003Cdiv class=\"hobbies__title\"\u003EПрограммирование\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"hobbies__item\"\u003E\u003Csvg class=\"hobbies__icon\"\u003E\u003Cuse href=\"#bicycle\"\u003E\u003C\u002Fuse\u003E\u003C\u002Fsvg\u003E\u003Cdiv class=\"hobbies__title\"\u003EЕзда на велосипеде\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"hobbies__item\"\u003E\u003Csvg class=\"hobbies__icon\"\u003E\u003Cuse href=\"#ball\"\u003E\u003C\u002Fuse\u003E\u003C\u002Fsvg\u003E\u003Cdiv class=\"hobbies__title\"\u003EВолейбол\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"resume__column-experience\"\u003E\u003Csection class=\"section resume__section\"\u003E\u003Cheader class=\"section__header\"\u003E\u003Csvg class=\"section__header-icon\"\u003E\u003Cuse href=\"#school\"\u003E\u003C\u002Fuse\u003E\u003C\u002Fsvg\u003E\u003Ch3 class=\"title-h3 section__title\"\u003EОбразование\u003C\u002Fh3\u003E\u003C\u002Fheader\u003E\u003Cul class=\"dates-list\"\u003E\u003Cli class=\"dates-list__item\"\u003E\u003Cdiv class=\"dates-list__dates\"\u003E \u003Ctime datetime=\"2006\"\u003E2006 \u003C\u002Ftime\u003E- \u003Ctime datetime=\"2011\"\u003E2011\u003C\u002Ftime\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dates-list__content\"\u003E\u003Cp class=\"dates-list__description\"\u003EВысшее образование, ИНЕКА, специальность - гидравлические машины, гидроприводы и гидропневмоавтоматика\u003C\u002Fp\u003E\u003Cp class=\"dates-list__post\"\u003EСпециалист\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003Csection class=\"section resume__section\"\u003E\u003Cheader class=\"section__header\"\u003E\u003Csvg class=\"section__header-icon\"\u003E\u003Cuse href=\"#work\"\u003E\u003C\u002Fuse\u003E\u003C\u002Fsvg\u003E\u003Ch3 class=\"title-h3 section__title\"\u003EОпыт работы\u003C\u002Fh3\u003E\u003C\u002Fheader\u003E\u003Cul class=\"dates-list\"\u003E\u003Cli class=\"dates-list__item\"\u003E\u003Cdiv class=\"dates-list__dates\"\u003E\u003Ctime datetime=\"2011\"\u003E2011 \u003C\u002Ftime\u003E- \u003Ctime datetime=\"2020\"\u003E2021\u003C\u002Ftime\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dates-list__content\"\u003E\u003Cp class=\"dates-list__description\"\u003EКАМАЗ, Научно - технический центр\u003C\u002Fp\u003E\u003Cp class=\"dates-list__post\"\u003EГлавный специалист\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003Csection class=\"section resume__section\"\u003E\u003Cheader class=\"section__header\"\u003E\u003Csvg class=\"section__header-icon\"\u003E\u003Cuse href=\"#badge\"\u003E\u003C\u002Fuse\u003E\u003C\u002Fsvg\u003E\u003Ch3 class=\"title-h3 section__title\"\u003EОпыт разработки\u003C\u002Fh3\u003E\u003C\u002Fheader\u003E\u003Ch4 class=\"section__list-title\"\u003EПримеры работ:\u003C\u002Fh4\u003E\u003Cul class=\"list\"\u003E\u003Cli class=\"list__item\"\u003E\u003Ca class=\"link\" href=\"https:\u002F\u002Fpolyakov-artem.github.io\u002Ftravel\" target=\"_blank\"\u003ETravel\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"list__item\"\u003E\u003Cp class=\"list__item-title\"\u003ELanding example:\u003C\u002Fp\u003E\u003Cul class=\"list list_sublist\"\u003E\u003Cli class=\"list__item\"\u003E\u003Ca class=\"link\" href=\"https:\u002F\u002Fpolyakov-artem.github.io\u002Flanding-example\u002Fform-elements.html\" target=\"_blank\"\u003EForm-elements \u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"list__item\"\u003E\u003Ca class=\"link\" href=\"https:\u002F\u002Fpolyakov-artem.github.io\u002Flanding-example\u002Fcards.html\" target=\"_blank\"\u003ECards\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"list__item\"\u003E\u003Ca class=\"link\" href=\"https:\u002F\u002Fpolyakov-artem.github.io\u002Flanding-example\u002Fheaders-and-footers.html\" target=\"_blank\"\u003EHeaders and footers\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"list__item\"\u003E\u003Ca class=\"link\" href=\"https:\u002F\u002Fpolyakov-artem.github.io\u002Flanding-example\u002Flanding-page.html\" target=\"_blank\"\u003ELanding page\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003Csection class=\"section resume__section section-skills\"\u003E\u003Cheader class=\"section__header\"\u003E\u003Csvg class=\"section__header-icon\"\u003E\u003Cuse href=\"#settings\"\u003E\u003C\u002Fuse\u003E\u003C\u002Fsvg\u003E\u003Ch3 class=\"title-h3 section__title\"\u003EНавыки\u003C\u002Fh3\u003E\u003C\u002Fheader\u003E\u003Cp class=\"section-skills__text\"\u003EАнглийский уровня А1-А2, способен разобраться в технической документации. \u003C\u002Fp\u003E\u003Cul class=\"section-skills__skills\"\u003E\u003Cli class=\"skill section-skills__skill\"\u003E\u003Cp class=\"skill__name\"\u003EJavascript\u003C\u002Fp\u003E\u003Cdiv class=\"progress progress_value_50 skill__progress\"\u003E\u003Cdiv class=\"progress__line\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"skill section-skills__skill\"\u003E\u003Cp class=\"skill__name\"\u003EJQuery\u003C\u002Fp\u003E\u003Cdiv class=\"progress progress_value_50 skill__progress\"\u003E\u003Cdiv class=\"progress__line\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"skill section-skills__skill\"\u003E\u003Cp class=\"skill__name\"\u003EHTML5\u003C\u002Fp\u003E\u003Cdiv class=\"progress progress_value_75 skill__progress\"\u003E\u003Cdiv class=\"progress__line\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"skill section-skills__skill\"\u003E\u003Cp class=\"skill__name\"\u003EPUG\u003C\u002Fp\u003E\u003Cdiv class=\"progress progress_value_75 skill__progress\"\u003E\u003Cdiv class=\"progress__line\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"skill section-skills__skill\"\u003E\u003Cp class=\"skill__name\"\u003ECSS\u002FSCSS\u003C\u002Fp\u003E\u003Cdiv class=\"progress progress_value_75 skill__progress\"\u003E\u003Cdiv class=\"progress__line\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"skill section-skills__skill\"\u003E\u003Cp class=\"skill__name\"\u003EGIT\u003C\u002Fp\u003E\u003Cdiv class=\"progress progress_value_50 skill__progress\"\u003E\u003Cdiv class=\"progress__line\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"skill section-skills__skill\"\u003E\u003Cp class=\"skill__name\"\u003EWebpack\u003C\u002Fp\u003E\u003Cdiv class=\"progress progress_value_50 skill__progress\"\u003E\u003Cdiv class=\"progress__line\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"skill section-skills__skill\"\u003E\u003Cp class=\"skill__name\"\u003EGulp\u003C\u002Fp\u003E\u003Cdiv class=\"progress progress_value_50 skill__progress\"\u003E\u003Cdiv class=\"progress__line\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003Csection class=\"section resume__section\"\u003E\u003Cheader class=\"section__header\"\u003E\u003Csvg class=\"section__header-icon\"\u003E\u003Cuse href=\"#skills\"\u003E\u003C\u002Fuse\u003E\u003C\u002Fsvg\u003E\u003Ch3 class=\"title-h3 section__title\"\u003EДополнительная информация\u003C\u002Fh3\u003E\u003C\u002Fheader\u003E\u003Ch4 class=\"section__list-title\"\u003EЛичные качества:\u003C\u002Fh4\u003E\u003Cul class=\"list\"\u003E\u003Cli class=\"list__item\"\u003EОтветственность\u003C\u002Fli\u003E\u003Cli class=\"list__item\"\u003EИсполнительность\u003C\u002Fli\u003E\u003Cli class=\"list__item\"\u003EБыстрообучаемость\u003C\u002Fli\u003E\u003Cli class=\"list__item\"\u003EЦелеустремленность \u003C\u002Fli\u003E\u003Cli class=\"list__item\"\u003EПостоянно занимаюсь саморазвитием в профессиональной сфере \u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmain\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ 55:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
}

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '',
    className,
    padding = '',
    escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '',
    padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
}

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (
    val === false ||
    val == null ||
    (!val && (key === 'class' || key === 'style'))
  ) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if (
    (type === 'object' || type === 'function') &&
    typeof val.toJSON === 'function'
  ) {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + "='" + val.replace(/'/g, '&#39;') + "'";
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
}

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse) {
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
}

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html) {
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34:
        escape = '&quot;';
        break;
      case 38:
        escape = '&amp;';
        break;
      case 60:
        escape = '&lt;';
        break;
      case 62:
        escape = '&gt;';
        break;
      default:
        continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
}

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str) {
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  var context, lines, start, end;
  try {
    str = str || __webpack_require__(835).readFileSync(filename, {encoding: 'utf8'});
    context = 3;
    lines = str.split('\n');
    start = Math.max(lineno - context, 0);
    end = Math.min(lines.length, lineno + context);
  } catch (ex) {
    err.message +=
      ' - could not read from ' + filename + ' (' + ex.message + ')';
    pug_rethrow(err, null, lineno);
    return;
  }

  // Error context
  context = lines
    .slice(start, end)
    .map(function(line, i) {
      var curr = i + start + 1;
      return (curr == lineno ? '  > ' : '    ') + curr + '| ' + line;
    })
    .join('\n');

  // Alter exception message
  err.path = filename;
  try {
    err.message =
      (filename || 'Pug') +
      ':' +
      lineno +
      '\n' +
      context +
      '\n\n' +
      err.message;
  } catch (e) {}
  throw err;
}


/***/ }),

/***/ 854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

return BrowserSpriteSymbol;

})));


/***/ }),

/***/ 95:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(854);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(348);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "badge",
  "use": "badge-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"badge\">\r\n  <g>\r\n    <rect fill=\"none\" height=\"24\" width=\"24\" />\r\n  </g>\r\n  <g>\r\n    <path d=\"M20,7h-5V4c0-1.1-0.9-2-2-2h-2C9.9,2,9,2.9,9,4v3H4C2.9,7,2,7.9,2,9v11c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9 C22,7.9,21.1,7,20,7z M9,12c0.83,0,1.5,0.67,1.5,1.5S9.83,15,9,15s-1.5-0.67-1.5-1.5S8.17,12,9,12z M12,18H6v-0.75c0-1,2-1.5,3-1.5 s3,0.5,3,1.5V18z M13,9h-2V4h2V9z M18,16.5h-4V15h4V16.5z M18,13.5h-4V12h4V13.5z\" />\r\n  </g>\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ 309:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(854);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(348);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "ball",
  "use": "ball-usage",
  "viewBox": "0 0 35.844 35.844",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 35.844 35.844\" id=\"ball\">\r\n<g>\r\n\t<g>\r\n\t\t<path d=\"M17.922,0C8.04,0,0,8.04,0,17.922c0,9.883,8.04,17.922,17.922,17.922\r\n\t\t\tc9.883,0,17.922-8.039,17.922-17.922C35.844,8.04,27.805,0,17.922,0z M23.671,33.994c-1.601,0.572-3.308,0.914-5.088,0.982\r\n\t\t\tc6.535-7.674,5.321-18.029,5.099-19.563c1.709-0.669,3.75-1.193,6.045-1.274C30.07,15.894,31.372,25,23.671,33.994z\r\n\t\t\t M14.143,28.721c-1.582-0.512-9.332-3.479-13.085-13.435c0.34-2.175,1.085-4.212,2.165-6.035\r\n\t\t\tc2.073,10.046,9.215,13.836,13.226,14.537C15.981,25.33,15.257,27.04,14.143,28.721z M18.135,18.712\r\n\t\t\tc0.374-0.334,2.078-1.786,4.75-2.969c0.27,2.05,1.178,12.065-5.43,19.241c-2.338-0.063-4.557-0.594-6.57-1.51\r\n\t\t\tC17.445,28.3,18.086,20.759,18.135,18.712z M17.687,17.998c-0.644-0.339-2.655-1.496-4.692-3.623\r\n\t\t\tc0.977-0.789,9.54-7.395,19.599-5.173c0.84,1.407,1.479,2.94,1.887,4.569C25.529,11.731,18.921,16.932,17.687,17.998z\r\n\t\t\t M31.979,8.225C21.78,6.403,13.268,13.077,12.43,13.759c-1.054-1.198-2.076-2.665-2.884-4.414\r\n\t\t\tc1.223-1.09,8.109-6.626,19.368-4.489C30.078,5.837,31.109,6.97,31.979,8.225z M27.514,3.788\r\n\t\t\tC17.345,2.422,10.884,7.125,9.201,8.544C8.657,7.19,8.246,5.68,8.046,4.003c2.792-1.987,6.196-3.17,9.877-3.17\r\n\t\t\tC21.475,0.833,24.777,1.925,27.514,3.788z M7.28,4.575c1.321,9.11,8.585,13.398,10.022,14.162c-0.02,0.77-0.13,2.328-0.626,4.242\r\n\t\t\tC14.762,22.593,5.888,20.178,3.862,8.232C4.817,6.851,5.971,5.621,7.28,4.575z M0.833,17.921c0-0.299,0.03-0.589,0.045-0.884\r\n\t\t\tC4.747,25.75,11.617,28.723,13.646,29.43c-0.939,1.279-2.122,2.521-3.605,3.639C4.577,30.213,0.833,24.501,0.833,17.921z\r\n\t\t\t M25.384,33.271c6.575-8.588,5.621-17.005,5.235-19.141c1.289,0.021,2.652,0.191,4.074,0.55c0.201,1.05,0.316,2.132,0.316,3.24\r\n\t\t\tC35.012,24.667,31.072,30.494,25.384,33.271z\" />\r\n\t</g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ 916:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(854);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(348);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "bicycle",
  "use": "bicycle-usage",
  "viewBox": "0 0 512 512",
  "content": "<symbol viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" id=\"bicycle\">\r\n  <path d=\"m416.667 224.936c-7.701 0-15.189.924-22.365 2.656l-37.915-90.996 32.891-10.963c7.859-2.62 12.106-11.115 9.486-18.974-2.62-7.858-11.11-12.109-18.974-9.486l-49.225 16.451c-7.647 3.187-11.263 11.968-8.077 19.615l9.425 22.619-131.473 34.182-13.504-31.504h20.864c8.284 0 15-6.716 15-15s-6.716-15-15-15h-64.267c-8.284 0-15 6.716-15 15s6.716 15 15 15h10.763l19.972 46.594-29.072 33.918c-14.516-8.944-31.596-14.112-49.862-14.112-52.567 0-95.334 42.766-95.334 95.333s42.767 95.333 95.333 95.333c47.464 0 86.933-34.868 94.149-80.333h50.45c4.792 0 9.296-2.29 12.12-6.163l96.756-132.695 17.812 42.75c-27.158 16.818-45.289 46.883-45.289 81.107 0 52.567 42.766 95.333 95.333 95.333s95.336-42.765 95.336-95.332-42.767-95.333-95.333-95.333zm-321.334 160.667c-36.024 0-65.333-29.309-65.333-65.334s29.309-65.333 65.333-65.333c10.802 0 20.991 2.651 29.976 7.313l-41.365 48.259c-3.813 4.448-4.687 10.708-2.239 16.03s7.77 8.732 13.628 8.732h63.575c-6.798 28.815-32.712 50.333-63.575 50.333zm32.614-80.334 59.492-69.408 29.746 69.408zm115.392-15.131-30.946-72.209 103.155-26.821zm173.328 95.465c-36.025 0-65.333-29.309-65.333-65.333 0-21.731 10.675-41.006 27.045-52.89l24.441 58.659c3.186 7.647 11.969 11.263 19.615 8.077 7.647-3.187 11.263-11.968 8.077-19.615l-24.454-58.69c3.455-.567 6.995-.875 10.608-.875 36.025 0 65.333 29.309 65.333 65.333s-29.308 65.334-65.332 65.334z\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ 448:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(854);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(348);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "coding",
  "use": "coding-usage",
  "viewBox": "0 0 511.998 511",
  "content": "<symbol viewBox=\"0 0 511.998 511\" xmlns=\"http://www.w3.org/2000/svg\" id=\"coding\">\r\n  <path d=\"m58.960938 187.046875c1.460937 1.460937 3.378906 2.195313 5.296874 2.195313 1.917969 0 3.835938-.730469 5.300782-2.195313 2.925781-2.925781 2.925781-7.671875 0-10.597656l-18.195313-18.195313 18.195313-18.191406c2.925781-2.929688 2.925781-7.671875 0-10.597656-2.925782-2.925782-7.671875-2.925782-10.597656 0l-23.492188 23.492187c-1.40625 1.40625-2.195312 3.3125-2.195312 5.296875 0 1.988282.789062 3.894532 2.195312 5.300782zm0 0\" />\r\n  <path d=\"m133.320312 158.253906-18.195312 18.195313c-2.925781 2.925781-2.925781 7.671875.003906 10.597656 1.460938 1.460937 3.378906 2.195313 5.296875 2.195313s3.835938-.734376 5.296875-2.195313l23.496094-23.496094c2.925781-2.925781 2.925781-7.671875 0-10.59375l-23.496094-23.496093c-2.925781-2.925782-7.667968-2.925782-10.59375 0-2.929687 2.929687-2.929687 7.671874 0 10.597656zm0 0\" />\r\n  <path d=\"m81.171875 188.722656c.898437.351563 1.828125.519532 2.738281.519532 2.992188 0 5.816406-1.804688 6.976563-4.753907l18.457031-46.988281c1.515625-3.851562-.382812-8.199219-4.234375-9.714844-3.847656-1.511718-8.199219.382813-9.710937 4.234375l-18.460938 46.988281c-1.511719 3.851563.382812 8.203126 4.234375 9.714844zm0 0\" />\r\n  <path d=\"m45.007812 233.203125h50.480469c4.136719 0 7.492188-3.355469 7.492188-7.496094 0-4.136719-3.355469-7.492187-7.492188-7.492187h-50.480469c-4.140624 0-7.492187 3.355468-7.492187 7.492187 0 4.140625 3.351563 7.496094 7.492187 7.496094zm0 0\" />\r\n  <path d=\"m211.753906 218.214844h-88.75c-4.136718 0-7.492187 3.355468-7.492187 7.492187 0 4.140625 3.355469 7.496094 7.492187 7.496094h88.75c4.140625 0 7.496094-3.355469 7.496094-7.496094 0-4.136719-3.355469-7.492187-7.496094-7.492187zm0 0\" />\r\n  <path d=\"m45.007812 264.808594h21.503907c4.136719 0 7.492187-3.355469 7.492187-7.496094 0-4.136719-3.355468-7.492188-7.492187-7.492188h-21.503907c-4.140624 0-7.492187 3.355469-7.492187 7.492188 0 4.140625 3.351563 7.496094 7.492187 7.496094zm0 0\" />\r\n  <path d=\"m184.339844 249.820312c-4.140625 0-7.492188 3.355469-7.492188 7.492188 0 4.140625 3.351563 7.496094 7.492188 7.496094h13.09375c4.140625 0 7.496094-3.355469 7.496094-7.496094 0-4.136719-3.355469-7.492188-7.496094-7.492188zm0 0\" />\r\n  <path d=\"m164.617188 257.3125c0-4.136719-3.355469-7.492188-7.492188-7.492188h-64.320312c-4.140626 0-7.492188 3.355469-7.492188 7.492188 0 4.140625 3.351562 7.496094 7.492188 7.496094h64.320312c4.136719 0 7.492188-3.355469 7.492188-7.496094zm0 0\" />\r\n  <path d=\"m213.703125 257.3125c0 4.140625 3.355469 7.496094 7.492187 7.496094h24.527344c4.140625 0 7.496094-3.355469 7.496094-7.496094 0-4.136719-3.355469-7.492188-7.496094-7.492188h-24.527344c-4.136718 0-7.492187 3.355469-7.492187 7.492188zm0 0\" />\r\n  <path d=\"m172.894531 164.265625h25.871094c4.140625 0 7.496094-3.355469 7.496094-7.496094 0-4.136719-3.355469-7.492187-7.496094-7.492187h-25.871094c-4.140625 0-7.496093 3.355468-7.496093 7.492187 0 4.140625 3.355468 7.496094 7.496093 7.496094zm0 0\" />\r\n  <path d=\"m227.742188 164.265625h157.855468c4.140625 0 7.492188-3.355469 7.492188-7.496094 0-4.136719-3.351563-7.492187-7.492188-7.492187h-157.855468c-4.140626 0-7.496094 3.355468-7.496094 7.492187 0 4.140625 3.355468 7.496094 7.496094 7.496094zm0 0\" />\r\n  <path d=\"m361.621094 182.246094h-63.945313c-4.136719 0-7.492187 3.355468-7.492187 7.496094 0 4.136718 3.355468 7.492187 7.492187 7.492187h63.945313c4.136718 0 7.492187-3.355469 7.492187-7.492187 0-4.140626-3.355469-7.496094-7.492187-7.496094zm0 0\" />\r\n  <path d=\"m273.699219 182.246094h-21.980469c-4.140625 0-7.492188 3.355468-7.492188 7.496094 0 4.136718 3.351563 7.492187 7.492188 7.492187h21.980469c4.140625 0 7.492187-3.355469 7.492187-7.492187 0-4.140626-3.351562-7.496094-7.492187-7.496094zm0 0\" />\r\n  <path d=\"m172.894531 197.234375h53.847657c4.136718 0 7.492187-3.355469 7.492187-7.492187 0-4.140626-3.355469-7.496094-7.492187-7.496094h-53.847657c-4.140625 0-7.496093 3.355468-7.496093 7.496094 0 4.136718 3.355468 7.492187 7.496093 7.492187zm0 0\" />\r\n  <path d=\"m157.21875 281.160156h-50.476562c-4.140626 0-7.496094 3.355469-7.496094 7.492188 0 4.136718 3.355468 7.492187 7.496094 7.492187h50.476562c4.136719 0 7.492188-3.355469 7.492188-7.492187 0-4.136719-3.355469-7.492188-7.492188-7.492188zm0 0\" />\r\n  <path d=\"m83.789062 281.160156h-38.78125c-4.140624 0-7.492187 3.355469-7.492187 7.492188 0 4.136718 3.351563 7.492187 7.492187 7.492187h38.78125c4.140626 0 7.492188-3.355469 7.492188-7.492187 0-4.136719-3.351562-7.492188-7.492188-7.492188zm0 0\" />\r\n  <path d=\"m248.722656 281.160156h-65.941406c-4.140625 0-7.492188 3.355469-7.492188 7.492188 0 4.136718 3.351563 7.492187 7.492188 7.492187h65.941406c4.136719 0 7.492188-3.355469 7.492188-7.492187 0-4.136719-3.355469-7.492188-7.492188-7.492188zm0 0\" />\r\n  <path d=\"m337.898438 242.667969h-36.058594c-4.136719 0-7.492188 3.355469-7.492188 7.492187 0 4.140625 3.355469 7.496094 7.492188 7.496094h36.058594c4.140624 0 7.492187-3.355469 7.492187-7.496094 0-4.136718-3.351563-7.492187-7.492187-7.492187zm0 0\" />\r\n  <path d=\"m400.46875 257.65625h50.902344c4.140625 0 7.496094-3.355469 7.496094-7.496094 0-4.136718-3.355469-7.492187-7.496094-7.492187h-50.902344c-4.140625 0-7.492188 3.355469-7.492188 7.492187 0 4.140625 3.355469 7.496094 7.492188 7.496094zm0 0\" />\r\n  <path d=\"m375.015625 242.667969h-11.664063c-4.140624 0-7.496093 3.355469-7.496093 7.492187 0 4.140625 3.355469 7.496094 7.496093 7.496094h11.664063c4.140625 0 7.492187-3.355469 7.492187-7.496094 0-4.136718-3.351562-7.492187-7.492187-7.492187zm0 0\" />\r\n  <path d=\"m301.839844 339.3125h36.058594c4.140624 0 7.492187-3.351562 7.492187-7.492188 0-4.136718-3.351563-7.492187-7.492187-7.492187h-36.058594c-4.136719 0-7.492188 3.355469-7.492188 7.492187 0 4.140626 3.355469 7.492188 7.492188 7.492188zm0 0\" />\r\n  <path d=\"m400.46875 339.3125h50.902344c4.140625 0 7.496094-3.351562 7.496094-7.492188 0-4.136718-3.355469-7.492187-7.496094-7.492187h-50.902344c-4.140625 0-7.492188 3.355469-7.492188 7.492187 0 4.140626 3.355469 7.492188 7.492188 7.492188zm0 0\" />\r\n  <path d=\"m363.351562 339.3125h11.664063c4.140625 0 7.496094-3.351562 7.496094-7.492188 0-4.136718-3.355469-7.492187-7.496094-7.492187h-11.664063c-4.140624 0-7.492187 3.355469-7.492187 7.492187 0 4.140626 3.351563 7.492188 7.492187 7.492188zm0 0\" />\r\n  <path d=\"m337.898438 405.988281h-36.058594c-4.136719 0-7.492188 3.355469-7.492188 7.492188s3.355469 7.492187 7.492188 7.492187h36.058594c4.140624 0 7.492187-3.355468 7.492187-7.492187s-3.351563-7.492188-7.492187-7.492188zm0 0\" />\r\n  <path d=\"m451.371094 405.988281h-50.902344c-4.140625 0-7.492188 3.355469-7.492188 7.492188s3.351563 7.492187 7.492188 7.492187h50.902344c4.140625 0 7.496094-3.355468 7.496094-7.492187s-3.355469-7.492188-7.496094-7.492188zm0 0\" />\r\n  <path d=\"m375.015625 405.988281h-11.664063c-4.140624 0-7.496093 3.355469-7.496093 7.492188s3.355469 7.492187 7.496093 7.492187h11.664063c4.140625 0 7.492187-3.355468 7.492187-7.492187s-3.351562-7.492188-7.492187-7.492188zm0 0\" />\r\n  <path d=\"m479.023438.5h-446.042969c-18.183594 0-32.980469 14.792969-32.980469 32.980469v362.566406c0 18.183594 14.796875 32.976563 32.980469 32.976563h28.199219c4.136718 0 7.492187-3.351563 7.492187-7.492188 0-4.136719-3.355469-7.492188-7.492187-7.492188h-28.199219c-9.921875 0-17.992188-8.070312-17.992188-17.992187v-28.425781h272.996094v12.914062h-5.941406c-8.128907 0-14.738281 6.609375-14.738281 14.738282v18.765624h-160.566407c-4.136719 0-7.492187 3.355469-7.492187 7.492188 0 4.140625 3.355468 7.492188 7.492187 7.492188h72.046875v26.875h-22.625c-15.09375 0-27.371094 12.28125-27.371094 27.371093v16.1875c0 6.886719 5.601563 12.488281 12.488282 12.488281h228.875c6.886718 0 12.488281-5.601562 12.488281-12.488281v-16.1875c0-15.089843-12.277344-27.371093-27.371094-27.371093h-22.625v-9.472657h138.527344c8.125 0 14.734375-6.609375 14.734375-14.738281v-3.527344c14.605469-3.390625 25.523438-16.496094 25.523438-32.113281l.566406-362.570313c.003906-18.183593-14.789063-32.976562-32.972656-32.976562zm-196.730469 349.28125v-35.917969h188.628906v35.917969zm20.675781-50.90625v-15.765625h147.273438v15.765625zm147.273438 65.890625v15.769531h-147.273438v-15.769531zm-256.472657 64.257813h73.535157v2.667968c0 8.125 6.609374 14.734375 14.738281 14.734375h35.617187v9.472657h-123.890625zm161.503907 41.863281c6.828124 0 12.382812 5.554687 12.382812 12.382812v13.691407h-223.882812v-13.691407c0-6.828125 5.558593-12.382812 12.386718-12.382812zm115.648437-39.449219h-188.628906v-35.914062h188.628906zm25.523437-35.390625c0 7.257813-4.328124 13.511719-10.535156 16.351563v-17.128907c0-8.125-6.613281-14.734375-14.738281-14.734375h-5.941406v-12.914062h31.214843zm0-43.410156h-10.78125c.152344-.847657.246094-39.023438.246094-39.023438 0-8.128906-6.613281-14.738281-14.738281-14.738281h-5.941406v-15.765625h5.941406c8.125 0 14.738281-6.613281 14.738281-14.738281v-36.417969c0-8.125-6.613281-14.738281-14.738281-14.738281h-42.324219c-4.140625 0-7.492187 3.355468-7.492187 7.496094 0 4.136718 3.351562 7.492187 7.492187 7.492187h42.074219v35.917969h-188.628906v-35.917969h99.929687c4.140625 0 7.492188-3.355469 7.492188-7.492187 0-4.140626-3.351563-7.496094-7.492188-7.496094h-100.179687c-8.128907 0-14.738281 6.613281-14.738281 14.738281v36.417969c0 8.125 6.609374 14.738281 14.738281 14.738281h5.941406v15.765625h-5.941406c-8.128907 0-14.738281 6.613281-14.738281 14.738281 0 0 .09375 38.175781.246093 39.023438h-252.5625v-250.207031h481.457031zm0-265.195313h-480.90625v-53.964844c0-9.917968 8.070313-17.988281 17.992188-17.988281h444.921875c9.921875 0 17.992187 8.070313 17.992187 17.992188zm0 0\" />\r\n  <path d=\"m55.261719 29.261719c-12.125 0-21.988281 9.863281-21.988281 21.988281s9.863281 21.992188 21.988281 21.992188 21.992187-9.867188 21.992187-21.992188-9.867187-21.988281-21.992187-21.988281zm0 28.992187c-3.859375 0-7.003907-3.140625-7.003907-7.003906 0-3.859375 3.144532-7.003906 7.003907-7.003906 3.863281 0 7.003906 3.144531 7.003906 7.003906 0 3.863281-3.140625 7.003906-7.003906 7.003906zm0 0\" />\r\n  <path d=\"m111.25 29.261719c-12.125 0-21.992188 9.863281-21.992188 21.988281s9.867188 21.992188 21.992188 21.992188 21.988281-9.867188 21.988281-21.992188-9.867187-21.988281-21.988281-21.988281zm0 28.992187c-3.863281 0-7.003906-3.140625-7.003906-7.003906 0-3.859375 3.140625-7.003906 7.003906-7.003906 3.859375 0 7.003906 3.144531 7.003906 7.003906 0 3.863281-3.144531 7.003906-7.003906 7.003906zm0 0\" />\r\n  <path d=\"m167.234375 29.261719c-12.125 0-21.988281 9.863281-21.988281 21.988281s9.863281 21.992188 21.988281 21.992188 21.992187-9.867188 21.992187-21.992188-9.867187-21.988281-21.992187-21.988281zm0 28.992187c-3.859375 0-7.003906-3.140625-7.003906-7.003906 0-3.859375 3.144531-7.003906 7.003906-7.003906 3.863281 0 7.003906 3.144531 7.003906 7.003906 0 3.863281-3.140625 7.003906-7.003906 7.003906zm0 0\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ 763:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(854);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(348);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "email",
  "use": "email-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"email\">\r\n  <path d=\"M0 0h24v24H0z\" fill=\"none\" />\r\n  <path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ 436:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(854);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(348);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "info",
  "use": "info-usage",
  "viewBox": "0 0 330 330",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 330 330\" id=\"info\">\r\n<g>\r\n\t<g>\r\n\t\t<g>\r\n\t\t\t<path d=\"M165,0.008C74.019,0.008,0,74.024,0,164.999c0,90.977,74.019,164.992,165,164.992s165-74.015,165-164.992\r\n\t\t\t\tC330,74.024,255.981,0.008,165,0.008z M165,299.992c-74.439,0-135-60.557-135-134.992S90.561,30.008,165,30.008\r\n\t\t\t\ts135,60.557,135,134.991C300,239.436,239.439,299.992,165,299.992z\" />\r\n\t\t\t<path d=\"M165,130.008c-8.284,0-15,6.716-15,15v99.983c0,8.284,6.716,15,15,15s15-6.716,15-15v-99.983\r\n\t\t\t\tC180,136.725,173.284,130.008,165,130.008z\" />\r\n\t\t\t<path d=\"M165,70.011c-3.95,0-7.811,1.6-10.61,4.39c-2.79,2.79-4.39,6.66-4.39,10.61s1.6,7.81,4.39,10.61\r\n\t\t\t\tc2.79,2.79,6.66,4.39,10.61,4.39s7.81-1.6,10.609-4.39c2.79-2.8,4.391-6.66,4.391-10.61s-1.601-7.82-4.391-10.61\r\n\t\t\t\tC172.81,71.61,168.95,70.011,165,70.011z\" />\r\n\t\t</g>\r\n\t</g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ 355:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(854);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(348);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "lines",
  "use": "lines-usage",
  "viewBox": "0 0 1817 1928",
  "content": "<symbol viewBox=\"0 0 1817 1928\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"lines\">\r\n<g filter=\"url(#lines_filter0_d)\">\r\n<path d=\"M738.725 -244.255C1080.19 -161.736 718.764 82.6956 947.495 310.259C1157.11 518.809 1644.8 240.313 1601.36 759.521C1571.62 1115 1658.64 1266.23 1929.36 1396.7\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n<path d=\"M757.981 -259.905C1099.44 -177.387 738.02 67.0449 966.751 294.609C1176.37 503.158 1664.06 224.662 1620.62 743.871C1590.88 1099.34 1677.9 1250.58 1948.61 1381.05\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n<path d=\"M777.238 -275.556C1118.7 -193.038 757.277 51.3941 986.008 278.958C1195.63 487.507 1683.32 209.012 1639.88 728.22C1610.14 1083.69 1697.15 1234.93 1967.87 1365.4\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n<path d=\"M796.494 -291.207C1137.96 -208.688 776.533 35.7433 1005.26 263.307C1214.88 471.856 1702.57 193.361 1659.13 712.569C1629.39 1068.04 1716.41 1219.28 1987.13 1349.75\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n<path d=\"M815.751 -306.858C1157.21 -224.339 795.79 20.0925 1024.52 247.656C1234.14 456.206 1721.83 177.71 1678.39 696.918C1648.65 1052.39 1735.67 1203.63 2006.38 1334.1\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n<path d=\"M835.008 -322.509C1176.47 -239.99 815.047 4.44188 1043.78 232.006C1253.4 440.555 1741.09 162.059 1697.65 681.268C1667.91 1036.74 1754.92 1187.98 2025.64 1318.45\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n<path d=\"M854.264 -338.159C1195.73 -255.641 834.303 -11.209 1063.03 216.355C1272.65 424.904 1760.34 146.408 1716.9 665.617C1687.16 1021.09 1774.18 1172.33 2044.9 1302.8\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n<path d=\"M873.52 -353.81C1214.98 -271.292 853.559 -26.8598 1082.29 200.704C1291.91 409.253 1779.6 130.758 1736.16 649.966C1706.42 1005.44 1793.44 1156.68 2064.15 1287.15\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n<path d=\"M892.777 -369.461C1234.24 -286.942 872.816 -42.5105 1101.55 185.053C1311.17 393.603 1798.86 115.107 1755.42 634.315C1725.67 989.789 1812.69 1141.03 2083.41 1271.5\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n<path d=\"M912.033 -385.112C1253.5 -302.593 892.072 -58.1612 1120.8 169.403C1330.42 377.952 1818.11 99.4563 1774.67 618.664C1744.93 974.138 1831.95 1125.37 2102.67 1255.85\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n<path d=\"M931.29 -400.763C1272.75 -318.244 911.329 -73.8122 1140.06 153.752C1349.68 362.301 1837.37 83.8053 1793.93 603.014C1764.19 958.487 1851.21 1109.72 2121.92 1240.2\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n<path d=\"M950.546 -416.413C1292.01 -333.895 930.585 -89.4628 1159.32 138.101C1368.93 346.65 1856.62 68.1547 1813.18 587.363C1783.44 942.837 1870.46 1094.07 2141.18 1224.54\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n<path d=\"M969.803 -432.064C1311.26 -349.545 949.842 -105.114 1178.57 122.45C1388.19 330.999 1875.88 52.5039 1832.44 571.712C1802.7 927.186 1889.72 1078.42 2160.43 1208.89\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n<path d=\"M989.059 -447.715C1330.52 -365.196 969.098 -120.764 1197.83 106.799C1407.45 315.349 1895.14 36.8532 1851.7 556.061C1821.96 911.535 1908.97 1062.77 2179.69 1193.24\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n<path d=\"M1008.32 -463.365C1349.78 -380.847 988.354 -136.415 1217.09 91.1487C1426.7 299.698 1914.39 21.2024 1870.95 540.411C1841.21 895.884 1928.23 1047.12 2198.95 1177.59\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n<path d=\"M1027.57 -479.016C1369.03 -396.498 1007.61 -152.066 1236.34 75.4978C1445.96 284.047 1933.65 5.55156 1890.21 524.76C1860.47 880.234 1947.49 1031.47 2218.2 1161.94\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n<path d=\"M1046.83 -494.667C1388.29 -412.148 1026.87 -167.717 1255.6 59.8471C1465.22 268.396 1952.91 -10.0992 1909.47 509.109C1879.73 864.583 1966.74 1015.82 2237.46 1146.29\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n<path d=\"M1066.08 -510.318C1407.55 -427.799 1046.12 -183.367 1274.85 44.1963C1484.47 252.746 1972.16 -25.75 1928.72 493.458C1898.98 848.932 1986 1000.17 2256.72 1130.64\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n<path d=\"M1085.34 -525.969C1426.8 -443.45 1065.38 -199.018 1294.11 28.5455C1503.73 237.095 1991.42 -41.4008 1947.98 477.807C1918.24 833.281 2005.26 984.517 2275.97 1114.99\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n<path d=\"M1104.6 -541.619C1446.06 -459.101 1084.64 -214.669 1313.37 12.8948C1522.99 221.444 2010.68 -57.0515 1967.24 462.157C1937.5 817.631 2024.51 968.867 2295.23 1099.34\" stroke=\"#56CCF2\" stroke-width=\"1.18846\" />\r\n</g>\r\n<defs>\r\n<filter id=\"lines_filter0_d\" x=\"734.46\" y=\"-654.395\" width=\"1565.14\" height=\"2171.81\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\r\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood>\r\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"></feColorMatrix>\r\n<feOffset dy=\"4\"></feOffset>\r\n<feGaussianBlur stdDeviation=\"2\"></feGaussianBlur>\r\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\"></feColorMatrix>\r\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow\"></feBlend>\r\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow\" result=\"shape\"></feBlend>\r\n</filter>\r\n</defs>\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ 246:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(854);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(348);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "monitor",
  "use": "monitor-usage",
  "viewBox": "0 0 512 512",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 512 512\" id=\"monitor\">\r\n<g>\r\n\t<g>\r\n\t\t<path d=\"M467,28.355H45c-24.813,0-45,20.187-45,45v278.273c0,24.813,20.187,45,45,45h151.494v57.016h-22.587\r\n\t\t\tc-8.284,0-15,6.716-15,15s6.716,15,15,15h164.187c8.284,0,15-6.716,15-15s-6.716-15-15-15h-22.587v-57.016H467\r\n\t\t\tc24.813,0,45-20.187,45-45V73.355C512,48.542,491.813,28.355,467,28.355z M285.506,453.645h-59.012v-57.016h59.012V453.645z\r\n\t\t\t M482,351.629c0,8.271-6.729,15-15,15H45c-8.271,0-15-6.729-15-15v-22.803h452V351.629z M482,298.826H30V73.355\r\n\t\t\tc0-8.271,6.729-15,15-15h422c8.271,0,15,6.729,15,15V298.826z\" />\r\n\t</g>\r\n</g>\r\n<g>\r\n\t<g>\r\n\t\t<path d=\"M182.275,216.892l-40.633-27.741l40.633-27.741c6.842-4.671,8.602-14.004,3.931-20.846\r\n\t\t\tc-4.67-6.841-14.004-8.601-20.846-3.931l-58.779,40.129c-4.094,2.795-6.542,7.432-6.542,12.388s2.448,9.595,6.542,12.39\r\n\t\t\tl58.779,40.129c2.587,1.767,5.531,2.613,8.444,2.613c4.79,0,9.498-2.29,12.402-6.544\r\n\t\t\tC190.877,230.896,189.117,221.563,182.275,216.892z\" />\r\n\t</g>\r\n</g>\r\n<g>\r\n\t<g>\r\n\t\t<path d=\"M405.419,176.764l-58.779-40.129c-6.841-4.67-16.174-2.91-20.846,3.931c-4.671,6.842-2.911,16.175,3.931,20.846\r\n\t\t\tl40.633,27.741l-40.633,27.739c-6.842,4.671-8.602,14.004-3.931,20.846c2.905,4.255,7.611,6.544,12.402,6.544\r\n\t\t\tc2.913,0,5.857-0.847,8.444-2.613l58.779-40.129c4.094-2.795,6.542-7.432,6.542-12.388S409.512,179.56,405.419,176.764z\" />\r\n\t</g>\r\n</g>\r\n<g>\r\n\t<g>\r\n\t\t<path d=\"M293.458,122.516c-7.22-4.059-16.366-1.497-20.426,5.726l-60.218,107.123c-4.058,7.22-1.495,16.365,5.727,20.425\r\n\t\t\tc2.324,1.307,4.847,1.927,7.336,1.927c5.244,0,10.336-2.755,13.089-7.652l60.218-107.123\r\n\t\t\tC303.244,135.721,300.68,126.576,293.458,122.516z\" />\r\n\t</g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ 877:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(854);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(348);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "phone",
  "use": "phone-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"phone\">\r\n  <path d=\"M0 0h24v24H0z\" fill=\"none\" />\r\n  <path d=\"M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ 978:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(854);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(348);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "place",
  "use": "place-usage",
  "viewBox": "0 0 512 512",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 512 512\" id=\"place\">\r\n<g>\r\n\t<g>\r\n\t\t<path d=\"M425.951,89.021C386.864,32.451,324.917,0,256.006,0S125.148,32.451,86.061,89.021\r\n\t\t\tc-38.895,56.284-47.876,127.541-24.072,190.496c6.367,17.192,16.488,33.895,30.01,49.547l150.378,176.634\r\n\t\t\tc3.401,3.998,8.384,6.302,13.629,6.302c5.245,0,10.228-2.303,13.629-6.302l150.336-176.586\r\n\t\t\tc13.582-15.742,23.69-32.427,30.004-49.481C473.827,216.562,464.846,145.305,425.951,89.021z M416.451,267.093\r\n\t\t\tc-4.869,13.158-12.818,26.167-23.613,38.68c-0.03,0.03-0.06,0.06-0.084,0.096L256.006,466.487L119.174,305.768\r\n\t\t\tc-10.789-12.502-18.738-25.51-23.655-38.794c-19.686-52.065-12.215-110.981,19.991-157.592\r\n\t\t\tc32.307-46.76,83.519-73.578,140.496-73.578c56.976,0,108.182,26.817,140.49,73.578\r\n\t\t\tC428.708,155.993,436.185,214.909,416.451,267.093z\" />\r\n\t</g>\r\n</g>\r\n<g>\r\n\t<g>\r\n\t\t<path d=\"M256.006,106.219c-55.276,0-100.252,44.97-100.252,100.252s44.97,100.252,100.252,100.252s100.252-44.97,100.252-100.252\r\n\t\t\tC356.258,151.195,311.282,106.219,256.006,106.219z M256.006,270.918c-35.536,0-64.448-28.912-64.448-64.448\r\n\t\t\tc0-35.536,28.912-64.448,64.448-64.448c35.536,0,64.448,28.912,64.448,64.448S291.542,270.918,256.006,270.918z\" />\r\n\t</g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ 941:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(854);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(348);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "school",
  "use": "school-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"school\">\r\n  <path d=\"M0 0h24v24H0z\" fill=\"none\" />\r\n  <path d=\"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ 444:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(854);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(348);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "settings",
  "use": "settings-usage",
  "viewBox": "0 0 548.172 548.172",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 548.172 548.172\" id=\"settings\">\r\n<g>\r\n\t<g>\r\n\t\t<path d=\"M333.186,376.438c0-1.902-0.668-3.806-1.999-5.708c-10.66-12.758-19.223-23.702-25.697-32.832\r\n\t\t\tc3.997-7.803,7.043-15.037,9.131-21.693l44.255-6.852c1.718-0.194,3.241-1.19,4.572-2.994c1.331-1.816,1.991-3.668,1.991-5.571\r\n\t\t\tv-52.822c0-2.091-0.66-3.949-1.991-5.564s-2.95-2.618-4.853-2.993l-43.4-6.567c-2.098-6.473-5.331-14.281-9.708-23.413\r\n\t\t\tc2.851-4.19,7.139-9.902,12.85-17.131c5.709-7.234,9.713-12.371,11.991-15.417c1.335-1.903,1.999-3.713,1.999-5.424\r\n\t\t\tc0-5.14-13.706-20.367-41.107-45.683c-1.902-1.52-3.901-2.281-6.002-2.281c-2.279,0-4.182,0.659-5.712,1.997L245.815,150.9\r\n\t\t\tc-7.801-3.996-14.939-6.945-21.411-8.854l-6.567-43.68c-0.187-1.903-1.14-3.571-2.853-4.997c-1.714-1.427-3.617-2.142-5.713-2.142\r\n\t\t\th-53.1c-4.377,0-7.232,2.284-8.564,6.851c-2.286,8.757-4.473,23.416-6.567,43.968c-8.183,2.664-15.511,5.71-21.982,9.136\r\n\t\t\tl-32.832-25.693c-1.903-1.335-3.901-1.997-5.996-1.997c-3.621,0-11.138,5.614-22.557,16.846\r\n\t\t\tc-11.421,11.228-19.229,19.698-23.413,25.409c-1.334,1.525-1.997,3.428-1.997,5.712c0,1.711,0.662,3.614,1.997,5.708\r\n\t\t\tc10.657,12.756,19.221,23.7,25.694,32.832c-3.996,7.808-7.04,15.037-9.132,21.698l-44.255,6.848\r\n\t\t\tc-1.715,0.19-3.236,1.188-4.57,2.993C0.666,243.35,0,245.203,0,247.105v52.819c0,2.095,0.666,3.949,1.997,5.564\r\n\t\t\tc1.334,1.622,2.95,2.525,4.857,2.714l43.396,6.852c2.284,7.23,5.618,15.037,9.995,23.411c-3.046,4.191-7.517,9.999-13.418,17.418\r\n\t\t\tc-5.905,7.427-9.805,12.471-11.707,15.133c-1.332,1.903-1.999,3.717-1.999,5.421c0,5.147,13.706,20.369,41.114,45.687\r\n\t\t\tc1.903,1.519,3.899,2.275,5.996,2.275c2.474,0,4.377-0.66,5.708-1.995l33.689-25.406c7.801,3.997,14.939,6.943,21.413,8.847\r\n\t\t\tl6.567,43.684c0.188,1.902,1.142,3.572,2.853,4.996c1.713,1.427,3.616,2.139,5.711,2.139h53.1c4.38,0,7.233-2.282,8.566-6.851\r\n\t\t\tc2.284-8.949,4.471-23.698,6.567-44.256c7.611-2.275,14.938-5.235,21.982-8.846l32.833,25.693\r\n\t\t\tc1.903,1.335,3.901,1.995,5.996,1.995c3.617,0,11.091-5.66,22.415-16.991c11.32-11.317,19.175-19.842,23.555-25.55\r\n\t\t\tC332.518,380.53,333.186,378.724,333.186,376.438z M234.397,325.626c-14.272,14.27-31.499,21.408-51.673,21.408\r\n\t\t\tc-20.179,0-37.406-7.139-51.678-21.408c-14.274-14.277-21.412-31.505-21.412-51.68c0-20.174,7.138-37.401,21.412-51.675\r\n\t\t\tc14.272-14.275,31.5-21.411,51.678-21.411c20.174,0,37.401,7.135,51.673,21.411c14.277,14.274,21.413,31.501,21.413,51.675\r\n\t\t\tC255.81,294.121,248.675,311.349,234.397,325.626z\" />\r\n\t\t<path d=\"M505.628,391.29c-2.471-5.517-5.329-10.465-8.562-14.846c9.709-21.512,14.558-34.646,14.558-39.402\r\n\t\t\tc0-0.753-0.373-1.424-1.14-1.995c-22.846-13.322-34.643-19.985-35.405-19.985l-1.711,0.574\r\n\t\t\tc-7.803,7.807-16.563,18.463-26.266,31.977c-3.805-0.379-6.656-0.574-8.559-0.574c-1.909,0-4.76,0.195-8.569,0.574\r\n\t\t\tc-2.655-4-7.61-10.427-14.842-19.273c-7.23-8.846-11.611-13.277-13.134-13.277c-0.38,0-3.234,1.522-8.566,4.575\r\n\t\t\tc-5.328,3.046-10.943,6.276-16.844,9.709c-5.906,3.433-9.229,5.328-9.992,5.711c-0.767,0.568-1.144,1.239-1.144,1.992\r\n\t\t\tc0,4.764,4.853,17.888,14.559,39.402c-3.23,4.381-6.089,9.329-8.562,14.842c-28.363,2.851-42.544,5.805-42.544,8.85v39.968\r\n\t\t\tc0,3.046,14.181,5.996,42.544,8.85c2.279,5.141,5.137,10.089,8.562,14.839c-9.706,21.512-14.559,34.646-14.559,39.402\r\n\t\t\tc0,0.76,0.377,1.431,1.144,1.999c23.216,13.514,35.022,20.27,35.402,20.27c1.522,0,5.903-4.473,13.134-13.419\r\n\t\t\tc7.231-8.948,12.18-15.413,14.842-19.41c3.806,0.373,6.66,0.564,8.569,0.564c1.902,0,4.754-0.191,8.559-0.564\r\n\t\t\tc2.659,3.997,7.611,10.462,14.842,19.41c7.231,8.946,11.608,13.419,13.135,13.419c0.38,0,12.187-6.759,35.405-20.27\r\n\t\t\tc0.767-0.568,1.14-1.235,1.14-1.999c0-4.757-4.855-17.891-14.558-39.402c3.426-4.75,6.279-9.698,8.562-14.839\r\n\t\t\tc28.362-2.854,42.544-5.804,42.544-8.85v-39.968C548.172,397.098,533.99,394.144,505.628,391.29z M464.37,445.962\r\n\t\t\tc-7.128,7.139-15.745,10.715-25.834,10.715c-10.092,0-18.705-3.576-25.837-10.715c-7.139-7.139-10.712-15.748-10.712-25.837\r\n\t\t\tc0-9.894,3.621-18.466,10.855-25.693c7.23-7.231,15.797-10.849,25.693-10.849c9.894,0,18.466,3.614,25.7,10.849\r\n\t\t\tc7.228,7.228,10.849,15.8,10.849,25.693C475.078,430.214,471.512,438.823,464.37,445.962z\" />\r\n\t\t<path d=\"M505.628,98.931c-2.471-5.52-5.329-10.468-8.562-14.849c9.709-21.505,14.558-34.639,14.558-39.397\r\n\t\t\tc0-0.758-0.373-1.427-1.14-1.999c-22.846-13.323-34.643-19.984-35.405-19.984l-1.711,0.57\r\n\t\t\tc-7.803,7.808-16.563,18.464-26.266,31.977c-3.805-0.378-6.656-0.57-8.559-0.57c-1.909,0-4.76,0.192-8.569,0.57\r\n\t\t\tc-2.655-3.997-7.61-10.42-14.842-19.27c-7.23-8.852-11.611-13.276-13.134-13.276c-0.38,0-3.234,1.521-8.566,4.569\r\n\t\t\tc-5.328,3.049-10.943,6.283-16.844,9.71c-5.906,3.428-9.229,5.33-9.992,5.708c-0.767,0.571-1.144,1.237-1.144,1.999\r\n\t\t\tc0,4.758,4.853,17.893,14.559,39.399c-3.23,4.38-6.089,9.327-8.562,14.847c-28.363,2.853-42.544,5.802-42.544,8.848v39.971\r\n\t\t\tc0,3.044,14.181,5.996,42.544,8.848c2.279,5.137,5.137,10.088,8.562,14.847c-9.706,21.51-14.559,34.639-14.559,39.399\r\n\t\t\tc0,0.757,0.377,1.426,1.144,1.997c23.216,13.513,35.022,20.27,35.402,20.27c1.522,0,5.903-4.471,13.134-13.418\r\n\t\t\tc7.231-8.947,12.18-15.415,14.842-19.414c3.806,0.378,6.66,0.571,8.569,0.571c1.902,0,4.754-0.193,8.559-0.571\r\n\t\t\tc2.659,3.999,7.611,10.466,14.842,19.414c7.231,8.947,11.608,13.418,13.135,13.418c0.38,0,12.187-6.757,35.405-20.27\r\n\t\t\tc0.767-0.571,1.14-1.237,1.14-1.997c0-4.76-4.855-17.889-14.558-39.399c3.426-4.759,6.279-9.707,8.562-14.847\r\n\t\t\tc28.362-2.853,42.544-5.804,42.544-8.848v-39.971C548.172,104.737,533.99,101.787,505.628,98.931z M464.37,153.605\r\n\t\t\tc-7.128,7.139-15.745,10.708-25.834,10.708c-10.092,0-18.705-3.569-25.837-10.708c-7.139-7.135-10.712-15.749-10.712-25.837\r\n\t\t\tc0-9.897,3.621-18.464,10.855-25.697c7.23-7.233,15.797-10.85,25.693-10.85c9.894,0,18.466,3.621,25.7,10.85\r\n\t\t\tc7.228,7.232,10.849,15.8,10.849,25.697C475.078,137.856,471.512,146.47,464.37,153.605z\" />\r\n\t</g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ 958:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(854);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(348);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "skills",
  "use": "skills-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"skills\">\r\n  <path d=\"M0 0h24v24H0z\" fill=\"none\" />\r\n  <path d=\"M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-2-9H8v2h11V8zm0 4H8v2h11v-2zM7 8H5v2h2V8zm0 4H5v2h2v-2z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ 321:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(854);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(348);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "work",
  "use": "work-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"work\">\r\n  <path d=\"M0 0h24v24H0z\" fill=\"none\" />\r\n  <path d=\"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ 348:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

//      
// An event handler can take an optional event argument
// and should not return a value
                                          
// An array of all currently registered event handlers for a type
                                            
// A map of event types and their corresponding event handlers.
                        
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var svg$1 = namespaces_1.svg;
var xlink$1 = namespaces_1.xlink;

var defaultConfig = {
  attrs: ( obj = {
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; '),
    'aria-hidden': 'true'
  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
};
var obj;

var Sprite = function Sprite(config) {
  this.config = deepmerge(defaultConfig, config || {});
  this.symbols = [];
};

/**
 * Add new symbol. If symbol with the same id exists it will be replaced.
 * @param {SpriteSymbol} symbol
 * @return {boolean} `true` - symbol was added, `false` - replaced
 */
Sprite.prototype.add = function add (symbol) {
  var ref = this;
    var symbols = ref.symbols;
  var existing = this.find(symbol.id);

  if (existing) {
    symbols[symbols.indexOf(existing)] = symbol;
    return false;
  }

  symbols.push(symbol);
  return true;
};

/**
 * Remove symbol & destroy it
 * @param {string} id
 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
 */
Sprite.prototype.remove = function remove (id) {
  var ref = this;
    var symbols = ref.symbols;
  var symbol = this.find(id);

  if (symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    symbol.destroy();
    return true;
  }

  return false;
};

/**
 * @param {string} id
 * @return {SpriteSymbol|null}
 */
Sprite.prototype.find = function find (id) {
  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
};

/**
 * @param {string} id
 * @return {boolean}
 */
Sprite.prototype.has = function has (id) {
  return this.find(id) !== null;
};

/**
 * @return {string}
 */
Sprite.prototype.stringify = function stringify () {
  var ref = this.config;
    var attrs = ref.attrs;
  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
  return wrapInSvgString(stringifiedSymbols, attrs);
};

/**
 * @return {string}
 */
Sprite.prototype.toString = function toString () {
  return this.stringify();
};

Sprite.prototype.destroy = function destroy () {
  this.symbols.forEach(function (s) { return s.destroy(); });
};

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

var defaultConfig$1 = {
  /**
   * Should following options be automatically configured:
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @type {boolean}
   */
  autoConfigure: true,

  /**
   * Default mounting selector
   * @type {string}
   */
  mountTo: 'body',

  /**
   * Fix disappearing SVG elements when <base href> exists.
   * Executes when sprite mounted.
   * @see http://stackoverflow.com/a/18265336/796152
   * @see https://github.com/everdimension/angular-svg-base-fix
   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
   * @type {boolean}
   */
  syncUrlsWithBaseTag: false,

  /**
   * Should sprite listen custom location change event
   * @type {boolean}
   */
  listenLocationChangeEvent: true,

  /**
   * Custom window event name which should be emitted to update sprite urls
   * @type {string}
   */
  locationChangeEvent: 'locationChange',

  /**
   * Emit location change event in Angular automatically
   * @type {boolean}
   */
  locationChangeAngularEmitter: false,

  /**
   * Selector to find symbols usages when updating sprite urls
   * @type {string}
   */
  usagesToUpdate: 'use[*|href]',

  /**
   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
   * Executes when sprite is rendered, but not mounted.
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
   * @type {boolean}
   */
  moveGradientsOutsideSymbol: false
};

/**
 * @param {*} arrayLike
 * @return {Array}
 */
var arrayFrom = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
};

var browser = {
  isChrome: function () { return /chrome/i.test(navigator.userAgent); },
  isFirefox: function () { return /firefox/i.test(navigator.userAgent); },

  // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
  isIE: function () { return /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent); },
  isEdge: function () { return /edge/i.test(navigator.userAgent); }
};

/**
 * @param {string} name
 * @param {*} data
 */
var dispatchEvent = function (name, data) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(name, false, false, data);
  window.dispatchEvent(event);
};

/**
 * IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
 * This trick will trigger IE to read and use any existing SVG <style> tags.
 * @see https://github.com/iconic/SVGInjector/issues/23
 * @see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
 *
 * @param {Element} node DOM Element to search <style> tags in
 * @return {Array<HTMLStyleElement>}
 */
var evalStylesIEWorkaround = function (node) {
  var updatedNodes = [];

  arrayFrom(node.querySelectorAll('style'))
    .forEach(function (style) {
      style.textContent += '';
      updatedNodes.push(style);
    });

  return updatedNodes;
};

/**
 * @param {string} [url] If not provided - current URL will be used
 * @return {string}
 */
var getUrlWithoutFragment = function (url) {
  return (url || window.location.href).split('#')[0];
};

/* global angular */
/**
 * @param {string} eventName
 */
var locationChangeAngularEmitter = function (eventName) {
  angular.module('ng').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
      dispatchEvent(eventName, { oldUrl: oldUrl, newUrl: newUrl });
    });
  }]);
};

var defaultSelector = 'linearGradient, radialGradient, pattern, mask, clipPath';

/**
 * @param {Element} svg
 * @param {string} [selector]
 * @return {Element}
 */
var moveGradientsOutsideSymbol = function (svg, selector) {
  if ( selector === void 0 ) selector = defaultSelector;

  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
      symbol.parentNode.insertBefore(node, symbol);
    });
  });
  return svg;
};

/**
 * @param {NodeList} nodes
 * @param {Function} [matcher]
 * @return {Attr[]}
 */
function selectAttributes(nodes, matcher) {
  var attrs = arrayFrom(nodes).reduce(function (acc, node) {
    if (!node.attributes) {
      return acc;
    }

    var arrayfied = arrayFrom(node.attributes);
    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
    return acc.concat(matched);
  }, []);

  return attrs;
}

/**
 * @param {NodeList|Node} nodes
 * @param {boolean} [clone=true]
 * @return {string}
 */

var xLinkNS = namespaces_1.xlink.uri;
var xLinkAttrName = 'xlink:href';

// eslint-disable-next-line no-useless-escape
var specialUrlCharsPattern = /[{}|\\\^\[\]`"<>]/g;

function encoder(url) {
  return url.replace(specialUrlCharsPattern, function (match) {
    return ("%" + (match[0].charCodeAt(0).toString(16).toUpperCase()));
  });
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

/**
 * @param {NodeList} nodes
 * @param {string} startsWith
 * @param {string} replaceWith
 * @return {NodeList}
 */
function updateReferences(nodes, startsWith, replaceWith) {
  arrayFrom(nodes).forEach(function (node) {
    var href = node.getAttribute(xLinkAttrName);
    if (href && href.indexOf(startsWith) === 0) {
      var newUrl = href.replace(startsWith, replaceWith);
      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
    }
  });

  return nodes;
}

/**
 * List of SVG attributes to update url() target in them
 */
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
];

var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');

/**
 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
 * @param {Element} svg
 * @param {NodeList} references
 * @param {string|RegExp} startsWith
 * @param {string} replaceWith
 * @return {void}
 *
 * @example
 * const sprite = document.querySelector('svg.sprite');
 * const usages = document.querySelectorAll('use');
 * updateUrls(sprite, usages, '#', 'prefix#');
 */
var updateUrls = function (svg, references, startsWith, replaceWith) {
  var startsWithEncoded = encoder(startsWith);
  var replaceWithEncoded = encoder(replaceWith);

  var nodes = svg.querySelectorAll(attSelector);
  var attrs = selectAttributes(nodes, function (ref) {
    var localName = ref.localName;
    var value = ref.value;

    return attList.indexOf(localName) !== -1 && value.indexOf(("url(" + startsWithEncoded)) !== -1;
  });

  attrs.forEach(function (attr) { return attr.value = attr.value.replace(new RegExp(escapeRegExp(startsWithEncoded), 'g'), replaceWithEncoded); });
  updateReferences(references, startsWithEncoded, replaceWithEncoded);
};

/**
 * Internal emitter events
 * @enum
 * @private
 */
var Events = {
  MOUNT: 'mount',
  SYMBOL_MOUNT: 'symbol_mount'
};

var BrowserSprite = (function (Sprite$$1) {
  function BrowserSprite(cfg) {
    var this$1 = this;
    if ( cfg === void 0 ) cfg = {};

    Sprite$$1.call(this, deepmerge(defaultConfig$1, cfg));

    var emitter = mitt();
    this._emitter = emitter;
    this.node = null;

    var ref = this;
    var config = ref.config;

    if (config.autoConfigure) {
      this._autoConfigure(cfg);
    }

    if (config.syncUrlsWithBaseTag) {
      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });
    }

    var handleLocationChange = this._handleLocationChange.bind(this);
    this._handleLocationChange = handleLocationChange;

    // Provide way to update sprite urls externally via dispatching custom window event
    if (config.listenLocationChangeEvent) {
      window.addEventListener(config.locationChangeEvent, handleLocationChange);
    }

    // Emit location change event in Angular automatically
    if (config.locationChangeAngularEmitter) {
      locationChangeAngularEmitter(config.locationChangeEvent);
    }

    // After sprite mounted
    emitter.on(Events.MOUNT, function (spriteNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(spriteNode);
      }
    });

    // After symbol mounted into sprite
    emitter.on(Events.SYMBOL_MOUNT, function (symbolNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(symbolNode.parentNode);
      }

      if (browser.isIE() || browser.isEdge()) {
        evalStylesIEWorkaround(symbolNode);
      }
    });
  }

  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;
  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
  BrowserSprite.prototype.constructor = BrowserSprite;

  var prototypeAccessors = { isMounted: {} };

  /**
   * @return {boolean}
   */
  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * Automatically configure following options
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @param {Object} cfg
   * @private
   */
  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {
    var ref = this;
    var config = ref.config;

    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
    }

    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
        config.locationChangeAngularEmitter = typeof window.angular !== 'undefined';
    }

    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
      config.moveGradientsOutsideSymbol = browser.isFirefox();
    }
  };

  /**
   * @param {Event} event
   * @param {Object} event.detail
   * @param {string} event.detail.oldUrl
   * @param {string} event.detail.newUrl
   * @private
   */
  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {
    var ref = event.detail;
    var oldUrl = ref.oldUrl;
    var newUrl = ref.newUrl;
    this.updateUrls(oldUrl, newUrl);
  };

  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
   * @fires Events#SYMBOL_MOUNT
   * @param {BrowserSpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */
  BrowserSprite.prototype.add = function add (symbol) {
    var sprite = this;
    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

    if (this.isMounted && isNewSymbol) {
      symbol.mount(sprite.node);
      this._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    }

    return isNewSymbol;
  };

  /**
   * Attach to existing DOM node
   * @param {string|Element} target
   * @return {Element|null} attached DOM Element. null if node to attach not found.
   */
  BrowserSprite.prototype.attach = function attach (target) {
    var this$1 = this;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    /** @type Element */
    var node = typeof target === 'string' ? document.querySelector(target) : target;
    sprite.node = node;

    // Already added symbols needs to be mounted
    this.symbols.forEach(function (symbol) {
      symbol.mount(sprite.node);
      this$1._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    });

    // Create symbols from existing DOM nodes, add and mount them
    arrayFrom(node.querySelectorAll('symbol'))
      .forEach(function (symbolNode) {
        var symbol = BrowserSpriteSymbol.createFromExistingNode(symbolNode);
        symbol.node = symbolNode; // hack to prevent symbol mounting to sprite when adding
        sprite.add(symbol);
      });

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  BrowserSprite.prototype.destroy = function destroy () {
    var ref = this;
    var config = ref.config;
    var symbols = ref.symbols;
    var _emitter = ref._emitter;

    symbols.forEach(function (s) { return s.destroy(); });

    _emitter.off('*');
    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

    if (this.isMounted) {
      this.unmount();
    }
  };

  /**
   * @fires Events#MOUNT
   * @param {string|Element} [target]
   * @param {boolean} [prepend=false]
   * @return {Element|null} rendered sprite node. null if mount node not found.
   */
  BrowserSprite.prototype.mount = function mount (target, prepend) {
    if ( target === void 0 ) target = this.config.mountTo;
    if ( prepend === void 0 ) prepend = false;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    var mountNode = typeof target === 'string' ? document.querySelector(target) : target;
    var node = sprite.render();
    this.node = node;

    if (prepend && mountNode.childNodes[0]) {
      mountNode.insertBefore(node, mountNode.childNodes[0]);
    } else {
      mountNode.appendChild(node);
    }

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSprite.prototype.render = function render () {
    return parse(this.stringify());
  };

  /**
   * Detach sprite from the DOM
   */
  BrowserSprite.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  /**
   * Update URLs in sprite and usage elements
   * @param {string} oldUrl
   * @param {string} newUrl
   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
   */
  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {
    if (!this.isMounted) {
      return false;
    }

    var usages = document.querySelectorAll(this.config.usagesToUpdate);

    updateUrls(
      this.node,
      usages,
      ((getUrlWithoutFragment(oldUrl)) + "#"),
      ((getUrlWithoutFragment(newUrl)) + "#")
    );

    return true;
  };

  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );

  return BrowserSprite;
}(Sprite));

var ready$1 = createCommonjsModule(function (module) {
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  { module.exports = definition(); }

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);


  if (!loaded)
  { doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener);
    loaded = 1;
    while (listener = fns.shift()) { listener(); }
  }); }

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  }

});
});

var spriteNodeId = '__SVG_SPRITE_NODE__';
var spriteGlobalVarName = '__SVG_SPRITE__';
var isSpriteExists = !!window[spriteGlobalVarName];

// eslint-disable-next-line import/no-mutable-exports
var sprite;

if (isSpriteExists) {
  sprite = window[spriteGlobalVarName];
} else {
  sprite = new BrowserSprite({
    attrs: {
      id: spriteNodeId,
      'aria-hidden': 'true'
    }
  });
  window[spriteGlobalVarName] = sprite;
}

var loadSprite = function () {
  /**
   * Check for page already contains sprite node
   * If found - attach to and reuse it's content
   * If not - render and mount the new sprite
   */
  var existing = document.getElementById(spriteNodeId);

  if (existing) {
    sprite.attach(existing);
  } else {
    sprite.mount(document.body, true);
  }
};

if (document.body) {
  loadSprite();
} else {
  ready$1(loadSprite);
}

var sprite$1 = sprite;

return sprite$1;

})));


/***/ }),

/***/ 579:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/1.f563d75.jpg");

/***/ }),

/***/ 819:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./badge.svg": 95,
	"./ball.svg": 309,
	"./bicycle.svg": 916,
	"./coding.svg": 448,
	"./email.svg": 763,
	"./info.svg": 436,
	"./lines.svg": 355,
	"./monitor.svg": 246,
	"./phone.svg": 877,
	"./place.svg": 978,
	"./school.svg": 941,
	"./settings.svg": 444,
	"./skills.svg": 958,
	"./work.svg": 321
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 819;

/***/ }),

/***/ 835:
/***/ (function() {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/resume/";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

;// CONCATENATED MODULE: ./src/common/js/importAll.js
function importAll(r) {
  r.keys().forEach(r);
}

/* harmony default export */ var js_importAll = (importAll);
// EXTERNAL MODULE: ./src/pages/index/index.pug
var index = __webpack_require__(431);
;// CONCATENATED MODULE: ./src/pages/index/index.js


;// CONCATENATED MODULE: ./src/app.js
// Styles
 // Common js

 // Pages

 // SVG images

js_importAll(__webpack_require__(819));
}();
/******/ })()
;
;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-shuangjiantou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M1019.740433 500.925125l-37.484193-47.707155 0 0L597.191348 3.407654c-3.407654-6.815308-10.222962-6.815308-17.03827 0l-37.484193 47.707155c-3.407654 6.815308-3.407654 13.630616 0 17.03827l374.84193 442.995008-374.84193 442.995008c-3.407654 6.815308-3.407654 13.630616 0 17.03827l37.484193 47.707155c3.407654 6.815308 10.222962 6.815308 17.03827 0l422.549085-497.517471C1023.148087 514.55574 1023.148087 507.740433 1019.740433 500.925125L1019.740433 500.925125zM440.439268 456.625624C440.439268 456.625624 440.439268 456.625624 440.439268 456.625624L58.78203 3.407654C55.374376 0 48.559068 0 41.74376 3.407654L4.259567 51.114809C0.851913 54.522463 0.851913 64.745424 4.259567 68.153078l374.84193 442.995008-374.84193 442.995008c-3.407654 6.815308-3.407654 13.630616 0 17.03827l37.484193 47.707155c3.407654 6.815308 10.222962 6.815308 17.03827 0l422.549085-497.517471c3.407654-6.815308 3.407654-13.630616 0-17.03827L440.439268 456.625624 440.439268 456.625624z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)

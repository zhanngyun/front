export default{
  getId: function () {
    return window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
  }
}

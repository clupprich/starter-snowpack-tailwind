export function gallery() {
  document.querySelectorAll('.kg-gallery-image img').forEach(function (el) {
    var container = el.closest('.kg-gallery-image');
    var width = el.attributes.width.value;
    var height = el.attributes.height.value;

    container.style.flex = width / height + ' 1 0%';
  })
}

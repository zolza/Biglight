var catalogContainer = document.getElementById('catalog-container');
var productListing = document.getElementById('product-listing');
var filterMenu = document.getElementById('search-results-header-container');
var filterOptions = document.getElementById('nav-dept');
var buttonClickable = document.getElementsByClassName('filter-search-btn-js')[0];
// var buttonCloseFilter = Array.prototype.slice.call(document.getElementsByClassName('apply-filter-js'));
var content = document.getElementById('page-contents');
var scrollTop = window.scrollY;

function addElements() {
  var textContainer = document.createElement('div');
  textContainer.setAttribute('id', 'title-inject');
  var text = document.createTextNode('FILTER');
  textContainer.appendChild(text);

  if (!document.querySelector('title-inject')) {
     filterOptions.append(textContainer);
  };
}

function scrollHandler() {
  var rectProductListing = productListing.getBoundingClientRect();
  var rectCatalogContainer = catalogContainer.getBoundingClientRect();

  filterMenu.classList.toggle(
    'search-results-header-container-inject-show',
    rectCatalogContainer.top < 0
    && rectProductListing.bottom > 635);

  filterMenu.classList.toggle(
    'search-results-header-container-inject-hide',
    rectProductListing.bottom < 635);
};

function clickHandlerShowFilter() {
  var scrollToptest = window.scrollY;
  filterOptions.style.display = 'none';
  filterOptions.classList.add('nav-dept-inject');
  filterOptions.style.top = scrollToptest - 260 + 'px';
};

// function clickHandlerHideFilter() {
//   console.log('ej');
//   // filterMenu.style.display = 'block';
//   // filterOptions.style.display = 'none';
// };


function animate() {
  addElements();
  buttonClickable.addEventListener('click', clickHandlerShowFilter);
  // buttonCloseFilter.forEach(function(item){
  //   item.addEventListener('click', clickHandlerShowFilter)
  // });
  document.addEventListener('scroll', scrollHandler);
};


if (window.innerWidth < 640) {
  animate();
};

window.addEventListener('resize', function() {
  if (window.innerWidth > 640) {
    document.removeEventListener('scroll', scrollHandler);
  } else {
    animate();
  }
});

function scrollHandler()
{
  var catalogContainer = document.getElementById('catalog-container');
  var rectCatalogContainer = catalogContainer.getBoundingClientRect();
  var productListing = document.getElementById('product-listing');
  var rectProductListing = productListing.getBoundingClientRect();
  var filterMenu = document.getElementById('search-results-header-container');
  var scrollTop = window.scrollY;

  filterMenu.classList.toggle(
    'search-results-header-container-inject-show',
    rectCatalogContainer.top < 0
    && rectProductListing.bottom > 635);

  filterMenu.classList.toggle(
    'search-results-header-container-inject-hide',
    rectProductListing.bottom < 635);
};


var buttonClickable = document.getElementsByClassName('filter-search-btn-js')[0];

function clickHandler()
{
  var filterOptions = document.getElementById('nav-dept');
  var content = document.getElementById('page-contents');

  // I can not make it work, but I decided to leave it here so you know that at least I have tried.

  // var textContainer = document.createElement('div');
  // textContainer.setAttribute('id', 'title-inject');
  // var text = document.createTextNode('FILTER');
  // textContainer.appendChild(text);
  //
  // if (!document.querySelector('title-inject')) {
	//    filterOptions.append(textContainer);
  // };

  filterOptions.classList.add('nav-dept-inject');

};

if (window.innerWidth < 640) {

  buttonClickable.addEventListener('click', clickHandler);
  document.addEventListener('scroll', scrollHandler);

};

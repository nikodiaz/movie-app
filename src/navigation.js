searchFormBtn.addEventListener('click', () => {
  location.hash = `#search=${searchFormInput.value}`;
});
arrowBtn.addEventListener('click', () => {
  location.hash = window.history.back();
});
trendingBtn.addEventListener('click', () => {
  location.hash = '#trends';
});
categoriesBtn.addEventListener('click', () => {
  location.hash = '#category=';
})

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
  if (location.hash.startsWith('#trends')) {
    trendsPage();
  } else if (location.hash.startsWith('#search=')) {
    searchPage();
  } else if (location.hash.startsWith('#category=')) {
    categoriesPage();
  } else if (location.hash.startsWith('#movie=')) {
    movieDetailsPage();
  } else {
    homePage();
  }
}
scrollTop();

function homePage() {
  scrollTop();

  arrowBtn.classList.add('inactive');
  headerTitle.classList.remove('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.remove('inactive');

  trendingSection.classList.remove('inactive');
  categoriesSection.classList.remove('inactive');
  categoriesHeader.style.display = 'flex';
  genericSection.classList.add('inactive');
  movieDetailSection.classList.add('inactive');

  getTrending();
  getCategories();
}

function searchPage() {
  scrollTop();

  arrowBtn.classList.remove('inactive');
  headerTitle.classList.remove('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.remove('inactive');

  trendingSection.classList.add('inactive');
  categoriesSection.classList.add('inactive');
  categoriesHeader.style.display = 'none';
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  const [_, query] = location.hash.split('=');

  getMoviesBySearch(query);
}

function trendsPage() {
  scrollTop();
  getTrendingMovies();
  
  arrowBtn.classList.remove('inactive');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.remove('inactive');
  headerCategoryTitle.textContent = 'Trending';
  searchForm.classList.add('inactive');
  
  trendingSection.classList.add('inactive');
  categoriesSection.classList.add('inactive');
  categoriesHeader.style.display = 'none';
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');
  
}

function movieDetailsPage() {
  scrollTop();

  arrowBtn.classList.remove('inactive');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.add('inactive');

  trendingSection.classList.add('inactive');
  categoriesSection.classList.add('inactive');
  categoriesHeader.style.display = 'none';
  genericSection.classList.add('inactive');
  movieDetailSection.classList.remove('inactive');

  const [_, id] = location.hash.split('=');

  getMovieById(id);
}

function categoriesPage() {
  scrollTop();

  arrowBtn.classList.remove('inactive');
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.remove('inactive');
  searchForm.classList.add('inactive');

  trendingSection.classList.add('inactive');
  categoriesSection.classList.add('inactive');
  categoriesHeader.style.display = 'none';
  genericSection.classList.remove('inactive');
  movieDetailSection.classList.add('inactive');

  const [_, categoryInfo] = location.hash.split('=');
  const [categoryId, categoryName] = categoryInfo.split('-');
  headerCategoryTitle.textContent = categoryName;

  getMoviesByCategory(categoryId);
}

function scrollTop() {
  window.scrollTo(0, 0);
}
// Select the search input and post container
const searchBar = document.getElementById('searchBar');
const posts = document.querySelectorAll('.post');

// Add event listener to the search bar
searchBar.addEventListener('input', () => {
  const filterText = searchBar.value.toLowerCase();

  // Loop through all posts and filter based on input
  posts.forEach(post => {
    const title = post.querySelector('h3').textContent.toLowerCase();
    const content = post.querySelector('p').textContent.toLowerCase();
    const isVisible = title.includes(filterText) || content.includes(filterText);

    post.style.display = isVisible ? 'block' : 'none';
  });
});
// 
const highlightButton = document.querySelector('.btn-highlight');
highlightButton.addEventListener('click', () => {
  highlightButton.textContent = 'Joined!';
  highlightButton.style.backgroundColor = '#4caf50';
});

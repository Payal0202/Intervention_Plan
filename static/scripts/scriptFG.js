function navigateToCategory(category) {
    const baseURL = document.getElementById('baseURL').value; // Get the base URL
    window.location.href = `${baseURL}?category=${category}`;
}

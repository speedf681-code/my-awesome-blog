// 1. LOAD: Try to get posts from LocalStorage, or use defaults if empty
let blogPosts = JSON.parse(localStorage.getItem('myBlogPosts')) || [
    {
        title: "Exploring the Digital Garden",
        date: "Feb 5, 2026",
        excerpt: "Why building your own site is the best way to learn.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", // Example Unsplash link
        link: "#"
    }
];

// 2. The function to render posts (Same as before)
function renderPosts() {
    const container = document.getElementById('post-container');
    container.innerHTML = '';

    blogPosts.forEach(post => {
        const postHTML = `
            <article class="post">
                <img src="${post.image}" alt="${post.title}" class="post-image">
                <div class="post-content">
                    <h2>${post.title}</h2>
                    <span class="date">${post.date}</span>
                    <p>${post.excerpt}</p>
                    <a href="${post.link}" class="read-more">Read More</a>
                </div>
            </article>
        `;
        container.innerHTML += postHTML;
    });
}

// 3. Handle the Form Submission
const postForm = document.getElementById('post-form');

postForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const newPost = {
        title: document.getElementById('title').value,
        date: document.getElementById('date').value,
        excerpt: document.getElementById('excerpt').value,
        link: "#"
    };

    blogPosts.unshift(newPost);

    // 4. SAVE: Convert the array to a string and store it in LocalStorage
    localStorage.setItem('myBlogPosts', JSON.stringify(blogPosts));

    renderPosts();
    postForm.reset();
});

// Run the function when the page loads
window.onload = renderPosts;
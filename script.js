// 1. LOAD: Try to get posts from LocalStorage, or use defaults if empty
let blogPosts = JSON.parse(localStorage.getItem('myBlogPosts')) || [
    {
        title: "Welcome to my Persistent Blog",
        date: "Feb 4, 2026",
        excerpt: "This post is here by default, but once you add your own, they will stay saved!",
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
                <h2>${post.title}</h2>
                <span class="date">${post.date}</span>
                <p>${post.excerpt}</p>
                <a href="${post.link}" class="read-more">Read More</a>
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
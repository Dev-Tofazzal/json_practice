function loadPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => displayPosts(data)
    )

    
}

function displayPosts(posts){
    const postsContainer = document.getElementById("posts_container")
    for(const post of posts){
        const postDiv = document.createElement("div");
        postDiv.classList.add("post")
        console.log(post);
        
        postDiv.innerHTML = `
            <h4>User- ${post.id}</h4>
            <h5>Post_title: ${post.title}</h5>
            <p> ${post.body} </p>
        
        `;
        postsContainer.appendChild(postDiv)
    }
}

loadPosts()


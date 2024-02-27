fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(postsArr => console.log(postsArr));

let url = new URL ('https://jsonplaceholder.typicode.com/posts')
fetch (url)
.then(value => value.json())
.then(posts => {
    for (const post of posts) {
        let div = document.createElement('div')
        div.classList.add('post-item');
        let a = document.createElement('a')
        a.innerText = `${post.id}${post.title}`;
        a.href = 'post.html?data='+JSON.stringify(post)
        div.appendChild(a)
        document.body.appendChild(div)
    }
})


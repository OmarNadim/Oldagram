// This is the Javascript part of the Oldagram project.


// These are the posts that should be posted in the timeline.
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// We get the div element by Id

const allPosts = document.getElementById("allPosts")

let items="";

// This is the Render function

function renderPost(){
    for (let i =0; i<posts.length; i++){
        items+=`<section class="post-author">
                    <img class="avatar-author" src=${posts[i].avatar}>`+`<div class="author-id"><p class="name">${posts[i].name}</p><p class="location">${posts[i].location}</p></div>
                </section>`


        items+=`<section class="post" id="post${i+1}">
                    <img class="post-image" src=${posts[i].post}>
                </section>`    

        items+=`<section class="engagement">
                    <img class="icon" id="like${i+1}" src="images/icon-heart.png">
                    <img class="icon" src="images/icon-comment.png">
                    <img class="icon" src="images/icon-dm.png">
                    <div id="likes-comments${i+1}">
                        <p class="likes"> ${posts[i].likes} Likes</p><p class="comment"><span>${posts[i].username}</span> ${posts[i].comment}</p>
                    </div>    
                </section>`
        

        allPosts.innerHTML = items
    }
    
}

renderPost()

const like1= document.getElementById("like1");
const like2= document.getElementById("like2");
const like3= document.getElementById("like3");

const post1= document.getElementById("post1");
const post2= document.getElementById("post2");
const post3= document.getElementById("post3");

const likesComments1 = document.getElementById("likes-comments1")
const likesComments2 = document.getElementById("likes-comments2")
const likesComments3 = document.getElementById("likes-comments3")

like1.addEventListener("click", function(){
    posts[0].likes++;
    items = `<p class="likes"> ${posts[0].likes} Likes</p><p class="comment"><span>${posts[0].username}</span>${posts[0].comment}</p>`
    likesComments1.innerHTML = items
})

like2.addEventListener("click", function(){
    posts[1].likes++;
    items = `<p class="likes"> ${posts[1].likes} Likes</p><p class="comment"><span>${posts[1].username}</span>${posts[1].comment}</p>`
    likesComments2.innerHTML = items
})


like3.addEventListener("click", function(){
    posts[2].likes++;
    items = `<p class="likes"> ${posts[2].likes} Likes</p><p class="comment"><span>${posts[2].username}</span>${posts[2].comment}</p>`
    likesComments3.innerHTML = items
})


post1.addEventListener("dblclick", function(){
    posts[0].likes++;
    items = `<p class="likes"> ${posts[0].likes} Likes</p><p class="comment"><span>${posts[0].username}</span>${posts[0].comment}</p>`
    likesComments1.innerHTML = items  
})

post2.addEventListener("dblclick", function(){
    posts[1].likes++;
    items = `<p class="likes"> ${posts[1].likes} Likes</p><p class="comment"><span>${posts[1].username}</span>${posts[1].comment}</p>`
    likesComments2.innerHTML = items  
})

post3.addEventListener("dblclick", function(){
    posts[2].likes++;
    items = `<p class="likes"> ${posts[2].likes} Likes</p><p class="comment"><span>${posts[2].username}</span>${posts[2].comment}</p>`
    likesComments3.innerHTML = items  
})





const submitBtn = document.querySelector(".submitBtn");
const post = document.getElementById("post");
const posTitle = document.querySelector(".input");
const authorName = document.querySelector(".name");

const item = document.querySelectorAll('.item');

const fullBlogPost = [
  {
    title: "",
    desc: "",
    author: "",
  },
];

const fullpost = document.querySelector(".full-blogpost");
function renderFullPost(e) {
  const postValue = post.value;
  const authorNameValue = authorName.value;
  const postTitleValue = posTitle.value;
  fullBlogPost.push({
    title: postTitleValue,
    desc: postValue,
    author: authorNameValue,
  });

  if (
    fullBlogPost.length > 1 &&
    fullBlogPost[0].title === "" &&
    fullBlogPost[0].desc === "" &&
    fullBlogPost[0].author === ""
  ) {
    fullBlogPost.shift();
  }

  let displaypost = "";
  fullBlogPost.forEach((item) => {
    displaypost += `<h2 class="blogTitle">${item.title}</h2>
        <p class="blogDesc">
          ${item.desc}
        </p>
        <q class="author">By ${item.author}</q>`;
  });
  fullpost.innerHTML = displaypost;
  renderPostList();
}
const postList = document.querySelector(".blog-list");
const form = document.querySelector(".form");
const write = document.querySelector(".write");

write.addEventListener("click", function (e) {
  if (form) {
    form.style.display = "flex";
    postList.style.display = "none";
    fullpost.style.display = "none";
  }
});



const active = document.querySelector(".active");
active.addEventListener("click", function (e) {
  if (form) {
    fullpost.style.display = "none";
    postList.style.display = "block";
    form.style.display = "none";
  }
});

submitBtn.addEventListener("click", function (e) {
  if (form) {
    form.style.display = "none";
    fullpost.style.display = "block";
    renderFullPost();
    console.log(fullBlogPost);
  }
});

function renderPostList() {
  let displayonhomepage = "";
  fullBlogPost.forEach((item) => {
    const description = item.desc.slice(0, 150);
    
    console.log(description)
    
    displayonhomepage += ` <div class="item">
          <h2 class="blogTitle">${item.title}</h2>
          <p class="blogDesc">
          ${description}...
          </p>
          <q class="author">By ${item.author}</q>
        </div>`;
  });
  postList.innerHTML = displayonhomepage;
}
renderPostList();
// display a single




// Function to display a single post based on the index
function displaySinglePost(index) {
  let renderSinglePost = "";
  let item = fullBlogPost[index];

  renderSinglePost = ` <div class="item">
      <h2 class="blogTitle">${item.title}</h2>
      <p class="blogDesc">${item.desc}</p>
      <q class="author">By ${item.author}</q>
  </div>`;

  let singlepost = document.querySelector('.singlepost');
  if(singlepost) {
      singlepost.innerHTML = renderSinglePost;
  }
}

// Adding click event listeners to each item
let items = document.querySelectorAll('.item'); // Assuming each post is within a div with class 'item'
items.forEach((item, index) => {
    item.addEventListener('click', function(e) {
        displaySinglePost(index);
        postList.style.display = "none";
    });
});





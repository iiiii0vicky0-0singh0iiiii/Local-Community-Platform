// Create the main container
document.body.style.margin = "0";
document.body.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
document.body.style.background = "linear-gradient(to right,rgb(13, 181, 248),rgb(10, 83, 193), #fbc2eb)";
document.body.style.color = "#333";
document.body.style.overflowX = "hidden";

// Header
const header = document.createElement("header");
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.style.padding = "10px 20px";
header.style.backgroundColor = "#ff6b6b";
header.style.color = "#fff";
header.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";

const logo = document.createElement("div");
logo.textContent = "Community Connect";
logo.style.fontSize = "2em";
logo.style.fontWeight = "bold";
logo.style.textShadow = "2px 2pxrgb(49, 11, 243)";

const nav = document.createElement("nav");
const navList = document.createElement("ul");
navList.style.listStyle = "none";
navList.style.display = "flex";
navList.style.gap = "15px";

["Home", "Events", "Groups", "About", "Login"].forEach((item) => {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = item;
  link.style.color = "#fff";
  link.style.textDecoration = "none";
  link.style.fontSize = "1.2em";
  link.style.transition = "transform 0.3s";
  link.addEventListener("mouseover", () => (link.style.transform = "scale(1.2)"));
  link.addEventListener("mouseout", () => (link.style.transform = "scale(1)"));

  listItem.appendChild(link);
  navList.appendChild(listItem);
});
nav.appendChild(navList);
header.appendChild(logo);
header.appendChild(nav);
document.body.appendChild(header);

// Main Section
const main = document.createElement("main");
main.style.padding = "20px";

const searchSection = document.createElement("section");
searchSection.style.marginBottom = "20px";
searchSection.style.textAlign = "center";

const searchTitle = document.createElement("h1");
searchTitle.textContent = "Find Posts in Your Community";
searchTitle.style.color = "#ff6b6b";
searchTitle.style.textShadow = "2px 2pxrgb(116, 91, 243)";

searchSection.appendChild(searchTitle);

const searchBox = document.createElement("input");
searchBox.type = "text";
searchBox.placeholder = "Search for posts...";
searchBox.style.width = "80%";
searchBox.style.padding = "15px";
searchBox.style.marginTop = "10px";
searchBox.style.fontSize = "1em";
searchBox.style.border = "2px solidrgb(18, 76, 210)";
searchBox.style.borderRadius = "25px";
searchBox.style.outline = "none";
searchBox.style.transition = "box-shadow 0.3s";
searchBox.addEventListener("focus", () => (searchBox.style.boxShadow = "0px 0px 10px #ff6b6b"));
searchBox.addEventListener("blur", () => (searchBox.style.boxShadow = "none"));

searchSection.appendChild(searchBox);
main.appendChild(searchSection);

// Posts Section
const postsSection = document.createElement("section");
const postsTitle = document.createElement("h2");
postsTitle.textContent = "Community Posts";
postsTitle.style.color = "#ff6b6b";
postsTitle.style.textShadow = "1px 1pxrgb(11, 125, 255)";
postsTitle.style.textAlign = "center";
postsSection.appendChild(postsTitle);

const postContainer = document.createElement("div");

const posts = [
  { title: "Community Cleanup", content: "Join us this weekend for a park cleanup event!" },
  { title: "Lost: Black Cat", content: "Have you seen our cat near Maple Street? Contact us!" },
  { title: "Free Books Available", content: "Giving away a collection of novels. DM for pickup details." },
];

posts.forEach((post) => {
  const postDiv = document.createElement("div");
  postDiv.style.border = "2px solidrgb(12, 188, 247)";
  postDiv.style.padding = "15px";
  postDiv.style.margin = "15px auto";
  postDiv.style.borderRadius = "15px";
  postDiv.style.backgroundColor = "#ffe0e0";
  postDiv.style.width = "80%";
  postDiv.style.boxShadow = "0px 4px 8px rgba(16, 41, 236, 0.1)";
  postDiv.style.transition = "transform 0.3s";
  postDiv.addEventListener("mouseover", () => (postDiv.style.transform = "scale(1.05)"));
  postDiv.addEventListener("mouseout", () => (postDiv.style.transform = "scale(1)"));

  const postTitle = document.createElement("h3");
  postTitle.textContent = post.title;
  postTitle.style.color = "#ff6b6b";

  const postContent = document.createElement("p");
  postContent.textContent = post.content;

  postDiv.appendChild(postTitle);
  postDiv.appendChild(postContent);
  postContainer.appendChild(postDiv);
});
postsSection.appendChild(postContainer);
main.appendChild(postsSection);
document.body.appendChild(main);

// Footer
const footer = document.createElement("footer");
footer.style.textAlign = "center";
footer.style.padding = "10px";
footer.style.backgroundColor = "#ff6b6b";
footer.style.color = "#fff";
footer.textContent = "© 2025 Community Connect. All rights reserved.";
footer.style.boxShadow = "0px -4px 8px rgba(0, 0, 0, 0.2)";
document.body.appendChild(footer);

// Search Functionality
searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  const allPosts = postContainer.children;
  Array.from(allPosts).forEach((post) => {
    const text = post.textContent.toLowerCase();
    post.style.display = text.includes(query) ? "block" : "none";
  });
});

const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" }
};

window.onload = function() {
    const navList = document.getElementById("navList");
    const contentFrame = document.getElementById("contentFrame");

    for (let key in works) {
        let listItem = document.createElement("li");
        listItem.textContent = works[key].title;
        listItem.addEventListener("click", function() {
            contentFrame.src = works[key].url;
        });
        navList.appendChild(listItem);
    }
};

const urlInput = document.getElementById("urlInput");
const addBookmarkBtn = document.getElementById("addBookmark");
const deleteAllBtn= document.getElementById("deleteAll");
const bookmarkList = document.getElementById("bookmarkList");

function isValidURL (url) {
    const pattern = /^(https?:\/\/)?([\w\-\.]+\.[\w\-]+|(\d{1,3}\.){3}\d{1,3})(:[0-9]{1,5})?(\/[\w\-\.\~\!\*'\(\)&=\+\$\,\;\/?:@%]*)?(\#[\w\-]*)?$/;
    return pattern.test(url);
}

addBookmarkBtn.addEventListener ("click", () => {
    const url = urlInput.value.trim();
    if (isValidURL(url)) {
        const bookmarkItem = document.createElement("li");
        bookmarkItem.classList.add("bookmark-item");
        bookmarkItem.innerHTML = `
            <a href = "${url}" target="_blank">${url}</a>
            <div class="buttons">
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div> `;
            bookmarkList.appendChild(bookmarkItem);
            urlInput.value = "";
            editBookmarkListener(bookmarkItem);
            addDeleteBookmarkListener(bookmarkItem);

    }else {
        alert ("Please enter a valid URL (http:// or https://).");
    }
});

deleteAllBtn.addEventListener("click", () => {
    while (
        bookmarkList.firstChild
    ){
        bookmarkList.removeChild (bookmarkList.firstChild)
    }
});

function editBookmarkListener (bookmarkItem) {
    const editBtn = bookmarkItem.querySelector(".edit");
    const bookmarkLink = bookmarkItem.querySelector("a");

    editBtn.addEventListener ("click", () => {
        const newURL = prompt("Edit the URL : ",bookmarkLink.getAttribute("href"));
        if (newURL && isValidURL(newURL)){
            bookmarkLink.setAttribute("href", newURL);
            bookmarkLink.innerHTML = newURL;
        }else if (newURL){
            alert ("Please enter a valid URL (http:// or https://).");
        }
    });
}

function addDeleteBookmarkListener (bookmarkItem) {
    const deleteBtn = bookmarkItem.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
        bookmarkItem.remove();
    });
}
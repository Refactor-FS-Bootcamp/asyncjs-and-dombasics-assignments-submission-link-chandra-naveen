const commentContainer = document.getElementById('allComments');
document.getElementById('addComments').addEventListener('click', function (ev) {
   addComment(ev);
});

function addComment(ev) {
    let commentText, wrapDiv;
    const textBox = document.createElement('div');
    const text = document.createElement('h2');
    const likeButton = document.createElement('button');
    likeButton.innerHTML = 'Like';
    likeButton.className = 'likeComment';
    const dislikeButton = document.createElement('button');
    dislikeButton.innerHTML = 'DisLike';
    dislikeButton.className = 'dislikeComment';
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'deleteComment';
    if(hasClass(ev.target.parentElement, 'container')) {
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';
        wrapDiv.style.marginLeft = 0;
        commentText = document.getElementById('newComment').value;
        document.getElementById('newComment').value = '';
        textBox.innerHTML = commentText;
        userText = document.getElementById('newUser').value;
        document.getElementById('newUser').value = '';
        text.innerHTML = userText;
        wrapDiv.append( text, textBox, likeButton, dislikeButton, deleteButton);
        commentContainer.appendChild(wrapDiv);
    } else {
        wrapDiv = ev.target.parentElement;
        userText= ev.target.parentElement.firstElementChild.value;
        text.innerHTML = userText;
        commentText = ev.target.parentElement.firstElementChild.value;
        textBox.innerHTML = commentText;
        wrapDiv.innerHTML = '';
        wrapDiv.append(text, textBox, likeButton, dislikeButton, deleteButton);
    }
  }

  function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}
document.getElementById('allComments').addEventListener('click', function (e) {
     if(hasClass(e.target, 'likeComment')) {
         const likeBtnValue = e.target.innerHTML;
         e.target.innerHTML = likeBtnValue !== 'Like' ? Number.parseInt(likeBtnValue) + 1 + ' likes': '1 like';
    } 
    else if(hasClass(e.target, 'dislikeComment')) {
        const dislikeBtnValue = e.target.innerHTML;
        e.target.innerHTML = dislikeBtnValue !== 'DisLike' ? Number.parseInt(dislikeBtnValue) +  1 + ' dislikes' : '1 dislike';
   } 
    else if(hasClass(e.target, 'deleteComment')) {
        e.target.parentElement.remove();
    }
});

function setOnLocalStorage () {
    localStorage.setItem('template', document.getElementById('allComments').innerHTML);
}
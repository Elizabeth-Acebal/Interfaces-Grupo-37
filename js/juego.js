"use strict";

document.querySelector('.send-button').addEventListener('click', () => {
    const commentText = document.querySelector('.comment-input-box textarea').value;
    if (commentText.trim() !== '') {
      const newComment = document.createElement('article');
      newComment.classList.add('comment');
      newComment.innerHTML = `
        <img src="images/perfil.jpg" alt="Avatar de usuario" class="comment-avatar">
        <div class="comment-content">
          <p class="comment-author">Juana Gonzalez</p>
          <p class="comment-text">${commentText}</p>
          <div class="comment-actions">
            <span class="like">👍</span>
            <span class="dislike">👎</span>
            <a href="#" class="reply">responder</a>
          </div>
        </div>
      `;
      document.querySelector('.comments-list').appendChild(newComment);
      document.querySelector('.comment-input-box textarea').value = '';
    }
  });



async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector('input[name="comment-body"]').value.trim();
  const gem_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment_text) {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        gem_id,
        comment_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.comment-form').addEventListener('click', commentFormHandler);

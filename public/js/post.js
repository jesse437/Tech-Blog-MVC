const editFormHandler = async(event) => {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('input[name="post-body"]').value;
    const id = window.location.toString().split('/') [
        window.location.toString().split('/').length -1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/profile/');
    } else {
        alert(response.statusText);
    }
}

const addCommentHandler = async(event) => {
    event.preventDefault();

    const body_content = document.querySelector('input[class="comment-input"]').value;
    const id = window.location.toString().split('/') [
        window.location.toString().split('/').length -1
    ];
    const data = {
        post_id: id,
        body: body_content
    }
    console.log(data);
    const response = await fetch(`/api/comment/`, {
        method: 'POST',
        body: JSON.stringify(data),
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

const editPostFormEl = document.querySelector('#edit-post-form');
if (editPostFormEl) {
    editPostFormEl.addEventListener('submit', editFormHandler)
}

const commentInputEl = document.querySelector('#edit-comment-form');
if (commentInputEl) {
    commentInputEl.addEventListener('submit', addCommentHandler)
}
function sendPostToServer(post) {
  const apiEndpoint = './api/posts';
  // This is a placeholder for your actual server-side logic
    fetch('./api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send post to server');
        }
        return response.json();
    })
    .then(data => {
        console.log('Post sent to server successfully:', data);
    })
    .catch(error => {
        console.error('Error sending post to server:', error);
    });
}

// Function to update UI with new post
function updateUIWithNewPost(post) {
    // Assuming there's a container for posts, append the new post to it
    var postsContainer = document.getElementById("postsContainer");
    var postElement = document.createElement("div");
    postElement.textContent = post.content;
    postsContainer.appendChild(postElement);
}

document.getElementById("postButton").addEventListener("click", function() {
    var postContent = document.getElementById("postContent").value;
    var privacySetting = document.querySelector('input[name="privacy"]:checked').value;

    // Validate post content
    if(postContent === "") {
        alert("Post content cannot be empty.");
        return;
    }

    // Create Post Object
    var post = {
        content: postContent,
        privacy: privacySetting,
        // Add additional post properties as needed
    };

    // Send post object to server (pseudo-code)
    sendPostToServer(post);

    // Clear post input field
    document.getElementById("postContent").value = "";

    // Update UI to show the new post
    updateUIWithNewPost(post);
});

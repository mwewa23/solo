/* app.js */
function showContent(frameId) {
    // Hide all content first
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Show the selected content
    var selectedContent = document.getElementById('content' + frameId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

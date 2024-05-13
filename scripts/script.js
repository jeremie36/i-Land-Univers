function openModal(videoURL) {
    var modal = document.getElementById('videoModal');
    var frame = document.getElementById('videoFrame');
    frame.src = videoURL;
    modal.style.display = "block";
  
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      modal.style.display = "none";
      frame.src = ""; // Stop the video when closing the modal
    }
  
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
        frame.src = ""; // Stop the video when closing the modal
      }
    }
  }
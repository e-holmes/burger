// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  $(".change-devour").on("submit", function(event) {
    event.preventDefault();
    var id = $(this).children("id").val();
    

    // Send the PUT request.
    $.ajax("/burgers/" + id, {
      method: "PUT",
    }).then(
      function() {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

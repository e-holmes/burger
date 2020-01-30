// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  $(".updateBurger").on("submit", function(event) {
    event.preventDefault();

    var id = $(this).children(".id").val();
    console.log(id);
    

    // Send the PUT request.
    $.ajax({
      method: "PUT",
      url: "/burgers/" + id
    }).then(
      function(data) {
        console.log("changed devour of", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

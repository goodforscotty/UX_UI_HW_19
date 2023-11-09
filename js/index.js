// Update your JavaScript to toggle active class
$(document).ready(function() {
    $(".tab-button").click(function() {
        $(".tab-button").removeClass("active");
        $(this).addClass("active");

        if ($(this).attr("id") === "skills-tab") {
            $("#toolsDiv").hide();
            $("#skillsDiv").show();
        } else if ($(this).attr("id") === "tools-tab") {
            $("#skillsDiv").hide();
            $("#toolsDiv").show();
        }
    });
});

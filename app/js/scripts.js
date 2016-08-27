$(document).foundation();

var photoNum;
var photoHTML;
var modalId;
var largePhoto = false;


$(".image a").click(function() {

	if (largePhoto === false) {
        $(".large-image").remove();
    };

    largePhoto = true;

    if (largePhoto === true) {

        photoNum = $(this).attr("data-reveal-id");
        photoHTML = '<img class="large-image" src="img/photos/';
        photoHTML += photoNum;
        photoHTML += '.jpg" alt="' + photoNum + '" >';
        console.log(photoHTML);
        $(photoHTML).insertAfter(".modalTitle");
        modalId = '#' + photoNum;
    }
});

$(document).on('close.fndtn.reveal', modalId, function() {
    $(".large-image").remove();
});
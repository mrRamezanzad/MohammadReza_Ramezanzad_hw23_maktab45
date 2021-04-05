// handle dashboard special menu functionality for responsiveness
$(".dashboard-menu-button").on("click", function (e) {
    $(this).toggleClass("bi-columns-gap bi-columns")
    $("#dashboard-menu").toggleClass("d-none")
})

// Inject Edit Profile Picture Modal To Page
$("body").append(`
    <!-- Modal -->
    <div class="modal fade" id="profile-picture-modal" dir="ltr" tabindex="-1" aria-labelledby="password-confirmation-modal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header justify-content-center position-relative">
            <button type="button" class="btn-close position-absolute end-0 me-2" data-bs-dismiss="modal" aria-label="Close"></button>
            <h5 class="modal-title" id="confirmation-modal-title">تغییر عکس پروفایل</h5>
        </div>
        <form class="modal-body" action="/users/avatar" method="POST" enctype="multipart/form-data">
            <div class="row text-end justify-content-center">
                <div class="col-12">
                    <label class="form-label" for="currentPassword">عکس پروفایل خود را انخاب کنید </label>
                    <input class="form-control" type="file" name="avatar">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">انصراف</button>
                <button type="submit" class="btn btn-primary">ارسال عکس</button>
            </div>
        </form>
        </div>
    </div>
    </div>
`)

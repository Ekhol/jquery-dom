let movies = [];

$(function () {

    let curId = 0;

    $("#new-movies").on("submit", function (evt) {
        evt.preventDefault();

        let title = $("#title").val();
        let rating = $("#rating").val();

        let movieInfo = { title, rating, curId };
        const HTMLAppend = createHTML(movieInfo);

        curId++;
        movies.push(movieInfo);

        $("#tableBody").append(HTMLAppend);
        $("#new-movies").trigger("reset");
    });

    $("tbody").on("click", ".btn.delete", function (evt) {
        let toRemove = movies.findIndex(movie => movie.currentId === +$(evt.target).data("deleteId"));
        movies.splice(toRemove, 1);

        $(evt.target).closest("tr").remove();
    });
});

function createHTML(info) {
    return `<tr>
        <td>${info.title}</td>
        <td>${info.rating}</td>
        <td> 
            <button class ="btn delete" data-delete-id=${info.curId}>
                Delete
            </button>
        </td>
    </tr>`;
}
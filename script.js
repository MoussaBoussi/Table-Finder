"use strict";
$(document).ready(function () {
    let selectedTable;
    $(document).on("click", ".available", function (e) {
        $("form").css("display", "flex");
        selectedTable = e.target
        $(".tablenum").text(`Table Number: ${$(selectedTable).text()}`)
    })

    $(document).on("click", ".close", function () {
        $("form").hide()
    })

    $(document).on("click", ".btn_submit", function () {
        $("form").hide()
    })

    $(document).on("click", ".btn_submit", function (e) {
        $(selectedTable).removeClass("available").addClass("reserved")
        $(selectedTable).attr("name", $(".name").val())
        $(selectedTable).attr("size", $(".numGuests").val())
        $("form").hide()
        $(selectedTable).append(`
        <section class = "popup">
            <p>Name:  ${$(selectedTable).attr("name")}</p>
            <p>Size of Party: ${$(selectedTable).attr("size")}</p>
        </section>`)
    })

    $(document).on("mouseenter", ".reserved", function (event) {
        $(event.target).children(1).css("display", "block")
      }).on("mouseleave", ".reserved", (event) => {
        $(".popup").css("display", "none")
      });


});
"use strict";
$(document).ready(function () {
    let selectedTable;
    $(".available").on("click", function (e) {
        $("form").css("display", "flex");
        selectedTable = e.target
        $(".tablenum").text(`Table Number: ${$(selectedTable).text()}`)
    })

    $(".close").on("click", function () {
        $("form").hide()
    })

    $(".btn_submit").on("click", function () {
        $("form").hide()
    })

    $(document).on("click", ".btn_submit", function (e) {
        $(selectedTable).removeClass("available").addClass("reserved")
        // $(selectedTable).off("click", function)
        $("form").hide()
    })
});
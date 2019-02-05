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
        $("form").hide()
    })
});
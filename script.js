"use strict";
$(document).ready(function () {
    let selectedTable;
    $(".available").on("click", function (e) {
        $("form").css("display", "flex");
        selectedTable = e.target
        $(".tablenum").text(`Table Number: ${$(selectedTable).children(1).text()}`)
    })

    $(".close").on("click", function () {
        $("form").hide()
    })

    $(".btn_submit").on("click", function () {
        $("form").hide()
    })

    $(".btn_submit").on("click", function () {
        $(selectedTable).removeClass("available")
        $(selectedTable).addClass("reserved")
        $("form").hide()
    })
});
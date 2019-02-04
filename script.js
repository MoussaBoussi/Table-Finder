"use strict";
$(document).ready(function () {
    let selectedTable;

    $(".available").on("click", function (e) {
        $("form").css("display", "flex");
        selectedTable = e.target
    })

    $(".close").on("click", function () {
        $("form").hide()
        selectedTable = null;
    })

    $(".btn_submit").on("click", function () {
        $("form").hide()
    })

    $(".btn_submit").on("click", function () {
        $(selectedTable).removeClass("available")
        $(selectedTable).addClass("reserved")
        $("form").hide()
        selectedTable = null;
    })
});
"use strict";
$(document).ready(function () {
    let selectedTable;
    $(".available").on("click", function (e) {
        $("form").css("display", "flex");
        selectedTable = e.target
        $(".tablenum").html("")
        $(".tablenum").append(`Table Number: ${$(selectedTable).children(1).text()}`)
        console.dir(selectedTable)
    })
    
    console.log(selectedTable)

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
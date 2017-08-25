import $ from 'jquery';
import { cube } from './sumfun';
import { square } from './squares';

$(document).ready(function () {
    $("#button_cube").click(function(){
        $(this).text(function () {
            let val = cube($("#textbox").val() | 0);
            console.log(val);
            $("#result").text(function () {
                return "cube is "+val;
            })
        });
    });
    $("#button_sqr").click(function(){
        $(this).text(function () {
            let val = square($("#textbox").val() | 0);
            console.log(val);
            $("#result").text(function () {
                return "square is "+val;
            })
        });
    });
});
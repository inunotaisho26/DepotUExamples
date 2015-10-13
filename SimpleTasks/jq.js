/// <reference path="typings/jquery/jquery.d.ts" />
$(document).ready(function () {
    $('.btn-example button').click(function () {
        alert('Hi Class!');
    });
    $('.alert-example button').click(function () {
        alert($('.alert-example input').val());
    });
    $('.color-div').mouseover(function (e) {
        $(this).css('background-color', 'darksalmon');
    }).mouseleave(function (e) {
        $(this).css('background-color', 'lightsalmon');
    });
    $('.random-example p').click(function () {
        $(this).css('color', getRandomColor());
    });
    $('.addspan-div').append($('<span>Matt Landers</span>').css({ color: 'lightsalmon', fontSize: '20px', whiteSpace: 'nowrap' }).click(function () {
        var _this = this;
        $(this).animate({ marginLeft: '5000px' }, 2000, function () {
            $(_this).css('margin-left', '-1000px');
            $(_this).animate({ marginLeft: '0px' }, 2000);
        });
    }));
    var arr = ['Matt', 'David', 'Haley', 'Walter', 'Taylor', 'Jay', 'Afftene',
        'Hillary', 'Zyler', 'John', 'Lewis', 'Michael', 'Daniel', 'Ethan',
        'Jackson', 'Jeff', 'Steve'];
    var ul = $('.createlist-example ul');
    $(arr).each(function (i) {
        ul.append($('<li></li>').text(arr[i]));
    });
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

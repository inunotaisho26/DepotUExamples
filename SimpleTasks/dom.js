(function () {
    document.addEventListener('DOMContentLoaded', ready);
    function ready() {
        ButtonExample();
        AlertExample();
        HoverExample();
        RandomExample();
        AddSpanExample();
        CreateListExample();
    }
    function CreateListExample() {
        var arr = ['Matt', 'David', 'Haley', 'Walter', 'Taylor', 'Jay', 'Afftene',
            'Hillary', 'Zyler', 'John', 'Lewis', 'Michael', 'Daniel', 'Ethan',
            'Jackson', 'Jeff', 'Steve'];
        var ul = document.querySelector('.createlist-example ul');
        arr.forEach(function (item) {
            var li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
    }
    function AddSpanExample() {
        var div = document.querySelector('.addspan-div');
        var span = document.createElement('span');
        span.innerText = 'Matt Landers';
        span.style.color = 'lightsalmon';
        span.style.fontSize = '20px';
        span.style.whiteSpace = 'nowrap';
        var moveValue = 0;
        span.onclick = function () {
            setInterval(function () {
                moveValue += 1;
                span.style.marginLeft = moveValue + 'px';
            }, 1);
        };
        div.appendChild(span);
    }
    function RandomExample() {
        var p = document.querySelector('.random-example p');
        p.onclick = function () {
            p.style.color = getRandomColor();
        };
    }
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function ButtonExample() {
        //var btn: HTMLButtonElement = <HTMLButtonElement>document.querySelector('.btn-example button');
        var btn = document.getElementsByTagName('button')[0];
        function clickEvent() {
            alert('Hi Class!');
        }
        btn.addEventListener('click', clickEvent);
    }
    function AlertExample() {
        var btn = document.querySelector('.alert-example button');
        btn.onclick = function () {
            alert(document.querySelector('.alert-example input').value);
        };
    }
    function HoverExample() {
        var div = document.querySelector('.color-div');
        div.onmouseover = function () {
            div.style.backgroundColor = 'darksalmon';
        };
        div.onmouseleave = function () {
            div.style.backgroundColor = 'lightsalmon';
        };
    }
})();

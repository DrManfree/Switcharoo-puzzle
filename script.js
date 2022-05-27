window.onload = function () {
    document.querySelectorAll('.cell').forEach((item, index) => {

        item.id = `cell${index}`;
        let lightUp = Math.round(Math.random());

        if (lightUp) {
            item.style.setProperty('background', 'rgb(185, 203, 238)');
            item.dataset.lit = true;
        }
        else {
            item.style.setProperty('background', 'rgb(101, 114, 139)');
            item.dataset.lit = false;
        }
    });

    document.querySelector('.main').addEventListener('click', cellClick);
}

function cellClick(event) {

    let target = event.target;
    if (target.className != 'cell') return;

    let x = Math.floor(+target.id.replace('cell','') / 3);
    let y = +target.id.replace('cell','') % 3;

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {

            if (y + j >= 0 && y + j < 3 &&
                x + i >= 0 && x + i < 3 &&
                (Math.abs(i + j) == 1 || (i == 0 && j == 0)))
                changeLight(document.querySelector(`#cell${3*(x+i)+y+j}`));
        }
    }

    checkWin();
}

function changeLight(element) {

    if (element.dataset.lit == 'false') {
        element.style.background = 'rgb(185, 203, 238)';
        element.dataset.lit = 'true';
    }
    else if (element.dataset.lit == 'true') {
        element.style.background = 'rgb(101, 114, 139)';
        element.dataset.lit = 'false';
    };
}

function checkWin() {

    document.querySelectorAll('.cell').forEach(item => {

        if (item.dataset.lit == 'false') return;
    });

}
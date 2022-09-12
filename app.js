/** @format */

function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}

const avatar = document.querySelector(`#player`);
const coin = document.querySelector(`#coin`);

window.addEventListener(`keyup`, function (e) {
    if (e.key === `ArrowDown` || e.key === `Down`) {
        const currtop = extractPosition(avatar.style.top);
        avatar.style.top = `${currtop + 50}px`;
    } else if (e.key === `ArrowUp` || e.key === `Up`) {
        const currtop = extractPosition(avatar.style.top);
        avatar.style.top = `${currtop - 50}px`;
    } else if (e.key === `ArrowRight` || e.key === `Right`) {
        const currLeft = extractPosition(avatar.style.left);
        avatar.style.left = `${currLeft + 50}px`;
        avatar.style.transform = `scale(1,1)`;
    } else if (e.key === `ArrowLeft` || e.key === `Left`) {
        const currLeft = extractPosition(avatar.style.left);
        avatar.style.left = `${currLeft - 50}px`;
        avatar.style.transform = `scale(-1,1)`;
    }
    if (isTouching(avatar, coin)) moveCoin();
});

const extractPosition = function (position) {
    if (!position) return 100;
    return parseInt(position.slice(0, -2));
};

const moveCoin = function () {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeigth);
    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
};

moveCoin();

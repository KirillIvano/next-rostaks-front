export const copyElementContent = (el: HTMLElement) => {
    const rng = document.createRange();
    rng.selectNode(el);

    const selection = document.getSelection();

    if (selection) {
        selection.addRange(rng);

        document.execCommand('copy');

        selection.removeAllRanges();
    } else {
        alert('Ваш браузер не поддерживает копирование');
    }
};

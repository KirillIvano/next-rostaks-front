// Пропорция - строка в формате <a>x<b>
export const getProportionsRatio = (proportion: string): string => {
    const [x, y] = proportion.split('x').map(Number);

    if (!x || !y) {
        throw new Error('Пропорции не заданы или ');
    }

    return `${(y / x) * 100}%`;
};

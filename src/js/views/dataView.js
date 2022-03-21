class DataComponent {
    _parentElement = document.querySelector('.data');
    _data;

    render(data) {
        this._data = data;
        const markUp = [...this._data].map(function (keyValue) {
            if (keyValue[0] === 'latitude' || keyValue[0] === 'longitude') return;
            return `
            <article class="data__section">
                <h2 class="data__title">${keyValue[0] || '🤷🏻‍♂️'}</h2>
                <h3 class="data__data">${keyValue[1] || '🤷🏻‍♂️'}</h3>
            </article>
            `;
        }).join('');
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markUp);
    }

    _clear = function () {
        this._parentElement.innerHTML = '';
    }
}
export default new DataComponent();
// import patternImg from '../../images/pattern-bg.png';

class HeaderComponent {
    _parentElement = document.querySelector('header');

    constructor() {
        // this._addHeaderBackgroundImage();
        window.addEventListener('load', this._clearInput.bind(this))
        this._parentElement.querySelector('.header__input').addEventListener('click', this._clearInput.bind(this));
    }

    // _addHeaderBackgroundImage() {
    //     this._parentElement.style.backgroundImage = `url(${patternImg})`;
    // }

    renderError() {
        this._parentElement.querySelector('.header__input').value = '🔴🔴🔴 Not a valid IP!';
        this._parentElement.querySelector('.header__input').classList.add('header__input-error');
    }

    _clearInput() {
        this._parentElement.querySelector('.header__input').value = '';
        this._parentElement.querySelector('.header__input').classList.remove('header__input-error');
    }

    addHandlerGetIP(handler) {
        this._parentElement.querySelector('.header__search-btn').addEventListener('click', e => {
            e.preventDefault();
            const ip = this._parentElement.querySelector('.header__input').value;
            if (!ip) return
            handler(ip);
            // this._parentElement.querySelector('.header__input').value = '';
        })
    }


}
export default new HeaderComponent();
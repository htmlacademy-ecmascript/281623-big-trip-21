import {TYPES} from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';


function createEventEditTemplate({type, basePrice, destination, offers}) {
  return (`
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${TYPES.map((elementType) => `
                <div class="event__type-item">
<input id="event-type-${elementType}-1" class="event__type-input visually-hidden" type="radio" name="event-type" value="${elementType}" ${type === elementType ? 'checked' : ''}>
      <label class="event__type-label event__type-label--${elementType}" for="event-type-${elementType}-1">${elementType.charAt(0).toUpperCase() + elementType.slice(1)}</label>
                </div>
                `).join('')}
              </fieldset>
            </div>
          </div>
          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
            <datalist id="destination-list-1">
              <option value="Amsterdam"></option>
              <option value="Geneva"></option>
              <option value="Chamonix"></option>
            </datalist>
          </div>
          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">
          </div>
          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              &euro;&nbsp;<span class="visually-hidden">Price</span>
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
          </div>
          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
          <button class="event__rollup-btn" type="button">
        </header>
        <section class="event__details">
          <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>
            <div class="event__available-offers">
              ${offers.map((element) => (
      `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
      <label class="event__offer-label" for="event-offer-luggage-1">
        <span class="event__offer-title">${element.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${element.price}</span>
      </label>
    </div>
    `
    )).join('')}
            </div>
          </section>
          <section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${destination.description}</p>
            <div class="event__photos-container">
              <div class="event__photos-tape">
              ${destination.pictures.map((element) =>
      `<img class="event__photo" src="${element.src}" alt="${element.description}">`
    ).join('')}
              </div>
            </div>
          </section>
        </section>
      </form>
    </li>
  `);
}


export default class EventEditView extends AbstractView {
  #point = null;
  #handleFormEdit = null;

  constructor({point, onSubmitClick}) {
    super();
    this.#point = point;
    this.#handleFormEdit = onSubmitClick;

    this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#formHandler);

    this.element.querySelector('form')
      .addEventListener('submit', this.#formHandler);
  }

  get template() {
    return createEventEditTemplate(this.#point);
  }

  #formHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormEdit(this.#point);
  };

}

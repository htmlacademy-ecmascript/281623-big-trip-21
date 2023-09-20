import AbstractView from '../framework/view/abstract-view.js';

function createNoPointView() {
  return (
    `
    <p class="trip-events__msg">Click New Event to create your first point</p>
    `
  );
}

export default class NoPointView extends AbstractView{
  get template() {
    return createNoPointView();
  }
}

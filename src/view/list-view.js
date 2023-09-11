import AbstractView from '../framework/view/abstract-view.js';


function createEditListTemplate () {
  return `
<ul class="trip-events__list"></ul>`;
}

export default class EditList extends AbstractView {
  get template() {
    return createEditListTemplate();
  }

}

import {getRandomPoint} from '../mock/task.js';
import {POINTS_COUNT} from '../const.js';

export default class PointsModel {
  points = Array.from({length: POINTS_COUNT}, getRandomPoint);

  getPoints() {
    return this.points;
  }
}


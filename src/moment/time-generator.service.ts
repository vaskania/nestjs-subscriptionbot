import { find } from 'geo-tz';
import * as moment from 'moment-timezone';

export class TimeGenerator {
  async generateTime(latitude: number, longtitude: number, userTime: string) {
    const [timezone] = find(latitude, longtitude);

    const date = new Date(moment.tz(timezone).format());
    const userTimezone = date.getTimezoneOffset() / 60;
    const time = userTime.split(':');

    let setTime: number | string = parseInt(time[0]) - userTimezone;

    if (setTime < 0) {
      setTime += 12;
    } else if (setTime < 10) {
      setTime = `0${setTime}`;
    } else if (setTime > 24) {
      setTime = `0${setTime - 24}`;
    }

    time[0] = setTime.toString();
    return time.join(':');
  }
}

import Model, { attr, hasMany} from '@ember-data/model';

export default class MeetingModel extends Model {
    @attr('date-string') meetingDate;

    @hasMany('report', { inverse: null }) reports;
}

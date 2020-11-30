import Model, { attr, belongsTo} from '@ember-data/model';

export default class ReportModel extends Model {
    @attr('date-string') reportDate;
    @attr('string') bookRequest;
    @attr('number') meetingId;

    @belongsTo('speaker') speaker;
    @belongsTo('book') book;
//    @belongsTo('meeting') meeting;
}

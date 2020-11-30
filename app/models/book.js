import Model, { attr, hasMany } from '@ember-data/model';

export default class BookModel extends Model {
    @attr("string") bookName;
    @attr("string") authorFirstName;
    @attr("string") authorLastName;
    @attr("number") pageNumber;
    @attr("number") rating;
    @attr("string") remarkURL;
    @attr("array") tags;

    @hasMany("report") reports;
}

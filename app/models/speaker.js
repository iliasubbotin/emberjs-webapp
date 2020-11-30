import Model, { attr, hasMany } from "@ember-data/model";

export default class SpeakerModel extends Model {
    @attr("string") firstName;
    @attr("string") lastName;
    @attr("string") secName;

    @hasMany("report") reports;
}

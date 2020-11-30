import ApplicationSerializer from './application';

export default class MeetingSerializer extends ApplicationSerializer {

    normalize(model, hash) {

        hash = super.normalize(...arguments);

        return hash;
    }
}

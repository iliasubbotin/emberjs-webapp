import ApplicationSerializer from './application';

export default class ReportSerializer extends ApplicationSerializer {
    normalize(model, hash) {

        hash = super.normalize(...arguments);

        return hash;
    }
}

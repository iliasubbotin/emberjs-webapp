import ApplicationSerializer from "./application";

export default class SpeakerSerializer extends ApplicationSerializer {

    normalize(model, hash) {
        hash = super.normalize(...arguments);

        return hash;
    }
}

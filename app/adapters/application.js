import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from 'emberjs-webapp/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
    host = config.APP.backEndURL;
    headers = {
        'Content-Type': 'application/json'
    };

    buildURL(modelName, id, snapshot, requestType, query) {
        let url = super.buildURL(...arguments);
        if (modelName === 'speaker' && requestType === 'findRecord' && id) {
            url += '?_embed=reports';
        }

        if (modelName === 'book' && requestType === 'findRecord' && id) {
            url += '?_embed=reports';
        }

//        if (modelName === 'report' && requestType === 'findRecord' && id) {
        if (modelName === 'report') {
            url += '?_expand=speaker&_expand=book&_expand=meeting';
        }

        if (modelName === 'meeting') {
                if ( (requestType === 'findRecord' || requestType === 'deleteRecord') && id) {
                    url += '';
                } else {
                    url += '?_embed=reports';
                }

        }

        return url;
    }
}

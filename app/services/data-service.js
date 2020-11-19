import Service from '@ember/service';
//import ENV from 'emberjs-webapp/config/environment.js';
import config from 'emberjs-webapp/config/environment';
//import {getOwner} from '@ember/application';

export default class DataServiceService extends Service {

    async readSpeakers(searchValue) {
//        let url = getOwner(this).application;
        let searchSegm = searchValue ? `?q=${searchValue}` : '';
        let response = await fetch(`${config.APP.backEndUrl}/speakers${searchSegm}`);
        return response.json();
    }

    async readSpeaker(id) {
//        let url = getOwner(this).application;
        let response = await fetch(`${config.APP.backEndUrl}/speakers/${id}`);
        return response.json();
    }

    async changeSpeaker(speaker) {
//        let url = getOwner(this).application;
        return await fetch(`${config.APP.backEndUrl}/speakers/${speaker.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(speaker)
        });
    }

    async craeteSpeaker(speaker) {
//        let url = getOwner(this).application;
        return await fetch(`${config.APP.backEndUrl}/speakers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(speaker)
        });
    }

    async deleteSpeaker(id) {
//        let url = getOwner(this).application;
        return await fetch(`${config.APP.backEndUrl}/speakers/${id}`, {
            method: 'DELETE'
        });
    }

    async readBooks(searchValue, searchTagValue) {
//        let url = getOwner(this).application;
        let searchSegm = searchValue ? `?q=${searchValue}` : (searchTagValue? `?tags_like=${searchTagValue}` : '');
        let response = await fetch(`${config.APP.backEndUrl}/books${searchSegm}`);
        return response.json();
    }

    async readBook(id) {
//        let url = getOwner(this).application;
        let response = await fetch(`${config.APP.backEndUrl}/books/${id}`);
        return response.json();
    }

    async changeBook(book) {
//        let url = getOwner(this).application;
        return await fetch(`${config.APP.backEndUrl}/books/${book.id}`, {
            method: 'PATCH',
                headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
    }

    async createBook(book) {
//        let url = getOwner(this).application;
        return await fetch(`${config.APP.backEndUrl}/books`, {
            method: 'POST',
                headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
    }

    async deleteBook(id) {
//        let url = getOwner(this).application;
        return await fetch(`${config.APP.backEndUrl}/books/${id}`, {
            method: 'DELETE'
        });
    }

}

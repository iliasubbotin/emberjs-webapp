import Route from '@ember/routing/route';

export default class CreateBookRoute extends Route {

    model() {
        return {
            "bookName": "",
            "authorFirstName": "",
            "authorLastName": "",
            "pageNumber": "0",
            "tags": [],
            "rating": 0,
            "remarLink": ""
        }
    }
}



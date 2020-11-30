import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class BooksController extends Controller {
    @service store;

    queryParams = ['search','searchtag'];

    @tracked search = '';
    @tracked searchtag = '';
    @tracked searchQuery = '';
    @tracked searchTagQuery = '';
    @tracked isLoading;
    @tracked isError;

    @action
    async deleteBook(id) {
        try {
            let book = this.store.peekRecord('book', id);
            book.deleteRecord();
            await book.save();

            this.transitionToRoute('books.index');
        } catch (e) {
            this.send("error", e);
        }
    }

    @action
    setSearchQuery(searchValue) {
        this.searchQuery = searchValue;
    }

    @action
    setSearchTagQuery(searchValue) {
        this.searchTagQuery = searchValue;
    }

    @action
    searchBooks(searchValue) {
        this.searchtag = '';
        this.search = this.searchQuery;
    }

    @action
    searchTagBooks(searchValue) {
        this.search = '';
        this.searchtag = this.searchTagQuery;
    }

    /*
    @service dataService;

    queryParams = ['search','searchtag'];

    @tracked search = '';
    @tracked searchtag = '';
    @tracked searchQuery = '';
    @tracked searchTagQuery = '';
    @tracked isLoading;
    @tracked isError;

    @action
    async deleteBook(id) {

        this.dataService.deleteBook(id);
    }

    @action
    setSearchQuery(searchValue) {
        this.searchQuery = searchValue;
    }

    @action
    setSearchTagQuery(searchValue) {
        this.searchTagQuery = searchValue;
    }

    @action
    searchBooks(searchValue) {
        this.searchtag = '';
        this.search = this.searchQuery;
    }

    @action
    searchTagBooks(searchValue) {
        console.log(searchValue);
        this.search = '';
        this.searchtag = this.searchTagQuery;
    }
    */
}

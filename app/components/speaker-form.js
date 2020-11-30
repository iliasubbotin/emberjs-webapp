import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { next } from '@ember/runloop';

export default class SpeakerFormComponent extends Component {
    @tracked _firstName;
    @tracked _lastName;

    firstNameArgsPrevValue;

    get firstName() {
        if (this.firstNameArgsPrevValue !== this.args.firstName) {
            this.firstNameArgsPrevValue = this.args.firstName;
            next(this, () => {
                this._firstName = this.args.firstName;
            });
        }

        return this._firstName;
    }

    lastNameArgsPrevValue;

    get lastName() {
        if (this.lastNameArgsPrevValue !== this.args.lastName) {
            this.lastNameArgsPrevValue = this.args.lastName;
            next(this, () => {
                this._lastName = this.args.lastName;
            });
        }

        return this._lastName;
    }

    @action
    async saveSpeaker(e) {
        e.preventDefault();

        this.args.onSubmit({
            firstName: this._firstName,
            lastName: this._lastName,
            secName: this.args.secName
        });
    }
}
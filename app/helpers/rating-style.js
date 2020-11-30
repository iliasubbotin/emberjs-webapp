import { helper } from '@ember/component/helper';

export function ratingStyle([value, ...rest]) {
    return Ember.String.htmlSafe(`width: ${value}%;`);
}

export default helper(ratingStyle);

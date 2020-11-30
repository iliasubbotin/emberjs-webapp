import { helper } from '@ember/component/helper';


export function ifEq([a, b, ...rest]) {
    return (a == b);
}

export default helper(ifEq);

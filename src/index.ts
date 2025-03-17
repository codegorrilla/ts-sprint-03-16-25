import Dog from './Dog';
import ShelterDog from './ShelterDog';
import { sum, multiply } from './utils';
import _ from 'lodash';

console.log(multiply());
console.log(sum(3, 3));

const robin = new Dog('robin', 'steele', 0.5);

robin.bark();

const buffy = new ShelterDog('buffy', 'aussie', 1, 'new orleans');

console.log(buffy);

console.log(_.add(10, 13));

const numbers: number[] = [1, 2, 3, 4, 5, 10];

const addedNums: number[] = _.map(numbers, (num) => num * num);

console.log(addedNums);

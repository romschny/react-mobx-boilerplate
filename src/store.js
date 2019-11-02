import {
  observable,
  computed,
  action,
  autorun,
} from 'mobx';

class Store {
  // define state values
  @observable numbers = [...Array(10).keys()].map((i) => i);

  // define computed values
  @computed get getEvenNumbers() {
    return this.numbers.filter((i) => i % 2 !== 1);
  }

  // define actions
  @action addNumbers = (...numbers) => {
    this.numbers = [...this.numbers, ...numbers];
  }
}

const store = new Store();

autorun(() => {
  // eslint-disable-next-line no-console
  console.log(store);
});

export default store;

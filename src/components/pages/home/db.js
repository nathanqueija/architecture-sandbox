import { namespaced } from 'mutations';

//namespaced pro gragabe ddos dados da store
export const mutations = {
  setItems: ({ items }) =>
    namespaced({
      items: { $set: items }
    })
};

export default props => ({
  load: () =>
    fetch('https://api.github.com/repositories')
      .then(response => response.json())
      .then(items => ({ mutation: mutations.setItems({ items }) })),
  search: ({ value }) =>
    fetch(`https://api.github.com/search/repositories?q=${value}`)
      .then(response => response.json())
      .then(({ items }) => ({ mutation: mutations.setItems({ items }) })),
  favorite: index =>
    new Promise((resolve, reject) =>
      window.setTimeout(
        () =>
          new Date().getTime() % 2 === 0
            ? resolve('fake message from server')
            : reject('lol nope, you failed'),
        2000
      )
    )
      .then(output => ({ output }))
      .catch(error => ({ error }))
});

const source: string = `../db.json`;
let grandslams: Array<Object> = [];

fetch (source)
  .then(response => response.json())
  .then(data => {
    grandslams = data;
    data.forEach((slam: { [x: string]: any; }) => {
      Object.keys(slam)
        .forEach(record => {
          console.log(`${record} - ${slam[record]}`);
        });
    });
  });

/**
 * Renders table of information
 * @returns {void}
 */
const render = (): void => {

};

/**
 * @returns {void}
 */
const filter = (): void => {

};
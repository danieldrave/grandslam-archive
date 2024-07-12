const source = `../db.json`;
let grandslams = [];
fetch(source)
    .then(response => response.json())
    .then(data => {
    grandslams = data;
    data.forEach((slam) => {
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
const render = () => {
};
/**
 * @returns {void}
 */
const filter = () => {
};

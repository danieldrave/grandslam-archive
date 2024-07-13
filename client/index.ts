const source: string = `../db.json`
let grandslams: Array<Object> = []

fetch (source)
  .then(response => response.json())
  .then(data => {
    grandslams = data
    render(data)

    document.querySelector(`input`)!
      .addEventListener(`input`, e => {
        const target = e.target as HTMLInputElement
        filter(target.value)
    });
  });

/**
 * Renders table of information
 * @param {Array<Object>} data - the results data
 * @returns {void}
 */
const render = (data: Array<Object>): void => {
  const el = document.querySelector(`#app tbody`)!
  let dataset = ``

  data.forEach((slam: { [x: string]: any; }) => {
    dataset += `<tr>`
    Object.keys(slam)
      .forEach(record => dataset += `<td> ${slam[record]} </td>`)
    dataset += `</tr>`
  });

  el.innerHTML = dataset
}

/**
 * Filters the global data by input event
 * @param {String} e - the target value entered on input
 * @returns {void}
 */
const filter = (e: String): void => {
  const query = grandslams.filter(slam => Object.keys(slam)
    .some(record => slam[record].toLowerCase().includes(e.toLowerCase())))

  render(query)
}
// Ex 5

const numbTable = () => {
  let filler = document.getElementById('output')
  let table = document.createElement('table')
  for (i = 0; i < 12; i++) {
      let tablerow = document.createElement('tr')
      let tabledata = document.createElement('td')
      tabledata.appendChild(document.createTextNode(`${i + 1}`))
      if ((i + 1) % 4 === 0) {
          tabledata.className += "divfour"
      }
      tablerow.appendChild(tabledata)
      table.appendChild(tablerow)
  }
  filler.appendChild(table)
}

numbTable();
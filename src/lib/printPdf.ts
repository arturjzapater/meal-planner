import html2pdf from 'html2pdf.js'

const opts = {
  filename: 'meal-schedule.pdf',
  margin: 20,
  jsPDF: {
    unit: 'mm',
    format: 'a4',
    orientation: 'landscape'
  }
}

const removeBtns = (node: Element): Element => {
  node.querySelectorAll('button')
    .forEach(x => x.remove())
  return node
}

const printPdf = (node: Element | null): void => {
  if (node === null) return
  const elem = node.cloneNode(true)
  html2pdf()
    .set(opts)
    .from(removeBtns(elem))
    .save()
}

export default printPdf

import html2pdf from 'html2pdf.js'
import { pipe } from './utils'

const opts = {
  filename: 'meal-schedule.pdf',
  margin: 10,
  jsPDF: {
    unit: 'mm',
    format: 'a4',
    orientation: 'landscape'
  }
}

const clone = (node: Element): Node => node.cloneNode(true)

const makePdf = (elem: Element): void => {
  html2pdf()
    .set(opts)
    .from(elem)
    .save()
}

const remove = (selector: string) => (node: Element): Element => {
  node.querySelectorAll(selector)
    .forEach(x => x.remove())
  return node
}

const _printPdf: (node: Element) => void = pipe(
  clone,
  remove('button'),
  // remove('form'),
  makePdf
)

const printPdf = (node: Element | null): void => {
  if (node === null) return
  _printPdf(node)
}

export default printPdf

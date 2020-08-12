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

const clone = (node: HTMLElement): Node => node.cloneNode(true)

const makePdf = (elem: HTMLElement): void => {
  html2pdf()
    .set(opts)
    .from(elem)
    .save()
}

const remove = (selector: string) => (node: HTMLElement): HTMLElement => {
  node.querySelectorAll(selector)
    .forEach(x => x.remove())
  return node
}

const setHeight = (height: string) => (elem: HTMLElement): HTMLElement => {
  elem.style.height = height
  return elem
}

const _printPdf: (node: HTMLElement) => void = pipe(
  clone,
  setHeight('180mm'),
  remove('button'),
  remove('form'),
  makePdf
)

const printPdf = (node: HTMLElement | null): void => {
  if (node === null) return
  _printPdf(node)
}

export default printPdf

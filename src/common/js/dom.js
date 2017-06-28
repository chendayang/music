export function addClass (el, className) {
  console.log(hasClass(el, className), 'aaa')
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}
export function hasClass (el, className) {
  let reg = /(^|\s)+className+(\s|$)/
  return reg.test(el.className)
}
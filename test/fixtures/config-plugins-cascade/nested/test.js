/** @type {import('unified').Plugin<unknown[]>} */
module.exports = function () {
  /** @type {import('tape').Test} */
  // @ts-expect-error: hush.
  const t = this.t

  t.pass()
}

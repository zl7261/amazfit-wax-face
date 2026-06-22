// ponytail: 节日逻辑自检；node tools/test-festivals.js
const assert = require('assert')

const SOLAR_FESTIVALS = {
  '1-1': '元旦', '2-14': '情人节', '3-8': '妇女节', '3-12': '植树节',
  '4-1': '愚人节', '5-1': '劳动节', '5-4': '青年节', '6-1': '儿童节',
  '7-1': '建党节', '8-1': '建军节', '9-10': '教师节', '10-1': '国庆',
  '10-31': '万圣夜', '11-11': '光棍节', '12-24': '平安夜', '12-25': '圣诞',
}
const FLOATING_FESTIVALS = [
  [5, 2, 0, '母亲节'],
  [6, 3, 0, '父亲节'],
  [11, 4, 4, '感恩节'],
]

function getSolarFestival(date) {
  const key = `${date.getMonth() + 1}-${date.getDate()}`
  if (SOLAR_FESTIVALS[key]) return SOLAR_FESTIVALS[key]
  const month = date.getMonth() + 1
  const day = date.getDate()
  const weekday = date.getDay()
  const nth = Math.floor((day - 1) / 7) + 1
  for (const f of FLOATING_FESTIVALS) {
    if (f[0] === month && f[1] === nth && f[2] === weekday) return f[3]
  }
  return ''
}

// 固定日期
assert.strictEqual(getSolarFestival(new Date(2026, 2, 12)), '植树节')
assert.strictEqual(getSolarFestival(new Date(2026, 9, 31)), '万圣夜')
assert.strictEqual(getSolarFestival(new Date(2026, 11, 25)), '圣诞')

// 浮动：2026 母亲节=5/10 周日（5月第2个周日）
assert.strictEqual(getSolarFestival(new Date(2026, 4, 10)), '母亲节')
// 2026 父亲节=6/21 周日
assert.strictEqual(getSolarFestival(new Date(2026, 5, 21)), '父亲节')
// 2026 感恩节=11/26 周四
assert.strictEqual(getSolarFestival(new Date(2026, 10, 26)), '感恩节')

// 边界：母亲节前一天非周日 → 空
assert.strictEqual(getSolarFestival(new Date(2026, 4, 9)), '')
// 2025 感恩节=11/27 周四
assert.strictEqual(getSolarFestival(new Date(2025, 10, 27)), '感恩节')

console.log('OK')

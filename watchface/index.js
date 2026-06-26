
    /*
    ** Watch_Face_Editor tool
    ** watchface js version v1.0.1
    ** Copyright © CashaCX75. All Rights Reserved
    */

    try {

      (() => {

        var __$$app$$__ = __$$hmAppManager$$__.currentApp;
        var __$$module$$__ = __$$app$$__.current;

        'use strict';

        //dynamic modify start

        
        let normal_background_bg_img = ''
        let normal_system_disconnect_img = ''
        let normal_system_clock_img = ''
        let normal_sun_high_text_img = ''
        let normal_sun_low_text_img = ''
        let normal_solar_term_text = ''
        let normal_temperature_high_text_img = ''
        let normal_temperature_low_text_img = ''
        let normal_temperature_current_text_img = ''
        let normal_weather_image_progress_img_level = ''
        let normal_altimeter_text_text_img = ''
        let normal_stand_current_text_img = ''
        let normal_stress_text_text_img = ''
        let normal_hybridcharge_text_text_img = ''
        let normal_heart_rate_text_text_img = ''
        let normal_distance_text_text_img = ''
        let normal_pai_weekly_text_img = ''
        let normal_calorie_current_text_img = ''
        let normal_step_current_text_img = ''
        let normal_date_img_date_month = ''
        let normal_date_img_date_week_img = ''
        let normal_date_img_date_day = ''
        let normal_battery_fill_level = ''
        let normal_digital_clock_img_time_AmPm = ''
        let normal_time_range_text = ''
        let normal_digital_clock_img_time = ''
        let normal_digital_clock_second_separator_img = ''
        let normal_alarm_jumpable_img_click = ''
        let normal_temperature_jumpable_img_click = ''
        let normal_stress_jumpable_img_click = ''
        let normal_pai_jumpable_img_click = ''
        let normal_hybridcharge_jumpable_img_click = ''
        let normal_heart_jumpable_img_click = ''
        let normal_step_jumpable_img_click = ''
        let normal_month_calendar_button = ''
        let normal_day_calendar_button = ''
        let normal_lunar_month_calendar_button = ''
        let normal_solar_term_calendar_button = ''
        let normal_lunar_day_calendar_button = ''
        let idle_digital_clock_img_time = ''
        let refreshDateWidgets = null


        //dynamic modify end

        __$$module$$__.module = DeviceRuntimeCore.WatchFace({

          init_view() {

            //dynamic modify start

            const dateWidgets = []

            const DIGITAL1 = Array.from({length: 10}, (_, i) => `digital1_${i}.png`)
            const DIGITAL8 = Array.from({length: 10}, (_, i) => `digital8_${i}.png`)
            const SMALL    = Array.from({length: 10}, (_, i) => `small_${i}.png`)
            const BATTERY_FILL = Array.from({length: 101}, (_, i) => `battery_fill_${i}.png`)
            // weather_18.png 是已知特例（其它都是 weather_<n>.png）
            const WEATHER_IMAGES = Array.from({length: 29}, (_, i) =>
              i === 18 ? 'weather_18.png' : `weather_${i}.png`)

            const STATIC_LABELS = [
              ['步数', 85, 286, 80, 16],
              ['消耗', 195, 286, 90, 16],
              ['距离', 305, 286, 80, 16],
              ['精力', 75, 340, 60, 16],
              ['压力', 160, 340, 70, 16],
              ['心率', 250, 340, 70, 16],
              ['PAI', 345, 340, 60, 16],
            ]

            const TEXT_UNITS = [
              ['km', 368, 309, 30, 22, 17],
            ]

            const WEEK_TEXTS = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
            const LUNAR_INFO = [
              0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
              0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
              0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
              0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
              0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
              0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,
              0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
              0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,
              0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
              0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0,
              0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
              0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
              0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
              0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
              0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
            ]
            const LUNAR_MONTH_NAMES = ['正月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '冬月', '腊月']
            const LUNAR_DAY_PREFIX = ['初', '十', '廿', '卅']
            const LUNAR_DAY_NUMBERS = ['日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
            const LUNAR_FESTIVALS = {
              '1-1': '春节',
              '1-15': '元宵',
              '2-2': '龙头',
              '5-5': '端午',
              '7-7': '七夕',
              '7-15': '中元',
              '8-15': '中秋',
              '9-9': '重阳',
              '12-8': '腊八',
              '12-24': '小年',
            }
            const SOLAR_FESTIVALS = {
              '1-1': '元旦',
              '2-14': '情人节',
              '3-8': '妇女节',
              '3-12': '植树节',
              '4-1': '愚人节',
              '5-1': '劳动节',
              '5-4': '青年节',
              '6-1': '儿童节',
              '7-1': '建党节',
              '8-1': '建军节',
              '9-10': '教师节',
              '10-1': '国庆',
              '10-31': '万圣夜',
              '11-11': '光棍节',
              '12-24': '平安夜',
              '12-25': '圣诞',
            }
            // 浮动节日：[月, 第N个, 星期几(0=日)]
            const FLOATING_FESTIVALS = [
              [5, 2, 0, '母亲节'],
              [6, 3, 0, '父亲节'],
              [11, 4, 4, '感恩节'],
            ]
            const SOLAR_TERM_NAMES = ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至']
            const SOLAR_TERM_INFO = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758]
            const LUNAR_BASE_YEAR = 1900
            const LUNAR_BASE_DAY = dateToDayNumber(new Date(1900, 0, 31))

            function refreshDateWidgetText() {
              const date = new Date()
              const ctx = { date, lunar: getLunarDate(date) }
              for (let i = 0; i < dateWidgets.length; i += 1) {
                const item = dateWidgets[i]
                item.w.setProperty(hmUI.prop.MORE, { text: item.fn(ctx) })
              }
            }
                    
            function createLabel(text, x, y, w, h, showLevel) {
              return hmUI.createWidget(hmUI.widget.TEXT, {
                x,
                y,
                w,
                h,
                text,
                text_size: 14,
                color: 0x8a8a8a,
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
                show_level: showLevel,
              })
            }

            function createTextUnit(text, x, y, w, h, textSize, showLevel) {
              return hmUI.createWidget(hmUI.widget.TEXT, {
                x,
                y,
                w,
                h,
                text,
                text_size: textSize,
                color: 0xffffff,
                align_h: hmUI.align.LEFT,
                align_v: hmUI.align.CENTER_V,
                show_level: showLevel,
              })
            }

            function createWeekText(showLevel) {
              const w = hmUI.createWidget(hmUI.widget.TEXT, {
                x: 193,
                y: 86,
                w: 96,
                h: 36,
                text: WEEK_TEXTS[new Date().getDay()],
                text_size: 28,
                color: 0xffffff,
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
                show_level: showLevel,
              })
              dateWidgets.push({ w, fn: ctx => WEEK_TEXTS[ctx.date.getDay()] })
              return w
            }

            function createDateText(text, x, y, w, showLevel) {
              return hmUI.createWidget(hmUI.widget.TEXT, {
                x,
                y,
                w,
                h: 36,
                text,
                text_size: 28,
                color: 0xffffff,
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
                show_level: showLevel,
              })
            }

            function createMonthText(showLevel) {
              const currentDate = new Date()
              const w = createDateText(`${currentDate.getMonth() + 1}月`, 112, 86, 92, showLevel)
              dateWidgets.push({ w, fn: ctx => `${ctx.date.getMonth() + 1}月` })
              return w
            }

            function createDayText(showLevel) {
              const currentDate = new Date()
              const w = createDateText(`${currentDate.getDate()}日`, 286, 86, 104, showLevel)
              dateWidgets.push({ w, fn: ctx => `${ctx.date.getDate()}日` })
              return w
            }

            function leapMonth(year) {
              return LUNAR_INFO[year - LUNAR_BASE_YEAR] & 0xf
            }

            function leapDays(year) {
              if (!leapMonth(year)) return 0
              return (LUNAR_INFO[year - LUNAR_BASE_YEAR] & 0x10000) ? 30 : 29
            }

            function monthDays(year, month) {
              return (LUNAR_INFO[year - LUNAR_BASE_YEAR] & (0x10000 >> month)) ? 30 : 29
            }

            function lunarYearDays(year) {
              let days = 348
              for (let mask = 0x8000; mask > 0x8; mask >>= 1) {
                if (LUNAR_INFO[year - LUNAR_BASE_YEAR] & mask) days += 1
              }
              return days + leapDays(year)
            }

            function dateToDayNumber(date) {
              return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000)
            }

            function getLunarDate(date) {
              let offset = dateToDayNumber(date) - LUNAR_BASE_DAY
              let year = LUNAR_BASE_YEAR
              const maxYear = LUNAR_BASE_YEAR + LUNAR_INFO.length - 1

              if (offset < 0) {
                return { year: LUNAR_BASE_YEAR, month: 1, day: 1, isLeap: false }
              }

              while (year <= maxYear) {
                const daysOfYear = lunarYearDays(year)
                if (offset < daysOfYear) break
                offset -= daysOfYear
                year += 1
              }

              if (year > maxYear) {
                return { year: maxYear, month: 12, day: 30, isLeap: false }
              }

              const leap = leapMonth(year)
              for (let month = 1; month <= 12; month += 1) {
                const daysOfMonth = monthDays(year, month)
                if (offset < daysOfMonth) {
                  return {
                    year,
                    month,
                    day: offset + 1,
                    isLeap: false,
                  }
                }
                offset -= daysOfMonth

                if (leap === month) {
                  const daysOfLeapMonth = leapDays(year)
                  if (offset < daysOfLeapMonth) {
                    return {
                      year,
                      month,
                      day: offset + 1,
                      isLeap: true,
                    }
                  }
                  offset -= daysOfLeapMonth
                }
              }

              return { year, month: 12, day: 30, isLeap: false }
            }

            function formatLunarDay(day) {
              if (day === 10) return '初十'
              if (day === 20) return '二十'
              if (day === 30) return '三十'
              return LUNAR_DAY_PREFIX[Math.floor(day / 10)] + LUNAR_DAY_NUMBERS[day % 10]
            }

            function getSolarTermDate(year, index) {
              return new Date((31556925974.7 * (year - 1900)) + (SOLAR_TERM_INFO[index] * 60000) + Date.UTC(1900, 0, 6, 2, 5))
            }

            function getCurrentSolarTerm(date) {
              const today = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
              let current = SOLAR_TERM_NAMES[SOLAR_TERM_NAMES.length - 1]
              for (let year = date.getFullYear() - 1; year <= date.getFullYear(); year += 1) {
                for (let index = 0; index < SOLAR_TERM_NAMES.length; index += 1) {
                  const termDate = getSolarTermDate(year, index)
                  const termDay = new Date(termDate.getFullYear(), termDate.getMonth(), termDate.getDate()).getTime()
                  if (termDay <= today) current = SOLAR_TERM_NAMES[index]
                }
              }
              return current
            }

            function getLunarFestival(lunar) {
              if (lunar.isLeap) return ''
              if (lunar.month === 12 && lunar.day === monthDays(lunar.year, 12)) return '除夕'
              return LUNAR_FESTIVALS[`${lunar.month}-${lunar.day}`] || ''
            }

            function getSolarFestival(date) {
              const key = `${date.getMonth() + 1}-${date.getDate()}`
              if (SOLAR_FESTIVALS[key]) return SOLAR_FESTIVALS[key]
              const month = date.getMonth() + 1
              const day = date.getDate()
              const weekday = date.getDay()
              const nth = Math.floor((day - 1) / 7) + 1
              for (let i = 0; i < FLOATING_FESTIVALS.length; i += 1) {
                const f = FLOATING_FESTIVALS[i]
                if (f[0] === month && f[1] === nth && f[2] === weekday) return f[3]
              }
              return ''
            }

            function getFestivalOrSolarTerm(date) {
              const lunar = getLunarDate(date)
              return getLunarFestival(lunar) || getSolarFestival(date) || getCurrentSolarTerm(date)
            }

            function getTimeRangeText(date) {
              const hour = date.getHours()
              if (hour >= 5 && hour < 12) return '上午'
              if (hour >= 12 && hour < 14) return '中午'
              if (hour >= 14 && hour < 18) return '下午'
              if (hour >= 18 && hour < 20) return '黄昏'
              return '夜晚'
            }

            function createTimeRangeText(showLevel) {
              const w = hmUI.createWidget(hmUI.widget.TEXT, {
                x: 399,
                y: 217,
                w: 66,
                h: 24,
                text: getTimeRangeText(new Date()),
                text_size: 20,
                color: 0xffffff,
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
                show_level: showLevel,
              })
              dateWidgets.push({ w, fn: ctx => getTimeRangeText(ctx.date) })
              return w
            }

            function createLunarText(text, x, y, w, showLevel) {
              return hmUI.createWidget(hmUI.widget.TEXT, {
                x,
                y,
                w,
                h: 28,
                text,
                text_size: 24,
                color: 0xffffff,
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
                show_level: showLevel,
              })
            }

            function createLunarMonthText(showLevel) {
              const lunar = getLunarDate(new Date())
              const w = createLunarText(`${lunar.isLeap ? '闰' : ''}${LUNAR_MONTH_NAMES[lunar.month - 1]}`, 128, 400, 60, showLevel)
              dateWidgets.push({ w, fn: ctx => `${ctx.lunar.isLeap ? '闰' : ''}${LUNAR_MONTH_NAMES[ctx.lunar.month - 1]}` })
              return w
            }

            function createLunarDayText(showLevel) {
              const lunar = getLunarDate(new Date())
              const w = createLunarText(formatLunarDay(lunar.day), 292, 400, 60, showLevel)
              dateWidgets.push({ w, fn: ctx => formatLunarDay(ctx.lunar.day) })
              return w
            }

            function createSolarTermText(showLevel) {
              const w = hmUI.createWidget(hmUI.widget.TEXT, {
                x: 195,
                y: 400,
                w: 90,
                h: 28,
                text: getFestivalOrSolarTerm(new Date()),
                text_size: 24,
                color: 0xffffff,
                align_h: hmUI.align.CENTER_H,
                align_v: hmUI.align.CENTER_V,
                show_level: showLevel,
              })
              dateWidgets.push({ w, fn: ctx => getLunarFestival(ctx.lunar) || getSolarFestival(ctx.date) || getCurrentSolarTerm(ctx.date) })
              return w
            }

            function renderStaticText(showLevel) {
              STATIC_LABELS.forEach(([text, x, y, w, h]) => createLabel(text, x, y, w, h, showLevel))
              TEXT_UNITS.forEach(([text, x, y, w, h, textSize]) => createTextUnit(text, x, y, w, h, textSize, showLevel))
            }

            function openCalendarApp() {
              if (typeof hmApp !== 'undefined' && hmApp.startApp) {
                hmApp.startApp({ url: 'ScheduleCalScreen', native: true })
              }
            }

            function createCalendarButton(x, y, w, h) {
              return hmUI.createWidget(hmUI.widget.BUTTON, {
                x,
                y,
                w,
                h,
                text: '',
                color: 0xffffff,
                text_size: 1,
                normal_src: 'null.png',
                press_src: 'null.png',
                click_func: () => {
                  openCalendarApp()
                },
                show_level: hmUI.show_level.ONLY_NORMAL,
              })
            }

            
            normal_background_bg_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 480,
              h: 480,
              src: 'AOD5.png',
              show_level: hmUI.show_level.ALL,
            });

            normal_system_disconnect_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
              x: 417,
              y: 216,
              src: 'bluetooth_off.png',
              type: hmUI.system_status.DISCONNECT,
              show_level: hmUI.show_level.ALL,
            });

            normal_system_clock_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
              x: 45,
              y: 233,
              src: 'alarm.png',
              type: hmUI.system_status.CLOCK,
              show_level: hmUI.show_level.ALL,
            });

            normal_sun_high_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 117,
              y: 157,
              font_array: SMALL,
              padding: false,
              h_space: -1,
              invalid_image: 'weather_29.png',
              dot_image: 'digital1_point.png',
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.SUN_RISE,
              show_level: hmUI.show_level.ALL,
            });

            normal_sun_low_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 301,
              y: 157,
              font_array: SMALL,
              padding: false,
              h_space: -1,
              invalid_image: 'weather_29.png',
              dot_image: 'digital1_point.png',
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.SUN_SET,
              show_level: hmUI.show_level.ALL,
            });

            normal_solar_term_text = createSolarTermText(hmUI.show_level.ALL);

            normal_temperature_high_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 257,
              y: 137,
              font_array: SMALL,
              padding: false,
              h_space: -2,
              unit_sc: 'weather_30.png',
              unit_tc: 'weather_30.png',
              unit_en: 'weather_30.png',
              negative_image: 'weather_29.png',
              invalid_image: 'weather_29.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.WEATHER_HIGH,
              show_level: hmUI.show_level.ALL,
            });

            normal_temperature_low_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 184,
              y: 137,
              font_array: SMALL,
              padding: false,
              h_space: -2,
              unit_sc: 'weather_30.png',
              unit_tc: 'weather_30.png',
              unit_en: 'weather_30.png',
              negative_image: 'weather_29.png',
              invalid_image: 'weather_29.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.WEATHER_LOW,
              show_level: hmUI.show_level.ALL,
            });

            normal_temperature_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 221,
              y: 169,
              font_array: SMALL,
              padding: false,
              h_space: -2,
              unit_sc: 'weather_30.png',
              unit_tc: 'weather_30.png',
              unit_en: 'weather_30.png',
              negative_image: 'weather_29.png',
              invalid_image: 'weather_29.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.WEATHER_CURRENT,
              show_level: hmUI.show_level.ALL,
            });

            normal_weather_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 225,
              y: 136,
              image_array: WEATHER_IMAGES,
              image_length: 29,
              type: hmUI.data_type.WEATHER_CURRENT,
              show_level: hmUI.show_level.ALL,
            });

            normal_altimeter_text_text_img = createLunarMonthText(hmUI.show_level.ALL);

            normal_stand_current_text_img = createLunarDayText(hmUI.show_level.ALL);

            normal_stress_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 160,
              y: 359,
              w: 70,
              font_array: DIGITAL1,
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.STRESS,
              show_level: hmUI.show_level.ALL,
            });

            normal_hybridcharge_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 75,
              y: 359,
              w: 60,
              font_array: DIGITAL1,
              padding: false,
              h_space: -2,
              invalid_image: 'weather_29.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.BIO_CHARGE,
              show_level: hmUI.show_level.ALL,
            });

            normal_heart_rate_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 250,
              y: 359,
              w: 70,
              font_array: DIGITAL1,
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.HEART,
              show_level: hmUI.show_level.ALL,
            });

            normal_distance_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 305,
              y: 306,
              w: 60,
              font_array: DIGITAL1,
              padding: false,
              h_space: -2,
              dot_image: 'decimal.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.DISTANCE,
              show_level: hmUI.show_level.ALL,
            });

            normal_pai_weekly_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 345,
              y: 359,
              w: 60,
              font_array: DIGITAL1,
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.PAI_WEEKLY,
              show_level: hmUI.show_level.ALL,
            });

            normal_calorie_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 195,
              y: 306,
              w: 90,
              font_array: DIGITAL1,
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.CAL,
              show_level: hmUI.show_level.ALL,
            });

            normal_step_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 85,
              y: 306,
              w: 80,
              font_array: DIGITAL1,
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ALL,
            });

            normal_date_img_date_month = createMonthText(hmUI.show_level.ALL);

            normal_date_img_date_week_img = createWeekText(hmUI.show_level.ALL);

            normal_date_img_date_day = createDayText(hmUI.show_level.ALL);

            normal_battery_fill_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 197,
              y: 40,
              image_array: BATTERY_FILL,
              image_length: 101,
              type: hmUI.data_type.BATTERY,
              show_level: hmUI.show_level.ALL,
            });

            normal_digital_clock_img_time_AmPm = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              am_x: 36,
              am_y: 210,
              am_sc_path: 'AM_aod.png',
              am_en_path: 'AM_aod.png',
              pm_x: 36,
              pm_y: 210,
              pm_sc_path: 'PM_aod.png',
              pm_en_path: 'PM_aod.png',
              show_level: hmUI.show_level.ALL,
            });

            normal_time_range_text = createTimeRangeText(hmUI.show_level.ONLY_NORMAL);

            normal_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_startX: 81,
              hour_startY: 190,
              hour_array: DIGITAL8,
              hour_zero: 1,
              hour_space: 7,
              hour_align: hmUI.align.LEFT,

              minute_startX: 276,
              minute_startY: 190,
              minute_array: DIGITAL8,
              minute_zero: 1,
              minute_space: 7,
              minute_follow: 0,
              minute_align: hmUI.align.LEFT,

              second_startX: 412,
              second_startY: 245,
              second_array: DIGITAL1,
              second_zero: 1,
              second_space: -1,
              second_follow: 0,
              second_align: hmUI.align.LEFT,

              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_digital_clock_second_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 230,
              y: 172,
              src: 'digital9_10.png',
              show_level: hmUI.show_level.ALL,
            });

            renderStaticText(hmUI.show_level.ALL)

            normal_alarm_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 11,
              y: 190,
              w: 97,
              h: 49,
              src: 'shortcut.png',
              type: hmUI.data_type.ALARM_CLOCK,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_temperature_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 187,
              y: 126,
              w: 109,
              h: 68,
              src: 'shortcut.png',
              type: hmUI.data_type.WEATHER_CURRENT,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_stress_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 160,
              y: 340,
              w: 70,
              h: 39,
              src: 'shortcut.png',
              type: hmUI.data_type.STRESS,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_pai_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 345,
              y: 340,
              w: 60,
              h: 39,
              src: 'shortcut.png',
              type: hmUI.data_type.PAI_WEEKLY,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_hybridcharge_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 75,
              y: 340,
              w: 60,
              h: 39,
              src: 'shortcut.png',
              type: hmUI.data_type.BIO_CHARGE,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_heart_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 250,
              y: 340,
              w: 70,
              h: 39,
              src: 'shortcut.png',
              type: hmUI.data_type.HEART,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_step_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 85,
              y: 286,
              w: 80,
              h: 39,
              src: 'shortcut.png',
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_month_calendar_button = createCalendarButton(112, 86, 92, 36)

            normal_day_calendar_button = createCalendarButton(286, 86, 104, 36)

            normal_lunar_month_calendar_button = createCalendarButton(128, 400, 60, 28)

            normal_solar_term_calendar_button = createCalendarButton(195, 400, 90, 28)

            normal_lunar_day_calendar_button = createCalendarButton(292, 400, 60, 28)


            // AOD 专用：不带秒的时钟。其他 widget 已由 normal 段以 show_level.ALL 创建。
            idle_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_startX: 81,
              hour_startY: 190,
              hour_array: DIGITAL8,
              hour_zero: 1,
              hour_space: 7,
              hour_align: hmUI.align.LEFT,

              minute_startX: 276,
              minute_startY: 190,
              minute_array: DIGITAL8,
              minute_zero: 1,
              minute_space: 7,
              minute_follow: 0,
              minute_align: hmUI.align.LEFT,

              show_level: hmUI.show_level.ONAL_AOD,
            });

            // 跨天刷新日期/农历/节气文字（widget 在 init 时被烧入固定文本，必须监听 day_change 重写）
            refreshDateWidgets = refreshDateWidgetText
            refreshDateWidgets()
            try {
              const timeSensor = hmSensor.createSensor(hmSensor.id.TIME)
              timeSensor.addEventListener(timeSensor.event.DAY_CHANGE, () => {
                refreshDateWidgets()
              })
              if (timeSensor.event.MINUTE_CHANGE) {
                timeSensor.addEventListener(timeSensor.event.MINUTE_CHANGE, () => {
                  refreshDateWidgets()
                })
              }
            } catch (err) {
              console.log('date refresh hook failed: ' + err)
            }

            //dynamic modify end
          },

          onInit() {
            console.log('index page.js on init invoke')

            this.init_view()

          },

          onReady() {
            console.log('index page.js on ready invoke')
          },

          onShow() {
            console.log('index page.js on show invoke')
            if (refreshDateWidgets) refreshDateWidgets()
          },

          onHide() {
            console.log('index page.js on hide invoke')
          },

          onDestory() {
            console.log('index page.js on destory invoke')
          },
        });

      })()
    } catch (e) {
      console.log(e)
    }

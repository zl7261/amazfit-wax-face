
    /*
    ** Watch_Face_Editor tool
    ** watchface js version v1.0.1
    ** Copyright © CashaCX75. All Rights Reserved
    */

    try {

      (() => {

        var __$$app$$__ = __$$hmAppManager$$__.currentApp;
        var __$$module$$__ = __$$app$$__.current;
        //drink is a name,can modify
        var h = new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__), 'drink');

        'use strict';

        //dynamic modify start

        
        let normal_background_bg_img = ''
        let normal_system_disconnect_img = ''
        let normal_system_clock_img = ''
        let normal_sun_high_text_img = ''
        let normal_sun_high_separator_img = ''
        let normal_sun_low_text_img = ''
        let normal_sun_low_separator_img = ''
        let normal_moon_image_progress_img_level = ''
        let normal_temperature_high_text_img = ''
        let normal_temperature_low_text_img = ''
        let normal_temperature_current_text_img = ''
        let normal_weather_image_progress_img_level = ''
        let normal_altimeter_text_text_img = ''
        let normal_humidity_text_text_img = ''
        let normal_wind_text_text_img = ''
        let normal_uvi_text_text_img = ''
        let normal_stand_current_text_img = ''
        let normal_stress_text_text_img = ''
        let normal_spo2_text_text_img = ''
        let normal_heart_rate_text_text_img = ''
        let normal_distance_text_text_img = ''
        let normal_pai_weekly_text_img = ''
        let normal_calorie_current_text_img = ''
        let normal_step_current_text_img = ''
        let normal_date_img_date_month = ''
        let normal_date_img_date_week_img = ''
        let normal_date_img_date_day = ''
        let normal_battery_text_text_img = ''
        let normal_digital_clock_img_time_AmPm = ''
        let normal_digital_clock_img_time = ''
        let normal_digital_clock_second_separator_img = ''
        let normal_analog_clock_time_pointer_second = ''
        let normal_alarm_jumpable_img_click = ''
        let normal_sunrise_jumpable_img_click = ''
        let normal_altimeter_jumpable_img_click = ''
        let normal_temperature_jumpable_img_click = ''
        let normal_stress_jumpable_img_click = ''
        let normal_pai_jumpable_img_click = ''
        let normal_spo2_jumpable_img_click = ''
        let normal_heart_jumpable_img_click = ''
        let normal_step_jumpable_img_click = ''
        let normal_month_calendar_button = ''
        let normal_day_calendar_button = ''
        let normal_lunar_month_calendar_button = ''
        let normal_solar_term_calendar_button = ''
        let normal_lunar_day_calendar_button = ''
        let idle_background_bg_img = ''
        let idle_system_disconnect_img = ''
        let idle_system_clock_img = ''
        let idle_sun_high_text_img = ''
        let idle_sun_high_separator_img = ''
        let idle_sun_low_text_img = ''
        let idle_sun_low_separator_img = ''
        let idle_moon_image_progress_img_level = ''
        let idle_temperature_high_text_img = ''
        let idle_temperature_low_text_img = ''
        let idle_temperature_current_text_img = ''
        let idle_weather_image_progress_img_level = ''
        let idle_altimeter_text_text_img = ''
        let idle_humidity_text_text_img = ''
        let idle_wind_text_text_img = ''
        let idle_uvi_text_text_img = ''
        let idle_stand_current_text_img = ''
        let idle_stress_text_text_img = ''
        let idle_spo2_text_text_img = ''
        let idle_heart_rate_text_text_img = ''
        let idle_distance_text_text_img = ''
        let idle_pai_weekly_text_img = ''
        let idle_calorie_current_text_img = ''
        let idle_step_current_text_img = ''
        let idle_date_img_date_month = ''
        let idle_date_img_date_week_img = ''
        let idle_date_img_date_day = ''
        let idle_battery_text_text_img = ''
        let idle_digital_clock_img_time_AmPm = ''
        let idle_digital_clock_img_time = ''
        let idle_digital_clock_minute_separator_img = ''
        let idle_analog_clock_time_pointer_second = ''


        //dynamic modify end

        //not required
        const logger = DeviceRuntimeCore.HmLogger.getLogger("yeguang");

        __$$module$$__.module = DeviceRuntimeCore.WatchFace({

          init_view() {

            //dynamic modify start

            const STATIC_LABELS = [
              ['电量', 199, 36, 80, 16],
              ['步数', 85, 286, 80, 16],
              ['消耗', 195, 286, 90, 16],
              ['距离', 305, 286, 80, 16],
              ['血氧', 75, 340, 60, 16],
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
              '12-23': '小年',
            }
            const SOLAR_TERM_NAMES = ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至']
            const SOLAR_TERM_INFO = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758]
            const LUNAR_BASE_YEAR = 1900
            const LUNAR_BASE_DAY = dateToDayNumber(new Date(1900, 0, 31))
                    
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
              return hmUI.createWidget(hmUI.widget.TEXT, {
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
              return createDateText(`${currentDate.getMonth() + 1}月`, 112, 86, 92, showLevel)
            }

            function createDayText(showLevel) {
              const currentDate = new Date()
              const day = currentDate.getDate()
              return createDateText(`${day}日`, 286, 86, 104, showLevel)
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

            function getFestivalOrSolarTerm(date) {
              const lunar = getLunarDate(date)
              return getLunarFestival(lunar) || getCurrentSolarTerm(date)
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
              return createLunarText(`${lunar.isLeap ? '闰' : ''}${LUNAR_MONTH_NAMES[lunar.month - 1]}`, 115, 400, 60, showLevel)
            }

            function createLunarDayText(showLevel) {
              const lunar = getLunarDate(new Date())
              return createLunarText(formatLunarDay(lunar.day), 305, 400, 60, showLevel)
            }

            function createSolarTermText(showLevel) {
              return hmUI.createWidget(hmUI.widget.TEXT, {
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
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_system_disconnect_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
              x: 417,
              y: 216,
              src: 'bluetooth_off.png',
              type: hmUI.system_status.DISCONNECT,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_system_clock_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
              x: 45,
              y: 233,
              src: 'alarm.png',
              type: hmUI.system_status.CLOCK,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_sun_high_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 117,
              y: 157,
              font_array: ["small_0.png","small_1.png","small_2.png","small_3.png","small_4.png","small_5.png","small_6.png","small_7.png","small_8.png","small_9.png"],
              padding: false,
              h_space: -1,
              invalid_image: 'weather_29.png',
              dot_image: 'digital1_point.png',
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.SUN_RISE,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_sun_high_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 78,
              y: 149,
              src: 'sunrise.png',
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_sun_low_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 301,
              y: 157,
              font_array: ["small_0.png","small_1.png","small_2.png","small_3.png","small_4.png","small_5.png","small_6.png","small_7.png","small_8.png","small_9.png"],
              padding: false,
              h_space: -1,
              invalid_image: 'weather_29.png',
              dot_image: 'digital1_point.png',
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.SUN_SET,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_sun_low_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 374,
              y: 149,
              src: 'sunsetdown.png',
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_moon_image_progress_img_level = createSolarTermText(hmUI.show_level.ONLY_NORMAL);

            normal_temperature_high_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 257,
              y: 137,
              font_array: ["small_0.png","small_1.png","small_2.png","small_3.png","small_4.png","small_5.png","small_6.png","small_7.png","small_8.png","small_9.png"],
              padding: false,
              h_space: -2,
              unit_sc: 'weather_30.png',
              unit_tc: 'weather_30.png',
              unit_en: 'weather_30.png',
              negative_image: 'weather_29.png',
              invalid_image: 'weather_29.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.WEATHER_HIGH,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_temperature_low_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 184,
              y: 137,
              font_array: ["small_0.png","small_1.png","small_2.png","small_3.png","small_4.png","small_5.png","small_6.png","small_7.png","small_8.png","small_9.png"],
              padding: false,
              h_space: -2,
              unit_sc: 'weather_30.png',
              unit_tc: 'weather_30.png',
              unit_en: 'weather_30.png',
              negative_image: 'weather_29.png',
              invalid_image: 'weather_29.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.WEATHER_LOW,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_temperature_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 221,
              y: 169,
              font_array: ["small_0.png","small_1.png","small_2.png","small_3.png","small_4.png","small_5.png","small_6.png","small_7.png","small_8.png","small_9.png"],
              padding: false,
              h_space: -2,
              unit_sc: 'weather_30.png',
              unit_tc: 'weather_30.png',
              unit_en: 'weather_30.png',
              negative_image: 'weather_29.png',
              invalid_image: 'weather_29.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.WEATHER_CURRENT,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_weather_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 225,
              y: 136,
              image_array: ["weather_0.png","weather_1.png","weather_2.png","weather_3.png","weather_4.png","weather_5.png","weather_6.png","weather_7.png","weather_8.png","weather_9.png","weather_10.png","weather_11.png","weather_12.png","weather_13.png","weather_14.png","weather_15.png","weather_16.png","weather_17.png","weather_018.png","weather_19.png","weather_20.png","weather_21.png","weather_22.png","weather_23.png","weather_24.png","weather_25.png","weather_26.png","weather_27.png","weather_28.png"],
              image_length: 29,
              type: hmUI.data_type.WEATHER_CURRENT,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_altimeter_text_text_img = createLunarMonthText(hmUI.show_level.ONLY_NORMAL);

            normal_stand_current_text_img = createLunarDayText(hmUI.show_level.ONLY_NORMAL);

            normal_stress_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 160,
              y: 359,
              w: 70,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.STRESS,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_spo2_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 75,
              y: 359,
              w: 60,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              invalid_image: 'weather_29.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.SPO2,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_heart_rate_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 250,
              y: 359,
              w: 70,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.HEART,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_distance_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 305,
              y: 306,
              w: 60,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              dot_image: 'decimal.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.DISTANCE,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_pai_weekly_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 345,
              y: 359,
              w: 60,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.PAI_WEEKLY,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_calorie_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 195,
              y: 306,
              w: 90,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.CAL,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_step_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 85,
              y: 306,
              w: 80,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_month = createMonthText(hmUI.show_level.ONLY_NORMAL);

            normal_date_img_date_week_img = createWeekText(hmUI.show_level.ONLY_NORMAL);

            normal_date_img_date_day = createDayText(hmUI.show_level.ONLY_NORMAL);

            normal_battery_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 206,
              y: 55,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: 0,
              unit_sc: 'procent.png',
              unit_tc: 'procent.png',
              unit_en: 'procent.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.BATTERY,
              show_level: hmUI.show_level.ONLY_NORMAL,
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
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_startX: 81,
              hour_startY: 190,
              hour_array: ["digital8_0.png","digital8_1.png","digital8_2.png","digital8_3.png","digital8_4.png","digital8_5.png","digital8_6.png","digital8_7.png","digital8_8.png","digital8_9.png"],
              hour_zero: 1,
              hour_space: 7,
              hour_align: hmUI.align.LEFT,

              minute_startX: 276,
              minute_startY: 190,
              minute_array: ["digital8_0.png","digital8_1.png","digital8_2.png","digital8_3.png","digital8_4.png","digital8_5.png","digital8_6.png","digital8_7.png","digital8_8.png","digital8_9.png"],
              minute_zero: 1,
              minute_space: 7,
              minute_follow: 0,
              minute_align: hmUI.align.LEFT,

              second_startX: 412,
              second_startY: 245,
              second_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
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
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            renderStaticText(hmUI.show_level.ONLY_NORMAL)

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

            normal_spo2_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 75,
              y: 340,
              w: 60,
              h: 39,
              src: 'shortcut.png',
              type: hmUI.data_type.SPO2,
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

            normal_lunar_month_calendar_button = createCalendarButton(115, 400, 60, 28)

            normal_solar_term_calendar_button = createCalendarButton(195, 400, 90, 28)

            normal_lunar_day_calendar_button = createCalendarButton(305, 400, 60, 28)


            idle_background_bg_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 480,
              h: 480,
              src: 'AOD5.png',
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_system_disconnect_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
              x: 417,
              y: 216,
              src: 'bluetooth_off.png',
              type: hmUI.system_status.DISCONNECT,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_system_clock_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
              x: 45,
              y: 233,
              src: 'alarm.png',
              type: hmUI.system_status.CLOCK,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_sun_high_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 117,
              y: 157,
              font_array: ["small_0.png","small_1.png","small_2.png","small_3.png","small_4.png","small_5.png","small_6.png","small_7.png","small_8.png","small_9.png"],
              padding: false,
              h_space: -1,
              invalid_image: 'weather_29.png',
              dot_image: 'digital1_point.png',
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.SUN_RISE,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_sun_high_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 78,
              y: 149,
              src: 'sunrise.png',
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_sun_low_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 301,
              y: 157,
              font_array: ["small_0.png","small_1.png","small_2.png","small_3.png","small_4.png","small_5.png","small_6.png","small_7.png","small_8.png","small_9.png"],
              padding: false,
              h_space: -1,
              invalid_image: 'weather_29.png',
              dot_image: 'digital1_point.png',
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.SUN_SET,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_sun_low_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 374,
              y: 149,
              src: 'sunsetdown.png',
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_moon_image_progress_img_level = createSolarTermText(hmUI.show_level.ONAL_AOD);

            idle_temperature_high_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 257,
              y: 137,
              font_array: ["small_0.png","small_1.png","small_2.png","small_3.png","small_4.png","small_5.png","small_6.png","small_7.png","small_8.png","small_9.png"],
              padding: false,
              h_space: -2,
              unit_sc: 'weather_30.png',
              unit_tc: 'weather_30.png',
              unit_en: 'weather_30.png',
              negative_image: 'weather_29.png',
              invalid_image: 'weather_29.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.WEATHER_HIGH,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_temperature_low_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 184,
              y: 137,
              font_array: ["small_0.png","small_1.png","small_2.png","small_3.png","small_4.png","small_5.png","small_6.png","small_7.png","small_8.png","small_9.png"],
              padding: false,
              h_space: -2,
              unit_sc: 'weather_30.png',
              unit_tc: 'weather_30.png',
              unit_en: 'weather_30.png',
              negative_image: 'weather_29.png',
              invalid_image: 'weather_29.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.WEATHER_LOW,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_temperature_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 221,
              y: 169,
              font_array: ["small_0.png","small_1.png","small_2.png","small_3.png","small_4.png","small_5.png","small_6.png","small_7.png","small_8.png","small_9.png"],
              padding: false,
              h_space: -2,
              unit_sc: 'weather_30.png',
              unit_tc: 'weather_30.png',
              unit_en: 'weather_30.png',
              negative_image: 'weather_29.png',
              invalid_image: 'weather_29.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.WEATHER_CURRENT,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_weather_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 225,
              y: 136,
              image_array: ["weather_0.png","weather_1.png","weather_2.png","weather_3.png","weather_4.png","weather_5.png","weather_6.png","weather_7.png","weather_8.png","weather_9.png","weather_10.png","weather_11.png","weather_12.png","weather_13.png","weather_14.png","weather_15.png","weather_16.png","weather_17.png","weather_018.png","weather_19.png","weather_20.png","weather_21.png","weather_22.png","weather_23.png","weather_24.png","weather_25.png","weather_26.png","weather_27.png","weather_28.png"],
              image_length: 29,
              type: hmUI.data_type.WEATHER_CURRENT,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_altimeter_text_text_img = createLunarMonthText(hmUI.show_level.ONAL_AOD);

            idle_stand_current_text_img = createLunarDayText(hmUI.show_level.ONAL_AOD);

            idle_stress_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 160,
              y: 359,
              w: 70,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.STRESS,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_spo2_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 75,
              y: 359,
              w: 60,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              invalid_image: 'weather_29.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.SPO2,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_heart_rate_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 250,
              y: 359,
              w: 70,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.HEART,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_distance_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 305,
              y: 306,
              w: 60,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              dot_image: 'decimal.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.DISTANCE,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_pai_weekly_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 345,
              y: 359,
              w: 60,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.PAI_WEEKLY,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_calorie_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 195,
              y: 306,
              w: 90,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.CAL,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_step_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 85,
              y: 306,
              w: 80,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_date_img_date_month = createMonthText(hmUI.show_level.ONAL_AOD);

            idle_date_img_date_week_img = createWeekText(hmUI.show_level.ONAL_AOD);

            idle_date_img_date_day = createDayText(hmUI.show_level.ONAL_AOD);

            idle_battery_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 206,
              y: 55,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: 0,
              unit_sc: 'procent.png',
              unit_tc: 'procent.png',
              unit_en: 'procent.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.BATTERY,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_digital_clock_img_time_AmPm = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              am_x: 36,
              am_y: 210,
              am_sc_path: 'AM_aod.png',
              am_en_path: 'AM_aod.png',
              pm_x: 36,
              pm_y: 210,
              pm_sc_path: 'PM_aod.png',
              pm_en_path: 'PM_aod.png',
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
              hour_startX: 81,
              hour_startY: 190,
              hour_array: ["digital8_0.png","digital8_1.png","digital8_2.png","digital8_3.png","digital8_4.png","digital8_5.png","digital8_6.png","digital8_7.png","digital8_8.png","digital8_9.png"],
              hour_zero: 1,
              hour_space: 7,
              hour_align: hmUI.align.LEFT,

              minute_startX: 276,
              minute_startY: 190,
              minute_array: ["digital8_0.png","digital8_1.png","digital8_2.png","digital8_3.png","digital8_4.png","digital8_5.png","digital8_6.png","digital8_7.png","digital8_8.png","digital8_9.png"],
              minute_zero: 1,
              minute_space: 7,
              minute_follow: 0,
              minute_align: hmUI.align.LEFT,

              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_digital_clock_minute_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 230,
              y: 172,
              src: 'digital9_10.png',
              show_level: hmUI.show_level.ONAL_AOD,
            });

            renderStaticText(hmUI.show_level.ONAL_AOD)


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

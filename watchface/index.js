
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
                    
            
            normal_background_bg_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 480,
              h: 480,
              src: 'grey480-new2.png',
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

            normal_moon_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 221,
              y: 390,
              image_array: ["Moon_30_01.png","Moon_30_02.png","Moon_30_03.png","Moon_30_04.png","Moon_30_05.png","Moon_30_06.png","Moon_30_07.png","Moon_30_08.png","Moon_30_09.png","Moon_30_10.png","Moon_30_11.png","Moon_30_12.png","Moon_30_13.png","Moon_30_14.png","Moon_30_15.png","Moon_30_16.png","Moon_30_17.png","Moon_30_18.png","Moon_30_19.png","Moon_30_20.png","Moon_30_21.png","Moon_30_22.png","Moon_30_23.png","Moon_30_24.png","Moon_30_25.png","Moon_30_26.png","Moon_30_27.png","Moon_30_28.png","Moon_30_29.png","Moon_30_30.png"],
              image_length: 30,
              type: hmUI.data_type.MOON,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

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

            normal_altimeter_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 140,
              y: 409,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.ALTIMETER,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_humidity_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 169,
              y: 359,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              unit_sc: 'procent_small.png',
              unit_tc: 'procent_small.png',
              unit_en: 'procent_small.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.HUMIDITY,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_wind_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 116,
              y: 359,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.WIND,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_uvi_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 72,
              y: 359,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.UVI,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_stand_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 262,
              y: 409,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.STAND,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_stress_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 352,
              y: 359,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.STRESS,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_spo2_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 294,
              y: 359,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              unit_sc: 'procent_small.png',
              unit_tc: 'procent_small.png',
              unit_en: 'procent_small.png',
              invalid_image: 'weather_29.png',
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.SPO2,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_heart_rate_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 235,
              y: 359,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.HEART,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_distance_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 325,
              y: 306,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              unit_sc: 'km.png',
              unit_tc: 'km.png',
              unit_en: 'km.png',
              imperial_unit_sc: 'ml.png',
              imperial_unit_tc: 'ml.png',
              imperial_unit_en: 'ml.png',
              dot_image: 'decimal.png',
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.DISTANCE,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_pai_weekly_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 249,
              y: 306,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.PAI_WEEKLY,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_calorie_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 170,
              y: 306,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.CAL,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_step_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 76,
              y: 306,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_month = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              month_startX: 305,
              month_startY: 92,
              month_sc_array: ["digital4_0.png","digital4_1.png","digital4_2.png","digital4_3.png","digital4_4.png","digital4_5.png","digital4_6.png","digital4_7.png","digital4_8.png","digital4_9.png"],
              month_tc_array: ["digital4_0.png","digital4_1.png","digital4_2.png","digital4_3.png","digital4_4.png","digital4_5.png","digital4_6.png","digital4_7.png","digital4_8.png","digital4_9.png"],
              month_en_array: ["digital4_0.png","digital4_1.png","digital4_2.png","digital4_3.png","digital4_4.png","digital4_5.png","digital4_6.png","digital4_7.png","digital4_8.png","digital4_9.png"],
              month_zero: 1,
              month_space: 0,
              month_align: hmUI.align.CENTER_H,
              month_is_character: false,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_week_img = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
              x: 199,
              y: 89,
              week_en: ["digital5_0.png","digital5_1.png","digital5_2.png","digital5_3.png","digital5_4.png","digital5_5.png","digital5_6.png"],
              week_tc: ["digital5_0.png","digital5_1.png","digital5_2.png","digital5_3.png","digital5_4.png","digital5_5.png","digital5_6.png"],
              week_sc: ["digital5_0.png","digital5_1.png","digital5_2.png","digital5_3.png","digital5_4.png","digital5_5.png","digital5_6.png"],
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_date_img_date_day = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              day_startX: 129,
              day_startY: 89,
              day_sc_array: ["digital4_0.png","digital4_1.png","digital4_2.png","digital4_3.png","digital4_4.png","digital4_5.png","digital4_6.png","digital4_7.png","digital4_8.png","digital4_9.png"],
              day_tc_array: ["digital4_0.png","digital4_1.png","digital4_2.png","digital4_3.png","digital4_4.png","digital4_5.png","digital4_6.png","digital4_7.png","digital4_8.png","digital4_9.png"],
              day_en_array: ["digital4_0.png","digital4_1.png","digital4_2.png","digital4_3.png","digital4_4.png","digital4_5.png","digital4_6.png","digital4_7.png","digital4_8.png","digital4_9.png"],
              day_zero: 0,
              day_space: 0,
              day_align: hmUI.align.CENTER_H,
              day_is_character: false,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

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

            normal_analog_clock_time_pointer_second = hmUI.createWidget(hmUI.widget.TIME_POINTER, {
              second_path: 'analog_sec.png',
              second_centerX: 240,
              second_centerY: 240,
              second_posX: 31,
              second_posY: 232,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_alarm_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 11,
              y: 190,
              w: 97,
              h: 49,
              src: 'shortcut.png',
              type: hmUI.data_type.ALARM_CLOCK,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_sunrise_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 202,
              y: 390,
              w: 91,
              h: 81,
              src: 'shortcut.png',
              type: hmUI.data_type.SUN_CURRENT,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_altimeter_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 89,
              y: 390,
              w: 111,
              h: 68,
              src: 'shortcut.png',
              type: hmUI.data_type.ALTIMETER,
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
              x: 356,
              y: 332,
              w: 68,
              h: 59,
              src: 'shortcut.png',
              type: hmUI.data_type.STRESS,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_pai_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 243,
              y: 272,
              w: 77,
              h: 58,
              src: 'shortcut.png',
              type: hmUI.data_type.PAI_WEEKLY,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_spo2_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 291,
              y: 333,
              w: 56,
              h: 58,
              src: 'shortcut.png',
              type: hmUI.data_type.SPO2,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_heart_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 222,
              y: 333,
              w: 64,
              h: 58,
              src: 'shortcut.png',
              type: hmUI.data_type.HEART,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });

            normal_step_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
              x: 57,
              y: 272,
              w: 109,
              h: 58,
              src: 'shortcut.png',
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONLY_NORMAL,
            });


            idle_background_bg_img = hmUI.createWidget(hmUI.widget.IMG, {
              x: 0,
              y: 0,
              w: 480,
              h: 480,
              src: 'grey480-new2.png',
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

            idle_moon_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
              x: 221,
              y: 390,
              image_array: ["Moon_30_01.png","Moon_30_02.png","Moon_30_03.png","Moon_30_04.png","Moon_30_05.png","Moon_30_06.png","Moon_30_07.png","Moon_30_08.png","Moon_30_09.png","Moon_30_10.png","Moon_30_11.png","Moon_30_12.png","Moon_30_13.png","Moon_30_14.png","Moon_30_15.png","Moon_30_16.png","Moon_30_17.png","Moon_30_18.png","Moon_30_19.png","Moon_30_20.png","Moon_30_21.png","Moon_30_22.png","Moon_30_23.png","Moon_30_24.png","Moon_30_25.png","Moon_30_26.png","Moon_30_27.png","Moon_30_28.png","Moon_30_29.png","Moon_30_30.png"],
              image_length: 30,
              type: hmUI.data_type.MOON,
              show_level: hmUI.show_level.ONAL_AOD,
            });

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

            idle_altimeter_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 140,
              y: 409,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.ALTIMETER,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_humidity_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 169,
              y: 359,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              unit_sc: 'procent_small.png',
              unit_tc: 'procent_small.png',
              unit_en: 'procent_small.png',
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.HUMIDITY,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_wind_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 116,
              y: 359,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.WIND,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_uvi_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 72,
              y: 359,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.UVI,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_stand_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 262,
              y: 409,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.CENTER_H,
              type: hmUI.data_type.STAND,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_stress_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 352,
              y: 359,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.STRESS,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_spo2_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 294,
              y: 359,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              unit_sc: 'procent_small.png',
              unit_tc: 'procent_small.png',
              unit_en: 'procent_small.png',
              invalid_image: 'weather_29.png',
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.SPO2,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_heart_rate_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 235,
              y: 359,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.HEART,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_distance_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 325,
              y: 306,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              unit_sc: 'km.png',
              unit_tc: 'km.png',
              unit_en: 'km.png',
              imperial_unit_sc: 'ml.png',
              imperial_unit_tc: 'ml.png',
              imperial_unit_en: 'ml.png',
              dot_image: 'decimal.png',
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.DISTANCE,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_pai_weekly_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 249,
              y: 306,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.PAI_WEEKLY,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_calorie_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 170,
              y: 306,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.CAL,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_step_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
              x: 76,
              y: 306,
              font_array: ["digital1_0.png","digital1_1.png","digital1_2.png","digital1_3.png","digital1_4.png","digital1_5.png","digital1_6.png","digital1_7.png","digital1_8.png","digital1_9.png"],
              padding: false,
              h_space: -2,
              align_h: hmUI.align.LEFT,
              type: hmUI.data_type.STEP,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_date_img_date_month = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              month_startX: 305,
              month_startY: 92,
              month_sc_array: ["digital4_0.png","digital4_1.png","digital4_2.png","digital4_3.png","digital4_4.png","digital4_5.png","digital4_6.png","digital4_7.png","digital4_8.png","digital4_9.png"],
              month_tc_array: ["digital4_0.png","digital4_1.png","digital4_2.png","digital4_3.png","digital4_4.png","digital4_5.png","digital4_6.png","digital4_7.png","digital4_8.png","digital4_9.png"],
              month_en_array: ["digital4_0.png","digital4_1.png","digital4_2.png","digital4_3.png","digital4_4.png","digital4_5.png","digital4_6.png","digital4_7.png","digital4_8.png","digital4_9.png"],
              month_zero: 1,
              month_space: 0,
              month_align: hmUI.align.CENTER_H,
              month_is_character: false,
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_date_img_date_week_img = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
              x: 199,
              y: 89,
              week_en: ["digital5_0.png","digital5_1.png","digital5_2.png","digital5_3.png","digital5_4.png","digital5_5.png","digital5_6.png"],
              week_tc: ["digital5_0.png","digital5_1.png","digital5_2.png","digital5_3.png","digital5_4.png","digital5_5.png","digital5_6.png"],
              week_sc: ["digital5_0.png","digital5_1.png","digital5_2.png","digital5_3.png","digital5_4.png","digital5_5.png","digital5_6.png"],
              show_level: hmUI.show_level.ONAL_AOD,
            });

            idle_date_img_date_day = hmUI.createWidget(hmUI.widget.IMG_DATE, {
              day_startX: 129,
              day_startY: 89,
              day_sc_array: ["digital4_0.png","digital4_1.png","digital4_2.png","digital4_3.png","digital4_4.png","digital4_5.png","digital4_6.png","digital4_7.png","digital4_8.png","digital4_9.png"],
              day_tc_array: ["digital4_0.png","digital4_1.png","digital4_2.png","digital4_3.png","digital4_4.png","digital4_5.png","digital4_6.png","digital4_7.png","digital4_8.png","digital4_9.png"],
              day_en_array: ["digital4_0.png","digital4_1.png","digital4_2.png","digital4_3.png","digital4_4.png","digital4_5.png","digital4_6.png","digital4_7.png","digital4_8.png","digital4_9.png"],
              day_zero: 0,
              day_space: 0,
              day_align: hmUI.align.CENTER_H,
              day_is_character: false,
              show_level: hmUI.show_level.ONAL_AOD,
            });

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

            idle_analog_clock_time_pointer_second = hmUI.createWidget(hmUI.widget.TIME_POINTER, {
              second_path: 'analog_sec.png',
              second_centerX: 240,
              second_centerY: 240,
              second_posX: 31,
              second_posY: 232,
              show_level: hmUI.show_level.ONAL_AOD,
            });


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
  
import Vue from 'vue'
import Moment from 'moment'

Vue.filter('worker_num', val => {
  if (val > 2000)
    return 2000
  if (val > 1500)
    return 1500
  if (val > 1000)
    return 1000
  if (val > 500)
    return 500
  return val
})

Vue.filter("min_work_year", val => {
  if (val == 0)
    return "经验不限"
  return `${val}年经验`
})

Vue.filter('lectureDateFormat', function(value) {
  return Moment(value).format('YYYY-MM-DD')
})

Vue.filter("timeFormat", function (value) {
  return value.split(":").slice(0, 2).join(":")
})

Vue.filter('dateTimeFormat', function (value) {
  return Moment(value).format("YYYY-MM-DD HH:mm")
})

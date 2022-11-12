

<template>
  <div class="date-picker" @click.stop>
    <input class="input" v-model="dateValue" @click="openPanel" placeholder="选择日期">
    <!-- 动画特效 -->
    <transition name="fadeDownBig">
      <div class="date-panel" v-show="panelState">
        <div class="topbar">
          <span @click="leftBig">&lt;&lt;</span>
          <span @click="left">&lt;</span>
          <span class="year" @click="panelType = 'year'">{{tmpYear}}</span>
          <span class="month" @click="panelType = 'month'">{{changeTmpMonth}}</span>
          <span @click="right">&gt;</span>
          <span @click="rightBig">&gt;&gt;</span>
        </div>
        <!-- 年面板 -->
        <div class="type-year" v-show="panelType === 'year'">
          <ul class="year-list">
            <li v-for="(item, index) in yearList"
                :key="index"
                @click="selectYear(item)"
            >
              <span :class="{selected: item === tmpYear}" >{{item}}</span>
            </li>
          </ul>
        </div>
        <!-- 月面板 -->
        <div class="type-year" v-show="panelType === 'month'">
          <ul class="year-list">
            <li v-for="(item, index) in monthList"
                :key="index"
                @click="selectMonth(item)"
            >
              <span :class="{selected: item.value === tmpMonth}" >{{item.label}}</span>
            </li>
          </ul>
        </div>
        <!-- 日期面板 -->
        <div class="date-group" v-show="panelType === 'date'">
          <span v-for="(item, index) in weekList" :key="index" class="weekday">{{item.label}}</span>
          <ul class="date-list">
            <!-- selected 当前的日期样式 invalid选中后的样式 -->
            <li v-for="(item, index) in dateList"
                v-text="item.value"
                :class="{preMonth: item.previousMonth, nextMonth: item.nextMonth,
                selected: date === item.value && month === tmpMonth && item.currentMonth, invalid: validateDate(item)}"
                :key="index" 
                @click="selectDate(item)">
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name:"c-datepicker",
  data() {
    return {
      dateValue: "", // 输入框显示日期
      date: new Date().getDate(), // 当前日期
      panelState: false, // 控制panel面板的开关
      month: new Date().getMonth(),
      tmpMonth: new Date().getMonth(), // 临时月份，可修改
      tmpYear: new Date().getFullYear(), // 临时年份，可修改
      weekList: [
        { label: "Sun", value: 0 },
        { label: "Mon", value: 1 },
        { label: "Tue", value: 2 },
        { label: "Wed", value: 3 },
        { label: "Thu", value: 4 },
        { label: "Fri", value: 5 },
        { label: "Sat", value: 6 }
      ], // 周
      monthList: [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 1 },
        { label: "Mar", value: 2 },
        { label: "Apr", value: 3 },
        { label: "May", value: 4 },
        { label: "Jun", value: 5 },
        { label: "Jul", value: 6 },
        { label: "Aug", value: 7 },
        { label: "Sept", value: 8 },
        { label: "Oct", value: 9 },
        { label: "Nov", value: 10 },
        { label: "Dec", value: 11 }
      ], // 月
      nowValue: 0, // 当前选中日期值
      panelType: "date" // 控制面板的展示内容，date日期，month月份，year年份
    };
  },
  props: {
    value: {
      type: [Date, String],
      default: ""
    },
    format: {
      type: String,
      default: "yyyy-MM-dd"
    }
  },
  computed: {
    dateList() {
      //获取当月的天数
      let currentMonthLength = new Date(
        this.tmpYear,
        this.tmpMonth + 1,
        0
      ).getDate();
      //先将当月的日期塞入dateList
      let dateList = Array.from(
        { length: currentMonthLength },
        (val, index) => {
          return {
            currentMonth: true,//标记这是这个月的数据，用于判断样式
            value: index + 1
          };
        }
      );
      // array.from()第一个参数是伪数组对象(即拥有一个length属性的任意对象)
      // 获取当月1号的星期是为了确定在1号前需要插多少天
      // 举个例子 如果是星期二 startDay = 3
      let startDay = new Date(this.tmpYear, this.tmpMonth, 1).getDay();
      // 此为上个月最后一天，getDate得到上个月的天数
      let previousMongthLength = new Date(
        this.tmpYear,
        this.tmpMonth,
        0
      ).getDate();
      // 在1号前插入上个月日期
      for (let i = 0, len = startDay; i < len; i++) {
        // dateList = [
        //   { previousMonth: true, value: previousMongthLength - i }
        // ].concat(dateList);
        dateList.unshift({ previousMonth: true, value: previousMongthLength - i })
      }
      // 补全剩余位置,最多补14天，则都补14天，超出部分用样式隐藏
      for (let i = 1, item = 1; i < 15; i++, item++) {
        dateList[dateList.length] = { nextMonth: true, value: i };
      }
      //
      return dateList;
    },
    changeTmpMonth() {
      return this.monthList[this.tmpMonth].label;
    },
    yearList() {
      return Array.from({ length: 12 }, (value, index) => this.tmpYear + index);
    }
  },
  mounted() {
    if (this.value) {
      this.dateValue = this.formatDate(new Date(this.value).getTime());
    }
    window.addEventListener("click", this.eventListener);
  },
  methods: {
    //控制panel开关
    openPanel() {
      this.panelState = !this.panelState;
      this.panelType = "date";
    },
    //如果panelType是year就直接-1，如果是月份则需判断月份是否为0
    left() {
      if (this.panelType === "year") this.tmpYear--;
      else {
        if (this.tmpMonth === 0) {
          this.tmpYear--;
          this.tmpMonth = 11;
        } else this.tmpMonth--;
      }
    },
    //如果panelType是year直接-12,如果是month那就year-1
    leftBig() {
      if (this.panelType === "year") this.tmpYear -= 12;
      else this.tmpYear--;
    },
    //同理需判断month是否为11
    right() {
      if (this.panelType === "year") this.tmpYear++;
      else {
        if (this.tmpMonth === 11) {
          this.tmpYear++;
          this.tmpMonth = 0;
        } else this.tmpMonth++;
      }
    },
    //同理
    rightBig() {
      if (this.panelType === "year") this.tmpYear += 12;
      else this.tmpYear++;
    },
    // 控制panel开关事件，在最外层的dom添加并加上.stop修饰符防止其继续向外冒泡
    eventListener() {
      this.panelState = false;
    },

    validateDate(item) {
      if (this.nowValue === item.value && item.currentMonth) return true;
    },
    selectDate(item) {
      this.nowValue = item.value;
      if (item.previousMonth) this.tmpMonth--;
      if (item.nextMonth) this.tmpMonth++;
      let selectDay = new Date(this.tmpYear, this.tmpMonth, this.nowValue);
      console.log(selectDay.getTime())
      this.dateValue = this.formatDate(selectDay.getTime());
      this.panelState = !this.panelState;
      this.$emit("input", selectDay);
      console.log(this.dateList);
    },
    selectYear(item) {
      this.tmpYear = item;
      this.panelType = "month";
    },
    selectMonth(item) {
      this.tmpMonth = item.value;
      this.panelType = "date";
    },
    formatDate(date, fmt = this.format) {
      // 长度为10的时候末尾补3个0
      if (date === null || date === "null") {
        return "--";
      }
      date = new Date(Number(date));
      var o = {
        "M+": date.getMonth() + 1, // 月份
        "d+": date.getDate(), // 日
        "h+": date.getHours(), // 小时
        "m+": date.getMinutes(), // 分
        "s+": date.getSeconds(), // 秒
        "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
        S: date.getMilliseconds() // 毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length === 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
      }
      return fmt;
    }
  },
  destroyed() {
    window.removeEventListener("click", this.eventListener);
  }
};
</script>
<style scoped>

</style>

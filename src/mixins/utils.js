import moment from "moment";
export let func = {
  filters: {
    formatTime(time) {
      return moment(time).format("L");
    }
  }
};

const helpers = {
  convertObjToArray: (obj) => {
    const newArr = Object.entries(obj);
    return newArr;
  },

  renderNum: (num) => {
    const arr = [];
    if (num === 0) return [0];
    if (num > 15) {
      for (let i = 1; i <= 15; i += 1) {
        arr.push(i);
      }
    } else {
      for (let i = 1; i <= num; i += 1) {
        arr.push(i);
      }
    }
    return arr;
  },

};

export default helpers;

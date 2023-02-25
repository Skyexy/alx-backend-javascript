module.exports = const Utils {
  calculateNumber(type, a, b) {
    a = Math.round(a);
    b = Math.round(b);
    if (type == 'SUM'){
      solution = (a + b);
    }
    else if (type == 'SUBTRACT'){
      solution = (a - b);
    }
    else if (type == 'DIVIDE'){
      if (b == 0){
        return 'Error';
      }
      else{
        solution = (a / b);
      }
    }
    return solution;
  }
}

function reverse(str){
    if (str.length === 1) return str;
  // add whatever parameters you deem necessary - good luck!
  return reverse(str.substring(1)) + str[0];
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'
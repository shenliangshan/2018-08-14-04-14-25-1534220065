module.exports = function main(str) {
    // Array of lcd light 
    top = ["._.", "...", "._.", "._.", "...", "._.", "._.", "._.", "._.", "._."];
    middle = ["|.|", "..|", "._|", "._|", "|_|", "|_.", "|_.", "..|", "|_|", "|_|"];
    bottom = ["|_|", "..|", "|_.", "._|", "..|", "._|", "|_|", "..|", "|_|", "..|"];

    res_t = [];
    res_m = [];
    res_b = [];

    for(var i = 0 ; i < str.length ;  i++){
        var n = parseInt(str[i]);
        res_t.push(top[n]);
        res_m.push(middle[n]);
        res_b.push(bottom[n]);
      }
      return res_t.join(' ') + '\n' + res_m.join(' ') + '\n' + res_b.join(' ') + '\n';
};
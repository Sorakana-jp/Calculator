function get_calc(btn) {
    if(btn.value == "=") {
      document.dentaku.display.value = eval(document.dentaku.display.value);
    } else if (btn.value == "C") {
      document.dentaku.display.value = "";
    } else if (btn.value == "Clear") {
      document.dentaku.display.value = "";
    } else {
      if (btn.value == "×") {
        btn.value = "*";
      } else if (btn.value == "÷") {
        btn.value = "/";
      } else if (btn.value == "×10") {
        btn.value = "*10";
      } else if (btn.value == "÷10") {
        btn.value = "/10";
      } else if (btn.value == "Key") {
        const text = prompt('Enter formula or paste. \n※"×" ⇒ "*", "÷" ⇒ "/"');
        btn.value = text;
      }

      document.dentaku.display.value += btn.value;
      document.dentaku.add_btn.value = "×";
      document.dentaku.key.value = "Key";
      document.dentaku.ten.value = "×10";
      document.dentaku.ten2.value = "÷10";
      document.dentaku.div_btn.value = "÷";
    }
  }
"use strict";

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

one.addEventListener("click", () => {
  setTheme(
    "hsl(222, 26%, 31%)",
    "hsl(224, 36%, 15%)",
    "hsl(223, 31%, 20%)",
    "hsl(45, 7%, 89%)",
    "hsl(6, 63%, 50%)",
    "hsl(225, 21%, 49%)",
    "white",
    ""
  );
});

two.addEventListener("click", () => {
  setTheme(
    "hsl(0, 0%, 90%)",
    "hsl(0, 0%, 93%)",
    "hsl(0, 5%, 81%)",
    "hsl(45, 7%, 89%)",
    "hsl(25, 98%, 40%)",
    "hsl(185, 42%, 37%)",
    "black",
    "2.3rem"
  );
});

three.addEventListener("click", () => {
  setTheme(
    "hsl(268, 75%, 9%)",
    "hsl(268, 71%, 12%)",
    "hsl(268, 71%, 12%)",
    "hsl(268, 47%, 21%)",
    "hsl(176, 100%, 44%)",
    "hsl(281, 89%, 26%)",
    "hsl(52, 100%, 62%)",
    "4rem"
  );
});

const setTheme = (
  bodyBg,
  screenBg,
  keypadBg,
  numPadBg,
  equalBg,
  resDelBg,
  fontColor
) => {
  const body = document.querySelector("body");
  const screen = document.querySelector("#screen");
  const keypadBgElement = document.querySelector("#keypad");
  const numPads = document.querySelectorAll(".num");
  const equal = document.querySelector("#equal");
  const resDel = document.querySelectorAll("#res, #del");
  const elements = document.querySelectorAll(
    ".title, #theme, #one, #two, #three, #screen, p"
  );

  body.style.backgroundColor = bodyBg;
  screen.style.backgroundColor = screenBg;
  keypadBgElement.style.backgroundColor = keypadBg;

  numPads.forEach((element) => {
    element.style.backgroundColor = numPadBg;
    element.style.boxShadow = "0 0.3rem 0 0 hsl(224deg, 28%, 35%)";
  });

  equal.style.backgroundColor = equalBg;
  equal.style.boxShadow = "0 0.3rem 0 0 hsl(6, 70%, 34%)";

  resDel.forEach((element) => {
    element.style.backgroundColor = resDelBg;
  });

  elements.forEach((element) => {
    element.style.color = fontColor;
  });
};

const del = () => {
  const value = document.getElementById("screen").value;
  document.getElementById("screen").value = value.substr(0, value.length - 1);
};

const equal = () => {
  const expression = document.calc.text.value;
  let result;

  try {
    result = Function('"use strict";return (' + expression + ")")();
    document.calc.text.value = result;
  } catch (error) {
    document.calc.text.value = "Error";
  }
};

one.addEventListener("click", () => {
  one.classList.add("selected");
  const btn = document.querySelectorAll("#three, #two, .btnBg");
  btn.forEach((element) => {
    element.style.backgroundColor = "hsl(223, 31%, 20%)";
  });
});

two.addEventListener("click", () => {
  two.classList.add("selected");
  const btn = document.querySelectorAll("#three, #one, .btnBg");
  btn.forEach((element) => {
    element.style.backgroundColor = "hsl(0, 5%, 81%)";
  });
});

three.addEventListener("click", () => {
  three.classList.add("selected");
  const btn = document.querySelectorAll("#one, #two, .btnBg");
  btn.forEach((element) => {
    element.style.backgroundColor = "hsl(268, 71%, 12%)";
  });
});

// const one = document.getElementById("one");
// const two = document.getElementById("two");
// const three = document.getElementById("three");

// one.addEventListener("click", () => {
//   one.classList.add("selected");
//   const btn = document.querySelectorAll("#three, #two, .btnBg");
//   btn.forEach((element) => {
//     element.style.backgroundColor = "hsl(223, 31%, 20%)";
//   });

//   const body = document.querySelector("body");
//   body.style.backgroundColor = "hsl(222, 26%, 31%)";

//   // SCREEN
//   const screen = document.querySelector("#screen");
//   screen.style.backgroundColor = "hsl(224, 36%, 15%)";

//   // NUM CONTAINER KEYPAD BG
//   const keypadBg = document.querySelector("#keypad");
//   keypadBg.style.backgroundColor = "hsl(223, 31%, 20%)";

//   // NUMPAD BG
//   const numPad = document.querySelectorAll("#num");
//   numPad.forEach((element) => {
//     element.style.backgroundColor = "hsl(45, 7%, 89%)";
//     element.style.boxShadow = "0 0.3rem 0 0 hsl(224deg, 28%, 35%)";
//   });

//   // EQAUL
//   const equal = document.querySelector("#equal");
//   equal.style.backgroundColor = "hsl(6, 63%, 50%)";
//   equal.style.boxShadow = "0 0.3rem 0 0 hsl(6, 70%, 34%)";

//   // RES & DEL BG
//   const resDel = document.querySelectorAll("#res, #del");
//   resDel.forEach((element) => {
//     element.style.backgroundColor = "hsl(225, 21%, 49%)";
//   });

//   // FONTS
//   const elements = document.querySelectorAll(
//     ".title, #theme, #one, #two, #three, #screen, p"
//   );
//   elements.forEach((element) => {
//     element.style.color = "white";
//   });
// });

// // THEME TWO

// two.addEventListener("click", () => {
//   two.classList.add("selected");
//   const btn = document.querySelectorAll("#one, #three, .btnBg");
//   btn.forEach((element) => {
//     element.style.backgroundColor = "hsl(0, 5%, 81%)";
//   });

//   const body = document.querySelector("body");
//   body.style.backgroundColor = "hsl(0, 0%, 90%)";

//   // SCREEN
//   const screen = document.querySelector("#screen");
//   screen.style.backgroundColor = "hsl(0, 0%, 93%)";

//   // NUM CONTAINER KEYPAD BG
//   const keypadBg = document.querySelector("#keypad");
//   keypadBg.style.backgroundColor = "hsl(0, 5%, 81%)";

//   // NUMPAD BG
//   const numPad = document.querySelectorAll("#num");
//   numPad.forEach((element) => {
//     element.style.backgroundColor = "hsl(45, 7%, 89%)";
//     element.style.boxShadow = "0 0.3rem 0 0 hsl(35, 11%, 61%)";
//   });

//   // EQAUL
//   const equal = document.querySelector("#equal");
//   equal.style.backgroundColor = "hsl(25, 98%, 40%)";

//   // RES & DEL BG
//   const resDel = document.querySelectorAll("#res, #del");
//   resDel.forEach((element) => {
//     element.style.backgroundColor = "hsl(185, 42%, 37%)";
//   });

//   // FONTS
//   const elements = document.querySelectorAll(
//     ".title, #theme, #one, #two, #three, #screen, p"
//   );
//   elements.forEach((element) => {
//     element.style.color = "black";
//   });
// });

// // THEME THREE

// three.addEventListener("click", () => {
//   three.classList.add("selected");
//   const btn = document.querySelectorAll("#one, #two, .btnBg");
//   btn.forEach((element) => {
//     element.style.backgroundColor = "hsl(268, 71%, 12%)";
//   });

//   const body = document.querySelector("body");
//   body.style.backgroundColor = " hsl(268, 75%, 9%)";

//   // SCREEN
//   const screen = document.querySelector("#screen");
//   screen.style.backgroundColor = "hsl(268, 71%, 12%)";

//   // NUM CONTAINER KEYPAD BG
//   const keypadBg = document.querySelector("#keypad");
//   keypadBg.style.backgroundColor = "hsl(268, 71%, 12%)";

//   // NUMPAD BG
//   const numPad = document.querySelectorAll("#num");
//   numPad.forEach((element) => {
//     element.style.backgroundColor = "hsl(268, 47%, 21%)";
//     element.style.boxShadow = "0 0.3rem 0 0 hsl(290, 70%, 36%)";
//     // element.style.color = "hsl(52, 100%, 62%)";
//   });

//   // EQAUL
//   const equal = document.querySelector("#equal");
//   equal.style.backgroundColor = "hsl(176, 100%, 44%)";
//   equal.style.boxShadow = "0 0.3rem 0 0 hsl(177, 92%, 70%)";
//   equal.style.color = "hsl(198, 20%, 13%)";

//   // RES & DEL BG
//   const resDel = document.querySelectorAll("#res, #del");
//   resDel.forEach((element) => {
//     element.style.backgroundColor = "hsl(281, 89%, 26%)";
//     element.style.boxShadow = "0 0.3rem 0 0 hsl(285, 91%, 52%))";
//   });

//   // FONTS
//   const elements = document.querySelectorAll(
//     ".title, #theme, #one, #two, #three, #screen, p"
//   );
//   elements.forEach((element) => {
//     element.style.color = "hsl(52, 100%, 62%)";
//   });
// });

// const del = () => {
//   const value = document.getElementById("screen").value;
//   document.getElementById("screen").value = value.substr(0, value.length - 1);
// };

// const equal = () => {
//   const expression = document.calc.text.value;
//   let result;

//   try {
//     result = Function('"use strict";return (' + expression + ")")();
//     document.calc.text.value = result;
//   } catch (error) {
//     document.calc.text.value = "Error";
//   }
// };

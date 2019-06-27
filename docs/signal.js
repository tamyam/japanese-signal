/*!
 * japanese-signal JavaScript Library
 * https://tamyam.github.io/japanese-signal/
 *
 * Copyright (c) 2019 tamyam
 * Released under the MIT license
 * https://github.com/tamyam/japanese-signal/blob/master/LICENSE
 */

class Signal {
  constructor(lines, timeline, object) {
    const signal = document.createElement("div");
    signal.classList.add("signal");
    for(let line of lines) {
      const lineElem = signal.appendChild(document.createElement("div"));
      for(let type of line) {
        const oneSignal = lineElem.appendChild(document.createElement("div"));
        if(type == null) {
          oneSignal.classList.add("_");
        } else {
          if(object) oneSignal.style.backgroundColor = object.color;
          const format = type[0],
                color = type[1],
                id = type.match(/\d+$/)[0];
          oneSignal.classList.add(format, color, id, "s");
        }
      }
    }
    const ss = signal.getElementsByClassName("s");
    const f = () => {
      const time = timeline[f.i];
      for(let s of ss) {
        let notblack = false;
        time[0].forEach(x => {
          notblack = notblack || (s.className.match(/ (\d+) /) || {})[1] === x.toString();
        });
        if(notblack) {
          s.classList.remove("black");
        } else {
          s.classList.add("black");
        }
      }
      setTimeout(f, time[1] * 1000);
      f.i = (f.i + 1) % timeline.length;
    };
    f.i = 0;
    f();
    return signal;
  }
}

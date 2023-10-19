import { Component } from '@angular/core';

if (typeof window !== 'undefined') {
  const setAttribute = HTMLElement.prototype.setAttribute;
  HTMLElement.prototype.setAttribute = function () {
    if (arguments[0] === 'src') console.trace();
    // @ts-ignore
    return setAttribute.apply(this, arguments);
  };
}

@Component({
  selector: 'app-root',
  template: `
    <iframe src="https://www.youtube-nocookie.com/embed/7HVMn1TpXKQ"></iframe>
  `,
  standalone: true,
})
export class AppComponent {}

import { r as registerInstance, h } from './chunk-2557cbd9.js';

class SideDrawer {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // state listen to changes from inside
        this.showContactInfo = false;
    }
    // component methods
    open() {
        this.opened = true;
    }
    onCloseDrawer() {
        this.opened = false;
    }
    onContentChange(content) {
        // here we are changing the state
        // render re runs automatically
        if (content == 'contact') {
            this.showContactInfo = true;
        }
        else {
            this.showContactInfo = false;
        }
    }
    // mandatory render function that returns a JSX
    render() {
        let mainContent = h("slot", null);
        if (this.showContactInfo) {
            mainContent = (h("div", { id: "contact-information" }, h("h2", null, "Contact Information"), h("p", null, "You can reach us via phone or email"), h("ul", null, h("li", null, "123123213"), h("li", null, "something@somthing.com"))));
        }
        // this function always returns  a JSX
        // there should be only 1 parent i.e wrapped in a div
        return (h("aside", null, h("header", null, h("h1", null, this.title)), h("button", { id: "click", onClick: this.onCloseDrawer.bind(this) }, "Close X"), h("section", { id: "tabs" }, h("button", { onClick: this.onContentChange.bind(this, 'nav'), class: !this.showContactInfo ? "active" : '' }, "Navigation"), h("button", { onClick: this.onContentChange.bind(this, 'contact'), class: this.showContactInfo ? "active" : '' }, "Contact")), h("main", null, mainContent)));
    }
    static get style() { return "aside{\n  position: fixed;\n  top: 0;\n  left: -100%;\n  width: 30rem;\n  max-width: 80%;\n  height: 100vh;\n  background: #f3f3f3;\n  -webkit-box-shadow: 0 2px 8px rgba(0,0,0,0.2);\n  box-shadow: 0 2px 8px rgba(0,0,0,0.2);\n  -webkit-transition: left 0.3s ease-out;\n  transition: left 0.3s ease-out;\n}\n\n:host([opened]) aside{\n  left: 0;\n}\n\n\n#click{\n    color: white;\n    background: black;\n    float: right;\n    position: relative;\n    bottom: 2.5rem;\n}\n\n\n\nheader{\n  padding: 1rem;\n  background-color: black;\n}\n\n\nheader h1{\n  font-size: 1.5rem;\n  color: white;\n  margin: 0;\n\n}\n\n#tabs{\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  margin: 1rem;\n}\n\n#tabs button{\n\n  width: 30%;\n  background: white;\n  color: black;\n  text-align: center;\n  border: 1px solid black;\n  font: inherit;\n  padding: .15rem  0;\n}\n\n#tabs button.active,\n#tabs button:hover,\n#tabs button:focus{\n  background: black;\n  color: white;\n}\n\n#tabs button:focus{\n  outline: none;\n}\n\n\n#contact-information{\n  padding: 0 1rem;\n}"; }
}

export { SideDrawer as uc_side_drawer };

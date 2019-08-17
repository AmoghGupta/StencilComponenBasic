import { h } from "@stencil/core";
export class SideDrawer {
    constructor() {
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
            mainContent = (h("div", { id: "contact-information" },
                h("h2", null, "Contact Information"),
                h("p", null, "You can reach us via phone or email"),
                h("ul", null,
                    h("li", null, "123123213"),
                    h("li", null, "something@somthing.com"))));
        }
        // this function always returns  a JSX
        // there should be only 1 parent i.e wrapped in a div
        return (h("aside", null,
            h("header", null,
                h("h1", null, this.title)),
            h("button", { id: "click", onClick: this.onCloseDrawer.bind(this) }, "Close X"),
            h("section", { id: "tabs" },
                h("button", { onClick: this.onContentChange.bind(this, 'nav'), class: !this.showContactInfo ? "active" : '' }, "Navigation"),
                h("button", { onClick: this.onContentChange.bind(this, 'contact'), class: this.showContactInfo ? "active" : '' }, "Contact")),
            h("main", null, mainContent)));
    }
    static get is() { return "uc-side-drawer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./side-drawer.css"]
    }; }
    static get styleUrls() { return {
        "$": ["side-drawer.css"]
    }; }
    static get properties() { return {
        "title": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "title",
            "reflect": true
        },
        "opened": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "opened",
            "reflect": true
        }
    }; }
    static get states() { return {
        "showContactInfo": {}
    }; }
    static get methods() { return {
        "open": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {},
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
}

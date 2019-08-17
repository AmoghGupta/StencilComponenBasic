import {Component, h, Prop, State, Method} from "@stencil/core";

@Component({
  tag: 'uc-side-drawer',
  styleUrl: `./side-drawer.css`,
  shadow: true
})
export class SideDrawer{


  // state listen to changes from inside
  @State() showContactInfo: boolean = false;


  //props are similar to prop in react
  // props listen to changes from outside
  // if props change renders runs again
  @Prop({reflectToAttr: true}) title:string;
  @Prop ({reflectToAttr: true, mutable:true}) opened: boolean;


  // component methods
  @Method()
  open(){
    this.opened = true;
  }

  onCloseDrawer(){
    this.opened = false;
  }

  onContentChange(content:string){
    // here we are changing the state
    // render re runs automatically
    if(content == 'contact'){
      this.showContactInfo = true;
    }else{
      this.showContactInfo = false;
    }
  }


  // mandatory render function that returns a JSX
  render(){
    let mainContent = <slot/>;
    if(this.showContactInfo){
      mainContent = (
        <div id="contact-information">
          <h2>
            Contact Information
          </h2>
          <p>You can reach us via phone or email</p>
          <ul>
            <li>123123213</li>
            <li>something@somthing.com</li>
          </ul>
        </div>
      )
    }



    // this function always returns  a JSX
    // there should be only 1 parent i.e wrapped in a div
    return (
      <aside>
          <header>
            <h1>{this.title}</h1>
          </header>
          <button id="click" onClick={this.onCloseDrawer.bind(this)}>Close X</button>
          <section id="tabs">
            <button onClick={this.onContentChange.bind(this, 'nav')} class={!this.showContactInfo?"active":''}>Navigation</button>
            <button onClick={this.onContentChange.bind(this, 'contact')}  class={this.showContactInfo?"active":''} >Contact</button>
          </section>
          <main>
              {mainContent}
          </main>
      </aside>
    );
  }

}

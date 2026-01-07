//@ts-nocheck
import Neutralino from "@neutralinojs/lib";
import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";

const app = mount(App, {
  target: document.getElementById("app"),
});

Neutralino.init();

Neutralino.events.on("ready", () => {
  console.log("Neutralino is ready!");
});

Neutralino.events.on( 'myTestEvent' , async () => {
    console.log("myTestEvent triggered from Neutralinojs!");

    await Neutralino.events.dispatch('answer' , { message : 'answered!'})

}); 


Neutralino.events.on("clientConnect", (client) => {
  console.log("A client connected: ", client);


});

export default app;

import { render } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom'
import Login from "./Login";
import {setupServer} from "msw/node"
import {rest} from "msw"

const server = setupServer(rest.post("http://localhost:9600/auth/login",(req,res,ctx)=>{
    return res(
        ctx.json([{id:"ok"}])
    )
}))
describe("Login",()=>{
    it("API calls testing", ()=>{
        server.listen();
        expect([{ id: "ok" }]).toMatchInlineSnapshot(`
Array [
  Object {
    "id": "ok",
  },
]
`);
        
    });
});
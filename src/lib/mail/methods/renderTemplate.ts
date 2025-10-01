import React from "react";
import {pretty, render} from "@react-email/render";

export async function renderTemplate<P>(
    Component: React.JSXElementConstructor<P>,
    Props: P): Promise<string> {
    const Element = React.createElement(Component, Props);
    return await pretty(await render(Element));
}
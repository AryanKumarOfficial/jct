import React from "react";
import {pretty, render} from "@react-email/render";

/**
 * Renders the given React component with the provided properties into a string representation.
 *
 * @param {React.JSXElementConstructor<P>} Component - The React component to be rendered.
 * @param {P} Props - The properties to pass to the React component.
 * @return {Promise<string>} A promise that resolves to a string representation of the rendered component.
 */
export async function renderTemplate<P>(
    Component: React.JSXElementConstructor<P>,
    Props: P): Promise<string> {
    const Element = React.createElement(Component, Props);
    return await pretty(await render(Element));
}
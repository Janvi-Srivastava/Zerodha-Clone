import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/dom";
import Hero from "../landing_page/home/Hero";

//Test Suite
describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("HomeHero");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src","media/Images/homeHero.png");
  });
  test("renders signup button", () => {
    render(<Hero />);
    const signUp = screen.getByRole("button",{name:"Signup for free"});
    expect(signUp).toBeInTheDocument();
    expect(signUp).toHaveClass("btn-primary");
  });
});

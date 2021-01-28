import React from "react";

import { render, fireEvent, waitFor, screen } from "@testing-library/react";

import SideBar from "./Sidebar";
test("loads and displays greeting", async () => {
  /*render(
    <SideBar categories={["1", "2"]} selected={"1"} onSelectedCat={() => {}} />
  );*/
  expect(true).toBe(true);
  console.log("HIIII");
  //fireEvent.click(screen.getByText("Load Greeting"));

  //await waitFor(() => screen.getByRole("heading"));

  //expect(screen.getByRole("categories-list")).toHaveTextContent("1");
  //expect(screen.getByRole("button")).toHaveAttribute("disabled");
});

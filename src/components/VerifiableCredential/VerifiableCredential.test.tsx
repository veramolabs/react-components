import React from "react";
import { render } from "@testing-library/react";

import VerifiableCredential from "./VerifiableCredential";

describe("VerifiableCredential", () => {
  test("renders the VerifiableCredential component", () => {
    render(<VerifiableCredential />);
  });
});
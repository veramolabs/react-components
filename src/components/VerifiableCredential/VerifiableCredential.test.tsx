import React from "react";
import { render } from "@testing-library/react";
import KudosCredential from "../../test-vectors/kudos-credential"
import ProfileCredential from "../../test-vectors/profile-credential"

import VerifiableCredential from "./VerifiableCredential";

describe("VerifiableCredential", () => {
  test("renders kudos VerifiableCredential component", () => {
    render(<VerifiableCredential credential={KudosCredential} />);
  });
  test("renders profile VerifiableCredential component", () => {
    render(<VerifiableCredential credential={ProfileCredential} />);
  });
});
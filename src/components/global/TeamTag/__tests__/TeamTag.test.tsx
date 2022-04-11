import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TeamTag from "../TeamTag";

describe("TeamTag", () => {
  it("renders no tag if userId doesnt match pattern", () => {
    render(
      <>
        <TeamTag userId={-1} />
        <TeamTag userId={0} />
        <TeamTag userId={1} />
        <TeamTag userId={2} />
        <TeamTag userId={3} />
        <TeamTag userId={5} />
        <TeamTag userId={7} />
        <TeamTag userId={9} />
        <TeamTag userId={11} />
        <TeamTag userId={14} />
      </>,
    );
    const teamTag = screen.queryByText(/Team/);

    expect(teamTag).not.toBeInTheDocument();
  });

  it("renders 6 Tags - 2 Team C, 2 Team B, 2 Team A", () => {
    render(
      <>
        <TeamTag userId={24} />
        <TeamTag userId={12} />
        <TeamTag userId={18} />
        <TeamTag userId={6} />
        <TeamTag userId={4} />
        <TeamTag userId={8} />
        <TeamTag userId={0} />
        <TeamTag userId={-1} />
        <TeamTag userId={7} />
      </>,
    );
    const allTags = screen.queryAllByText(/Team/);
    expect(allTags.length).toBe(6);

    const teamATags = screen.queryAllByText(/Team A/);
    expect(teamATags.length).toBe(2);
    teamATags.forEach((tag) => expect(tag).toBeInTheDocument());

    const teamBTags = screen.queryAllByText(/Team B/);
    expect(teamBTags.length).toBe(2);
    teamBTags.forEach((tag) => expect(tag).toBeInTheDocument());

    const teamCTags = screen.queryAllByText(/Team C/);
    expect(teamCTags.length).toBe(2);
    teamCTags.forEach((tag) => expect(tag).toBeInTheDocument());
  });
});

import Team from "../../../types/Team";
import { calculateTeamTag } from "../calculateTeamTag";

describe("calculateTeamTag", () => {
  it("returns undefined", () => {
    for (let i = -100; i < 100; i += 1) {
      const notDividesBy4 = i % 4 !== 0;
      const notDividesBy6 = i % 6 !== 0;
      if (notDividesBy4 && notDividesBy6)
        expect(calculateTeamTag(i)).toBeUndefined();
    }
  });

  it("returns Team A", () => {
    for (let i = 1; i < 100; i += 1) {
      const dividesBy4 = i % 4 === 0;
      const notDividesBy6 = i % 6 !== 0;
      if (dividesBy4 && notDividesBy6) expect(calculateTeamTag(i)).toBe(Team.A);
    }
  });

  it("returns Team B", () => {
    for (let i = 1; i < 100; i += 1) {
      const notDividesBy4 = i % 4 !== 0;
      const dividesBy6 = i % 6 === 0;
      if (notDividesBy4 && dividesBy6) expect(calculateTeamTag(i)).toBe(Team.B);
    }
  });

  it("returns Team C", () => {
    for (let i = 1; i < 100; i += 1) {
      const dividesBy4 = i % 4 === 0;
      const dividesBy6 = i % 6 === 0;
      if (dividesBy4 && dividesBy6) expect(calculateTeamTag(i)).toBe(Team.C);
    }
  });
});

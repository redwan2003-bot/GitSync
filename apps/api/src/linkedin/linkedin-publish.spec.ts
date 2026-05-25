import { LinkedInService } from "./linkedin.service";

describe("LinkedInService (mocked)", () => {
  it("returns a share URN", async () => {
    const service = new LinkedInService();
    const urn = await service.publishPost("Hello from RepoSignal");
    expect(urn).toMatch(/^urn:li:share:/);
  });
});

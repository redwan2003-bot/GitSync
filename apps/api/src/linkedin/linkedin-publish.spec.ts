import { LinkedInService } from "./linkedin.service";

describe("LinkedInService (mocked)", () => {
  it("returns a share URN", async () => {
    const service = new LinkedInService();
    const urn = await service.publishPost("Hello from GitSync");
    expect(urn).toMatch(/^urn:li:share:/);
  });
});

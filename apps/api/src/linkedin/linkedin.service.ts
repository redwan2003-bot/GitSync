import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LinkedInService {
  private readonly logger = new Logger(LinkedInService.name);

  async publishPost(content: string): Promise<string> {
    this.logger.log(`Publishing post to LinkedIn...`);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock response URN
    const mockUrn = `urn:li:share:${Math.floor(Math.random() * 1000000000)}`;
    
    this.logger.log(`Post published successfully with URN: ${mockUrn}`);
    return mockUrn;
  }
}

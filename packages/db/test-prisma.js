const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function test() {
  try {
    const card = await prisma.projectCard.create({
      data: {
        workspaceId: 'cm6w0q71p0001y1542f2b2z81', // some dummy ID
        repositoryId: 'cm6w0q7320004y1541f2b2z82', // some dummy ID
        title: 'Test',
        role: 'Test Role',
        description: 'Test Desc',
        technologies: ['TypeScript'],
        links: [{ type: 'GitHub', url: 'http://example.com' }],
        syncStatus: 'MANUAL_READY',
      }
    });
    console.log('Success:', card);
  } catch(e) {
    console.error('Prisma Error:', e.message);
  } finally {
    await prisma.$disconnect();
  }
}
test();

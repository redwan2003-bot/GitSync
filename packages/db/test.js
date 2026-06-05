const { PrismaClient } = require('./node_modules/@prisma/client');
const prisma = new PrismaClient();

prisma.projectCard.findMany({take: 5}).then(cards => {
  console.log(cards);
  cards.forEach(card => {
    try {
      const date = card.startDate || card.createdAt.toISOString().split('T')[0];
      console.log('Date:', date);
    } catch(e) {
      console.error('Error on card:', card.id, e);
    }
  });
}).catch(console.error).finally(() => prisma.$disconnect());

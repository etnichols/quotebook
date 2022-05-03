import { PrismaClient } from '@prisma/client'
import quotes from '../pages/quotes'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)
  for (const quote of quotes) {
    const created = await prisma.quote.create({
      data: quote,
    })
    console.log(`Created quote with id: ${created.id}`)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

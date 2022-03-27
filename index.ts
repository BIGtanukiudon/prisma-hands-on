import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  // 書き込み
  await prisma.user.create({
    data: {
      name: 'Taro',
      email: 'taro@example.com',
      posts: {
        create:{
          title: 'こんにちは! Prisma!'
        }
      }
    }
  })

  // 読み込み
  const users = await prisma.user.findMany({
    include: {
      posts: true
    }
  })

  console.dir(users, { depth: null })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

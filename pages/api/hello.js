// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Write to the database
  // await prisma.user.create({
  //   data: {
  //     name: "john",
  //     email: "john@gmail.com",
  //     posts: {
  //       create: {
  //         title: "Hello World",
  //         content: "Bye world"
  //       },
  //     },
  //     profile: {
  //       create: {
  //         bio: "I Love Turtles"
  //       },
  //     },
  //   }
  // })
  const allusers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    }
  })
  console.log(allusers)
  res.status(200).json({ name: 'John Doe' })
}

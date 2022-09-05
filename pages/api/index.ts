import { createServer } from "@graphql-yoga/node"
import { join } from "path"
import { readFileSync } from "fs"
import prisma from '../../lib/prisma'
import type { PrismaClient } from '@prisma/client'
import { Resolvers } from '../../types'
import { NextApiRequest, NextApiResponse } from "next"
import { MdInfoOutline } from "react-icons/md"

export async function createContext(): Promise<GraphQLContext>{
  return { prisma }
}

export type GraphQLContext = {
  prisma: PrismaClient
}

const typeDefs = readFileSync(join(process.cwd(), "schema.graphql"), {encoding: "utf-8"})

const resolvers: Resolvers = {
  Query: {
    blogPosts: (_, __, {prisma}) => {
      return prisma.blogPost.findMany()
    },
    blogPost: (_, {id}, {prisma}) => {
      const blogPost = prisma.blogPost.findUnique({
        where: {
          id
        }
      })
      return blogPost
    }
  },
  Mutation: {
  addBlogPost: async (_, {input}, {prisma}) => {
    const blogPost = await prisma.blogPost.create({
      data: {
        title: input?.title,
        subtitle1: input?.subtitle1,

        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
        tableContents5: input?.tableContents5,

        p1: input?.p1,
        p2: input?.p2,
        p3: input?.p3,

        subtitle2: input?.subtitle2,

        p4: input?.p4,
        p5: input?.p5,

        l1: input?.l1,
        l2: input?.l2,
        l3: input?.l3,
        l4: input?.l4,
        l5: input?.l5,

        subtitle3: input?.subtitle3,

        p6: input?.p6,
        p7: input?.p7,

        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,

        reference1: input?.reference1,
        reference2: input?.reference2,
        reference3: input?.reference3,
        reference4: input?.reference4,
        reference5: input?.reference5,

        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,

        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
      }
    })
    return blogPost
  }
}
}

const server = createServer<{req: NextApiRequest; res: NextApiResponse;}>({
  endpoint: "/api",
  schema: {
    typeDefs,
    resolvers
  },
  context: createContext()
})

export default server
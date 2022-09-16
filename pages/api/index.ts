import { createServer, GraphQLYogaError } from "@graphql-yoga/node"
import { join } from "path"
import { readFileSync } from "fs"
import prisma from '../../lib/prisma'
import type { PrismaClient } from '@prisma/client'
import { Resolvers } from '../../types'
import { NextApiRequest, NextApiResponse } from "next"

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
    },
    blogCard: (_, __, {prisma}) => {
      return prisma.blogPost.findMany()
    },
    softwareDevelopmentCard: (_, __,{prisma}) => {
      return prisma.softwareDevelopment.findMany()
    },
    softwareDevelopment: (_, {id},{prisma}) => {
      return prisma.softwareDevelopment.findUnique({
        where: {
          id
        }
      })
    },
    computerNetworkingCard: (_, __,{prisma}) => {
      return prisma.computerNetworking.findMany()
    },
    computerNetworking: (_, {id},{prisma}) => {
      return prisma.computerNetworking.findUnique({
        where: {
          id
        }
      })
    },
    cloudComputingCard: (_, __,{prisma}) => {
      return prisma.cloudComputing.findMany()
    },
    cloudComputing: (_, {id},{prisma}) => {
      return prisma.cloudComputing.findUnique({
        where: {
          id
        }
      })
    },
    businessAnalysisCard: (_, __,{prisma}) => {
      return prisma.businessAnalysis.findMany()
    },
    businessAnalysis: (_, {id},{prisma}) => {
      return prisma.businessAnalysis.findUnique({
        where: {
          id
        }
      })
    },
    telecommunicationCard: (_, __,{prisma}) => {
      return prisma.telecommunication.findMany()
    },
    telecommunication: (_, {id},{prisma}) => {
      return prisma.telecommunication.findUnique({
        where: {
          id
        }
      })
    },
    gameProgrammingCard: (_, __,{prisma}) => {
      return prisma.gameProgramming.findMany()
    },
    gameProgramming: (_, {id},{prisma}) => {
      return prisma.gameProgramming.findUnique({
        where: {
          id
        }
      })
    },
    webDevelopmentCard: (_, __,{prisma}) => {
      return prisma.webDevelopment.findMany()
    },
    webDevelopment: (_, {id},{prisma}) => {
      return prisma.webDevelopment.findUnique({
        where: {
          id
        }
      })
    },
    machineLearningCard: (_, __,{prisma}) => {
      return prisma.machineLearning.findMany()
    },
    machineLearning: (_, {id},{prisma}) => {
      return prisma.machineLearning.findUnique({
        where: {
          id
        }
      })
    },
    dataManagementCard: (_, __,{prisma}) => {
      return prisma.dataManagement.findMany()
    },
    dataManagement: (_, {id},{prisma}) => {
      return prisma.dataManagement.findUnique({
        where: {
          id
        }
      })
    },
    blockchainCard: (_, __,{prisma}) => {
      return prisma.blockchain.findMany()
    },
    blockchain: (_, {id},{prisma}) => {
      return prisma.blockchain.findUnique({
        where: {
          id
        }
      })
    },
    aiCard: (_, __,{prisma}) => {
      return prisma.ai.findMany()
    },
    ai: (_, {id},{prisma}) => {
      return prisma.ai.findUnique({
        where: {
          id
        }
      })
    },
    it: (_, {id}, {prisma}) => {
      const it = prisma.it.findUnique({
        where: {
          id
        }
      })
      if (!it) {
            throw new GraphQLYogaError(
              `It with id: ${id} not found.`,
              { code: 'IT_NOT_FOUND' },
            )
          }
          return it
  }
  },
  Mutation: {
    updateBlogPost: async (_, {input}, {prisma}) => {
      const blogPost = await prisma.blogPost.update({
        where:{
          id: input.id
        },
        data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
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
    },
    updateIt: async (_, {input}, {prisma}) => {
      const it = await prisma.it.update({
        where:{
          id: input.id
        },
        data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
        }
      })
      return it
    },
    updateSoftwareDevelopment: async (_, {input}, {prisma}) => {
      const softwareDevelopment = await prisma.softwareDevelopment.update({
        where:{
          id: input.id
        },
        data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
        }
      })
      return softwareDevelopment
    },
    updateComputerNetworking: async (_, {input}, {prisma}) => {
      const computerNetworking = await prisma.computerNetworking.update({
        where:{
          id: input.id
        },
        data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
        }
      })
      return computerNetworking
    },
    updateCloudComputing: async (_, {input}, {prisma}) => {
      const cloudComputing = await prisma.cloudComputing.update({
        where:{
          id: input.id
        },
        data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
        }
      })
      return cloudComputing
    },
    updateBusinessAnalysis: async (_, {input}, {prisma}) => {
      const businessAnalysis = await prisma.businessAnalysis.update({
        where:{
          id: input.id
        },
        data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
        }
      })
      return businessAnalysis
    },
    updateTelecommunication: async (_, {input}, {prisma}) => {
      const telecommunication = await prisma.telecommunication.update({
        where:{
          id: input.id
        },
        data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
        }
      })
      return telecommunication
    },
    updateGameProgramming: async (_, {input}, {prisma}) => {
      const gameProgramming = await prisma.gameProgramming.update({
        where:{
          id: input.id
        },
        data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
        }
      })
      return gameProgramming
    },
    updateWebDevelopment: async (_, {input}, {prisma}) => {
      const webDevelopment = await prisma.webDevelopment.update({
        where:{
          id: input.id
        },
        data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
        }
      })
      return webDevelopment
    },
    updateMachineLearning: async (_, {input}, {prisma}) => {
      const machineLearning = await prisma.machineLearning.update({
        where:{
          id: input.id
        },
        data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
        }
      })
      return machineLearning
    },
    updateDataManagement: async (_, {input}, {prisma}) => {
      const dataManagement = await prisma.dataManagement.update({
        where:{
          id: input.id
        },
        data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
        }
      })
      return dataManagement
    },
    updateBlockchain: async (_, {input}, {prisma}) => {
      const blockchain = await prisma.blockchain.update({
        where:{
          id: input.id
        },
        data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
        }
      })
      return blockchain
    },
    updateAi: async (_, {input}, {prisma}) => {
      const ai = await prisma.ai.update({
        where:{
          id: input.id
        },
        data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
        }
      })
      return ai
    }
    ,
  addIt: async (_, {input}, {prisma}) => {
    const it = await prisma.softwareDevelopment.create({
      data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
      }
    })
    return it
  },
  addBlogPost: async (_, {input}, {prisma}) => {
    const blogPost = await prisma.blogPost.create({
      data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
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
  },
  addSoftwareDevelopment: async (_, {input}, {prisma}) => {
    const softwareDevelopment = await prisma.softwareDevelopment.create({
      data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
      }
    })
    return softwareDevelopment
  },
  addComputerNetworking: async (_, {input}, {prisma}) => {
    const computerNetworking = await prisma.computerNetworking.create({
      data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
      }
    })
    return computerNetworking
  },
  addCloudComputing: async (_, {input}, {prisma}) => {
    const cloudComputing = await prisma.cloudComputing.create({
      data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
      }
    })
    return cloudComputing
  },
  addBusinessAnalysis: async (_, {input}, {prisma}) => {
    const businessAnalysis = await prisma.businessAnalysis.create({
      data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
      }
    })
    return businessAnalysis
  },
  addTelecommunication: async (_, {input}, {prisma}) => {
    const telecommunication = await prisma.telecommunication.create({
      data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
      }
    })
    return telecommunication
  },
  addGameProgramming: async (_, {input}, {prisma}) => {
    const gameProgramming = await prisma.gameProgramming.create({
      data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
      }
    })
    return gameProgramming
  },
  addWebDevelopment: async (_, {input}, {prisma}) => {
    const webDevelopment = await prisma.webDevelopment.create({
      data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
      }
    })
    return webDevelopment
  },
  addMachineLearning: async (_, {input}, {prisma}) => {
    const machineLearing = await prisma.machineLearning.create({
      data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
      }
    })
    return machineLearing
  },
  addDataManagement: async (_, {input}, {prisma}) => {
    const dataManagement = await prisma.dataManagement.create({
      data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
      }
    })
    return dataManagement
  },
  addBlockchain: async (_, {input}, {prisma}) => {
    const blockchain = await prisma.blockchain.create({
      data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
      }
    })
    return blockchain
  },
  addAi: async (_, {input}, {prisma}) => {
    const ai = await prisma.ai.create({
      data: {
        title: input?.title,
        category: input?.category,
        subtitle1: input?.subtitle1,
        tableContents1: input?.tableContents1,
        tableContents2: input?.tableContents2,
        tableContents3: input?.tableContents3,
        tableContents4: input?.tableContents4,
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
        l6: input?.l6,
        l7: input?.l7,
        l8: input?.l8,
        l9: input?.l9,
        l10: input?.l10,
        l11: input?.l11,
        l12: input?.l12,
        l13: input?.l13,
        l14: input?.l14,
        l15: input?.l15,
        p8: input?.p8,
        subtitle4: input?.subtitle4,
        conclusion1: input?.conclusion1,
        conclusion2: input?.conclusion2,
        conclusion3: input?.conclusion3,
        reference1: input?.reference1,
        reference2: input?.reference2,
        authorName: input?.authorName,
        authorAbout: input?.authorAbout,
        authorLink: input?.authorLink,
        photoCredit: input?.photoCredit,
        editedBy: input?.editedBy,
        mainImage: input?.mainImage,
        publishedDate: input?.publishedDate
      }
    })
    return ai
  },
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
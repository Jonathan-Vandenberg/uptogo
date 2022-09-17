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
      return it
  },
  musicCard: (_, __, {prisma}) => {
      const music = prisma.music.findMany()
      return music
  },
  music: (_, {id}, {prisma}) => {
      const music = prisma.music.findUnique({
        where: {
          id
        }
      })
      return music
  },
  
  fashionDesignCard: (_, __, {prisma}) => {
      const fashionDesign = prisma.fashionDesign.findMany()
      return fashionDesign
  },
  fashionDesign: (_, {id}, {prisma}) => {
      const fashionDesign = prisma.fashionDesign.findUnique({
        where: {
          id
        }
      })
      return fashionDesign
  }
  ,
  landscapeCard: (_, __, {prisma}) => {
      const landscape = prisma.landscape.findMany()
      return landscape
  },
  landscape: (_, {id}, {prisma}) => {
      const landscape = prisma.landscape.findUnique({
        where: {
          id
        }
      })
      return landscape
  }
  ,
  filmCard: (_, __, {prisma}) => {
      const film = prisma.film.findMany()
      return film
  },
  film: (_, {id}, {prisma}) => {
      const film = prisma.film.findUnique({
        where: {
          id
        }
      })
      return film
  }
  ,
  graphicDesignCard: (_, __, {prisma}) => {
      const graphicDesign = prisma.graphicDesign.findMany()
      return graphicDesign
  },
  graphicDesign: (_, {id}, {prisma}) => {
      const graphicDesign = prisma.graphicDesign.findUnique({
        where: {
          id
        }
      })
      return graphicDesign
  }
  ,
  interiorDesignCard: (_, __, {prisma}) => {
      const interiorDesign = prisma.interiorDesign.findMany()
      return interiorDesign
  },
  interiorDesign: (_, {id}, {prisma}) => {
      const interiorDesign = prisma.interiorDesign.findUnique({
        where: {
          id
        }
      })
      return interiorDesign
  },
  
  digitalMediaCard: (_, __, {prisma}) => {
      const digitalMedia = prisma.digitalMedia.findMany()
      return digitalMedia
  },
  digitalMedia: (_, {id}, {prisma}) => {
      const digitalMedia = prisma.digitalMedia.findUnique({
        where: {
          id
        }
      })
      return digitalMedia
  },
  
  actingCard: (_, __, {prisma}) => {
      const acting = prisma.acting.findMany()
      return acting
  },
  acting: (_, {id}, {prisma}) => {
      const acting = prisma.acting.findUnique({
        where: {
          id
        }
      })
      return acting
  },
  
  animation3DCard: (_, __, {prisma}) => {
      const animation3D = prisma.animation3D.findMany()
      return animation3D
  },
  animation3D: (_, {id}, {prisma}) => {
      const animation3D = prisma.animation3D.findUnique({
        where: {
          id
        }
      })
      return animation3D
  },
  agedCareCard: (_, __, {prisma}) => {
      const agedCare = prisma.agedCare.findMany()
      return agedCare
  },
  agedCare: (_, {id}, {prisma}) => {
      const agedCare = prisma.agedCare.findUnique({
        where: {
          id
        }
      })
      return agedCare
  },
  nutritionCard: (_, __, {prisma}) => {
      const nutrition = prisma.nutrition.findMany()
      return nutrition
  },
  nutrition: (_, {id}, {prisma}) => {
      const nutrition = prisma.nutrition.findUnique({
        where: {
          id
        }
      })
      return nutrition
  },
  veterinaryCard: (_, __, {prisma}) => {
      const veterinary = prisma.veterinary.findMany()
      return veterinary
  },
  veterinary: (_, {id}, {prisma}) => {
      const veterinary = prisma.veterinary.findUnique({
        where: {
          id
        }
      })
      return veterinary
  },
  medicineCard: (_, __, {prisma}) => {
      const medicine = prisma.medicine.findMany()
      return medicine
  },
  medicine: (_, {id}, {prisma}) => {
      const medicine = prisma.medicine.findUnique({
        where: {
          id
        }
      })
      return medicine
  },
  publicHealthCard: (_, __, {prisma}) => {
      const publicHealth = prisma.publicHealth.findMany()
      return publicHealth
  },
  publicHealth: (_, {id}, {prisma}) => {
      const publicHealth = prisma.publicHealth.findUnique({
        where: {
          id
        }
      })
      return publicHealth
  },
  dentalCard: (_, __, {prisma}) => {
      const dental = prisma.dental.findMany()
      return dental
  },
  dental: (_, {id}, {prisma}) => {
      const dental = prisma.dental.findUnique({
        where: {
          id
        }
      })
      return dental
  },
  massageCard: (_, __, {prisma}) => {
      const massage = prisma.massage.findMany()
      return massage
  },
  massage: (_, {id}, {prisma}) => {
      const massage = prisma.massage.findUnique({
        where: {
          id
        }
      })
      return massage
  },
  mentalHealthCard: (_, __, {prisma}) => {
      const mentalHealth = prisma.mentalHealth.findMany()
      return mentalHealth
  },
  mentalHealth: (_, {id}, {prisma}) => {
      const mentalHealth = prisma.mentalHealth.findUnique({
        where: {
          id
        }
      })
      return mentalHealth
  },
  nursingCard: (_, __, {prisma}) => {
      const nursing = prisma.nursing.findMany()
      return nursing
  },
  nursing: (_, {id}, {prisma}) => {
      const nursing = prisma.nursing.findUnique({
        where: {
          id
        }
      })
      return nursing
  },
  health: (_, {id}, {prisma}) => {
      const health = prisma.health.findUnique({
        where: {
          id
        }
      })
      return health
  },
  bakingCard: (_, __, {prisma}) => {
      const baking = prisma.baking.findMany()
      return baking
  },
  baking: (_, {id}, {prisma}) => {
      const baking = prisma.baking.findUnique({
        where: {
          id
        }
      })
      return baking
  },cookeryCard: (_, __, {prisma}) => {
      const cookery = prisma.cookery.findMany()
      return cookery
  },
  cookery: (_, {id}, {prisma}) => {
      const cookery = prisma.cookery.findUnique({
        where: {
          id
        }
      })
      return cookery
  },hospitalityManagementCard: (_, __, {prisma}) => {
      const hospitalityManagement = prisma.hospitalityManagement.findMany()
      return hospitalityManagement
  },
  hospitalityManagement: (_, {id}, {prisma}) => {
      const hospitalityManagement = prisma.hospitalityManagement.findUnique({
        where: {
          id
        }
      })
      return hospitalityManagement
  },hotelManagementCard: (_, __, {prisma}) => {
      const hotelManagement = prisma.hotelManagement.findMany()
      return hotelManagement
  },
  hotelManagement: (_, {id}, {prisma}) => {
      const hotelManagement = prisma.hotelManagement.findUnique({
        where: {
          id
        }
      })
      return hotelManagement
  },travelTourismCard: (_, __, {prisma}) => {
      const travelTourism = prisma.travelTourism.findMany()
      return travelTourism
  },
  travelTourism: (_, {id}, {prisma}) => {
      const travelTourism = prisma.travelTourism.findUnique({
        where: {
          id
        }
      })
      return travelTourism
  },
  hospitality: (_, {id}, {prisma}) => {
      const hospitality = prisma.hospitality.findUnique({
        where: {
          id
        }
      })
      return hospitality
  },eventsCard: (_, __, {prisma}) => {
      const events = prisma.events.findMany()
      return events
  },
  events: (_, {id}, {prisma}) => {
      const events = prisma.events.findUnique({
        where: {
          id
        }
      })
      return events
  },
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
    },
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
    addFashionDesign: async (_, {input}, {prisma}) => {
      const fashionDesign = prisma.fashionDesign.create({
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
      return fashionDesign
    },
    addLandscape: async (_, {input}, {prisma}) => {
  const landscape = prisma.landscape.create({
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
  return landscape
    },
    addMusic: async (_, {input}, {prisma}) => {
  const music = prisma.music.create({
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
  return music
    },
    addFilm: async (_, {input}, {prisma}) => {
  const film = prisma.film.create({
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
  return film
    },
    addGraphicDesign: async (_, {input}, {prisma}) => {
  const graphicDesign = prisma.graphicDesign.create({
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
  return graphicDesign
    },
    addInteriorDesign: async (_, {input}, {prisma}) => {
  const interiorDesign = prisma.interiorDesign.create({
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
  return interiorDesign
    },
    addDigitalMedia: async (_, {input}, {prisma}) => {
  const digitalMedia = prisma.digitalMedia.create({
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
  return digitalMedia
    },
    addActing: async (_, {input}, {prisma}) => {
  const acting = prisma.acting.create({
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
  return acting
    },
    addAnimation3D: async (_, {input}, {prisma}) => {
  const animation3D = prisma.animation3D.create({
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
  return animation3D
    },
    addDesign: async (_, {input}, {prisma}) => {
  const design = prisma.design.create({
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
  return design
    },
  updateFashionDesign: async (_, {input}, {prisma}) => {
      const fashionDesign = prisma.fashionDesign.update({
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
      return fashionDesign
    },
  updateLandscape: async (_, {input}, {prisma}) => {
  const landscape = prisma.landscape.update({
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
  return landscape
    },
  updateMusic: async (_, {input}, {prisma}) => {
  const music = prisma.music.update({
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
  return music
    },
  updateFilm: async (_, {input}, {prisma}) => {
  const film = prisma.film.update({
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
  return film
    },
  updateGraphicDesign: async (_, {input}, {prisma}) => {
  const graphicDesign = prisma.graphicDesign.update({
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
  return graphicDesign
    },
  updateInteriorDesign: async (_, {input}, {prisma}) => {
  const interiorDesign = prisma.interiorDesign.update({
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
  return interiorDesign
    },
  updateDigitalMedia: async (_, {input}, {prisma}) => {
  const digitalMedia = prisma.digitalMedia.update({
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
  return digitalMedia
    },
  updateActing: async (_, {input}, {prisma}) => {
  const acting = prisma.acting.update({
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
  return acting
    },
  updateAnimation3D: async (_, {input}, {prisma}) => {
  const animation3D = prisma.animation3D.update({
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
  return animation3D
    },
  updateDesign: async (_, {input}, {prisma}) => {
  const design = prisma.design.update({
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
  return design
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
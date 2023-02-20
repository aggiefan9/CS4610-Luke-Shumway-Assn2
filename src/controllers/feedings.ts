import express, { RequestHandler, Request } from "express";
import { PrismaClient, Session, Reptile, Feeding, User } from "@prisma/client";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
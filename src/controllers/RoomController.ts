import { Request, Response } from "express";
import { RoomRepository } from "../repositories/RoomRepository";

export class RoomController {
  async create(req: Request, res: Response){ // EndPoint Create
    const {name, description} = req.body

    try { 
      const newSubject = RoomRepository.create({name, description}) // recebe o dado da requisicao e armazena na variavel newSub...
      await RoomRepository.save(newSubject) // salva o dado no banco 
      return res.status(201).json(newSubject) // retorna status create e o dado

      console.log(newSubject);
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal Server Error'})
    }
    //return res.json('controller criado')
  }
}
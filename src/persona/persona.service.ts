import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Persona } from './schemas/persona.schema';
import mongoose from 'mongoose';

@Injectable()
export class PersonaService {
    constructor(
        @InjectModel (Persona.name)
        private personaModel: mongoose.Model<Persona>
    ){}

    async buscartodos(): Promise<Persona[]> {
        const personas = await this.personaModel.find();
        return personas;
    }

    async create(persona:Persona): Promise<Persona> {
        const res = await this.personaModel.create(persona);
        return res;
    }

    async buscar(cedula:number): Promise<Persona> {
        const res = await this.personaModel.findById(cedula);
        return res;
    }

    async modificar(cedula:number, persona:Persona): Promise<Persona> {
        const res = await this.personaModel.findByIdAndUpdate(cedula,persona, {
            new:true,
            runValidators: true,
        });
        return res;
    }

    async eliminar(cedula:number): Promise<Persona> {
        const res = await this.personaModel.findByIdAndDelete(cedula);
        return res;
    }
    
}

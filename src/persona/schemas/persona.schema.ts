import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({
    timestamps: true,
})

export class Persona{
    
    @Prop()
    cedula: number;

    @Prop()
    nombre: string;

    @Prop()
    apellido: string;

}

export const PersonaSchema = SchemaFactory.createForClass(Persona)

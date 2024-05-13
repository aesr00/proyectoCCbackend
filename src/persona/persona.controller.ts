import { Body,Controller,Get,Post,Param,Put,Delete } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { Persona } from './schemas/persona.schema';
import { createPersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/updae-persona.dto';



@Controller('personas')
export class PersonaController {
    constructor(private personaService: PersonaService) {}

    @Get('buscartodos')
    async buscartodos(): Promise<Persona[]> {
        return this.personaService.buscartodos()
    }

    @Post ('crear')
    async crear(
        @Body()
        Persona: createPersonaDto
    ): Promise<Persona> {
        return this.personaService.create(Persona)

    } 

    @Get('buscar:cedula')
    async buscar(
        @Param('cedula')
        cedula: number
    ): Promise<Persona> {
        return this.personaService.buscar(cedula)
    }

    @Put ('modificar:cedula')
    async modificar(
        @Param('cedula')
        cedula: number,
        @Body()
        Persona: UpdatePersonaDto
    ): Promise<Persona> {
        return this.personaService.modificar(cedula,Persona)

    }

    @Delete('buscar:cedula')
    async eliminar(
        @Param('cedula')
        cedula: number
    ): Promise<Persona> {
        return this.personaService.eliminar(cedula)
    }

}

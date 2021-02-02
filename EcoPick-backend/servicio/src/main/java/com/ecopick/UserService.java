package com.ecopick;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.List;

@Path("/user")
@Produces( MediaType.APPLICATION_JSON )
@Consumes( MediaType.APPLICATION_JSON )
public class UserService {

//
//    @POST
//    @Path("/add")
//    public UsuarioDto addUser ( UsuarioDto usuarioDto ) {
//
//        System.out.println("DATA: " + usuarioDto.toString());
//        System.out.println("PERSONA: " + usuarioDto.getFkPersona().toString());
//
//        UsuarioDto resultado = new UsuarioDto();
//
//        try{
//
////            INSERTAR USUARIO
//            UsuarioEntity usuario = new UsuarioEntity();
//            usuario.setEmail(usuarioDto.getEmail());
//            usuario.setPassword(usuarioDto.getPassword());
//            usuario.setEstado(usuarioDto.getEstado());
//
////            INSERTAR ROL
//            RolEntity rolEntity = new RolEntity();
//            DaoRol daoRol = new DaoRol();
//            rolEntity = daoRol.find(usuarioDto.getFkRol().get_id(), RolEntity.class);
//            usuario.setFk_Rol(rolEntity);
//
//
//            DaoUsuario daoUsuario = new DaoUsuario();
//            UsuarioEntity resul;
//            if (usuarioDto.getFkRol().get_id() == 4)
//            {
//
////                TODO - Realizar clase transformacion
//                PersonaEntity persona = new PersonaEntity();
//                persona.setDocumentoIdentidad(usuarioDto.getFkPersona().getDocumentoIdentidad());
//                persona.setPrimerNombre(usuarioDto.getFkPersona().getPrimerNombre());
//                persona.setSegundoNombre(usuarioDto.getFkPersona().getSegundoNombre());
//                persona.setPrimerApellido(usuarioDto.getFkPersona().getPrimerApellido());
//                persona.setSegundoApellido(usuarioDto.getFkPersona().getSegundoApellido());
//                persona.setFechaNacimiento(usuarioDto.getFkPersona().getFechaNacimiento());
//                persona.setNumero_personas_encasa(usuarioDto.getFkPersona().getNumero_personas_encasa());
//
//
////                TODO - Qutiar FINDs solamente crear objetos con el dato y ya
////            OBTENER GENERO
//                DaoGenero daoGenero = new DaoGenero();
//                GeneroEntity generoPersona = daoGenero.find(usuarioDto.getFkPersona().getFkGenero().get_id(), GeneroEntity.class);
//                persona.setFkGenero(generoPersona);
//
////            OBTENER EDO CIVIL
//                DaoEdoCivil daoEdoCivil = new DaoEdoCivil();
//                EdoCivilEntity edoCivilPersona = daoEdoCivil.find(usuarioDto.getFkPersona().getFkEdoCivil().get_id(), EdoCivilEntity.class);
//                persona.setFkEdoCivil(edoCivilPersona);
//
////            OBTENER LUGAR
//                DaoLugar daoLugar = new DaoLugar();
//                LugarEntity lugarPersona = daoLugar.find(usuarioDto.getFkPersona().getFkLugar().get_id(), LugarEntity.class);
//                persona.setFkLugar(lugarPersona);
//
//
////            OBTENER DISPONIBILIDAD
//                DisponibilidadDto dispo_inicial = usuarioDto.getFkPersona().getId_horario_inicial();
//                DisponibilidadDto dispo_final = usuarioDto.getFkPersona().getId_horario_final();
//
//                DaoDisponibilidad daoDisponibilidad = new DaoDisponibilidad();
//
//                DisponibilidadEntity disponibilidadEntity_i = daoDisponibilidad.find(dispo_inicial.get_id(), DisponibilidadEntity.class);
//                DisponibilidadEntity disponibilidadEntity_f = daoDisponibilidad.find(dispo_final.get_id(), DisponibilidadEntity.class);
//
//                persona.setFkDisponibilidadInicial(disponibilidadEntity_i);
//                persona.setFkDisponibilidadFinal(disponibilidadEntity_f);
//
////            INSERTAR PERSONA
//                DaoPersona daoPersona = new DaoPersona();
//                PersonaEntity personaResul = daoPersona.insert(persona);
//
//                usuario.setFk_Persona(personaResul);
//                resul = daoUsuario.insert(usuario);
//
////            INSERTAR HIJOS
//                for (int i = 0; i < usuarioDto.getFkPersona().getHijos().length; i++) {
//                    PersonaDto hijoDto = usuarioDto.getFkPersona().getHijos()[i];
//                    PersonaEntity hijo = new PersonaEntity();
//                    hijo.setDocumentoIdentidad(hijoDto.getDocumentoIdentidad());
//                    hijo.setPrimerNombre(hijoDto.getPrimerNombre());
//                    hijo.setSegundoNombre(hijoDto.getSegundoNombre());
//                    hijo.setPrimerApellido(hijoDto.getPrimerApellido());
//                    hijo.setSegundoApellido(hijoDto.getSegundoApellido());
//                    hijo.setFechaNacimiento(hijoDto.getFechaNacimiento());
//                    hijo.setFkPersona(personaResul);
//
//                    GeneroEntity generoHijo = daoGenero.find(hijoDto.getFkGenero().get_id(), GeneroEntity.class);
//                    hijo.setFkGenero(generoHijo);
//
//                    DaoPersona daoHijo = new DaoPersona();
//                    daoHijo.insert(hijo);
//
//                }
//
////            INSERTAR DISPOSITIVOS USADOS
//                for (int i = 0; i < usuarioDto.getFkPersona().getDispositivos().length; i++) {
//                    DaoDispositivo daoDispositivo = new DaoDispositivo();
//
//                    DispositivoEntity dispositivo = daoDispositivo.find((long) usuarioDto.getFkPersona().getDispositivos()[i], DispositivoEntity.class);
//
//                    PersonaDispositivoEntity personaDispositivo = new PersonaDispositivoEntity();
//                    personaDispositivo.setFkPersona(personaResul);
//                    personaDispositivo.setFkDispositivo(dispositivo);
//
//                    DaoPersonaDispositivo daoPersonaDispositivo = new DaoPersonaDispositivo();
//                    daoPersonaDispositivo.insert(personaDispositivo);
//
//                }
//
////            INSERTAR NUMERO DE TELEFONO
//                TelefonoEntity telefonoPersona = new TelefonoEntity();
//                telefonoPersona.setNumero(usuarioDto.getFkPersona().getTelefono());
//                telefonoPersona.setFkPersona(personaResul);
//                DaoTelefono daoTelefono = new DaoTelefono();
//                daoTelefono.insert(telefonoPersona);
//
////            OBTENER OCUPACION
//                DaoOcupacion daoOcupacion = new DaoOcupacion();
//                OcupacionEntity ocupacion = daoOcupacion.find(usuarioDto.getFkPersona().getOcupacion(), OcupacionEntity.class);
//
////            INSERTAR PERSONA OCUPACION
//                PersonaOcupacionEntity personaOcupacion = new PersonaOcupacionEntity();
//                personaOcupacion.setFkOcupacion(ocupacion);
//                personaOcupacion.setFkPersona(personaResul);
//
//                DaoPersonaOcupacion daoPersonaOcupacion = new DaoPersonaOcupacion();
//                daoPersonaOcupacion.insert(personaOcupacion);
//
//
////            OBTENER NIVEL ACADEMICO
//                DaoNivelAcademico daoNivelAcademico = new DaoNivelAcademico();
//                NivelAcademicoEntity nivelAcademicoPersona = daoNivelAcademico.find(usuarioDto.getFkPersona().getId_nivel_academico(), NivelAcademicoEntity.class);
//
////            INSERTAR NIVEL ACADEMICO
//                PersonaNvlacademicoEntity personaNvlacademico = new PersonaNvlacademicoEntity();
//                personaNvlacademico.setFkNivelAcademico(nivelAcademicoPersona);
//                personaNvlacademico.setFkPersona(personaResul);
//
//                DaoPersonaNvlacademico daoPersonaNvlacademico = new DaoPersonaNvlacademico();
//                daoPersonaNvlacademico.insert(personaNvlacademico);
//
//
//            }
//            else{
//                resul = daoUsuario.insert(usuario);
//            }
//
//
//            resultado.set_id(resul.get_id());
//
//        }
//        catch (Exception e) {
//            e.printStackTrace();
//        }
//
//        return resultado;
//
//    }

    @GET
    @Path("/{id}")
    public UsuarioDto getUser (@PathParam("id") long id){

        UsuarioDto resultado = new UsuarioDto();

        try {

            DaoUsuario daoUsuario = new DaoUsuario();
            UsuarioEntity usuario = daoUsuario.find(id, UsuarioEntity.class);

            resultado.set_id(usuario.get_id());
            resultado.setEmail(usuario.getEmail());
            resultado.setNombre(usuario.getNombre());
            resultado.setApellido(usuario.getApellido());
            resultado.setGenero(usuario.getGenero());
            resultado.setFechaNacimiento(usuario.getFechaNacimiento());
            resultado.setNumeroIdentificacion(usuario.getNumeroIdentificacion());
            resultado.setTelefono(usuario.getTelefono());
            resultado.setTipo(usuario.getTipo());

            LugarService lugarService = new LugarService();
            LugarDto usuarioLugar = lugarService.getSuperior(usuario.getFkLugar().get_id());
            resultado.setFkLugar(usuarioLugar);

        }
        catch (Exception e){
            e.printStackTrace();
        }

        return resultado;

    }

    @GET
    @Path("/")
    public List<UsuarioDto> getUser (){

        List<UsuarioDto> resultados = new ArrayList<>();

        try {

            DaoUsuario daoUsuario = new DaoUsuario();
            List<UsuarioEntity> usuarios = daoUsuario.findAll( UsuarioEntity.class);

            for (int u = 0; u < usuarios.size(); u++) {

                UsuarioDto resultado = new UsuarioDto();
                UsuarioEntity usuario = usuarios.get(u);

                resultado.set_id(usuario.get_id());
                resultado.setEmail(usuario.getEmail());

                resultados.add(resultado);
            }
        }
        catch (Exception e){
            e.printStackTrace();
        }

//        System.out.println("RESPUESTA: "+resultados.toString());
        return resultados;

    }

    @PUT
    @Path("/edit/{id}")
    public Response editUser(@PathParam("id") long id, UsuarioDto usuarioDto){

        DaoUsuario usuarioDao = new DaoUsuario();
        UsuarioEntity usuarioOld = usuarioDao.find(id, UsuarioEntity.class);

        if (usuarioOld != null){

            if (!usuarioDto.getContraseña().equals("")) {
                usuarioOld.setContraseña(usuarioDto.getContraseña());
            }

            usuarioOld.setEmail(usuarioDto.getEmail());
            usuarioOld.setNombre(usuarioDto.getNombre());
            usuarioOld.setApellido(usuarioDto.getApellido());
            usuarioOld.setGenero(usuarioDto.getGenero());
            usuarioOld.setFechaNacimiento(usuarioDto.getFechaNacimiento());
            usuarioOld.setNumeroIdentificacion(usuarioDto.getNumeroIdentificacion());
            usuarioOld.setTelefono(usuarioDto.getTelefono());

            usuarioDao.update(usuarioOld);

            return Response.ok().entity(usuarioOld).build();

        }
        else
            return Response.status(Response.Status.NOT_FOUND).build();
    }

}

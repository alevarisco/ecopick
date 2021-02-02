package com.ecopick;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/sesion")
@Produces( MediaType.APPLICATION_JSON )
@Consumes( MediaType.APPLICATION_JSON )
public class SesionService {

    @POST
    @Path("/register")
    public UsuarioDto addRegistro ( UsuarioDto usuarioDto ) {

        System.out.println("DATA: " + usuarioDto.toString());

        UsuarioDto resultado = new UsuarioDto();

        try {

//            INSERTAR USUARIO
            UsuarioEntity usuario = new UsuarioEntity();

            usuario.setEmail(usuarioDto.getEmail());
            usuario.setContraseña(usuarioDto.getContraseña());
            usuario.setNombre(usuarioDto.getNombre());
            usuario.setApellido(usuarioDto.getApellido());
            usuario.setGenero(usuarioDto.getGenero());
            usuario.setFechaNacimiento(usuarioDto.getFechaNacimiento());
            usuario.setNumeroIdentificacion(usuarioDto.getNumeroIdentificacion());
            usuario.setTelefono(usuarioDto.getTelefono());
            usuario.setRespuestaSeguridad(usuarioDto.getRespuestaSeguridad());
            usuario.setTipo(usuarioDto.getTipo());

            DaoLugar daoLugar = new DaoLugar();
            LugarEntity lugarEntity = daoLugar.find(usuarioDto.getFkLugar().get_id(), LugarEntity.class);
            usuario.setFkLugar(lugarEntity);

            DaoPreguntaSeguridad daoPreguntaSeguridad = new DaoPreguntaSeguridad();
            PreguntaseguridadEntity preguntaseguridadEntity = daoPreguntaSeguridad.find(usuarioDto.getFkPregunta().get_id(), PreguntaseguridadEntity.class);
            usuario.setFkPregunta(preguntaseguridadEntity);

            DaoUsuario daoUsuario = new DaoUsuario();
            UsuarioEntity resul = daoUsuario.insert(usuario);

            resultado.set_id(resul.get_id());

        }
        catch (Exception e) {
            e.printStackTrace();
        }


        return resultado;

    }

    @POST
    @Path("/validRegister")
    public Response checkRegistro ( UsuarioDto usuarioDto ) {

        DaoUsuario daoUsuario = new DaoUsuario();
        List<UsuarioEntity> usuario = daoUsuario.emailExist(usuarioDto.getEmail());


        if (usuario.size() == 0)
            return Response.status(Response.Status.OK).build();
        else
            return Response.status(Response.Status.FOUND).build();


    }

}

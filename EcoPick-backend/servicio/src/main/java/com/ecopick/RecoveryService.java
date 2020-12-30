package com.ecopick;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

@Path("/recovery")
@Produces( MediaType.APPLICATION_JSON )
@Consumes( MediaType.APPLICATION_JSON )
public class RecoveryService {


    @POST
    @Path("/{email}")
    public PreguntaSeguridadDto correoRecuperar(@PathParam("email") String email){
        DaoUsuario usuarioDao = new DaoUsuario();
        PreguntaSeguridadDto pregunta = new PreguntaSeguridadDto();

        List<PreguntaseguridadEntity> preguntas = usuarioDao.getPregunta(email);
        if (!preguntas.isEmpty()){
            pregunta.setPregunta(preguntas.get(0).getPregunta());
        }

        return pregunta;
    }

    @POST
    @Path("/{email}/{respuesta}")
    public UsuarioDto respuestaCheck(@PathParam("email") String email, @PathParam("respuesta") String respuesta){

        UsuarioDto user = new UsuarioDto();
        DaoUsuario daoUsuario = new DaoUsuario();

        List<UsuarioEntity> usuarios = daoUsuario.getRespuesta(email, respuesta);
        if (!usuarios.isEmpty()){
            user.set_id(usuarios.get(0).get_id());
        }

        return user;

    }

    @POST
    @Path("/{email}/pass/{newPassword}")
    public UsuarioDto changePassword(@PathParam("email") String email,@PathParam("newPassword") String password){
        DaoUsuario usuarioDao = new DaoUsuario();
        UsuarioDto usuario = new UsuarioDto();

        UsuarioEntity user = usuarioDao.findUserByEmail(email);
        if (user != null) {
            user.setContraseña(password);
            usuarioDao.update(user);

            usuario.set_id(user.get_id());
        }

        return usuario;

    }

    @GET
    @Path("/questions")
    public List<PreguntaSeguridadDto> getPreguntas(){
        DaoPreguntaSeguridad daoPreguntaSeguridad = new DaoPreguntaSeguridad();

        List<PreguntaSeguridadDto> resultado = new ArrayList<>();

        List<PreguntaseguridadEntity> preguntas = daoPreguntaSeguridad.getPreguntas();
        for (int i = 0; i < preguntas.size(); i++) {
            PreguntaseguridadEntity pregunta = preguntas.get(i);

            PreguntaSeguridadDto resPregunta = new PreguntaSeguridadDto();
            resPregunta.set_id(pregunta.get_id());
            resPregunta.setPregunta(pregunta.getPregunta());

            resultado.add(resPregunta);
        }

        return resultado;

    }

//    @POST
//    @Path("/{hash}/pass/{newPassword}")
//    public void changePassword_old(@PathParam("hash") String hash,@PathParam("newPassword") String password){
//        DaoUsuario usuarioDao = new DaoUsuario();
//        DaoToken tokenDao = new DaoToken();
//
//        TokenEntity token = tokenDao.getTokenByHASH(hash,false);
//
//        UsuarioEntity user = usuarioDao.find(token.getFkUsuario().get_id(),UsuarioEntity.class);
//        user.setContraseña(password);
//
//        usuarioDao.update(user);
//        tokenDao.deleteTokenReset(user.get_id());
//    }

}

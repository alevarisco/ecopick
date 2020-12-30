package com.ecopick;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.Path;

@Path("/login")
@Produces( MediaType.APPLICATION_JSON )
@Consumes( MediaType.APPLICATION_JSON )
public class LoginService {

    @POST
    @Path("/authenticate")
    public UsuarioDto currentUser(UsuarioDto usuarioDto) {
        boolean authLDAP;

        DaoUsuario daoUsuario = new DaoUsuario();
        DaoToken daoToken = new DaoToken();

        UsuarioDto authenticatedUser = new UsuarioDto();
        UsuarioEntity usuarioEntity = daoUsuario.findUserByEmail(usuarioDto.getEmail());

        if (usuarioEntity != null) {

            System.out.println("USUARIO: "+usuarioEntity.toString());
            System.out.println("DTO: "+usuarioDto.toString());
            if (usuarioEntity.getContraseña().equals(usuarioDto.getContraseña())) {
                String token = null;
                TokenEntity tokenEntity = null;

                /* If user doesn't exist */

                try {
                    tokenEntity = daoToken.getUserToken(usuarioEntity.get_id());
                } catch (NullPointerException e) {
                    return null;
                }


                token = daoToken.getAlphaNumericString(25);
                if (tokenEntity != null) {
                    tokenEntity.setToken_login(token);
                    daoToken.update(tokenEntity);
                } else {
                    tokenEntity = new TokenEntity();
                    tokenEntity.setFkUsuario(usuarioEntity);
                    tokenEntity.setToken_login(token);
                    daoToken.insert(tokenEntity);
                }

                authenticatedUser.setTokenLogin(token);
                authenticatedUser.set_id(usuarioEntity.get_id());
            }
            else {
                authenticatedUser.set_id(-2);
            }
        }
        else {
            authenticatedUser.set_id(-1);
        }

        return authenticatedUser;
        
    }

    @POST
    @Path("/logout/{hash}")
    public void logout(@PathParam("hash") String hash){
        DaoUsuario usuarioDao = new DaoUsuario();
        DaoToken tokenDao = new DaoToken();

        TokenEntity currentToken = tokenDao.getTokenByHASH(hash,true);

        tokenDao.deleteTokenLogin(currentToken.getFkUsuario().get_id());
    }

}

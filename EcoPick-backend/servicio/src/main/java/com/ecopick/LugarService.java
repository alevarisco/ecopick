package com.ecopick;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.ArrayList;
import java.util.List;

@Path( "/lugar" )
@Produces( MediaType.APPLICATION_JSON )
@Consumes( MediaType.APPLICATION_JSON )
public class LugarService {

    @PUT
    @Path("/add")
    public LugarDto addLugar ( LugarDto lugarDto ) {

        System.out.println("DATA: " + lugarDto.toString());

        LugarDto resultado = new LugarDto();
        try {

            DaoLugar daoLugar = new DaoLugar();

            LugarEntity lugar = new LugarEntity();
            lugar.setNombre(lugarDto.getNombre());
            lugar.setTipo(lugarDto.getTipo());

            DaoLugar daoLugarPadre = new DaoLugar();
            LugarEntity lugarPadre = daoLugarPadre.find(lugarDto.getFkLugar().get_id(), LugarEntity.class);

            lugar.setFkLugar(lugarPadre);

            LugarEntity resul = daoLugar.insert(lugar);
            resultado.set_id(resul.get_id());

        }
        catch (Exception e){
            e.printStackTrace();
        }

        return resultado;

    }

    @GET
    @Path( "/consulta/{id}" )
    public List<LugarDto> consulta(@PathParam("id") long id)
    {
        List<LugarDto> resultado = new ArrayList<>();

        try {
            DaoLugar daoLugar = new DaoLugar();
            List<LugarEntity> lugares = daoLugar.findTop(id);

            for (int i = 0; i < lugares.size(); i++){
                LugarEntity lugar = lugares.get(i);

                LugarDto resul_dto = new LugarDto();

                resul_dto.set_id(lugar.get_id());
                resul_dto.setNombre(lugar.getNombre());
                resul_dto.setTipo(lugar.getTipo());

                resultado.add(resul_dto);
            }

        }
        catch (Exception e){
            e.printStackTrace();
        }


        return resultado;
    }

    @GET
    @Path("/consulta/all/{id}")
    public LugarDto consultaAll(@PathParam("id") long id)
    {
        return getSuperior(id);
    }

    public LugarDto getSuperior(long id){

        DaoLugar daoLugar = new DaoLugar();
        LugarEntity lugar = daoLugar.find(id, LugarEntity.class);

        LugarDto resultado = new LugarDto();

        try {
            if (lugar.getFkLugar() == null) {
                resultado.set_id(lugar.get_id());
                resultado.setNombre(lugar.getNombre());
                resultado.setTipo(lugar.getTipo());


                return resultado;

            }
            else {
                resultado.set_id(lugar.get_id());
                resultado.setNombre(lugar.getNombre());
                resultado.setTipo(lugar.getTipo());


//                LLAMO A LA RECURSIVIDAD
                resultado.setFkLugar(getSuperior(lugar.getFkLugar().get_id()));

                return resultado;
            }
        }
        catch (Exception e){
            e.printStackTrace();
            return null;
        }

    }

}

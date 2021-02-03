package com.ecopick;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Objects;

@Path("/pedido")
@Produces( MediaType.APPLICATION_JSON )
@Consumes( MediaType.APPLICATION_JSON )
public class PedidoService {

    @POST
    @Path("/add")
    public RespuestaDto<PedidoDto> addPedido (PedidoDto pedidoDto)
    {

        PedidoDto resultado = new PedidoDto();
        RespuestaDto<PedidoDto> respuesta = new RespuestaDto<>();

        try{

            PedidoEntity pedido = new PedidoEntity();
            pedido.setProducto(pedidoDto.getProducto());
            pedido.setCantidad(pedidoDto.getCantidad());
            pedido.setDescripcion(pedidoDto.getDescripcion());
            pedido.setFechaPublicacion(new java.sql.Date(Calendar.getInstance().getTimeInMillis()));

            DaoUsuario daoUsuario = new DaoUsuario();
            pedido.setFkPublica(daoUsuario.find((long) pedidoDto.getFkPublica(), UsuarioEntity.class) );

            DaoLugar daoLugar = new DaoLugar();
            pedido.setFkLugar(daoLugar.find((long) pedidoDto.getFkLugar(), LugarEntity.class) );

            DaoPedido daoPedido = new DaoPedido();
            resultado.set_id(daoPedido.insert(pedido).get_id());

            respuesta.setCodigo(0);
            respuesta.setEstado( "OK" );
            respuesta.setObjeto( resultado );
        }
        catch (Exception e){

            e.printStackTrace();
            respuesta.setCodigo(-1);
            respuesta.setEstado( "ERROR" );
            respuesta.setMensaje( e.getMessage() );
        }

        return respuesta;
    }

    @GET
    @Path("/{id}")
    public RespuestaDto<PedidoDto> getPedidoInfo(@PathParam("id") long id)
    {

        PedidoDto resultado = new PedidoDto();
        RespuestaDto<PedidoDto> respuesta = new RespuestaDto<>();

        try {

            DaoPedido daoPedido = new DaoPedido();
            PedidoEntity pedido = daoPedido.find(id, PedidoEntity.class);

            resultado.set_id(pedido.get_id());
            resultado.setProducto(pedido.getProducto());
            resultado.setCantidad(pedido.getCantidad());
            resultado.setDescripcion(pedido.getDescripcion());
            resultado.setStatus(pedido.getStatus());
            resultado.setFechaPublicacion(pedido.getFechaPublicacion());

            if (Objects.nonNull(pedido.getFechaReclamo())) {
                resultado.setFechaReclamo(pedido.getFechaReclamo());
            }

            resultado.setStatus(pedido.getStatus());

            resultado.setFkPublica((int) pedido.getFkPublica().get_id());
            if (Objects.nonNull(pedido.getFkReclama())){
                resultado.setFkReclama((int) pedido.getFkReclama().get_id());
            }
            resultado.setFkLugar((int) pedido.getFkLugar().get_id());


            respuesta.setCodigo(0);
            respuesta.setEstado( "OK" );
            respuesta.setObjeto( resultado );
//            LugarService lugarService = new LugarService();
//            LugarDto usuarioLugar = lugarService.getSuperior(pedido.getFkLugar().get_id());
//            resultado.setFkLugar(usuarioLugar);

        }
        catch (NullPointerException e)
        {
            e.printStackTrace();
            respuesta.setCodigo(-1);
            respuesta.setEstado( "ERROR" );
            respuesta.setMensaje( "El producto solicitado no existe." );
        }
        catch (Exception e)
        {
            e.printStackTrace();
            respuesta.setCodigo(-1);
            respuesta.setEstado( "ERROR" );
            respuesta.setMensaje( e.getMessage() );
        }

        return respuesta;
    }

    @GET
    @Path("/")
    public RespuestaDto<List<PedidoDto>> getAll()
    {

        List<PedidoDto> resultado = new ArrayList<>();
        RespuestaDto<List<PedidoDto>> respuesta = new RespuestaDto<>();

        try {

            DaoPedido daoPedido = new DaoPedido();
            List<PedidoEntity> pedidos = daoPedido.findAll();

            for (PedidoEntity pedido :
                    pedidos) {

                PedidoDto temp = new PedidoDto();
                temp.set_id(pedido.get_id());
                temp.setProducto(pedido.getProducto());
                temp.setCantidad(pedido.getCantidad());
                temp.setDescripcion(pedido.getDescripcion());
                temp.setStatus(pedido.getStatus());
                temp.setFechaPublicacion(pedido.getFechaPublicacion());

                if (Objects.nonNull(pedido.getFechaReclamo())) {
                    temp.setFechaReclamo(pedido.getFechaReclamo());
                }

                temp.setStatus(pedido.getStatus());

                temp.setFkPublica((int) pedido.getFkPublica().get_id());
                if (Objects.nonNull(pedido.getFkReclama())){
                    temp.setFkReclama((int) pedido.getFkReclama().get_id());
                }

                temp.setFkLugar((int) pedido.getFkLugar().get_id());

                resultado.add(temp);
            }

//            resultado.set_id(pedido.get_id());
//            resultado.setProducto(pedido.getProducto());
//            resultado.setCantidad(pedido.getCantidad());
//            resultado.setDescripcion(pedido.getDescripcion());
//            resultado.setStatus(pedido.getStatus());
//            resultado.setFechaPublicacion(pedido.getFechaPublicacion());
//            resultado.setFechaReclamo(pedido.getFechaReclamo());
//            resultado.setStatus(pedido.getStatus());
//
//            resultado.setFkPublica((int) pedido.getFkPublica().get_id());
//            resultado.setFkReclama((int) pedido.getFkReclama().get_id());
//            resultado.setFkLugar((int) pedido.getFkLugar().get_id());

            respuesta.setCodigo(0);
            respuesta.setEstado( "OK" );
            respuesta.setObjeto( resultado );

//            LugarService lugarService = new LugarService();
//            LugarDto usuarioLugar = lugarService.getSuperior(pedido.getFkLugar().get_id());
//            resultado.setFkLugar(usuarioLugar);

        }
        catch (Exception e)
        {
            e.printStackTrace();
            respuesta.setCodigo(-1);
            respuesta.setEstado( "ERROR" );
            respuesta.setMensaje( e.getMessage() );
        }

        return respuesta;
    }

    @GET
    @Path("/{type}/{id}")
    public RespuestaDto<List<PedidoDto>> getPedidosInfo(@PathParam("type") long type, @PathParam("id") long id)
    {

        List<PedidoDto> resultado = new ArrayList<>();
        RespuestaDto<List<PedidoDto>> respuesta = new RespuestaDto<>();

        try {

            DaoPedido daoPedido = new DaoPedido();
            List<PedidoEntity> pedidos = daoPedido.getPedidos(type, id);

            for (PedidoEntity pedido :
                    pedidos) {

                PedidoDto temp = new PedidoDto();
                temp.set_id(pedido.get_id());
                temp.setProducto(pedido.getProducto());
                temp.setCantidad(pedido.getCantidad());
                temp.setDescripcion(pedido.getDescripcion());
                temp.setStatus(pedido.getStatus());
                temp.setFechaPublicacion(pedido.getFechaPublicacion());

                if (Objects.nonNull(pedido.getFechaReclamo())) {
                    temp.setFechaReclamo(pedido.getFechaReclamo());
                }

                temp.setStatus(pedido.getStatus());

                temp.setFkPublica((int) pedido.getFkPublica().get_id());
                if (Objects.nonNull(pedido.getFkReclama())){
                    temp.setFkReclama((int) pedido.getFkReclama().get_id());
                }

                temp.setFkLugar((int) pedido.getFkLugar().get_id());

                resultado.add(temp);
            }

//            resultado.set_id(pedido.get_id());
//            resultado.setProducto(pedido.getProducto());
//            resultado.setCantidad(pedido.getCantidad());
//            resultado.setDescripcion(pedido.getDescripcion());
//            resultado.setStatus(pedido.getStatus());
//            resultado.setFechaPublicacion(pedido.getFechaPublicacion());
//            resultado.setFechaReclamo(pedido.getFechaReclamo());
//            resultado.setStatus(pedido.getStatus());
//
//            resultado.setFkPublica((int) pedido.getFkPublica().get_id());
//            resultado.setFkReclama((int) pedido.getFkReclama().get_id());
//            resultado.setFkLugar((int) pedido.getFkLugar().get_id());

            respuesta.setCodigo(0);
            respuesta.setEstado( "OK" );
            respuesta.setObjeto( resultado );

//            LugarService lugarService = new LugarService();
//            LugarDto usuarioLugar = lugarService.getSuperior(pedido.getFkLugar().get_id());
//            resultado.setFkLugar(usuarioLugar);

        }
        catch (Exception e)
        {
            e.printStackTrace();
            respuesta.setCodigo(-1);
            respuesta.setEstado( "ERROR" );
            respuesta.setMensaje( e.getMessage() );
        }

        return respuesta;
    }

    @PUT
    @Path("/edit/{id}")
    public RespuestaDto<Boolean> editPedido(@PathParam("id") long id, PedidoDto pedidoDto)
    {

        DaoPedido pedidoDao = new DaoPedido();
        RespuestaDto<Boolean> respuesta = new RespuestaDto<>();

        try {
            PedidoEntity pedidoOld = pedidoDao.find(id, PedidoEntity.class);

            if (pedidoOld != null) {


                switch (pedidoDto.getStatus()){
                    case 0:
                        pedidoOld.setProducto(pedidoDto.getProducto());
                        pedidoOld.setDescripcion(pedidoDto.getDescripcion());
                        pedidoOld.setCantidad(pedidoDto.getCantidad());

                        DaoLugar daoLugar = new DaoLugar();
                        pedidoOld.setFkLugar(daoLugar.find((long) pedidoDto.getFkLugar(), LugarEntity.class));

                        respuesta.setCodigo(0);
                        respuesta.setEstado("OK");
                        respuesta.setObjeto(true);
                        respuesta.setMensaje("El producto se ha actualizado exitosamente.");
                        break;
                    case 1:

                        pedidoOld.setStatus(pedidoDto.getStatus());
                        DaoUsuario daoUsuario = new DaoUsuario();
                        pedidoOld.setFkReclama(daoUsuario.find((long) pedidoDto.getFkReclama(), UsuarioEntity.class));
                        pedidoOld.setFechaReclamo(new java.sql.Date(Calendar.getInstance().getTimeInMillis()));

                        respuesta.setCodigo(0);
                        respuesta.setEstado("OK");
                        respuesta.setObjeto(true);
                        respuesta.setMensaje("El pedido se ha reclamado exitosamente.");
                        break;
                    case 2:

                        if ( pedidoOld.getFkReclama().get_id() == pedidoDto.getFkReclama() ){

                            pedidoOld.setStatus(0);
                            pedidoOld.setFkReclama(null);
                            pedidoOld.setFechaReclamo(null);

                            respuesta.setCodigo(0);
                            respuesta.setEstado("OK");
                            respuesta.setObjeto(true);
                            respuesta.setMensaje("Su pedido ha sido cancelado.");
                        }
                        else {

                            respuesta.setCodigo(-1);
                            respuesta.setEstado("ERROR");
                            respuesta.setObjeto(false);
                            respuesta.setMensaje("Este pedido no corresponde a este usuario.");
                        }

                        break;

                }


                pedidoDao.update(pedidoOld);



            } else {
                respuesta.setCodigo(-1);
                respuesta.setEstado("ERROR");
                respuesta.setMensaje("El pedido solicitado no existe.");
                respuesta.setObjeto(false);
            }
        }
        catch (NullPointerException e){

            respuesta.setCodigo(-1);
            respuesta.setEstado("ERROR");
            respuesta.setMensaje("El pedido solicitado no existe.");
            respuesta.setObjeto(false);
        }

        return respuesta;
    }

    @DELETE
    @Path("/delete/{id}")
    public RespuestaDto<Boolean> removePedido(@PathParam("id") long id, PedidoDto pedidoDto)
    {

        DaoPedido pedidoDao = new DaoPedido();
        RespuestaDto<Boolean> respuesta = new RespuestaDto<>();
        try {
            PedidoEntity pedidoOld = pedidoDao.find(id, PedidoEntity.class);


            if (pedidoOld != null) {

                if (!Objects.nonNull(pedidoOld.getFkReclama())) {
                    if (pedidoOld.getFkPublica().get_id() == pedidoDto.getFkPublica()) {
                        pedidoDao.delete(pedidoOld);

                        respuesta.setCodigo(0);
                        respuesta.setEstado("OK");
                        respuesta.setMensaje("El pedido se ha eliminado exitosamente.");
                        respuesta.setObjeto(true);
                    } else {

                        respuesta.setCodigo(-1);
                        respuesta.setEstado("ERROR");
                        respuesta.setMensaje("Este pedido no corresponde a este usuario.");
                        respuesta.setObjeto(false);

                    }
                }else {

                    respuesta.setCodigo(-1);
                    respuesta.setEstado("ERROR");
                    respuesta.setMensaje("Este pedido ya se encuentra reclamado.");
                    respuesta.setObjeto(false);

                }

            } else {
                respuesta.setCodigo(-1);
                respuesta.setEstado("ERROR");
                respuesta.setMensaje("El pedido solicitado no existe.");
                respuesta.setObjeto(false);
            }
        }
        catch (NullPointerException e){

            respuesta.setCodigo(-1);
            respuesta.setEstado("ERROR");
            respuesta.setMensaje("El pedido solicitado no existe.");
            respuesta.setObjeto(false);
        }

        return respuesta;
    }

}

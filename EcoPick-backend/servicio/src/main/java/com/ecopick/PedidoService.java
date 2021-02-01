package com.ecopick;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.sql.Date;
import java.util.Calendar;

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
            resultado.setFechaReclamo(pedido.getFechaReclamo());
            resultado.setStatus(pedido.getStatus());

            resultado.setFkPublica((int) pedido.getFkPublica().get_id());
            resultado.setFkReclama((int) pedido.getFkReclama().get_id());
            resultado.setFkLugar((int) pedido.getFkLugar().get_id());


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
    public RespuestaDto<PedidoDto> getPedidoInfo(@PathParam("type") long type, @PathParam("id") long id)
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
            resultado.setFechaReclamo(pedido.getFechaReclamo());
            resultado.setStatus(pedido.getStatus());

            resultado.setFkPublica((int) pedido.getFkPublica().get_id());
            resultado.setFkReclama((int) pedido.getFkReclama().get_id());
            resultado.setFkLugar((int) pedido.getFkLugar().get_id());


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
    public RespuestaDto<PedidoDto> editPedido(@PathParam("id") long id, PedidoDto pedidoDto)
    {

        DaoPedido pedidoDao = new DaoPedido();
        PedidoEntity pedidoOld = pedidoDao.find(id, PedidoEntity.class);

        RespuestaDto<PedidoDto> respuesta = new RespuestaDto<>();

        if (pedidoOld != null){

            pedidoOld.setProducto(pedidoDto.getProducto());
            pedidoOld.setDescripcion(pedidoDto.getDescripcion());
            pedidoOld.setCantidad(pedidoDto.getCantidad());

            if (pedidoDto.getStatus() == 1) {

                pedidoOld.setStatus(pedidoDto.getStatus());
                DaoUsuario daoUsuario = new DaoUsuario();
                pedidoOld.setFkReclama(daoUsuario.find((long) pedidoDto.getFkReclama(), UsuarioEntity.class) );
                pedidoOld.setFechaReclamo((Date) Calendar.getInstance().getTime());

                respuesta.setMensaje( "El pedido se ha reclamado exitosamente." );
            }
            else {
                respuesta.setMensaje( "El pedido se ha actualizado exitosamente." );
            }

            DaoLugar daoLugar = new DaoLugar();
            pedidoOld.setFkLugar(daoLugar.find((long) pedidoDto.getFkLugar(), LugarEntity.class) );

            pedidoDao.update(pedidoOld);

            respuesta.setCodigo(0);
            respuesta.setEstado( "OK" );


        }
        else{
            respuesta.setCodigo(-1);
            respuesta.setEstado( "ERROR" );
            respuesta.setMensaje( "El pedido solicitado no existe." );
        }

        return respuesta;
    }

    @DELETE
    @Path("/delete/{id}")
    public RespuestaDto<PedidoDto> removePedido(@PathParam("id") long id)
    {

        DaoPedido pedidoDao = new DaoPedido();
        PedidoEntity pedidoOld = pedidoDao.find(id, PedidoEntity.class);

        RespuestaDto<PedidoDto> respuesta = new RespuestaDto<>();

        if (pedidoOld != null){

            pedidoDao.delete(pedidoOld);

            respuesta.setCodigo(0);
            respuesta.setEstado( "OK" );
            respuesta.setMensaje( "El pedido se ha eliminado exitosamente." );

        }
        else{
            respuesta.setCodigo(-1);
            respuesta.setEstado( "ERROR" );
            respuesta.setMensaje( "El pedido solicitado no existe." );
        }

        return respuesta;
    }

}

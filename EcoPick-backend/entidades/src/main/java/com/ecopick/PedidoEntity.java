package com.ecopick;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "pedido", schema = "ecopick", catalog = "")
public class PedidoEntity extends BaseEntity{

    @Basic
    @Column(name = "producto")
    private String producto;
    @Basic
    @Column(name = "cantidad")
    private int cantidad;
    @Basic
    @Column(name = "descripcion")
    private String descripcion;
    @Basic
    @Column(name = "fecha_publicacion")
    private Date fechaPublicacion;
    @Basic
    @Column(name = "fecha_reclamo")
    private Date fechaReclamo;
    @Basic
    @Column(name = "status")
    private int status;
    @ManyToOne
    @JoinColumn(name = "fk_publica")
    private UsuarioEntity fkPublica;
    @ManyToOne
    @JoinColumn(name = "fk_reclama")
    private UsuarioEntity fkReclama;
    @ManyToOne
    @JoinColumn(name = "fk_lugar")
    private LugarEntity fkLugar;

    public String getProducto() {
        return producto;
    }

    public void setProducto(String producto) {
        this.producto = producto;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Date getFechaPublicacion() {
        return fechaPublicacion;
    }

    public void setFechaPublicacion(Date fechaPublicacion) {
        this.fechaPublicacion = fechaPublicacion;
    }

    public Date getFechaReclamo() {
        return fechaReclamo;
    }

    public void setFechaReclamo(Date fechaReclamo) {
        this.fechaReclamo = fechaReclamo;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public UsuarioEntity getFkPublica() {
        return fkPublica;
    }

    public void setFkPublica(UsuarioEntity fkPublica) {
        this.fkPublica = fkPublica;
    }

    public UsuarioEntity getFkReclama() {
        return fkReclama;
    }

    public void setFkReclama(UsuarioEntity fkReclama) {
        this.fkReclama = fkReclama;
    }

    public LugarEntity getFkLugar() {
        return fkLugar;
    }

    public void setFkLugar(LugarEntity fkLugar) {
        this.fkLugar = fkLugar;
    }

    @Override
    public String toString() {
        return "PedidoEntity{" +
                "producto='" + producto + '\'' +
                ", cantidad=" + cantidad +
                ", descripcion='" + descripcion + '\'' +
                ", fechaPublicacion=" + fechaPublicacion +
                ", fechaReclamo=" + fechaReclamo +
                ", status=" + status +
                ", fkPublica=" + fkPublica +
                ", fkReclama=" + fkReclama +
                ", fkLugar=" + fkLugar +
                '}';
    }
}

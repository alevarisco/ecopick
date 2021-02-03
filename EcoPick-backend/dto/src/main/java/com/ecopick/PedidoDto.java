package com.ecopick;

import javax.json.bind.annotation.JsonbDateFormat;
import java.sql.Date;

public class PedidoDto extends BaseDto {

    private String producto;
    private int cantidad;
    private String descripcion;
    @JsonbDateFormat(value = "dd/MM/yyyy")
    private Date fechaPublicacion;
    @JsonbDateFormat(value = "dd/MM/yyyy")
    private Date fechaReclamo;
    private int status;
    private int fkPublica;
    private int fkReclama;
    private int fkLugar;

    public PedidoDto() {
    }

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

    public int getFkPublica() {
        return fkPublica;
    }

    public void setFkPublica(int fkPublica) {
        this.fkPublica = fkPublica;
    }

    public int getFkReclama() {
        return fkReclama;
    }

    public void setFkReclama(int fkReclama) {
        this.fkReclama = fkReclama;
    }

    public int getFkLugar() {
        return fkLugar;
    }

    public void setFkLugar(int fkLugar) {
        this.fkLugar = fkLugar;
    }

    @Override
    public String toString() {
        return "PedidoDto{" +
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

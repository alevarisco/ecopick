package com.ecopick;

import javax.persistence.*;
import javax.ws.rs.Consumes;
import java.util.Objects;

@Entity
@Table(name = "lugar", schema = "ecopick", catalog = "")
public class LugarEntity extends BaseEntity{
    private String nombre;
    private int tipo;
    @ManyToOne
    @JoinColumn(name = "fk_lugar")
    private LugarEntity fkLugar;

    @Basic
    @Column(name = "nombre")
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Basic
    @Column(name = "tipo")
    public int getTipo() {
        return tipo;
    }

    public void setTipo(int tipo) {
        this.tipo = tipo;
    }

    public LugarEntity getFkLugar() {
        return fkLugar;
    }

    public void setFkLugar(LugarEntity fkLugar) {
        this.fkLugar = fkLugar;
    }

}

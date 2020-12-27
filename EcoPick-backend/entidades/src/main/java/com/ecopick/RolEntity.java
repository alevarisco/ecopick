package com.ecopick;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "rol", schema = "ecopick", catalog = "")
public class RolEntity extends BaseEntity{
    private String nombre;

    public RolEntity(long id) {
        super(id);
    }

    public RolEntity() {

    }

    @Basic
    @Column(name = "nombre")
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "RolEntity{" +
                "nombre='" + nombre + '\'' +
                '}';
    }
}

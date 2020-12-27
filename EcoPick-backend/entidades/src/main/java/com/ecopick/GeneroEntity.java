package com.ecopick;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "genero", schema = "ecopick", catalog = "")
public class GeneroEntity extends BaseEntity{
    private String nombre;

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
        return "GeneroEntity{" +
                "nombre='" + nombre + '\'' +
                '}';
    }
}

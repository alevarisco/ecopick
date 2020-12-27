package com.ecopick;

public class GeneroDto extends BaseDto {
    private String nombre;

    public GeneroDto() {
    }

    public GeneroDto(long id)  {
        super(id);
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "GeneroDto{" +
                "nombre='" + nombre + '\'' +
                '}';
    }
}

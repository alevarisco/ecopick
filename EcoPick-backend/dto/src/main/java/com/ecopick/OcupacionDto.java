package com.ecopick;

public class OcupacionDto extends BaseDto {
    private String nombre;

    public OcupacionDto() {
    }

    public OcupacionDto(long id)  {
        super(id);
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}

package com.ecopick;

public class DispositivoDto extends BaseDto {

    private String nombre;

    public DispositivoDto() {
    }

    public DispositivoDto(long id)  {
        super(id);
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}

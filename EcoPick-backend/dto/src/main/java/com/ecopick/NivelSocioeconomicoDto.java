package com.ecopick;

public class NivelSocioeconomicoDto extends BaseDto {
    private String nombre;

    public NivelSocioeconomicoDto() {
    }

    public NivelSocioeconomicoDto(long id)  {
        super(id);
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}

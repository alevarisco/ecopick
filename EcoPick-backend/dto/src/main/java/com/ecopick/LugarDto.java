package com.ecopick;

public class LugarDto extends BaseDto {
    private String nombre;
    private int tipo;
    private LugarDto fkLugar;

    public LugarDto() {
    }

    public LugarDto(long id)  {
        super(id);
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getTipo() {
        return tipo;
    }

    public void setTipo(int tipo) {
        this.tipo = tipo;
    }

    public LugarDto getFkLugar() {
        return fkLugar;
    }

    public void setFkLugar(LugarDto fkLugar) {
        this.fkLugar = fkLugar;
    }

    @Override
    public String toString() {
        return "\n{" +
                "nombre='" + nombre + '\'' +
                ", tipo=" + tipo +
                ", fkLugar=" + fkLugar +
                '}';
    }
}

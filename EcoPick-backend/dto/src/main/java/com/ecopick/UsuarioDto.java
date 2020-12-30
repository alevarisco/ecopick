package com.ecopick;

import javax.json.bind.annotation.JsonbDateFormat;
import java.sql.Date;

public class UsuarioDto extends BaseDto {
    private String nombre;
    private String apellido;
    private String email;
    private String contraseña;
    private String genero;
    @JsonbDateFormat(value = "dd/MM/yyyy")
    private Date fechaNacimiento;
    private String telefono;
    private int tipo;
    private String numeroIdentificacion;
    private String respuestaSeguridad;
    private String tokenLogin;
    private String tokenRecovery;
    private LugarDto fkLugar;
    private PreguntaSeguridadDto fkPregunta;

    public UsuarioDto() {
    }

    public UsuarioDto(long id)  {
        super(id);
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public int getTipo() {
        return tipo;
    }

    public void setTipo(int tipo) {
        this.tipo = tipo;
    }

    public String getNumeroIdentificacion() {
        return numeroIdentificacion;
    }

    public void setNumeroIdentificacion(String numeroIdentificacion) {
        this.numeroIdentificacion = numeroIdentificacion;
    }

    public String getRespuestaSeguridad() {
        return respuestaSeguridad;
    }

    public void setRespuestaSeguridad(String respuestaSeguridad) {
        this.respuestaSeguridad = respuestaSeguridad;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LugarDto getFkLugar() {
        return fkLugar;
    }

    public void setFkLugar(LugarDto fkLugar) {
        this.fkLugar = fkLugar;
    }

    public PreguntaSeguridadDto getFkPregunta() {
        return fkPregunta;
    }

    public void setFkPregunta(PreguntaSeguridadDto fkPregunta) {
        this.fkPregunta = fkPregunta;
    }

    public String getTokenLogin() {
        return tokenLogin;
    }

    public void setTokenLogin(String tokenLogin) {
        this.tokenLogin = tokenLogin;
    }

    public String getTokenRecovery() {
        return tokenRecovery;
    }

    public void setTokenRecovery(String tokenRecovery) {
        this.tokenRecovery = tokenRecovery;
    }

    @Override
    public String toString() {
        return "UsuarioDto{" +
                "nombre='" + nombre + '\'' +
                ", apellido='" + apellido + '\'' +
                ", email='" + email + '\'' +
                ", contraseña='" + contraseña + '\'' +
                ", genero='" + genero + '\'' +
                ", fechaNacimiento=" + fechaNacimiento +
                ", telefono='" + telefono + '\'' +
                ", tipo=" + tipo +
                ", numeroIdentificacion='" + numeroIdentificacion + '\'' +
                ", respuestaSeguridad='" + respuestaSeguridad + '\'' +
                ", tokenLogin='" + tokenLogin + '\'' +
                ", tokenRecovery='" + tokenRecovery + '\'' +
                ", fkLugar=" + fkLugar +
                ", fkPregunta=" + fkPregunta +
                '}';
    }
}

package com.ecopick;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "usuario", schema = "ecopick", catalog = "")
public class UsuarioEntity extends BaseEntity{
    private String nombre;
    private String apellido;
    private String email;
    private String contraseña;
    private String genero;
    private Date fechaNacimiento;
    private String telefono;
    private int tipo;
    private String numeroIdentificacion;
    private String respuestaSeguridad;
    @ManyToOne
    @JoinColumn(name = "fk_lugar")
    private LugarEntity fkLugar;
    @ManyToOne
    @JoinColumn(name = "fk_pregunta")
    private PreguntaseguridadEntity fkPregunta;


    @Basic
    @Column(name = "nombre")
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Basic
    @Column(name = "apellido")
    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    @Basic
    @Column(name = "email")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Basic
    @Column(name = "contraseña")
    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    @Basic
    @Column(name = "genero")
    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    @Basic
    @Column(name = "FechaNacimiento")
    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    @Basic
    @Column(name = "telefono")
    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    @Basic
    @Column(name = "tipo")
    public int getTipo() {
        return tipo;
    }

    public void setTipo(int tipo) {
        this.tipo = tipo;
    }

    @Basic
    @Column(name = "NumeroIdentificacion")
    public String getNumeroIdentificacion() {
        return numeroIdentificacion;
    }

    public void setNumeroIdentificacion(String numeroIdentificacion) {
        this.numeroIdentificacion = numeroIdentificacion;
    }

    @Basic
    @Column(name = "RespuestaSeguridad")
    public String getRespuestaSeguridad() {
        return respuestaSeguridad;
    }

    public void setRespuestaSeguridad(String respuestaSeguridad) {
        this.respuestaSeguridad = respuestaSeguridad;
    }

    @ManyToOne
    @JoinColumn(name = "fk_lugar")
    public LugarEntity getFkLugar() {
        return fkLugar;
    }

    public void setFkLugar(LugarEntity fkLugar) {
        this.fkLugar = fkLugar;
    }

    @ManyToOne
    @JoinColumn(name = "fk_pregunta")
    public PreguntaseguridadEntity getFkPregunta() {
        return fkPregunta;
    }

    public void setFkPregunta(PreguntaseguridadEntity fkPregunta) {
        this.fkPregunta = fkPregunta;
    }

    @Override
    public String toString() {
        return "UsuarioEntity{" +
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
                ", fkLugar=" + fkLugar +
                ", fkPregunta=" + fkPregunta +
                '}';
    }
}

package com.ecopick;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "preguntaseguridad", schema = "ecopick", catalog = "")
public class PreguntaseguridadEntity extends BaseEntity{
    private String pregunta;

    @Basic
    @Column(name = "pregunta")
    public String getPregunta() {
        return pregunta;
    }

    public void setPregunta(String pregunta) {
        this.pregunta = pregunta;
    }

}

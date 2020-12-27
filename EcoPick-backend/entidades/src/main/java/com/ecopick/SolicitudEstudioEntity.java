package com.ecopick;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "solicitud_estudio", schema = "ecopick")
public class SolicitudEstudioEntity extends BaseEntity{
    @ManyToOne
    @JoinColumn(name = "fk_solicitud")
    private SolicitudEntity fkSolicitud;

    public SolicitudEntity getFkSolicitud() {
        return fkSolicitud;
    }

    public void setFkSolicitud(SolicitudEntity fkSolicitud) {
        this.fkSolicitud = fkSolicitud;
    }

    @ManyToOne
    @JoinColumn(name = "fk_estudio")
    private EstudioEntity fkEstudio;

    public EstudioEntity getFkEstudio() {
        return fkEstudio;
    }

    public void setFkEstudio(EstudioEntity fkEstudio) {
        this.fkEstudio = fkEstudio;
    }
}

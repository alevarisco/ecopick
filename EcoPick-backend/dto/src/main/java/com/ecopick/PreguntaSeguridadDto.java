package com.ecopick;

public class PreguntaSeguridadDto extends BaseDto {
    private String pregunta;

    public PreguntaSeguridadDto() {
    }

    public PreguntaSeguridadDto(long id) {
        super(id);
    }

    public String getPregunta() {
        return pregunta;
    }

    public void setPregunta(String pregunta) {
        this.pregunta = pregunta;
    }
}

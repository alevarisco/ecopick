package com.ecopick;

import javax.persistence.EntityManager;

public class DaoPreguntaSeguridad extends Dao<PreguntaseguridadEntity>{

    private EntityManager _em;
    static DaoHandler _handler = new DaoHandler();

    public DaoPreguntaSeguridad( ) {
        super(_handler);
    }
}

package com.ecopick;

import javax.persistence.EntityManager;

public class DaoPreguntaCatSubcat extends Dao<PreguntaCatSubcatEntity> {

    private EntityManager _em;
    static DaoHandler _handler = new DaoHandler();

    public DaoPreguntaCatSubcat( ) {
        super(_handler);
    }
}

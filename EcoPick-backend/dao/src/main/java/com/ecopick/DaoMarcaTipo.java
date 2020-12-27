package com.ecopick;

public class DaoMarcaTipo extends Dao<MarcaTipoEntity> {
    static DaoHandler _handler = new DaoHandler();
    public DaoMarcaTipo( ) {
        super(_handler);
    }
}

package com.ecopick;

import javax.persistence.EntityManager;
import javax.persistence.Query;

public class DaoPedido extends Dao<PedidoEntity> {

    private EntityManager _em;
    static DaoHandler _handler = new DaoHandler();

    String JPQL = null;
    Query q = null;

    public DaoPedido( ) {
        super(_handler);
    }
}

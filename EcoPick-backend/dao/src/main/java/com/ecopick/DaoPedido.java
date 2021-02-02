package com.ecopick;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import java.util.List;

public class DaoPedido extends Dao<PedidoEntity> {

    private EntityManager _em;
    static DaoHandler _handler = new DaoHandler();

    String JPQL = null;
    Query q = null;

    public DaoPedido( ) {
        super(_handler);
    }

    public List<PedidoEntity> getPedidos(long type, long id){
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("ecopick");
        EntityManager em = emf.createEntityManager();

        if (type == 0)
            JPQL = "SELECT p FROM PedidoEntity p WHERE p.fkPublica._id = :id";
        else
            JPQL = "SELECT p FROM PedidoEntity p WHERE p.fkReclama._id = :id";

        q = em.createQuery(JPQL);
        q.setParameter("id", id);

        return q.getResultList();
    }

    public List<PedidoEntity> findAll(){
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("ecopick");
        EntityManager em = emf.createEntityManager();

        JPQL = "SELECT p FROM PedidoEntity p WHERE p.fkReclama is null";

        q = em.createQuery(JPQL);

        return q.getResultList();
    }

}

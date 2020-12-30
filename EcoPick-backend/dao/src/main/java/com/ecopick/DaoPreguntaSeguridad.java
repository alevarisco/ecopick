package com.ecopick;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import java.util.List;

public class DaoPreguntaSeguridad extends Dao<PreguntaseguridadEntity>{

    private EntityManager _em;
    static DaoHandler _handler = new DaoHandler();

    String JPQL = null;
    Query q = null;

    public DaoPreguntaSeguridad( ) {
        super(_handler);
    }

    public List<PreguntaseguridadEntity> getPreguntas(){
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("ecopick");
        EntityManager em = emf.createEntityManager();

        JPQL = "SELECT p FROM PreguntaseguridadEntity p";
        q = em.createQuery(JPQL);

        return q.getResultList();
    }

}

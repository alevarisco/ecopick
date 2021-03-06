package com.ecopick;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

@ApplicationPath("/")
public class MyApplication extends Application {

    /**
     *
     * TODO - Aca debemos agregar a la aplicacion las clases que queremos utilizar. Con el formato "h.add( Name.class );"
     *
     * */

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> h = new HashSet<>();
        h.add( HelloWorld.class );
        h.add( SesionService.class );
        h.add( LugarService.class );
        h.add( UserService.class );
        h.add( LoginService.class );
        h.add( RecoveryService.class );
        h.add( PedidoService.class );
        return h;
    }
}

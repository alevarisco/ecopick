package com.ecopick;

public class BaseDto {
    private long _id;

    public BaseDto() {}

    public BaseDto(long id)  {
        set_id(id);
    }

    public long get_id() {
        return _id;
    }

    public void set_id(long id)  {

//        if ( id > 0 )
//        {
            _id = id;
//        }
//        else
//        {
//            throw new Exception();
//        }
    }
}

package com.adam.rsbsecond.dao.impl;

import com.adam.rsbsecond.dao.TestDao;
import org.springframework.stereotype.Service;

/**
 * @ClassName TestDaoImpl
 * @Package com.adam.rsbsecond.dao.impl
 * @Description TODO
 * @Author adam
 * @Date 2020/5/26 21:07
 * @Version 1.0.0
 **/
@Service
public class TestDaoImpl implements TestDao {
    @Override
    public void testDao() {
        System.out.println("testDao~");
    }
}

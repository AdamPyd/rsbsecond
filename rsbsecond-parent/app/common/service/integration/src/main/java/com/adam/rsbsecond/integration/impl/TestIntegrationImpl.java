package com.adam.rsbsecond.integration.impl;

import com.adam.rsbsecond.integration.TestIntergration;
import org.springframework.stereotype.Service;

/**
 * @ClassName TestIntegrationImpl
 * @Package com.adam.rsbsecond.integration.impl
 * @Description TODO
 * @Author adam
 * @Date 2020/5/26 21:05
 * @Version 1.0.0
 **/
@Service
public class TestIntegrationImpl implements TestIntergration {
    @Override
    public void testIntegration() {
        System.out.println("TestIntegration~");
    }

}

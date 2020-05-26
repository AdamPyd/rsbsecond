package com.adam.rsbsecond.service.impl;

import com.adam.rsbsecond.TestModel;
import com.adam.rsbsecond.dao.TestDao;
import com.adam.rsbsecond.integration.TestIntergration;
import com.adam.rsbsecond.service.TestCoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassName TestCoreServiceImpl
 * @Package com.adam.rsbsecond.service.impl
 * @Description TODO
 * @Author adam
 * @Date 2020/5/26 21:03
 * @Version 1.0.0
 **/
@Service
public class TestCoreServiceImpl implements TestCoreService {
    @Autowired
    private TestIntergration testIntergration;
    @Autowired
    private TestDao testDao;
    @Override
    public void testCoreService() {
        testDao.testDao();
        testIntergration.testIntegration();
        TestModel testModel = new TestModel();
        testModel.setTestElement("element is a");
        System.out.println("testCoreService,testModel: " + testModel);
    }
}

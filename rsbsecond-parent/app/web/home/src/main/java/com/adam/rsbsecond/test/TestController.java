package com.adam.rsbsecond.test;

import com.adam.rsbsecond.TestUtil;
import com.adam.rsbsecond.manager.TestManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @ClassName TestController
 * @Package com.adam.rsbsecond.test
 * @Description TODO
 * @Author adam
 * @Date 2020/5/26 20:59
 * @Version 1.0.0
 **/
@Controller
public class TestController {
    @Autowired
    private TestManager testManager;

    @GetMapping("testController")
    @ResponseBody
    private String testController(){
        TestUtil.testUtil();
        testManager.testManager();
        System.out.println("testController");
        return "{123}";
    }
}

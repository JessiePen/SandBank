package test;

import domain.User;
import DAO.userDao;
import org.junit.Test;

public class UserDaoTest {

    @Test
    public void testLogin(){
        User loginuser = new User();
        loginuser.setUsername("David");
        loginuser.setPassword("123");

        userDao dao = new userDao();
        User user = dao.login(loginuser);

        System.out.println(user);

    }

}

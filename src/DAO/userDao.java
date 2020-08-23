package DAO;

import Utils.JDBCUtils;
import domain.User;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;


public class userDao {

    private JdbcTemplate template = new JdbcTemplate(JDBCUtils.getDataSource());


    /**
     * Login
     * @param loginUser 只有用户名和密码
     * @return user包含全部数据,没有查询到，返回null
     *
     */
    public User login(User loginUser){
        try {
            String sql = "select * from user where username = ? and password = ?";

            User user = template.queryForObject(sql, new BeanPropertyRowMapper<User>(User.class),
                    loginUser.getUsername(),loginUser.getPassword());

            return user;
        }catch (DataAccessException e){
            e.printStackTrace();
            return null;
        }
    }
}

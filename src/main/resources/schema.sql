CREATE TABLE APP_USER (
                          user_ID INT NOT NULL AUTO_INCREMENT,
                          email VARCHAR(50),
                          name VARCHAR(20),
                          password VARCHAR(200),
                          phone_num VARCHAR(20),
                          alarm BOOL,
                          PRIMARY KEY (user_ID)
);

CREATE TABLE INTEREST (
                          interest_ID INT NOT NULL AUTO_INCREMENT,
                          name VARCHAR(30),
                          PRIMARY KEY (interest_ID)
);

CREATE TABLE FAVORITES (
                           fav_ID INT NOT NULL AUTO_INCREMENT,
                           user_ID INT NOT NULL,
                           exam_ID INT NOT NULL,
                           PRIMARY KEY (fav_ID)
);

CREATE TABLE JOB_INFO (
                          company_ID INT NOT NULL AUTO_INCREMENT,
                          hashtag_ID INT NOT NULL,
                          name VARCHAR(30),
                          location VARCHAR(100),
                          field VARCHAR(20),
                          task VARCHAR(20),
                          description TEXT,
                          date_apply_start TIMESTAMP,
                          date_apply_end TIMESTAMP,
                          PRIMARY KEY (company_ID)
);

CREATE TABLE HASHTAG (
                         hashtag_ID INT NOT NULL AUTO_INCREMENT,
                         name VARCHAR(20),
                         PRIMARY KEY (hashtag_ID)
);

CREATE TABLE SCHEDULE (
                          schedule_ID INT NOT NULL AUTO_INCREMENT,
                          user_ID INT NOT NULL,
                          exam_ID INT NOT NULL,
                          PRIMARY KEY (schedule_ID)
);

CREATE TABLE VIDEO_TO_TXT (
                              text_ID INT NOT NULL AUTO_INCREMENT,
                              classification VARCHAR(20),
                              hashtag_ID INT NOT NULL,
                              PRIMARY KEY (text_ID)
);

CREATE TABLE JOB_NEWS (
                          news_ID INT NOT NULL AUTO_INCREMENT,
                          title VARCHAR(50),
                          field VARCHAR(20),
                          hashtag_ID INT NOT NULL,
                          PRIMARY KEY (news_ID)
);

CREATE TABLE EXAM_INFO (
                           exam_ID INT NOT NULL AUTO_INCREMENT,
                           title VARCHAR(20),
                           type VARCHAR(20),
                           date_apply_start TIMESTAMP,
                           date_apply_end TIMESTAMP,
                           PRIMARY KEY (exam_ID)
);

CREATE TABLE COMMUNITY (
                           post_ID INT NOT NULL AUTO_INCREMENT,
                           username VARCHAR(20),
                           title VARCHAR(100),
                           content TEXT,
                           hashtag_ID INT NOT NULL,
                           PRIMARY KEY (post_ID)
);

CREATE TABLE COMMENT (
                         comment_ID INT NOT NULL AUTO_INCREMENT,
                         post_ID INT NOT NULL,
                         content TEXT NOT NULL,
                         anonymous BOOL NOT NULL,
                         PRIMARY KEY (comment_ID),
                         FOREIGN KEY (post_ID) REFERENCES COMMUNITY(post_ID)
);

CREATE TABLE CATEGORY (
                          category_ID INT NOT NULL AUTO_INCREMENT,
                          name VARCHAR(20),
                          PRIMARY KEY (category_ID)
);

CREATE TABLE JOB_CATEGORY (
                              category_ID INT NOT NULL,
                              company_ID INT NOT NULL,
                              PRIMARY KEY (category_ID, company_ID)
);

CREATE TABLE EXAM_CATEGORY (
                               category_ID INT NOT NULL,
                               exam_ID INT NOT NULL,
                               PRIMARY KEY (category_ID, exam_ID)
);

CREATE TABLE USER_INTEREST (
                               user_ID INT NOT NULL,
                               interest_ID INT NOT NULL,
                               PRIMARY KEY (user_ID, interest_ID)
);
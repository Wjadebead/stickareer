INSERT INTO HASHTAG (name) VALUES ('IT');
INSERT INTO HASHTAG (name) VALUES ('Backend');
INSERT INTO HASHTAG (name) VALUES ('Frontend');
INSERT INTO HASHTAG (name) VALUES ('App');
INSERT INTO HASHTAG (name) VALUES ('Web');
INSERT INTO HASHTAG (name) VALUES ('Server');
INSERT INTO HASHTAG (name) VALUES ('Java');
INSERT INTO HASHTAG (name) VALUES ('C');
INSERT INTO HASHTAG (name) VALUES ('ML');

INSERT INTO COMMUNITY (username, title, content, hashtag_ID) VALUES ('유저1', '게시글1', '테스트1 내용입니다.', 1);
INSERT INTO COMMUNITY (username, title, content, hashtag_ID) VALUES ('유저2', '게시글2', '테스트2 내용입니다.', 2);

INSERT INTO COMMENT (post_id, content, anonymous) VALUES (1, '첫번째 글의 댓글.', true);
INSERT INTO COMMENT (post_id, content, anonymous) VALUES (1, '첫번째 글의 두번째 댓글.', false);
INSERT INTO COMMENT (post_id, content, anonymous) VALUES (2, '두번째 글의 댓글.', true);
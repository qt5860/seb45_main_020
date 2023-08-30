import { useState } from "react";
import styled from "styled-components";
import myCharacter1 from "../assets/images/my_character1.png";
import editWhite from "../assets/images/edit-white.png";
import lock from "../assets/images/lock.png";

const MyPage = (): JSX.Element => {
  const [curMenu, setCurMenu] = useState("profile");
  const [isEdit, setIsEdit] = useState(false);
  const [email, setEmail] = useState("example@gmail.com");
  const [validEmail, setValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [intro, setIntro] = useState("안녕하세요, [아이디]입니다.");

  function handleEditBtnClick(): void {
    setPassword("");
    setIsEdit(true);
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(e.target.value);
    setValidEmail(true);
  }

  function handleEditClick(): void {
    setValidEmail(true);
    const validEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if (validEmail.test(email) === false) {
      setValidEmail(false);
    } else {
      setIsEdit(false);
    }
  }

  function handleCancleClick(): void {
    setValidEmail(true);
    setEmail("example@gmail.com");
    setPassword("");
    setIntro("안녕하세요, [아이디]입니다.");
    setIsEdit(false);
  }

  return (
    <MyPageBg>
      <MyPageContainer>
        <MyPageTop>
          <MyPageImgContainer>
            <img src={myCharacter1} />
          </MyPageImgContainer>
          <MyPageIdContainer>
            <MyPageId>[아이디]</MyPageId>
            <MyPageEmail>[이메일]</MyPageEmail>
          </MyPageIdContainer>
        </MyPageTop>
        <MyPageBottom>
          <MyPageMenu>
            {curMenu === "profile" ? (
              <MyPageMenuBtnFocus>프로필</MyPageMenuBtnFocus>
            ) : (
              <MyPageMenuBtn onClick={() => setCurMenu("profile")}>프로필</MyPageMenuBtn>
            )}
            {curMenu === "character" ? (
              <MyPageMenuBtnFocus>내 캐릭터</MyPageMenuBtnFocus>
            ) : (
              <MyPageMenuBtn onClick={() => setCurMenu("character")}>내 캐릭터</MyPageMenuBtn>
            )}
            {curMenu === "blog" ? (
              <MyPageMenuBtnFocus>내가 쓴 글</MyPageMenuBtnFocus>
            ) : (
              <MyPageMenuBtn onClick={() => setCurMenu("blog")}>내가 쓴 글</MyPageMenuBtn>
            )}
          </MyPageMenu>
          {curMenu === "profile" ? (
            <MyPageContent>
              <MyPageContentTitleContainer>
                <MyPageContentTitle>내 프로필</MyPageContentTitle>
                {!isEdit ? (
                  <MyPageProfileEdit onClick={handleEditBtnClick}>
                    <img src={editWhite} />
                    <div>프로필 정보 수정하기</div>
                  </MyPageProfileEdit>
                ) : null}
              </MyPageContentTitleContainer>
              <div>
                <MyPageProfileInfo>
                  <div>아이디</div>
                  <div>아이디</div>
                </MyPageProfileInfo>
                <MyPageProfileEmailInfo>
                  <MyPageEmailContainer>
                    <div>이메일</div>
                    {!isEdit ? (
                      <div>{email}</div>
                    ) : (
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => handleEmailChange(e)}
                        ></input>
                      </div>
                    )}
                  </MyPageEmailContainer>
                  {!validEmail ? (
                    <MyPageWarning>유효한 이메일 주소를 입력해주세요.</MyPageWarning>
                  ) : null}
                </MyPageProfileEmailInfo>
                <MyPageProfileInfo>
                  <div>비밀번호</div>
                  {!isEdit ? (
                    <img src={lock} />
                  ) : (
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  )}
                </MyPageProfileInfo>
                <MyPageProfileIntro>
                  <div>자기소개</div>
                  {!isEdit ? (
                    <div>{intro}</div>
                  ) : (
                    <textarea value={intro} onChange={(e) => setIntro(e.target.value)}></textarea>
                  )}
                </MyPageProfileIntro>
              </div>
              {isEdit ? (
                <MyPageEditBtnContainer>
                  <MyPageEditBtn onClick={handleEditClick}>수정</MyPageEditBtn>
                  <MyPageCancelBtn onClick={handleCancleClick}>취소</MyPageCancelBtn>
                </MyPageEditBtnContainer>
              ) : null}
            </MyPageContent>
          ) : null}
        </MyPageBottom>
      </MyPageContainer>
    </MyPageBg>
  );
};

export default MyPage;

const MyPageBg = styled.main`
  min-height: calc(100vh - 120px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
  margin-top: -70px;
  padding-top: 120px;
`;

const MyPageContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyPageTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 50px 30px 50px;
  border-bottom: 1px solid #e7e7e7;
`;

const MyPageImgContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyPageIdContainer = styled.div`
  margin-left: 20px;
`;

const MyPageId = styled.div`
  font-size: 30px;
`;

const MyPageEmail = styled.div`
  color: #646464;
  font-size: 20px;
`;

const MyPageBottom = styled.div`
  width: 100%;
  min-height: 500px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  margin: 40px 0 70px 0;
`;

const MyPageMenu = styled.div`
  padding: 30px 80px 0 80px;
  margin: 0 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
`;

const MyPageMenuBtn = styled.div`
  padding-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
`;

const MyPageMenuBtnFocus = styled(MyPageMenuBtn)`
  border-bottom: 3px solid #416dc9;
`;

const MyPageContent = styled.div`
  margin: 40px 40px;
`;

const MyPageContentTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const MyPageContentTitle = styled.div`
  font-size: 26px;
  font-weight: 500;
`;

const MyPageProfileEdit = styled.div`
  width: 244px;
  height: 40px;
  border-radius: 4px;
  background-color: #ffc03f;
  color: #ffffff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    width: 21px;
    height: 19px;
  }
`;

const MyPageProfileInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  padding: 0 20px 20px 20px;
  border-bottom: 1px solid #cfcfcf;

  div:first-child {
    font-size: 20px;
  }

  div:nth-child(2) {
    font-size: 16px;
  }

  input {
    width: 240px;
    border: 1px solid #bebebe;
    border-radius: 4px;
    margin: 0;
    padding: 8px;
    text-align: end;
  }
`;

const MyPageProfileEmailInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 30px;
  padding: 0 20px 20px 20px;
  border-bottom: 1px solid #cfcfcf;
`;

const MyPageEmailContainer = styled(MyPageProfileInfo)`
  border-bottom: none;
  padding: 0;
  margin: 0;
`;

const MyPageWarning = styled.span`
  display: block;
  color: #e23636;
  font-size: 14px;
  margin-top: 7px;
`;

const MyPageProfileIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  padding: 0 20px 20px 20px;
  gap: 20px;

  div:first-child {
    font-size: 20px;
  }

  div:nth-child(2) {
    font-size: 16px;
  }

  textarea {
    width: 100%;
    height: 80px;
    border: 1px solid #bebebe;
    border-radius: 4px;
    margin: 0;
    padding: 15px 20px;
    text-align: start;
    resize: vertical;
  }
`;

const MyPageEditBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  margin-top: 30px;
`;

const MyPageEditBtn = styled.button`
  font-size: 20px;
  background-color: #ffc03f;
  border-radius: 4px;
  padding: 10px 35px;
`;

const MyPageCancelBtn = styled(MyPageEditBtn)`
  color: #444444;
  background-color: #ffffff;
  box-shadow: 0 0 0 1px #bebebe inset;
`;

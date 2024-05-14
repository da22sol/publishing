import styled from "styled-components";

export const EmailBox = styled.div`
  width: 100%;
  padding-top: 5vw;
  font-family: "Pretendard";
  margin-bottom: 100px;
`;

export const EmailH2 = styled.h2`
  padding-top: 5vw;
  text-align: left;
  font-size: 90px;
  font-weight: 800;
  padding-left: 40px;
  color: #519d5a;
  -webkit-text-stroke: 1px #f8e276;
  @media (max-width: 430px) {
    font-size: 60px;
  }
`;

export const EmailP = styled.p`
  padding-left: 40px;
  color: #f6edd9;
  @media (max-width: 430px) {
    font-size: 14px;
  }
`;

export const MailLBox = styled.form`
  display: flex;
  padding-top: 30px;
  margin-left: 40px;
  margin-bottom: 5vw;
  align-items: center;
`;

export const MailLine = styled.div`
  padding-top: 30px;
  align-content: space-between;
  margin: 0;
  width: 50%;

  input {
    border-bottom: 1px solid #f6edd9;
    height: 4vw;
    width: 100%;
    padding: 10px;
  }

  label {
    font-size: 20px;
    color: #f8e276;
  }
  @media (max-width: 430px) {
    label {
      font-size: 14px;
    }
  }
`;

export const FormName = styled.div`
  margin-bottom: 20px;
`;

export const FormAdd = styled.div`
  margin-bottom: 20px;
`;

export const FormSub = styled.div`
  margin-bottom: 20px;
`;

export const MailInner = styled.div`
  width: 40%;
`;

export const MailForm = styled.div`
padding-top: 30px;
align-content: space-between;
margin: 0;
label{
  font-size: 20px;
  color: #f8e276;

}
textarea{
  border: 1px solid #f6edd9;
  height: 250px;
  resize: none;
  width: 100%;
}

@media (max-width: 430px) {
  label {
    font-size: 14px;
  }
}
`;

export const submit = styled.input`
  margin-top: 20px;
  width: 100%;
  border: 1px solid #e2b2d9;
  padding: 12px;
  text-align: center;
  background-color: #e2b2d9;
  color: #f6edd9;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

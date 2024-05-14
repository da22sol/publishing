import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import * as S from "./email.style";
const Email = () => {
  const [sendMsg, setSendMsg] = useState("Send");
  const form = useRef<HTMLFormElement>(null); 

  const sendEmail = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_rki1h6n", "template_4ucdx1c", form.current, {
          publicKey: "bTa2-xsI1hU53UT-V",
        })
        .then(() => {
          console.log("메일감");
          setSendMsg("📨"); 
          setTimeout(() => {
            setSendMsg("Send");
            form.current?.reset(); 
          }, 1000);
        })

        .catch((error) => {
          console.log("메일못감", error.text);
        });
    }
  };

  return (
    <div>
      <S.EmailBox>
        <S.EmailH2>Send Email </S.EmailH2>
        <S.EmailP>
          메일을 주시면, 최대한 빠른 시일 내에 답장을 보내드릴게요!
        </S.EmailP>
        <S.MailLBox ref={form} onSubmit={sendEmail}>
          <S.MailLine>
            <S.FormName>
              <label>Name</label>
              <input type="text" name="name" />
            </S.FormName>
            <S.FormAdd>
              <label>Email</label>
              <input type="email" name="email" />
            </S.FormAdd>
            <S.FormSub>
              <label>Subject</label>
              <input type="text" name="subject" />
            </S.FormSub>
          </S.MailLine>
          <S.MailInner>
            <S.MailForm>
              <label>Message</label>
              <textarea name="message"></textarea>
            </S.MailForm>
            <S.submit type="submit" value={sendMsg} />
          </S.MailInner>
        </S.MailLBox>
      </S.EmailBox>
    </div>
  );
};

export default Email;

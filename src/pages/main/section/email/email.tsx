import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Email = () => {
  const [sendMsg, setSendMsg] = useState("Send");
  const form = useRef(null);

  const sendEmail = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    console.log("확인");
  
    if (form.current) { // form.current가 null이 아닌 경우에만 실행
      emailjs
        .sendForm("service_rki1h6n", "template_4ucdx1c", form.current, {
          publicKey: "bTa2-xsI1hU53UT-V",
        })
        .then(
          () => {
            console.log("메일감");
          },
          (error) => {
            console.log("메일못감", error.text);
          }
        );
    }
  };
  return (
    <div>
      <div className="EmailBox">
        <h2 className="EmailH2">Send Email </h2>
        <p className="EmailP">
          메일을 주시면, 최대한 빠른 시일 내에 답장을 보내드릴게요!
        </p>
        <form className="MailLBox" ref={form} onSubmit={sendEmail}>
          <div className="mailLine">
            <div className="FormName">
              <label>Name</label>
              <input type="text" name="name" />
            </div>
            <div className="FormAdd">
              <label>Email</label>
              <input type="email" name="email" />
            </div>
            <div className="FormSub">
              <label>Subject</label>
              <input type="text" name="subject" />
            </div>
          </div>
          <div className="MailInner">
            <div className="MailForm">
              <label>Message</label>
              <textarea name="message"></textarea>
            </div>
            <input type="submit" value={sendMsg} className="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Email;

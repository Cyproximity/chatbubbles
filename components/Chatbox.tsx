import { useState } from "react";
import { format } from "date-fns";
import Header from "@/components/Header";
import Bubbles, { Bubble } from "@/components/Bubbles";
import QuestionForm from "@/components/QuestionForm";

const b =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget pretium metus. Quisque vulputate lectus at ligula elementum, nec ullamcorper dui hendrerit. Nam posuere lectus eget est imperdiet laoreet. Ut vulputate interdum metus. Cras sed accumsan libero.";

const timenow = () => format(Date.now(), "hh:mm aaa, ccc, d LLL");

export default function Chatbox() {
  const [message, setMessage] = useState("");
  const [bubbles, setBubbles] = useState<Bubble[]>([
    { message: b, datetime: timenow(), isRight: true },
    { message: b, datetime: timenow(), isRight: false },
  ]);

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!message) return;
    const datetime = timenow();
    const lastBubble = bubbles[bubbles.length - 1];
    const bubble: Bubble = {
      message,
      datetime: datetime,
      isRight: !lastBubble?.isRight,
    };
    bubbles.push(bubble);
    setMessage("");
  }

  function onMessageChange(e: any) {
    setMessage(e.target.value);
  }

  return (
    <>
      <Header />
      <Bubbles bubbles={bubbles} />
      <QuestionForm
        handleSubmit={handleSubmit}
        onMessageChange={onMessageChange}
        message={message}
      />
    </>
  );
}

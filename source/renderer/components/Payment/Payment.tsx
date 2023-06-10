import { createQR } from "@solana/pay";
import { FunctionComponent, useEffect, useRef } from "react";

const solanaPayUrl =
  "solana:E9mujphk6qBYHikQFvYb1FioSxSqaEHNBRGmdLoq19rP?amount=20&reference=3UYtgxgGnWFV6CCoTDqywV392sDB1xkMt7hKW3CWrraD&label=ZSB+Rybnik+store&message=ZSB+Rybnik+store+-+your+order+-+%23001234&memo=JC%234098";

const Payment: FunctionComponent = () => {
  const qrCodeRef = useRef(null);
  useEffect(() => {
    if (qrCodeRef.current) {
      const qr = createQR(solanaPayUrl, 360, "white", "black");
      qr.append(qrCodeRef.current);
    }
  }, []);
  return <div ref={qrCodeRef}></div>;
};
export default Payment;

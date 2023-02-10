import axios from "axios";
import cogoToast from "cogo-toast";
import { useState } from "react";
import { ISENDMAIL } from "@/types/mail";

export function useMail() {
  const [loading, setLoading] = useState(false);

  async function sendMail(payload: ISENDMAIL) {
    try {
      setLoading(true);
      let res = await axios({
        method: "POST",
        url: "/api/mail",
        data: payload,
      });

      cogoToast.success(`${res.data.success}`, {
        hideAfter: 5,
      });
    } catch (error: any) {
      console.log(error);
      let errorResponse = !!error.response.errorMessage
        ? error.response.errorMessage
        : "Check your internet connection";
      cogoToast.error(`${errorResponse}`, {
        hideAfter: 5,
      });
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    sendMail,
  };
}

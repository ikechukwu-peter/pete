import axios from "axios";
import cogoToast from "cogo-toast";
import { useState } from "react";

export default function useMail() {
  const [loading, setLoading] = useState(false);

  async function sendMail(payload) {
    try {
      setLoading(true);
      let res = await axios({
        method: "POST",
        url: "/api/mail",
        payload,
      });

      const { hide } = cogoToast.success(`${res.data.success}`, {
        onClick: () => {
          hide();
        },
        hideAfter: 5,
      });
    } catch (error) {
      console.log(error);
      let errorResponse = error.response
        ? error.response.errorMessage
        : "Check your internet connection";

      const { hide } = cogoToast.error(`${errorResponse}`, {
        onClick: () => {
          hide();
        },
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

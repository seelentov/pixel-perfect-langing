import axios from "axios";
import { TELEGRAM_API_KEY, TELEGRAM_CHAT_ID } from "../config/api.config";
import { isEveryInFormNotEmpty } from "../utils/forms/isEveryInFormNotEmpty";

export const sendTelegramMessage = async (formData: any, pathname: string) => {
    if(!isEveryInFormNotEmpty(formData)){
        alert('Заполните все данные формы');
        return
    }

    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_API_KEY}/sendMessage`,
        {
          chat_id: TELEGRAM_CHAT_ID,
          text: `Новая заявка:\n\n${Object.entries(formData).map(input => `${input[0]}: ${input[1]}`).join('\n')}\n\nСтраница: ${pathname}`,
          parse_mode: 'Markdown',
        }
      );

      if (response.status === 200) {
        alert('Заявка успешно отправлена!');
        return true
      } else {
        alert('Не удалось отправить заявку. Пожалуйста, попробуйте позже');
      }
    } catch (error) {
      console.error(error);
      alert('Не удалось отправить заявку. Пожалуйста, попробуйте позже');
    }
  };
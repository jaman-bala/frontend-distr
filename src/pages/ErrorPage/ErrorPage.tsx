import { isErrorWithFields } from "@/shared/helpers/types-check-helper";
import { useRouteError } from "react-router-dom";
import cls from "./ErrorPage.module.scss";

export function ErrorPage() {
  const error = useRouteError();

  console.log(error);

  return (
    <div className={cls.errorPage}>
      <h1 className={cls.title}>Что-то пошло не так!</h1>
      <p className={cls.description}>Извиняюсь, но меня нежданули</p>
      <p className={cls.errorDescription}>
        <i>
          {isErrorWithFields(error, ["statusText", "message"])
            ? error.statusText || error.message
            : "Unknown error"}
        </i>
      </p>
    </div>
  );
}

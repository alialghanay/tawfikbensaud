"use client";
import { useTranslation } from "react-i18next";

const SectionOne = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <h1 className="font-bold text-2xl">
        {i18n.language.startsWith("en") ? "How to Start Help" : "كيف تبدأ المساعدة"}
      </h1>
      <p className="font-light text-xl my-8">
        {i18n.language.startsWith("en")
          ? `In carrying out their duties, charitable foundations provide a variety
            of social services such as education, food, medicine, housing, and
            others`
          : `تقوم المؤسسات الخيرية، في قيامها بواجباتها، بتقديم خدمات اجتماعية متنوعة مثل التعليم والغذاء والدواء والإسكان وغيرها.`}
      </p>
    </>
  );
};

export default SectionOne;

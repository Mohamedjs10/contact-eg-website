import React from "react";
import Image from "next/image";
import { styles } from "./pid-styles";
import { Box } from "@mui/material";
import { colors } from "../../utils/const";
import Link from "next/link";

import { useRouter } from "next/router";
import en from "../../../locales/en";
import ar from "../../../locales/ar";

export default function MediaPage() {
  const router = useRouter();
  const { pid } = router.query;
  const { locale } = router;
  const t = locale === "en" ? en : ar;
  let dir = locale === "en" ? "mr" : "ml";
  let news = [
    {
      body1: `وأوضحت الشركة في بيان صادر اليوم الاثنين، أن المنتج يتوفر من خلال منصة كونتكت كارز دوت كوم وشركة ثروة للتأمين وشركة كونتكت للوساطة التأمينية.
وأشارت إلي أن سوق التأمين عملية تحول تتضمن زيادة في عدد منتجات التأمين المباعة رقمياً، وقد ساهمت جائحة كوفيد-19 في التعجيل بتحول هذه السوق رقميا، وبعد الرجوع إلى الهيئة العامة للرقابة المالية، تم تطوير منتج تأمين السيارات المباع رقميا والتصديق عليه لتطلقه مجموعة كونتكت (كونتكت كارز – كونتكت للوساطة التأمينية – ثروة للتأمين).
وفي هذا السياق قال سعيد زعتر، الرئيس التنفيذي لكونتكت المالية القابضة، إنه من الطبيعي أن نكون من أوائل المشاركين في إطلاق هذا المشروع الضخم وهو التحول الرقمي لشراء تأمين السيارات بطريقة رقمية بالكامل والذي يمكن لعملائنا شرائه من على منصة وتطبيقات كونتكت كارز دوت كوم مع ربط ذلك بموقع شركة ثروة للتأمين حين انتهائه وموقع كونتكت للوساطة التأمينية حين انتهائه.`,
      body2: `وذكر أن المنصة يزورها شهريا حوالي 1.2 مليون مستخدم مهتمين بالسيارات والخدمات الجديدة والمبتكرة التي تقدمها المنصة. هذا المنتج الغير المسبوق هو جزء من استراتيجية المجموعة والتي تتضمن إطلاق المزيد من المنتجات والخدمات الرقمية بالكامل.
ولفت إلي أن الشركة تعمل بشكل وثيق مع الجهات والهيئات المعنية لمواصلة دفع التحول الالكتروني في قطاع الخدمات المالية، وهذا المنتج هو ثمرة تعاون ثلاث من شركاتنا التابعة، حيث قادت نهال بريك – رئيس مجلس الإدارة والعضو المنتدب لشركة كونتكت للوساطة التأمينية – جهود العمل من جانب المجموعة مع الجهات المعنية”.
ومن جانبه قال أحمد خليفة، المدير العام لثروة للتأمين، إن الشركة تركز بشكل أساسي في ثروة للتأمين على تقديم منتجات وخدمات تأمين رائدة في السوق لعملائنا.
وأشار إلي أن الشركة من الأوائل في إطلاق منتج تأمين سيارات رقمي بالكامل في السوق هو خطوة في طريقنا لتقديم باقة من المنتجات والخدمات بشكل أسرع وأكثر كفاءة. في مرحلة الإطلاق، التأمين الرقمي بالكامل سوف يغطي السيارات الجديدة، بينما نواصل العمل مع الهيئة العامة للرقابة المالية لدراسة تطوير حلول مماثلة للسيارات المستعملة”.
وفي سياق متصل أضاف عثمان عبد المنعم، المدير العام لكونتكت كارز دوت كوم، أنه يمكن للعميل الراغب في شراء وثيقة تأمين لسيارة جديدة ملء البيانات اللازمة في أقل من 90 ثانية والحصول علي وثيقة التأمين المصدرة الكترونياً من شركة ثروة للتأمين في خلال ساعة.
كما يمكنه الاختيار بين الدفع نقدا أو بالتقسيط. سوق تأمين السيارات يواصل النمو بشكل مطرد، وحقيقة أن السيارات المؤمن عليها بشكل كامل تكاد تمثل 3% فقط من اجمالي السيارات في مصر هي فرصة لتصميم منتجات تركز على احتياجات المستهلكين بأسعار مناسبة سواء كانوا ملاك جدد أو حاليين للسيارات، وهو ما يدفعنا لمواصلة العمل والابتكار.
`,
    },
  ];
  return (
    <Box
      sx={{
        color: colors.petroli,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      className="horizontal-safe-margin vertical-safe-margin"
    >
      <Box
        className="vertical-safe-margin"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", lg: "space-between" },
          gap: 2,
        }}
      >
        <Box>
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "30px",

              mb: 3,
            }}
          >
            كونتكت تطلق منتج رقمي لتأمين السيارات
          </Box>
          <Box>كتب: حابي</Box>
          <Box sx={{ mb: 3 }}>5 دقائق قرائة</Box>
          <Box sx={{ mb: 1, fontWeight: "bold" }}>شارك</Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <a href="https://www.facebook.com/" target="_blank">
              <Box component="img" src="/f-b.png" sx={styles.img} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <Box component="img" src="/t-b.png" sx={styles.img} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <Box component="img" src="/l-b.png" sx={styles.img} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <Box component="img" src="/pin-b.png" sx={styles.img} />
            </a>
          </Box>
        </Box>
        <Box
          component="img"
          src="/image.png"
          sx={{
            width: "100%",
            maxWidth: "520px",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          maxWidth: "1000px",
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",

          gap: 2,
        }}
      >
        <Box sx={{ whiteSpace: "pre-wrap" }}> {news[0].body1}</Box>
        <Box component="img" src="/image.png" width="100%"></Box>
        <Box sx={{ display: "flex", gap: 1, alignSelf: "flex-start" }}>
          <Box
            component="span"
            sx={{ border: `1px solid ${colors.petroli}` }}
          ></Box>
          <Box component="span" sx={{}}>
            سعيد زعتر الرئيس التنفيذي لشركة كونتكت المالية القابضة
          </Box>
        </Box>
        <Box sx={{ whiteSpace: "pre-wrap" }}>{news[0].body1}</Box>
        <Box>
          <Box sx={{ mb: 1, fontWeight: "bold" }}>شارك</Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <a href="https://www.facebook.com/" target="_blank">
              <Box component="img" src="/f-b.png" sx={styles.img} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <Box component="img" src="/t-b.png" sx={styles.img} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <Box component="img" src="/l-b.png" sx={styles.img} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <Box component="img" src="/pin-b.png" sx={styles.img} />
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

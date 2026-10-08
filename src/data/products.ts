export interface Product {
  id: string;
  nameEn: string;
  nameAr: string;
  descEn?: string;
  descAr?: string;
  images?: string[];
}

export interface Category extends Product {
  isCategory: boolean;
  subProducts?: Product[];
}

export const productsData: Category[] = [
  {
    id: "pre-filters",
    nameEn: "Pre-filters",
    nameAr: "الفلاتر الابتدائية",
    isCategory: true,
    images: ["/images/catalog/cat-1-intro-FB_IMG_1785160523498.jpg"],
    subProducts: [
      {
        id: "aluminum",
        nameEn: "Aluminum filters",
        nameAr: "الفلاتر الالومنيوم",
        images: ["/images/catalog/cat-1-sub-1-1526655_746186395411272_1953156455_n.jpg", "/images/catalog/cat-1-sub-1-50454586_2017274658386745_7221806986453581824_n.jpg", "/images/catalog/cat-1-sub-1-812qL+LhT3L._AC_SL1500_.jpg", "/images/catalog/cat-1-sub-1-Aluminum-Filter-G2.jpg", "/images/catalog/cat-1-sub-1-FB_IMG_1671894160105.jpg", "/images/catalog/cat-1-sub-1-lPpVidzwgDwK6Ie1g0OvTmLN0jvX2oiKePMQbfwc.jpeg"],
        descAr: `فلاترالالومنيوم :Class G2

          المقاسات الاستاندرد ( بالسم )
          59.2 سم طول  * 59.2 سم  عرض* 4.5سم ( سمك )
          59.2 سم طول * 29.7 سم  عرض * 4.5سم ( سمك )
          29.7 سم طول * 29.7 سم  عرض * 4.5سم ( سمك )
          59.2 سم طول  * 59.2 سم  عرض* 2.2سم ( سمك )
          59.2 سم طول * 29.7 سم  عرض * 2.2سم ( سمك )
          29.7 سم طول * 29.7 سم  عرض * 2.2سم ( سمك

          ومتوفر اي مقاسات الاخري ومتوفر الفريم الصاج -الالومنيوم -الاستانلس حسب الطلب

          الاستخدامات : في تنقية الهواء بانظمة التكييف المركزي
          مثالية للاستخدام في البيئات الشاقة التي تتطلب قوة ميكانيكية عالية و / أو درجات
          حرارة تشغيل عالية (تصل إلى 250 درجة مئوية).

          فلاتر وحدات :AHU    &   فلاتر وحدات :DX

          فلاتر وحدات : مراوحFan section

          فلاتر منع الاتربة داخل المكان :`,
        descEn: `Aluminum Filters: Class G2

          Standard Sizes (cm):
          59.2 cm (L) x 59.2 cm (W) x 4.5 cm (Thickness)
          59.2 cm (L) x 29.7 cm (W) x 4.5 cm (Thickness)
          29.7 cm (L) x 29.7 cm (W) x 4.5 cm (Thickness)
          59.2 cm (L) x 59.2 cm (W) x 2.2 cm (Thickness)
          59.2 cm (L) x 29.7 cm (W) x 2.2 cm (Thickness)
          29.7 cm (L) x 29.7 cm (W) x 2.2 cm (Thickness)

          Custom sizes are available. Frame options include sheet metal, aluminum, and stainless steel, depending on requirements.

          Applications: Air purification in central air conditioning systems.
          Ideal for use in demanding environments requiring high mechanical strength and/or high operating temperatures (up to 250°C).

          Filters for AHU and DX units

          Filters for fan sections

          Filters for indoor dust prevention`
      },
      {
        id: "felt",
        nameEn: "Plated filters",
        nameAr: "الفلاتر اللباد",
        images: ["/images/catalog/cat-1-sub-2-double-skin-air-handling-unit-500x500.jpg", "/images/catalog/cat-1-sub-2-pre g4.png", "/images/catalog/cat-1-sub-2-vz8qzNJfn1IM4346PKgLq9dC40uElhJ57m1V9C1A.jpeg"],
        descAr: `فلاتراللباد : Class G3/G4

          ستخدم كمرحلة ترشيح أولى في ترشيح الجسيمات الخشنة ، وقد تم اختبارها وفقًا لمعيار EN 779: 2012
          الكفاءة G3-G4. وسيط المرشح مصنوع من الألياف الاصطناعية المموجة ، مما يزيد من مساحة الترشيح ويسمح بقدرة أعلى على جمع الغبار

          فلاتر وحدات FAN COIL UNITS G3/G4`,
        descEn: `Plated ( LABAD ) Filters: Class G3/G4

          Used as a first-stage filter for coarse particle filtration; tested in accordance with the EN 779:2012 standard.
          Efficiency: G3-G4. The filter medium is made of pleated synthetic fibers, which increases the filtration surface area and allows for higher dust-holding capacity.

          Fan Coil Unit Filters (G3/G4):

          ستخدم كمرحلة ترشيح أولى في ترشيح الجسيمات الخشنة ، وقد تم اختبارها وفقًا لمعيار EN 779: 2012
          الكفاءة G3-G4. وسيط المرشح مصنوع من الألياف الاصطناعية المموجة ، مما يزيد من مساحة الترشيح ويسمح بقدرة أعلى على جمع الغبار

          فلاتر وحدات FAN COIL UNITS G3/G4`
      },
      {
        id: "cardboard",
        nameEn: "Cardboard filters",
        nameAr: "الفلاتر الكرتون",
        images: ["/images/catalog/cat-1-sub-3-468511583_122165124332050465_5080404655674054655_n.jpg", "/images/catalog/cat-1-sub-3-469279125_122166207350050465_7182114009012383809_n.jpg", "/images/catalog/cat-1-sub-3-95897740_2545185825742313_5780224234575888384_n.jpg", "/images/catalog/cat-1-sub-3-FB_IMG_1672061840422.jpg"],
        descAr: `- فلاتر الكرتون : : Class G4

          فلتر الكرتون بإطار من الورق المقوى وفئة ترشيح Class G4 هو فلتر هواء أولي (Pre-filter) يُستخدم لحجز الجسيمات الخشنة الكبيرة في أنظمة التكييف والتهوية (HVAC).
          المواصفات والخصائص
          فئة الكفاءة (Class G4): يُصنف ضمن الفلاتر الخشنة وفقاً لمعيار EN779، وتبلغ كفاءته في احتجاز الغبار الاصطناعي نحو 90%.
          حجم الجسيمات المستهدفة: مصمم لالتقاط الجسيمات التي يزيد حجمها عن 10 ميكرومتر (مثل: الغبار الخشن، الرمل، حبوب اللقاح، الشعر، الحشرات، وأوراق الشجر). [
          تصميم الإطار: إطار من الورق المقوى (الكرتون) المتين والمقاوم للتشوه، ويكون غالباً بتصميم مطوي على شكل حرف "V" لزيادة مساحة السطح وتعزيز قدرة احتجاز الغبار وتقليل مقاومة تدفق الهواء.
          الوظيفة والأهمية
          الترشيح الأولي: يتم وضعه في المرحلة الأولى لمدخل الهواء لحماية الفلاتر الرئيسية عالية الكفاءة (مثل F7 أو F9 أو HEPA) من الانسداد. 
          حماية المعدات: يمنع دخول الأوساخ إلى مراوح ومحركات وحدات معالجة الهواء (AHU) وقنوات التهوية، مما يطيل عمر النظام الاقتصادي والتشغيلي.`,
        descEn: `.
          Cardboard  Carton Filters: Class G4

          The cardboard-framed filter (Class G4) is a pre-filter used to capture large, coarse particles in HVAC systems.
          Specifications and Characteristics:
          Efficiency Class (Class G4): Classified as a coarse filter under the EN779 standard, with a synthetic dust capture efficiency of approximately 90%.
          Target Particle Size: Designed to capture particles larger than 10 micrometers (e.g., coarse dust, sand, pollen, hair, insects, and leaves).
          Frame Design: Features a durable, deformation-resistant cardboard frame, typically with a V-shaped pleated design to increase surface area, enhance dust-holding capacity, and reduce airflow resistance.

          Function and Importance
          • Pre-filtration: Installed at the air intake stage to protect high-efficiency main filters (such as F7, F9, or HEPA) from clogging.
          • Equipment Protection: Prevents dirt from entering the fans and motors of Air Handling Units (AHUs) and ventilation ducts, thereby extending the system's operational lifespan and cost-effectiveness.`
      },
      {
        id: "carbon",
        nameEn: "Carbon filters",
        nameAr: "فلاتر الكربون",
        images: ["/images/catalog/cat-1-sub-4-carbon panel.png", "/images/catalog/cat-1-sub-4-FB_IMG_1690189253169.jpg", "/images/catalog/cat-1-sub-4-SuperFlow_VC.png"],
        descAr: `فلاتر الكربون :Active Carbon Filters

          فلاتر الكربون النشط (Activated Carbon Filters) هي أنظمة تنقية تعتمد على الامتزاز السطحي لإزالة الروائح، والغازات، والمركبات العضوية، والكلور من الهواء.
          كيف يعمل فلتر الكربون النشط :
          الامتزاز (Adsorption): تلتصق الجزيئات والملوثات بسطح الكربون الداخلي الواسع وليس بمسامه فقط.المساحة السطحية: يتميز جرام واحد من الكربون النشط بمساحة سطحية هائلة تتيح له احتجاز كميات كبيرة من الشوائب.إزالة المواد الكيميائية: يلتقط الغازات، والروائح الكورية، والمركبات العضوية المتطايرة (VOCs).الاستخدامات الرئيسية يُستخدم في أجهزة تنقية الهواء`,
        descEn: `Activated Carbon Filters

          Activated carbon filters are purification systems that rely on surface adsorption to remove odors, gases, organic compounds, and chlorine from the air.
          How an activated carbon filter works:
          Adsorption: Molecules and pollutants adhere to the vast internal surface area of ​​the carbon, not just its pores. Surface Area: A single gram of activated carbon possesses an immense surface area, enabling it to trap large quantities of impurities. Chemical Removal: It captures gases, odors, and volatile organic compounds (VOCs). Primary Uses: Used in air purifiers.`
      },
      {
        id: "fan-coil",
        nameEn: "Fan coil filters",
        nameAr: "Fan coil filters",
        images: ["/images/catalog/cat-1-fan-coil-filter-15675867_1811279082465249_1273095336654163750_o.jpg", "/images/catalog/cat-1-fan-coil-filter-203379_4.png", "/images/catalog/cat-1-fan-coil-filter-IMG-20200302-WA0001.jpg"],
        descAr: `فلاتر وحدات FAN COIL UNITS( G2) :

          فلاتر وحدات FAN COIL UNITS G3/G4 :

          هي فلاتر خشنة تُستخدم كخط دفاع أول لتنقية الهواء وحماية الملفات الداخلية
          ما هو تصنيف G2؟
          المعيار: طبقاً للمواصفات الأوروبية القديمة (EU2) أو المواصفات الحالية (ISO Coarse)
          الكفاءة: مصممة لحجز الجزيئات الكبيرة والغبار الخشن بنسبة تتراوح بين 50% إلى 60% للأجسام التي أكبر من 10 ميكرون.
          الوظيفة والأهمية في وحدات (FCU)
          حماية الكويل: تمنع تراكم الأتربة والأوساخ على ملفات التبريد أو التسخين (Coils)، مما يحافظ على كفاءة تبادل الحرارة.
          دعم تدفق الهواء: تضمن مرور الهواء بانتظام دون إعاقة كبيرة تدفع المروحة لزيادة استهلاك الطاقة.]
          عمر أطول للمروحة: تحمي أجزاء المروحة الداخلية من التآكل أو الانسداد
          خصائص ومواصفات فلاتر G2 للـ Fan Coil
          خامة التصنيع: تصنع غالباً من ألياف صناعية (Synthetic Polyester) غير منسوجة أو ألياف البولي يوريثان القابلة للغسيل.]
          الإطار: تأتي غالباً بإطار معدني خفيف من المجلفن أو سلك معدني (Wire Frame) لسهولة التركيب والفِك.]
          **هبوط الضغط (Pressure Drop): تتميز بمقاومة منخفضة لمرور الهواء (Low Resistance)، وهو أمر ضروري لمراوح وحدات الفان كويل الصغيرة]
          السمك: تتراوح السُمكات القياسية لها غالباً بين 6 إلى 10 ملم.
          الصيانة والنظافة
          القابلية للغسيل: العديد من فلاتر (G2) المستخدمة في الفان كويل تكون قابلة للغسيل بالماء وإعادة الاستخدام بعد جفافها تماماً.
          دورية التنظيف: يُنصح بفحصها وتنظيفها دورياً (كل شهر إلى 3 أشهر حسب بيئة المكان) لضمان جودة الهواء واستمرار كفاءة التكييف`,
        descEn: `Fan Coil Unit Filters (G2):

          Fan Coil Unit Filters (G3/G4):

          These are coarse filters used as a first line of defense for air purification and the protection of internal coils.
          What is the G2 classification?
          Standard: Based on older European specifications (EU2) or current specifications (ISO Coarse).
          Efficiency: Designed to capture large particles and coarse dust, with an efficiency of 50% to 60% for particles larger than 10 microns.
          Function and Importance in Fan Coil Units (FCUs)
          Coil Protection: Prevents the accumulation of dust and dirt on cooling or heating coils, thereby maintaining heat exchange efficiency.
          Airflow Support: Ensures steady airflow without significant obstruction that would otherwise force the fan to increase energy consumption.
          Extended Fan Lifespan: Protects internal fan components from wear or clogging.
          haracteristics and Specifications of G2 Fan Coil Filters
          Material:** Typically made from non-woven synthetic fibers (synthetic polyester) or washable polyurethane fibers.
          Frame:** Usually features a lightweight galvanized metal frame or a wire frame for easy installation and removal.
          Pressure Drop:** Characterized by low air resistance, which is essential for the fans in small fan coil units.
          Thickness:** Standard thicknesses typically range from 6 to 10 mm.
          Maintenance and Cleaning
          Washability:** Many G2 filters used in fan coil units are washable with water and reusable after drying completely.
          Cleaning Frequency:** Periodic inspection and cleaning are recommended (every 1 to 3 months, depending on the environment) to ensure air quality and maintain air conditioning efficiency.`
      },
      {
        id: "fiberglass",
        nameEn: "Fiberglass filters",
        nameAr: "Fiber glass filters",
        images: ["/images/catalog/cat-1-fiber-glass-filters-cache_449_317_3_100_100_16777215_glass-fibre-panel-4inch.png", "/images/catalog/cat-1-fiber-glass-filters-FB_IMG_1672045046543.jpg"],
        descAr: `فلاتر الفيبر جلاس :

          FILTER CLASS: G3
          MEDIA: Glass Fiber
          FRAME TYPE: Cardboard
          APPLICATION: Prefilter for HVAC,spray booth
          MAX OPERATING TEMPERATURE: 75 ºc
          compact solution for painting chambers

          متوفر بالفريم الكرتون`,
        descEn: `Fiberglass Filters:

          Filter Class: G3
          Media: Glass Fiber
          Frame Type: Cardboard
          Application: Pre-filter for HVAC and spray booths
          Max Operating Temperature: 75°C
          Compact solution for paint booths

          Available with a cardboard frame.`
      }
    ],
    descAr: `الفلاتر الابتدائية
الفلاتر الابتدائية مرشحات هواء تُستخدم بشكل أساسي في أنظمة التدفئة والتهوية وتكييف الهواء، وكذلك في العمليات الصناعية وغرف الأبحاث الغرف النظيفة وهي مصممة لتنقية الهواء من الجسيمات مثل الغبار والأتربة وحبوب اللقاح والبكتيريا وغيرها من الملوثات مما يجعلها عنصراً أساسياً لتحسين جودة الهواء، والحد من مسببات الحساسية، وضمان كفاءة أنظمة التدفئة والتهوية وتكييف الهواء؛ كما تُستخدم أيضاً كمرشحات أولية في وحدات معالجة الهواء متعددة المراحل لمختلف التطبيقات.
التركيب وآلية العمليتكون المرشح اللوحي عادةً من إطار يُصنع غالباً من الورق المقوى أو البلاستيك أو المعدن تُثبَّت بداخله مادة الترشيح وتختلف مادة الترشيح باختلاف نوع المرشح، إلا أنها تتكون عادةً من مزيج من الألياف الصناعية، أو الأسلاك الفولاذية، أو الألياف الزجاجية، أو الكربون وتتميز هذه المادة بكثافة وبنية محددة تسمح بمرور تيار الهواء عبرها، مع احتجاز الجسيمات أو الشوائب الموجودة في الهواء.`,
    descEn: `Primary Filters
Primary filters are air filters mainly used in HVAC systems, as well as industrial processes and clean rooms. They are designed to purify air from particles like dust, dirt, pollen, bacteria and other pollutants. This makes them an essential element for improving air quality, reducing allergens and ensuring HVAC efficiency. They are also used as primary filters in multi-stage air handling units for various applications.
Structure and Mechanism: The panel filter usually consists of a frame made of cardboard, plastic or metal. The filter media is fixed inside it. The filter media varies depending on the type of filter, but it usually consists of a mixture of synthetic fibers, steel wire, fiberglass or carbon. This material has a specific density and structure that allows air flow through it, while trapping particles or impurities in the air.`
  },
  {
    id: "bag-and-rigid",
    nameEn: "Bag and rigid filters",
    nameAr: "فلاتر الباج والريجد",
    isCategory: true,
    images: ["/images/catalog/cat-2-14522687_660286504144533_7098677189200325737_n.jpg", "/images/catalog/cat-2-16112651_1822365324689958_6686259729897216666_o.jpg", "/images/catalog/cat-2-1674475572406_275158894.png", "/images/catalog/cat-2-74634382_450784398904919_1438712115996131328_n - Copy.jpg", "/images/catalog/cat-2-bag f8.png", "/images/catalog/cat-2-FB_IMG_1575539156449.jpg", "/images/catalog/cat-2-FB_IMG_1672068246787.jpg", "/images/catalog/cat-2-FB_IMG_1672068250940.jpg", "/images/catalog/cat-2-٢٠١٨٠٨٠٨_١٣٥٠٥٨.png"],
    descAr: `الفلاتر الباج : Pocket filters ( bag filters ) F5-F6-F7-F8

      المقاسات الاستاندرد :بالسم :

      59.2 سم طول  * 59.2 سم  عرض* 50سم ( طول الجيب ) عدد8 جيب

      59.2 سم طول * 29.7 سم  عرض * 50سم ( طول الجيب ) عدد8 جيب

      29.7سم طول * 29.7 سم  عرض * 50سم ( طول الجيب ) عدد4 جيب

      ومتوفر اي مقاسات الاخري

      فلاتر الريجد Rigid Filters  ( V-bank ):F7-F8-F9

      manufactured from mini-pleat packs of high quality paper with thermoplastic separators, sealed in a 'V' pattern into either a 20mm or 25mm headed plastic frame.`,
    descEn: `Pocket filters ( bag filters ) F5-F6-F7-F8

      Standard dimensions (in cm):

      59.2 cm (L) x 59.2 cm (W) x 50 cm (pocket depth) - 8 pockets

      59.2 cm (L) x 29.7 cm (W) x 50 cm (pocket depth) - 8 pockets

      29.7 cm (L) x 29.7 cm (W) x 50 cm (pocket depth) - 4 pockets

      Other sizes are also available

      Rigid Filters  ( V-bank ):F7-F8-F9

      manufactured from mini-pleat packs of high quality paper with thermoplastic separators, sealed in a 'V' pattern into either a 20mm or 25mm headed plastic frame.`
  },
  {
    id: "foam",
    nameEn: "Foam filters",
    nameAr: "Foam filters",
    isCategory: true,
    images: ["/images/catalog/foam-filters-15b55f95-bbd4-41f9-ade6-47bddff53e40.jpg", "/images/catalog/foam-filters-32cee602-893d-4db7-88c5-8c3c231d7d8d.jpg", "/images/catalog/foam-filters-6e67198c-d96d-48eb-8d81-fbc0d61c6b15.jpg"],
    descAr: `- فلاتر الفوم :
      Reticulated polyurethane filter foam
      Washable Panel Air Filter (Comparable to Grade G3 or G4 to EN779:2012

      متوفر الفريم الصاج -الالومنيوم -الاستانلس حسب الطلب
      82-90 %الكفاءة
      Polyether foams exhibit outstanding resistance
      to acids and bases. They are also more resistant
      to hydrolysis and other forms of chemical attack
      than is the case with polyester foams`,
    descEn: `Foam Filters:
      Reticulated polyurethane filter foam
      Washable Panel Air Filter (Comparable to Grade G3 or G4 per EN779:2012)

      Frames available in sheet metal, aluminum, or stainless steel upon request.
      Efficiency: 82-90%
      Polyether foams exhibit outstanding resistance to acids and bases. They are also more resistant to hydrolysis and other forms of chemical attack than polyester foams.`
  },
  {
    id: "hepa",
    nameEn: "HEPA filters",
    nameAr: "الفلاتر الهيبا",
    isCategory: true,
    images: ["/images/catalog/cat-4-intro-hepa-filter-10.png"],
    subProducts: [
      {
        id: "v-shape",
        nameEn: "V-shape",
        nameAr: "V-shape",
        images: ["/images/catalog/cat-4-v-shape-286781830_5356209714401706_7993848533879448772_n.png", "/images/catalog/cat-4-v-shape-BioMAXV2000.png"],
        descAr: `1-Abslute HEPA filter V-Shape ( H13-H14)

          Manufactured from mini-pleat packs of high quality micro glass paper, bonded into 'V' banks and sealed into a galvanized frame. A neoprene gasket is fitted on clean air side.

          المقاسات الاستاندرد :بالسم :

          61 سم * 61 سم * 29.7 سم            كمية الهواء الداخلة للفلتر 4000 متر 3 / س

          60 سم * 60 سم * 29.7 سم            كمية الهواء الداخلة للفلتر 4000 متر 3 / س

          59.2 سم * 59.2 سم * 29.7 سم            كمية الهواء الداخلة للفلتر 4000 متر 3 / س

          60 سم * 30 سم * 29.7 سم            كمية الهواء الداخلة للفلتر 2000 متر 3 / س

          61 سم * 30.5 سم * 29.7 سم            كمية الهواء الداخلة للفلتر 2000 متر 3 / س

          30.5سم * 30.5 سم * 29.7 سم            كمية الهواء الداخلة للفلتر 2000 متر 3 / س

          ( جميع الفلاتر تحتوي علي شهادات اختبار من المصنع لها )`,
        descEn: `1-Abslute HEPA filter V-Shape ( H13-H14)

          Manufactured from mini-pleat packs of high quality micro glass paper, bonded into 'V' banks and sealed into a galvanized frame. A neoprene gasket is fitted on clean air side.

          (All filters come with factory-tested certifications.)`
      },
      {
        id: "abslute-mini-plate",
        nameEn: "Absolute (mini-pleat)",
        nameAr: "Absolute (mini-pleat)",
        images: ["/images/catalog/cat-4-abslute-mini-plate-1-3-1-hepa-purifier-replacement-air-filter_01b.jpg", "/images/catalog/cat-4-abslute-mini-plate-f896a323-6e02-456c-a57d-ecf5ff9bc325.jpg"],
        descAr: `2- Abslute HEPA filter(H13- H14)

          Manufactured using high-quality borosilicate micro glass paper with either aluminum or Kraft separators, sealed into a wooden or galvanized case with a 2 part polyurethane sealant. A neoprene gasket is fitted on clean air side.

          تركب في انظمة التكييف المركزي الخاصة ( بالمعامل والمختبرات والمستشفيات والصناعات المختلفة )

          ( جميع الفلاتر تحتوي علي شهادات مختبرة من المصنع لها )`,
        descEn: `2- Abslute HEPA filter(H13- H14)

          Manufactured using high-quality borosilicate micro glass paper with either aluminum or Kraft separators, sealed into a wooden or galvanized case with a 2 part polyurethane sealant. A neoprene gasket is fitted on clean air side.

          Installed in central air conditioning systems for facilities such as laboratories, hospitals, and various industrial plants.

          (All filters come with factory-issued test certificates.)`
      },
      {
        id: "terminal",
        nameEn: "Terminal",
        nameAr: "Terminal",
        images: ["/images/catalog/cat-4-terminal-14517361_1775078536085304_8413073429371454509_n.jpg", "/images/catalog/cat-4-terminal-TM-Hood-center-divider.jpg"],
        descAr: `3-Terminal abslute HEPA filter ( H14 )   (  ذو الرقبة ) HEPA HOOD

          المقاسات الاستاندرد :بالسم :
          60 سم * 60 سم * 15 سم            كمية الهواء الداخلة للفلتر حوالي 580 متر 3 / س الضغط حوالي120 Pa

          60 سم * 121 سم * 15 سم            كمية الهواء الداخلة للفلتر حوالي1170 متر 3 / س الضغط حوالي120 Pa
          ومتوفر اي مقاسات الاخري حسب الطلب

          يتم تركيبها علي الاسقف المعلقة

          ( جميع الفلاتر تحتوي علي شهادات مختبرة من المصنع لها )`,
        descEn: `3-Terminal abslute HEPA filter ( H14 )  - HEPA HOOD

          Standard dimensions (cm):
          60 cm × 60 cm × 15 cm            Airflow: approx. 580 m³/h; Pressure: approx. 120 Pa

          60 cm × 121 cm × 15 cm            Airflow: approx. 1170 m³/h; Pressure: approx. 120 Pa
          Other sizes are available upon request.

          Designed for installation in suspended ceilings.

          (All filters come with factory test certificates.)`
      },
      {
        id: "deep-plate",
        nameEn: "Deep Plate",
        nameAr: "Deep Plate",
        images: ["/images/catalog/cat-4-deep-plate-118570-11624005 (1).jpg", "/images/catalog/cat-4-deep-plate-mgh-10as-aluminium-seperator-hepa-filters-galvanized-frame-292-mm.jpg"],
        descAr: `Deep pleat absolute HEPA filter (ALUMINUM SEPERATOR)

          . Filter media Water repellent glass fibre paper folded with constantly calibrated spacing. Separation with thermoplastic threads.
          Galvanised steel frame..
          Maximum temperature: 80 °C (continuous operation)
          Maximum relative humidity: 100%
          Recommended final pressure drop: 250 Pa
          they can be used in air-conditioning and ventilation systems, in systems requiring high cleanliness and/or sterility levels (laboratories, electronics, food, pharmaceutical industries and hospital sector) and for removing harmful dust being exhausted.
          They are installed inside ducts, directly into the AHU or in appropriate housings

          ( جميع الفلاتر تحتوي علي شهادات مختبرة من المصنع لها )`,
        descEn: `Deep pleat absolute HEPA filter (ALUMINUM SEPERATOR)

          . Filter media Water repellent glass fibre paper folded with constantly calibrated spacing. Separation with thermoplastic threads.
          Galvanised steel frame..
          Maximum temperature: 80 °C (continuous operation)
          Maximum relative humidity: 100%
          Recommended final pressure drop: 250 Pa
          they can be used in air-conditioning and ventilation systems, in systems requiring high cleanliness and/or sterility levels (laboratories, electronics, food, pharmaceutical industries and hospital sector) and for removing harmful dust being exhausted.
          They are installed inside ducts, directly into the AHU or in appropriate housings

          (All filters come with factory test certificates.)`
      },
      {
        id: "high-temprature-filters",
        nameEn: "High Temperature Filters",
        nameAr: "High Temperature Filters",
        images: ["/images/catalog/cat-4-high-temprature-filters-704041974_122218616588050465_5342743417406722168_n.jpg"],
        descAr: `High-Temperature Filters
          فلاتر درجات الحرارة العالية

          تُستخدم مواد متينة ومقاومة للحرارة في مرشحات صُممت خصيصاً للعمل في بيئات ذات درجات حرارة عالية. وتعمل هذه المرشحات على إزالة الملوثات المحمولة جواً لحماية العمليات التي تعتمد على الهواء الساخن، بما في ذلك عمليات تصنيع الأغذية والتصوير الفوتوغرافي. وتُصنع المكونات من مواد تتحمل درجات الحرارة المرتفعة، كما يتيح نظام التعشيق الميكانيكي الاستغناء عن استخدام المواد اللاصقة أو مواد منع التسرب؛ مما يثمر عن أداء ترشيح يتميز بمقاومة التلف والتحلل.`,
        descEn: `High-Temperature Filters
          uses durable, heat-resistant materials in filters specially designed for high-temperature environments. These filters remove airborne contaminants to protect processes that use hot air, including food processing and photography. Components are made of materials that stand up to high temperatures. Mechanical interlocking means no glues or sealants are needed. The result is filtration performance that's resistant to damage and degradation.`
      },
      {
        id: "ulpa-filters",
        nameEn: "ULPA Filters",
        nameAr: "ULPA Filters",
        images: ["/images/catalog/cat-4-ulpa-filters-images.jpg", "/images/catalog/cat-4-ulpa-filters-particlesizechartnew461271d0b3874cdeba52eff55beb0a0e.png"],
        descAr: `Ulpa Filters

          يُعد مرشح ULPA (مرشح الهواء فائق الكفاءة في احتجاز الجسيمات) نظاماً متطوراً لترشيح الهواء، حيث يزيل ما لا يقل عن 99.999% من الجسيمات العالقة في الهواء التي يصل حجمها إلى 0.12 ميكرون.
          •الكفاءة: يلتقط ما بين 99.999% و99.999995% من الجسيمات فائقة الدقة (بما في ذلك الفئات U15 وU16 وU17).
          •حجم الجسيمات: يستهدف جسيمات صغيرة بحجم 0.12 ميكرون (120 نانومتر)، متفوقاً بذلك على مرشحات HEPA القياسية التي تستهدف جسيمات بحجم 0.3 ميكرون.`,
        descEn: `Ulpa Filters

          A ULPA (Ultra-Low Particulate Air) filter is an advanced air filtration system that removes at least 99.999% of airborne particles down to 0.12 microns in size
          Efficiency: Captures 99.999% to 99.999995% of ultrafine particles (including classes U15, U16, and U17).
          Particle Size: Targets particles as small as 0.12 microns (120 nanometers), outperforming standard HEPA filters which target 0.3 microns.`
      }
    ],
    descAr: `فلاتر HEPA
      يمكن فلاتر الهواء عالي الكفاءة لاحتجاز الجسيمات (HEPA) إزالة ما يتراوح بين 99.97% و99.99% من الجسيمات المحمولة جواً التي تبلغ أحجامها 0.3 ميكرون أو أصغر أو أكبر من ذلك. ويتم تصنيف الكفاءة بناءً على أسوأ مستوى ممكن للأداء؛ لذا يمكن اعتبار النسبة 99.97% أو "أفضل" من ذلك.
      تُختبر فلاترHEPA باستخدام جسيمات هوائية بحجم 0.3 ميكرون، نظراً لأن هذا الحجم يُعد الأصعب من حيث قدرة المرشح على التقاطه. وفي الواقع، تتمتع فلاتر HEPA بكفاءة أعلى في التقاط الجسيمات الأصغر حجماً، مثل تلك التي تماثل حجم الفيروسات (والتي يبلغ متوسط ​​حجمها 0.1 ميكرون).`,
    descEn: `HEPA filters
      A high-efficiency particulate air (HEPA) filter can remove 99.97% - 99.99% of airborne particles that are equal to, smaller or larger than 0.3 microns in size The efficiency is rated based on the worst level possible, so think about it as 99.97% or BETTER.
      HEPA filters are tested using air particles that are 0.3 micron size as those are the most difficult size for a HEPA filter to catch. HEPA filters are actually more efficient at capturing smaller-sized particles, like those the size of viruses (which on average are 0.1 microns)`
  },
  {
    id: "paint-booth-rolls",
    nameEn: "Paint booth filters rolls",
    nameAr: "رولات فلاتر الدهان",
    isCategory: true,
    images: ["/images/catalog/cat-6-187885988_2285688954900992_2197314563246218708_n.jpg", "/images/catalog/cat-6-468125548_122165047682050465_4601384919979319396_n.jpg", "/images/catalog/cat-6-619623826_122144252168979198_8490867250375582077_n.jpg", "/images/catalog/cat-6-75551b43e850aa12f30f68e6b001c93f (1).png", "/images/catalog/cat-6-paint-booth-1.jpg", "/images/catalog/cat-6-paintsprayboothfiltershero.jpg", "/images/catalog/cat-6-synthetic roll.png", "/images/catalog/cat-6-فلتر سقفي.PNG"],
    descAr: `متوفر جميع الرولات الخاصة بغرف الدهان :

      1-رول فلتر سقف مقاس :

      ( 2 متر عرض * طول 20 متر  سمك  يبداء من 2 سم )

      2- رول فلتر جنب:


      ( 2 متر عرض * طول 20 متر  سمك  يبداء من 6 سم )

      3-رول فلتر ارضية :

      ( 1.5 متر عرض * طول 20 متر  سمك  يبداء من 6 سم )`,
    descEn: `All types of spray booth filter rolls are available:

      1- Ceiling filter roll:

      (2m width × 20m length; thickness starting from 2cm)

      2- Side filter roll (G4):

      (2m width × 20m length; thickness starting from 6cm)

      3- Floor filter roll:

      (1.5m width × 20m length; thickness starting from 6cm)`
  },
  {
    id: "dust-collectors",
    nameEn: "Dust collector filters",
    nameAr: "Dust Collectors filters",
    isCategory: true,
    images: ["/images/catalog/dust-collectors-filters-91825180_2409734585793485_6559244943162867712_n.jpg", "/images/catalog/dust-collectors-filters-91861380_2409730602460550_9088280970204807168_n.jpg", "/images/catalog/dust-collectors-filters-China-Factory-Price-Dust-Collector-Filter-Bag-for-Filtration.jpg", "/images/catalog/dust-collectors-filters-custom_engineered_dust_collection_system_large.jpg", "/images/catalog/dust-collectors-filters-Dust-Filter-Bag-6.jpg"],
    descAr: `فلاتر لمجمع الاتربة والمواد الدقيقة
      Needle Felt Filter Bag( Pocket Filters ) for Dust Collector
      Manufactroy all kind and size of dust Collector`,
    descEn: `Needle Felt Filter Bag( Pocket Filters ) for Dust Collector
      Manufactroy all kind and size of dust Collector`
  },
  {
    id: "filter-equipment",
    nameEn: "Filters manufacturing equipments",
    nameAr: "المهمات اللازمة لتصنيع الفلاتر",
    isCategory: true,
    images: ["/images/catalog/cat-8-51ZZ6BuRcCL._SS400_.jpg", "/images/catalog/cat-8-FB_IMG_1606945531264.jpg", "/images/catalog/cat-8-FB_IMG_1672059970000.jpg", "/images/catalog/cat-8-FB_IMG_1697227314795.jpg", "/images/catalog/cat-8-FB_IMG_1697227337838.jpg", "/images/catalog/cat-8-Galvanized-Frame-Blue.jpg", "/images/catalog/cat-8-images (2).jpg"],
    descAr: `توريد وتصنيع المهمات اللازمة لتصنيع الفلاتر

      الشبك الخارجي لخامة  للفلاتر :

      الفريمات الجاهزة ( الحديد - البلاستيك ):

      الصاج المقطع شرائح بسماكات مختلفة  ( الصاج المشرح )  :`,
    descEn: `Equipment required for filter manufacturing

      Outer mesh for filter material:

      Frames (iron - plastic):

      Sheet metal cut into strips of varying thicknesses (slit sheet metal)`
  },
  {
    id: "cat-5",
    nameAr: "خامات الفلاتر",
    nameEn: "Filter materials",
    isCategory: true,
    images: ["/images/catalog/cat-5-11.PNG", "/images/catalog/cat-5-1630479804791.jpg", "/images/catalog/cat-5-1631081481881.jpg", "/images/catalog/cat-5-31h70NpotML__1607972570.jpg", "/images/catalog/cat-5-7300010-11.jpg", "/images/catalog/cat-5-FB_IMG_1671896739485.jpg", "/images/catalog/cat-5-HEPA-Filter-material.jpg", "/images/catalog/cat-5-images (11).jpg", "/images/catalog/cat-5-PSG.jpg", "/images/catalog/cat-5-synthetic roll.png", "/images/catalog/cat-5-thumbnail (3).jpg"],
    descAr: `خامات الفلاتر Raw Roll Filters   :

      تقوم الشركة  باستيراد جميع انواع خامات الفلاتر من اجود الانواع :

      خامات للفلاتر اللباد                                                 خامات للفلاتر الباج

      خامات الفلاتر الكربون                                              خامات فلاترالكرتون

      خامات فلاتر الالومنيوم                                               خامات لفلاتر الدهان

      خامات الفلاتر الفوم                                                    خامات الفلاتر الهيبا`,
    descEn: `Filter Media (Raw Roll Filters):

      The company imports a wide range of high-quality filter media:

      Felt filters media                                                     Bag filters media

      Carbon filters media                                                Cardboard filters media

      Aluminum filters media                                             Paint filters media

      Foam filters media                                                    HEPA filters media`
  },
  {
    id: "cat-9",
    nameEn: "Importing",
    nameAr: "الاستيراد",
    isCategory: true,
    images: ["/images/catalog/cat-9-1630548953131.jpg", "/images/catalog/cat-9-31698932_835049996685440_1038754797068484608_n.png", "/images/catalog/cat-9-75323295_771413943280079_5574940800875233280_n.png", "/images/catalog/cat-9-aaf-logo-red-retina.png", "/images/catalog/cat-9-camfil3.png", "/images/catalog/cat-9-downloa.png", "/images/catalog/cat-9-download (2).png", "/images/catalog/cat-9-download.jpg", "/images/catalog/cat-9-downlolllad.png", "/images/catalog/cat-9-downlSSSoad.png", "/images/catalog/cat-9-logo-fcr-1.png", "/images/catalog/cat-9-logo.png", "/images/catalog/cat-9-marchio_SagiCofimUK.jpg"],
    subProducts: [],
    descAr: `نبيع جميع انواع الفلاتر المستوردة من انحاء العالم :

      ايطالي - تركي  

      اماراتي 

      امريكي- ماليزي

     `,
    descEn: `We sell all types of filters imported from around the world:

      Italian - Turkish  

      Emirati 

      American-Malaysian`
  },
  {
    id: "cat-10",
    nameEn: "Sectors using filters",
    nameAr: "القطاعات اللتي تستخدم الفلاتر",
    isCategory: true,
    images: ["/images/catalog/cat-10-المباني الادارية.jpeg", "/images/catalog/cat-10-المستشفيات.jpg", "/images/catalog/cat-10-المصانع وخاصة مصانع الاغذية.jpg", "/images/catalog/cat-10-صناعة الادوية.jpg", "/images/catalog/cat-10-قطاع البتروكيماويات ومحطات الطاقة.jpg", "/images/catalog/cat-10-وسائل النقل.jpg"],
    subProducts: [],
    descAr: `بعض القطاعات تستخدم الفلاتربصفة مستمرة :

      المستشفيات                                   شركات انتاج الادوية

      المصانع وخاصة مصانع الاغذية                      قطاع البتروكيماويات ومحطات الطاقة

      المباني الادارية                                                              وسائل النقل`,
    descEn: `Some sectors use filters continuously:

      Pharmaceutical manufacturing companies                    Hospitals

      Petrochemicals and Power Plants Sector                   Factories, especially food processing plants.

      Administrative Buildings                                                        Means of transportation`
  },
  {
    id: "cat-11",
    nameEn: "Idea about filters",
    nameAr: "نبذة عن الفلاتر",
    isCategory: true,
    images: [
      "/images/catalog/cat-11-3-s2.0-b9781845695644500141-f14-05-9781845695644.jpg",
      "/images/catalog/cat-11-1111.png",
      "/images/catalog/cat-11-air-filter-solution3.jpg",
      "/images/catalog/cat-11-filterchart.gif",
      "/images/catalog/cat-11-filterklasser--bubblor.png",
      "/images/catalog/cat-11-how-a-hepa-filter-works-prana-air_1.png",
      "/images/catalog/cat-11-table-1-hf.png"
    ],
    subProducts: [],
    descAr: `تستخدم الفلاتر لتنقية وترشيح الهواء المكيف قبل ان ينتقل للانسان وانواعها:
      الفلتر الشبكي والجيبي والكربوني والهيبا وهو غالبا يستعمل في المستشفيات

      تقسيم الفلاتر طبقا لللاكواد :
      Standards
      ASHRAE 52.1 - This standard covers the determination of 'dust spot   efficiency' and 'dust weight arrestance'.
      ASHRAE 52.2 - This standard covers the general testing of removal efficiency by particle size.
      EN 779:2012 - This standard widely used in Europe defines the filtration classes according to the average filtration efficiency of particles with a diameter of 0.4 micron size.
      EN 16890 - This new standard defines the air concentrations of particles whose diameters are less than 10, 2.5 & 1 micron size.
      EN 1822:2009 - This standard covers HEPA filtration`,
    descEn: `Filters are used to purify and filter conditioned air before it reaches people. Types include mesh, pocket, and carbon filters, as well as HEPA filters-the latter being commonly used in hospitals.

      Classification of filters according to codes:
      Standards
      ASHRAE 52.1 - This standard covers the determination of 'dust spot   efficiency' and 'dust weight arrestance'.
      ASHRAE 52.2 - This standard covers the general testing of removal efficiency by particle size.
      EN 779:2012 - This standard widely used in Europe defines the filtration classes according to the average filtration efficiency of particles with a diameter of 0.4 micron size.
      EN 16890 - This new standard defines the air concentrations of particles whose diameters are less than 10, 2.5 & 1 micron size.
      EN 1822:2009 - This standard covers HEPA filtration`
  }
];

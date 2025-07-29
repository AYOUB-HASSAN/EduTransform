#  EduTransform Medical

منصة تعليمية مبتكرة مصممة خصيصاً لطلاب الطب في السودان 

##  المميزات

-  **واجهة عربية بالكامل** مع دعم RTL
- **تصميم متجاوب** يعمل على جميع الأجهزة
-  **الوضع المظلم والفاتح** قابل للتبديل
-  **مواد دراسية شاملة** مع ملخصات PDF وفيديوهات
-  **EduCast** للمحاضرات الصوتية
-  **أدوات تعلم تفاعلية** مثل البطاقات التعليمية
-  **مركز التعلم التشاركي** للتواصل مع الزملاء
-  **تتبع التقدم** الشخصي

##  البدء السريع

### المتطلبات

- Node.js (الإصدار 16 أو أحدث)
- npm أو yarn

### التثبيت

1. **استنساخ المشروع**
```bash
git clone https://github.com/AYOUB-HASSAN/edutransform-medical.git
cd edutransform-medical
```

2. **تثبيت المتطلبات**
```bash
npm install
```

3. **تشغيل التطبيق محلياً**
```bash
npm start
```

يفتح التطبيق على `http://localhost:3000`

4. **بناء التطبيق للإنتاج**
```bash
npm run build
```

##  النشر على GitHub Pages

### إعداد GitHub Pages

1. **إنشاء مستودع GitHub جديد**
   - انتقل إلى GitHub وأنشئ مستودع جديد
   - تأكد من أن اسم المستودع يطابق `edutransform-medical`

2. **رفع الكود إلى GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/edutransform-medical.git
git push -u origin main
```

3. **نشر التطبيق**
```bash
npm run deploy
```

4. **تفعيل GitHub Pages**
   - انتقل إلى إعدادات المستودع على GitHub
   - اذهب إلى قسم "Pages"
   - اختر "Deploy from a branch"
   - اختر فرع `gh-pages` كمصدر

### بدائل أخرى للاستضافة المجانية

- **Netlify**: سحب وإفلات ملف build، أو ربط مع GitHub
- **Vercel**: ربط مباشر مع GitHub، نشر تلقائي
- **Surge.sh**: `npm install -g surge && surge build/`

##  ميزات التطبيق

### الصفحة الرئيسية
- واجهة ترحيبية جذابة
- عرض سريع للمميزات
- إحصائيات المنصة

### لوحة التحكم
- عرض التقدم الدراسي
- الوصول السريع للمواد
- إحصائيات شخصية

### المواد الدراسية
- تنظيم حسب التخصصات
- محتوى تفاعلي
- ملخصات PDF
- مقاطع فيديو تعليمية

##  التقنيات المستخدمة

- **React 18** - إطار العمل الأساسي
- **React Router** - للتنقل بين الصفحات
- **Tailwind CSS** - للتصميم
- **Framer Motion** - للرسوم المتحركة
- **Heroicons** - للأيقونات

##  الترخيص

هذا المشروع مرخص تحت ترخيص MIT

##  المساهمة

المساهمات مرحب بها! يرجى فتح Issue أو Pull Request

##  التواصل

للأسئلة والاستفسارات، يرجى التواصل عبر:
- GitHub: [@AYOUB-HASSAN](https://github.com/AYOUB-HASSAN)

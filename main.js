// استبدلي الرقم التجريبي برقم واتساب صاحب الكتاب بصيغة دولية، بدون + أو مسافات.
// مثال الصيغة المصرية: 2010XXXXXXXX (اكتبي الرقم الحقيقي بدل X).
const WHATSAPP_NUMBER = "201555846167";
const EMAIL_ADDRESS = "Mawad7248@gmail.com";
const BOOK_PRICE = 380;
const quantity = document.getElementById('quantity');
const total = document.getElementById('total');
const sum = document.getElementById('sum');
const qtyText = document.getElementById('qtyText');
const status = document.getElementById('status');
function updateTotal(){const count=Number(quantity.value)||1;const amount=count*BOOK_PRICE;
total.textContent=`${amount} جنيه`;sum.textContent=`${amount} جنيه`;qtyText.textContent=count;}
quantity.addEventListener('change',updateTotal);document.getElementById('year').textContent=new Date()
.getFullYear();updateTotal();
document.getElementById('orderForm').addEventListener('submit',function(e){e.preventDefault();
if(!this.reportValidity())return;
if(WHATSAPP_NUMBER.includes('X')){status.textContent='قبل استخدام الطلبات، افتحي script.js وضعي رقم واتساب صاحب الكتاب بدل الرقم التجريبي في WHATSAPP_NUMBER.';
 return;}const count=Number(quantity.value)||1;const amount=count*BOOK_PRICE;
const msg=['السلام عليكم، أرغب في طلب كتاب:','المواد الفعالة للمبيدات الزراعية في مصر','المؤلف:المهندس محمد عوض',
'النوع: نسخة ورقية فقط',`سعر النسخة: ${BOOK_PRICE} جنيه`,`عدد النسخ: ${count}`,`إجمالي سعر الكتب: ${amount} جنيه`,'',`الاسم: 
${document.getElementById('name').value}`,
`رقم الموبايل: ${document.getElementById('phone').value}`,`المحافظة: ${document.getElementById('governorate').value}`,
`العنوان: ${document.getElementById('address').value}`,`ملاحظات: ${document.getElementById('notes').value||'لا يوجد'}`,''
,'برجاء تأكيد تكلفة التوصيل وطريقة الدفع.'].join('\n');
window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,'_blank',
'noopener,noreferrer');status.textContent='راجع رسالة واتساب واضغط إرسال لإتمام الطلب.';
});
document.getElementById('emailOrderButton').addEventListener('click', function () {
  const form = document.getElementById('orderForm');

  if (!form.reportValidity()) return;

  const count = Number(quantity.value) || 1;
  const amount = count * BOOK_PRICE;

  const msg = [
    'طلب كتاب المواد الفعالة للمبيدات الزراعية في مصر',
    'اسم العميل: ' + document.getElementById('name').value,
    'رقم الموبايل: ' + document.getElementById('phone').value,
    'المحافظة: ' + document.getElementById('governorate').value,
    'العنوان: ' + document.getElementById('address').value,
    'عدد النسخ: ' + count,
    'إجمالي السعر: ' + amount + ' جنيه',
    'ملاحظات: ' + (document.getElementById('notes').value || 'لا يوجد')
  ].join('\n');

  const subject = 'طلب جديد لكتاب المواد الفعالة للمبيدات الزراعية';
  const mailto = 'mailto:' + EMAIL_ADDRESS +
    '?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(msg);

  window.open(
  'https://mail.google.com/mail/?view=cm&fs=1&to=' +
  encodeURIComponent(EMAIL_ADDRESS) +
  '&su=' + encodeURIComponent(subject) +
  '&body=' + encodeURIComponent(msg),
  '_blank'
);
});
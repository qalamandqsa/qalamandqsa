// وظيفة لإظهار وإخفاء تفاصيل الكتاب
function toggleDetails(id) {
    var details = document.getElementById('details-' + id);
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'table-row';
    } else {
        details.style.display = 'none';
    }
}

// وظيفة لإظهار وإخفاء النموذج عند النقر على زر "متابعة"
function toggleForm() {
    var formContainer = document.getElementById('form-container');
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block';
    } else {
        formContainer.style.display = 'none';
    }
}

// وظيفة للتحقق من المدخلات عند إرسال النموذج
function submitForm(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    var fullName = document.getElementById('full-name').value;
    var nationalID = document.getElementById('national-id').value;
    var birthDate = document.getElementById('birth-date').value;
    var phoneNumber = document.getElementById('phone-number').value;

    // التحقق من صحة الرقم الوطني
    if (!/^\d{11}$/.test(nationalID)) {
        alert('الرقم الوطني يجب أن يحتوي على 11 خانة.');
        return;
    }

    // جمع المعلومات حول الكتب المختارة
    var selectedBooks = document.querySelectorAll('input[name="select-book"]:checked');
    var selectedBooksInfo = Array.from(selectedBooks).map(book => book.value).join(', ');

    // عرض نافذة جديدة تتضمن معلومات الكتب التي تم اختيارها
    alert(`تم إرسال النموذج بنجاح!\n\nالمعلومات المدخلة:\nالاسم الكامل: ${fullName || 'غير مدخل'}\nالرقم الوطني: ${nationalID}\nتاريخ الميلاد: ${birthDate || 'غير مدخل'}\nرقم الموبايل: ${phoneNumber || 'غير مدخل'}\n\nالكتب المختارة: ${selectedBooksInfo || 'لا توجد كتب مختارة'}`);
}
document.addEventListener("DOMContentLoaded", function() {
    var checkboxes = document.querySelectorAll('input[name="select-book"]');
    var continueButton = document.getElementById("continue-button");

    // إخفاء الزر عند تحميل الصفحة
    continueButton.style.display = "none";

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", function() {
            var anyChecked = Array.from(checkboxes).some(function(checkbox) {
                return checkbox.checked;
            });

            if (anyChecked) {
                continueButton.style.display = "block";
            } else {
                continueButton.style.display = "none";
            }
        });
    });
});

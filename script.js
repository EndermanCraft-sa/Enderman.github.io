// تفعيل وضع الداكن
document.getElementById('toggleTheme').addEventListener('click', function() {
    document.body.classList.toggle('dark');
});

// رفع الصورة
document.getElementById('uploadImage').addEventListener('click', function() {
    const input = document.getElementById('imageInput');
    const imageGallery = document.getElementById('imageGallery');

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgContainer = document.createElement('div');
            const img = document.createElement('img');
            img.src = e.target.result;
            imageGallery.appendChild(imgContainer);
            imgContainer.appendChild(img); // إضافة الصورة إلى المعرض

            // إنشاء زر "معاينة الصورة"
            const viewBtn = document.createElement('button');
            viewBtn.textContent = 'معاينة الصورة';
            viewBtn.classList.add('view-btn');
            imgContainer.appendChild(viewBtn);

            // إنشاء رابط "شارك الصورة"
            const shareBtn = document.createElement('button');
            shareBtn.textContent = 'شارك الصورة';
            shareBtn.classList.add('share-btn');
            imgContainer.appendChild(shareBtn);

            // التعامل مع معاينة الصورة
            viewBtn.addEventListener('click', function() {
                const modal = document.getElementById('imageModal');
                const modalImg = document.getElementById('modalImage');
                modal.style.display = 'block';
                modalImg.src = e.target.result;
            });

            // التعامل مع زر إغلاق المعاينة
            const modal = document.getElementById('imageModal');
            const closeBtn = document.getElementsByClassName('close')[0];
            closeBtn.onclick = function() {
                modal.style.display = 'none';
            };

            // إنشاء رابط المشاركة
            shareBtn.addEventListener('click', function() {
                const link = document.createElement('a');
                link.href = e.target.result;
                link.textContent = 'شارك الصورة';
                link.target = '_blank';
                link.click();
            });
        };
        reader.readAsDataURL(input.files[0]);
    }
});
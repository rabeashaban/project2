let listX = document.getElementById("listX");
let icon =  document.getElementById("icon");



icon.addEventListener("click", function() {
    // افحص إذا كانت القائمة مرئية أم مخفية وقم بتبديل حالتها
    if (listX.style.display === "none" || listX.style.display === "") {
        listX.style.display = "block"; // إظهار القائمة
    } else {
        listX.style.display = "none"; // إخفاء القائمة
    }
});

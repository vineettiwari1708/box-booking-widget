<!-- Booking Widget Script Tag -->
<script
  id="booking-widget-script"
  data-title="Book an Appointment"
  data-position="right"
  data-email="recipient@email.com"
  src="">
</script>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const scriptTag = document.getElementById("booking-widget-script");
  if (!scriptTag) return;

  const position = scriptTag.getAttribute("data-position") || "right";
  const title = scriptTag.getAttribute("data-title") || "Book Now";
  const recipientEmail = scriptTag.getAttribute("data-email") || "";

  // Create the booking widget
  const widget = document.createElement("div");
  widget.id = "booking-widget";
  widget.style.width = "320px";
  widget.style.position = "fixed";
  widget.style.top = "50%";
  widget.style[position] = "20px";
  widget.style.transform = "translateY(-50%)";
  widget.style.backgroundColor = "#ffffff";
  widget.style.border = "1px solid #ccc";
  widget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
  widget.style.zIndex = "99999";
  widget.style.borderRadius = "12px";
  widget.style.overflow = "hidden";
  widget.style.opacity = "0";
  widget.style.transition = "opacity 0.5s ease";
  widget.style.display = "flex";
  widget.style.flexDirection = "column";

  widget.innerHTML = `
    <div style="padding: 16px;">
      <h3 style="margin-top: 0;">${title}</h3>
      <form id="booking-form">
        <input type="text" name="name" placeholder="Your Name" required style="width:100%; margin-bottom: 10px;" />
        <input type="email" name="user_email" placeholder="Your Email" required style="width:100%; margin-bottom: 10px;" />
        <input type="tel" name="phone" placeholder="Mobile Number" required pattern="\\+?[0-9\\s-]+" style="width:100%; margin-bottom: 10px;" />
        <input type="datetime-local" name="datetime" required style="width:100%; margin-bottom: 10px;" />
        <input type="hidden" name="recipient_email" value="${recipientEmail}" />
        <button type="submit" style="width:100%; padding:10px; background:#007bff; color:#fff; border:none; border-radius: 5px;">Book Now</button>
      </form>
      <p id="booking-message" style="margin-top:10px; font-size: 14px; color: green;"></p>
    </div>
    <button id="close-booking-widget" style="border-radius: 0 0 12px 12px; border: none; background: #dc3545; color: white; padding: 10px;">Close</button>
  `;

  document.body.appendChild(widget);
  requestAnimationFrame(() => {
    widget.style.opacity = "1";
  });

  // Reopen button
  const reopenBtn = document.createElement("button");
  reopenBtn.id = "reopen-booking-widget";
  reopenBtn.innerHTML = `<i class="fas fa-calendar-alt"></i>`;
  reopenBtn.style.position = "fixed";
  reopenBtn.style.top = "50%";
  reopenBtn.style[position] = "20px";
  reopenBtn.style.transform = "translateY(-50%)";
  reopenBtn.style.width = "60px";
  reopenBtn.style.height = "60px";
  reopenBtn.style.borderRadius = "50%";
  reopenBtn.style.backgroundColor = "#007bff";
  reopenBtn.style.color = "#fff";
  reopenBtn.style.border = "none";
  reopenBtn.style.fontSize = "24px";
  reopenBtn.style.zIndex = "99998";
  reopenBtn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
  reopenBtn.style.cursor = "pointer";
  reopenBtn.style.display = "none";

  document.body.appendChild(reopenBtn);

  // Close widget
  widget.querySelector("#close-booking-widget").addEventListener("click", () => {
    widget.style.opacity = "0";
    setTimeout(() => {
      widget.style.display = "none";
      reopenBtn.style.display = "block";
    }, 300);
  });

  // Reopen widget
  reopenBtn.addEventListener("click", () => {
    widget.style.display = "flex";
    requestAnimationFrame(() => {
      widget.style.opacity = "1";
    });
    reopenBtn.style.display = "none";
  });

  // Form submit handler
  document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {
      name: formData.get("name"),
      user_email: formData.get("user_email"),
      phone: formData.get("phone"),
      datetime: formData.get("datetime"),
      recipient_email: formData.get("recipient_email")
    };

    console.log("📩 Booking Submitted:");
    console.log("To:", data.recipient_email);
    console.log("From:", data.user_email);
    console.log("Name:", data.name);
    console.log("Phone:", data.phone);
    console.log("Date/Time:", data.datetime);

    const msg = document.getElementById("booking-message");
    msg.textContent = "Booking submitted! We'll contact you shortly.";
    this.reset();

    // TODO: Send 'data' to an API, EmailJS, or your backend
  });
});
</script>

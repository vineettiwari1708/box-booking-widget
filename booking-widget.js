// document.addEventListener("DOMContentLoaded", function () {
//   const scriptTag = document.getElementById("booking-widget-script");
//   if (!scriptTag) return;

//   const position = scriptTag.getAttribute("data-position") || "right";
//   const title = scriptTag.getAttribute("data-title") || "Book Now";
//   const recipientEmail = scriptTag.getAttribute("data-email") || "";

//   // Create the booking widget (hidden initially)
//   const widget = document.createElement("div");
//   widget.id = "booking-widget";
//   widget.style.width = "320px";
//   widget.style.position = "fixed";
//   widget.style.top = "50%";
//   widget.style[position] = "20px";
//   widget.style.transform = "translateY(-50%)";
//   widget.style.backgroundColor = "#fff";
//   widget.style.border = "1px solid #ccc";
//   widget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
//   widget.style.zIndex = "99999";
//   widget.style.borderRadius = "12px";
//   widget.style.overflow = "hidden";
//   widget.style.display = "none"; // Hidden initially
//   widget.style.flexDirection = "column";

//   widget.innerHTML = `
//     <div style="padding: 16px;">
//       <h3 style="margin-top: 0;">${title}</h3>
//       <form id="booking-form">
//         <input type="text" name="name" placeholder="Your Name" required style="width:100%; margin-bottom: 10px;" />
//         <input type="email" name="user_email" placeholder="Your Email" required style="width:100%; margin-bottom: 10px;" />
//         <input type="tel" name="phone" placeholder="Mobile Number" required pattern="\\+?[0-9\\s-]+" style="width:100%; margin-bottom: 10px;" />
//         <input type="datetime-local" name="datetime" required style="width:100%; margin-bottom: 10px;" />
//         <input type="hidden" name="recipient_email" value="${recipientEmail}" />
//         <button type="submit" style="width:100%; padding:10px; background:#007bff; color:#fff; border:none; border-radius: 5px;">Book Now</button>
//       </form>
//       <p id="booking-message" style="margin-top:10px; font-size: 14px; color: green;"></p>
//     </div>
//     <button id="close-booking-widget" style="border-radius: 0 0 12px 12px; border: none; background: #dc3545; color: white; padding: 10px; cursor:pointer;">Close</button>
//   `;

//   document.body.appendChild(widget);

//   // Create the toggle button visible always
//   const toggleBtn = document.createElement("button");
//   toggleBtn.id = "toggle-booking-widget";
//   toggleBtn.textContent = title; // Show "Book an Appointment" text
//   toggleBtn.style.position = "fixed";
//   toggleBtn.style.top = "50%";
//   toggleBtn.style[position] = "20px";
//   toggleBtn.style.transform = "translateY(-50%)";
//   toggleBtn.style.padding = "12px 16px";
//   toggleBtn.style.backgroundColor = "#007bff";
//   toggleBtn.style.color = "#fff";
//   toggleBtn.style.border = "none";
//   toggleBtn.style.borderRadius = "25px";
//   toggleBtn.style.cursor = "pointer";
//   toggleBtn.style.fontWeight = "600";
//   toggleBtn.style.fontSize = "14px";
//   toggleBtn.style.zIndex = "100000";
//   toggleBtn.style.transition = "width 0.3s ease, padding 0.3s ease";
//   toggleBtn.style.whiteSpace = "nowrap";
//   toggleBtn.style.overflow = "hidden";

//   // Initially show only icon-sized button, text appears on hover
//   toggleBtn.style.width = "40px";
//   toggleBtn.style.padding = "12px 8px";
//   toggleBtn.style.textIndent = "-9999px"; // hide text initially

//   // Add icon to button (calendar icon)
//   const icon = document.createElement("span");
//   icon.className = "fas fa-calendar-alt";
//   icon.style.fontSize = "18px";
//   icon.style.marginRight = "0";
//   icon.style.color = "white";
//   icon.style.position = "absolute";
//   icon.style.left = "12px";
//   icon.style.top = "50%";
//   icon.style.transform = "translateY(-50%)";
//   toggleBtn.style.position = "fixed";
//   toggleBtn.appendChild(icon);

//   // On hover: show text (expand button)
//   toggleBtn.addEventListener("mouseenter", () => {
//     toggleBtn.style.width = "160px";
//     toggleBtn.style.padding = "12px 16px";
//     toggleBtn.style.textIndent = "0";
//     icon.style.marginRight = "8px";
//   });

//   toggleBtn.addEventListener("mouseleave", () => {
//     toggleBtn.style.width = "40px";
//     toggleBtn.style.padding = "12px 8px";
//     toggleBtn.style.textIndent = "-9999px";
//     icon.style.marginRight = "0";
//   });

//   document.body.appendChild(toggleBtn);

//   // Open widget on button click
//   toggleBtn.addEventListener("click", () => {
//     widget.style.display = "flex";
//     toggleBtn.style.display = "none";
//   });

//   // Close widget on close button click
//   widget.querySelector("#close-booking-widget").addEventListener("click", () => {
//     widget.style.display = "none";
//     toggleBtn.style.display = "block";
//   });

//   // Handle form submit (same as before)
//   document.getElementById("booking-form").addEventListener("submit", function (e) {
//     e.preventDefault();

//     const formData = new FormData(this);
//     const data = {
//       name: formData.get("name"),
//       user_email: formData.get("user_email"),
//       phone: formData.get("phone"),
//       datetime: formData.get("datetime"),
//       recipient_email: formData.get("recipient_email")
//     };

//     console.log("📩 Booking Submitted:");
//     console.log("To:", data.recipient_email);
//     console.log("From:", data.user_email);
//     console.log("Name:", data.name);
//     console.log("Phone:", data.phone);
//     console.log("Date/Time:", data.datetime);

//     const msg = document.getElementById("booking-message");
//     msg.textContent = "Booking submitted! We'll contact you shortly.";
//     this.reset();
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const scriptTag = document.getElementById("booking-widget-script");
  if (!scriptTag) return;

  const position = scriptTag.getAttribute("data-position") || "right";
  const title = scriptTag.getAttribute("data-title") || "Book Now";
  const recipientEmail = scriptTag.getAttribute("data-email") || "";

  // Create the booking widget (hidden initially)
  const widget = document.createElement("div");
  widget.id = "booking-widget";
  widget.style.width = "320px";
  widget.style.position = "fixed";
  widget.style.top = "50%";
  widget.style[position] = "20px";
  widget.style.transform = "translateY(-50%)";
  widget.style.backgroundColor = "#fff";
  widget.style.border = "1px solid #ccc";
  widget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
  widget.style.zIndex = "99999";
  widget.style.borderRadius = "12px";
  widget.style.overflow = "hidden";
  widget.style.display = "none"; // Hidden initially
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
    <button id="close-booking-widget" style="border-radius: 0 0 12px 12px; border: none; background: #dc3545; color: white; padding: 10px; cursor:pointer;">Close</button>
  `;

  document.body.appendChild(widget);

  // Create the toggle button visible always
  const toggleBtn = document.createElement("button");
  toggleBtn.id = "toggle-booking-widget";
  toggleBtn.textContent = title; // Show "Book an Appointment" text
  toggleBtn.style.position = "fixed";
  toggleBtn.style.top = "50%";
  toggleBtn.style[position] = "20px";
  toggleBtn.style.transform = "translateY(-50%)";
  toggleBtn.style.padding = "12px 16px";
  toggleBtn.style.backgroundColor = "#007bff";
  toggleBtn.style.color = "#fff";
  toggleBtn.style.border = "none";
  toggleBtn.style.borderRadius = "25px";
  toggleBtn.style.cursor = "pointer";
  toggleBtn.style.fontWeight = "600";
  toggleBtn.style.fontSize = "14px";
  toggleBtn.style.zIndex = "100000";
  toggleBtn.style.transition = "width 0.3s ease, padding 0.3s ease";
  toggleBtn.style.whiteSpace = "nowrap";
  toggleBtn.style.overflow = "hidden";

  // Initially show only icon-sized button, text appears on hover
  toggleBtn.style.width = "40px";
  toggleBtn.style.padding = "12px 8px";
  toggleBtn.style.textIndent = "-9999px"; // hide text initially

  // Add icon to button (calendar icon)
  const icon = document.createElement("span");
  icon.className = "fas fa-user-edit";
  icon.style.fontSize = "18px";
  icon.style.marginRight = "0";
  icon.style.color = "white";
  icon.style.position = "absolute";
  icon.style.left = "12px";
  icon.style.top = "50%";
  icon.style.transform = "translateY(-50%)";
  toggleBtn.style.position = "fixed";
  toggleBtn.appendChild(icon);

  // On hover: show text (expand button)
  toggleBtn.addEventListener("mouseenter", () => {
    toggleBtn.style.width = "160px";
    toggleBtn.style.padding = "12px 16px";
    toggleBtn.style.textIndent = "0";
    icon.style.marginRight = "8px";
  });

  toggleBtn.addEventListener("mouseleave", () => {
    toggleBtn.style.width = "40px";
    toggleBtn.style.padding = "12px 8px";
    toggleBtn.style.textIndent = "-9999px";
    icon.style.marginRight = "0";
  });

  document.body.appendChild(toggleBtn);

  // Open widget on button click
  toggleBtn.addEventListener("click", () => {
    widget.style.display = "flex";
    toggleBtn.style.display = "none";
  });

  // Close widget on close button click
  widget.querySelector("#close-booking-widget").addEventListener("click", () => {
    widget.style.display = "none";
    toggleBtn.style.display = "block";
  });

  // Handle form submit (same as before)
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
  });
});


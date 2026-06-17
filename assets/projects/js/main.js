      // ── CONTROL DE NAV TRANSPARENTE EN SCROLL ──
      const nav = document.getElementById("mainNav");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      });

      // ── REVIEWS DATA ──
      const reviews = [
        {
          text: "Llevo meses viniendo y nunca me han decepcionado. Marco sabe exactamente lo que quieres con solo describirlo.",
          author: "Carlos M.",
          date: "hace 2 semanas",
        },
        {
          text: "El mejor afeitado con navaja que he tenido en la vida. La experiencia completa, desde la toalla caliente hasta el acabado final.",
          author: "Pau R.",
          date: "hace 1 mes",
        },
        {
          text: "Reservé online en dos minutos y llegué justo a tiempo. Sin esperas, exactamente lo prometido.",
          author: "Jordi F.",
          date: "hace 3 semanas",
        },
        {
          text: "David es un artista con el fade. Salí con el mejor corte que he tenido en años. Vuelvo seguro.",
          author: "Andrés L.",
          date: "hace 1 semana",
        },
        {
          text: "Ambiente minimalista y cuidado, música perfecta. Te tratan como si fueras el único cliente del día.",
          author: "Miquel S.",
          date: "hace 2 meses",
        },
        {
          text: "Vine con mi hijo de 8 años y Álvaro fue increíblemente paciente. El pequeño salió encantado.",
          author: "Roberto G.",
          date: "hace 1 mes",
        },
        {
          text: "Precios muy justos para la calidad que ofrecen. He probado muchas barberías en Barcelona y esta es la mejor sin duda.",
          author: "Tomàs B.",
          date: "hace 3 días",
        },
      ];

      function buildReviews() {
        const track = document.getElementById("reviewsTrack");
        if (!track) return;
        const doubled = [...reviews, ...reviews];
        track.innerHTML = doubled
          .map(
            (r) => `
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <div class="review-text">"${r.text}"</div>
              <div class="review-author">${r.author}</div>
              <div class="review-date">${r.date}</div>
            </div>
          `,
          )
          .join("");
      }
      buildReviews();

      // ── FAQ DATA ──
      const faqs = [
        {
          q: "¿Necesito reservar con antelación?",
          a: "Recomendamos reservar al menos con 24h de antelación, especialmente para fines de semana. Aceptamos walk-ins si hay hueco disponible, pero no podemos garantizarlo.",
        },
        {
          q: "¿Puedo cancelar mi cita?",
          a: "Puedes cancelar o cambiar tu cita hasta 2 horas antes sin coste. Pasado ese plazo aplicamos una tasa de cancelación de 5€.",
        },
        {
          q: "¿Qué productos usáis?",
          a: "Trabajamos exclusivamente con productos premium: American Crew, Uppercut Deluxe y Suavecito. También los tenemos a la venta en la barbería.",
        },
        {
          q: "¿Hacéis barba sin corte de pelo?",
          a: "Por supuesto. Puedes reservar el servicio de afeitado con navaja o arreglo de barba de forma independiente.",
        },
        {
          q: "¿Tenéis aparcamiento cerca?",
          a: "Hay parking público en Carrer de Còrsega a 2 minutos a pie. En bici, tenemos rack en la puerta.",
        },
      ];

      function buildFaq() {
        const list = document.getElementById("faqList");
        if (!list) return;
        list.innerHTML = faqs
          .map(
            (f, i) => `
            <div class="faq-item" id="faq-${i}">
              <button class="faq-question" onclick="toggleFaq(${i})">
                ${f.q}
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">${f.a}</div>
            </div>
          `,
          )
          .join("");
      }
      buildFaq();

      function toggleFaq(i) {
        const item = document.getElementById("faq-" + i);
        const isOpen = item.classList.contains("open");
        document
          .querySelectorAll(".faq-item")
          .forEach((el) => el.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
      }

      // ── SCROLL REVEAL ──
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("visible");
          });
        },
        { threshold: 0.1 },
      );
      document
        .querySelectorAll(".reveal")
        .forEach((el) => observer.observe(el));

      // ── CONFIGURACIÓN E INICIALIZACIÓN DE SUPABASE ──
      const SUPABASE_URL = "https://qfsweuyjqiisylrgupth.supabase.co";
      const SUPABASE_ANON_KEY =
        "sb_publishable_VZf38mBFRj5kUUcTGvRCRA_Sby2ar6d";
      const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

      // Vinculamos las variables con los IDs reales de tu HTML
      const dateInput = document.getElementById("formDate");
      const barberSelect = document.getElementById("formBarber");
      const serviceSelect = document.getElementById("formService");
      const slotsBox = document.getElementById("timeSlots");

      // Forzar que el calendario no elija días pasados
      if (dateInput) {
        dateInput.min = new Date().toISOString().split("T")[0];
      }

      // Lista de horas oficiales de la barbería
      const horasDisponibles = [
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
      ];
      let horaSeleccionada = null;

      // Escuchar cambios de fecha o barbero para actualizar disponibilidad real
      if (dateInput) dateInput.addEventListener("change", checkAvailability);
      if (barberSelect)
        barberSelect.addEventListener("change", checkAvailability);

      async function checkAvailability() {
        const fecha = dateInput.value;
        const barbero = barberSelect.value;

        if (!slotsBox || !fecha) return; // Aquí el return es 100% legal

        slotsBox.innerHTML = "";
        horaSeleccionada = null;

        // Obtener fecha de hoy local y hora actual en formato HH:MM
        const hoyLocal = new Date().toLocaleDateString("sv-SE");
        const ahora = new Date();
        const horaActualStr = `${String(ahora.getHours()).padStart(2, "0")}:${String(ahora.getMinutes()).padStart(2, "0")}`;

        // Consultar huecos ocupados en Supabase
        let { data: ocupados, error } = await sb
          .from("public_availability")
          .select("reservation_time, barber")
          .eq("reservation_date", fecha);

        if (error)
          return console.error("Error consultando disponibilidad:", error);

        // Renderizar las horas de forma dinámica
        horasDisponibles.forEach((hora) => {
          const divSlot = document.createElement("div");
          divSlot.className = "slot";
          divSlot.textContent = hora;

          // Controlar si la hora ya pasó hoy
          let yaPaso = false;
          if (fecha === hoyLocal && hora < horaActualStr) {
            yaPaso = true;
          }

          const coincidencia = ocupados.filter(
            (o) => o.reservation_time.slice(0, 5) === hora,
          );
          let estaOcupado = false;

          if (barbero === "Cualquiera") {
            if (coincidencia.length >= 3) estaOcupado = true;
          } else {
            estaOcupado = coincidencia.some((o) => o.barber === barbero);
          }

          if (yaPaso || estaOcupado) {
            divSlot.classList.add("taken");
          } else {
            divSlot.addEventListener("click", () => {
              document
                .querySelectorAll(".slot")
                .forEach((b) => b.classList.remove("selected"));
              divSlot.classList.add("selected");
              horaSeleccionada = hora;
            });
          }
          slotsBox.appendChild(divSlot);
        });
      }

      // Interceptar el envío del formulario para guardarlo en la base de datos
      const appointmentForm = document.getElementById("appointmentForm");
      if (appointmentForm) {
        appointmentForm.addEventListener("submit", async (event) => {
          event.preventDefault();

          const nombre = document.getElementById("formName").value;
          const telefono = document.getElementById("formPhone").value;
          const servicio = serviceSelect.value;
          const barbero = barberSelect.value;
          const fecha = dateInput.value;
          const btnSubmit = document.getElementById("submitBtn");

          if (!horaSeleccionada) {
            alert(
              "Por favor, selecciona una hora disponible haciendo clic sobre ella.",
            );
            return;
          }

          btnSubmit.innerText = "Procesando...";
          btnSubmit.disabled = true;

          const { data, error } = await sb.rpc("create_reservation", {
            p_name: nombre,
            p_phone: telefono,
            p_service: servicio,
            p_barber: barbero,
            p_date: fecha,
            p_time: horaSeleccionada + ":00",
          });

          if (error) {
            if (error.message.includes("slot_taken")) {
              alert(
                "Ese horario ya ha sido ocupado por otro cliente justo ahora. Por favor, elige otra hora.",
              );
            } else if (error.message.includes("no_availability")) {
              alert("No hay barberos disponibles en este horario.");
            } else {
              alert("Error al reservar: " + error.message);
            }
            btnSubmit.innerText = "Confirmar reserva →";
            btnSubmit.disabled = false;
            checkAvailability();
            return;
          }

          alert(
            `¡Reserva confirmada con éxito, ${nombre}!\n\nBarbero asignado: ${data[0].assigned_barber}\nHora: ${horaSeleccionada} hs.`,
          );

          appointmentForm.reset();
          const summaryBox = document.getElementById("summaryBox");
          if (summaryBox) summaryBox.style.display = "none";
          horaSeleccionada = null;
          btnSubmit.innerText = "Confirmar reserva →";
          btnSubmit.disabled = false;

          checkAvailability();
        });
      }
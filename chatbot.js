/* ============================================================
   CLICKCLICK CHATBOT WIDGET — FREE (no API needed)
   Add to any page with one line before </body>:
   <script src="chatbot.js"></script>

   Only thing to change: your Calendly link below.
   ============================================================ */

(function () {

  const CALENDAR_URL = 'https://www.calendly.com/clickclick-booking';

  const RESPONSES = [
    {
      keys: ['hello', 'hi ', 'hey', 'hiya', 'howdy', 'morning', 'afternoon', 'evening'],
      reply: "Hey! 👋 Great to have you here. I can tell you about our services, pricing or help you book a call. What are you looking for?",
    },
    {
      keys: ['tiktok live', 'live sell', 'live shopping', 'tiktok shop'],
      reply: "TikTok Shop and live selling is one of our biggest specialities! We handle everything — strategy, scripting, production and going live. Want to book a call to chat it through? 📱",
      book: true,
    },
    {
      keys: ['tiktok', 'reels', 'short form', 'shorts', 'social video', 'instagram video'],
      reply: "We love short-form! We create scroll-stopping content for TikTok, Reels and YouTube Shorts — all built to sell, not just look pretty. Want to see how it could work for your brand?",
      book: true,
    },
    {
      keys: ['social commerce', 'sell on social', 'shoppable'],
      reply: "Social commerce is a big focus for us — turning video into actual sales on TikTok Shop, Instagram and beyond. It's the fastest growing area in retail right now. Want to explore what that looks like for you?",
      book: true,
    },
    {
      keys: ['ai commerce', 'chatgpt', 'gemini', 'ai search', 'ai shopping', 'appear in ai'],
      reply: "This is cutting-edge stuff! We help brands get their products appearing inside AI tools like ChatGPT and Google Gemini — so when someone asks AI for a recommendation, your brand shows up. Very few agencies in the UK offer this yet. 🚀",
      book: true,
    },
    {
      keys: ['tv', 'television', 'broadcast', 'tv ad', 'commercial', 'itv', 'channel 4', 'streaming ad'],
      reply: "Yes, we do TV and connected TV advertising — traditional broadcast, ITV X, Channel 4 streaming and YouTube. A brilliant way to build brand trust. Want to talk through what's possible?",
      book: true,
    },
    {
      keys: ['brand film', 'brand video', 'company video', 'about us video', 'corporate video'],
      reply: "Brand films are one of our favourites — cinematic storytelling that captures who you really are. Book a call and we can show you some examples!",
      book: true,
    },
    {
      keys: ['course', 'learn', 'training', 'workshop', 'teach', 'how to'],
      reply: "We run courses and workshops on video marketing, social commerce and AI tools — great for brand teams who want to upskill. Drop us a message and we'll let you know what's coming up! 🎓",
      book: true,
    },
    {
      keys: ['custom tool', 'ai tool', 'coding', 'bespoke', 'build me', 'app'],
      reply: "We build custom digital tools for brands — branded AI assistants, content generators, TikTok script builders and more. Things that feel uniquely yours. Want to tell us what you're imagining?",
      book: true,
    },
    {
      keys: ['oliver bonas', 'loccitane', 'occitane', 'brands you', 'clients', 'who have you worked', 'portfolio', 'case study'],
      reply: "We've worked with some brilliant names including Oliver Bonas and L'Occitane, and our founder judges for major marketing awards. Head to our Work section to see case studies!",
      book: true,
    },
    {
      keys: ['award', 'judge', 'gua', 'nominated'],
      reply: "We've been nominated for multiple industry awards and our founder judges for the GUA Awards — so we know what great video marketing looks like from both sides! 🏆",
    },
    {
      keys: ['belfast', 'northern ireland', 'ni ', 'glandore', 'local', 'based'],
      reply: "We're based in Belfast at Glandore — one of the best co-working spaces in the city. We work with brands across Northern Ireland, Ireland and the UK. Belfast businesses, we'd especially love to chat! 🇬🇧",
      book: true,
    },
    {
      keys: ['price', 'cost', 'how much', 'budget', 'rates', 'fees', 'quote', 'affordable', 'expensive', 'cheap'],
      reply: "Pricing varies by project — a social content package looks very different to a TV ad! Best thing is to book a free discovery call and we'll give you an honest quote that fits your goals and budget. 💬",
      book: true,
    },
    {
      keys: ['book', 'call', 'meeting', 'chat', 'speak', 'talk', 'appointment', 'schedule', 'consultation'],
      reply: "Brilliant — let's get something in the diary! Hit the button below to pick a time. Relaxed chat, no hard sell. 📅",
      book: true,
    },
    {
      keys: ['contact', 'email', 'reach', 'get in touch', 'message'],
      reply: "Best way to reach us is hello@clickclick.video — or book a call directly using the button below and we'll be back to you within 24 hours!",
      book: true,
    },
    {
      keys: ['what do you do', 'what is clickclick', 'who are you', 'your services', 'services', 'what can you'],
      reply: "ClickClick is a Belfast video marketing agency. We specialise in Social Commerce (TikTok Shop, live selling), AI Commerce (appearing in ChatGPT/Gemini), Video Production (TV, brand films), Custom AI Tools, and Learning (courses & workshops). What area interests you most?",
    },
    {
      keys: ['thank', 'thanks', 'cheers', 'great', 'brilliant', 'perfect', 'awesome', 'helpful'],
      reply: "You're so welcome! Anything else I can help with — or ready to book that call? 😊",
      book: true,
    },
    {
      keys: ['bye', 'goodbye', 'see you', 'later'],
      reply: "Thanks for stopping by! Come back any time — and if you ever want to chat video marketing, you know where we are. 👋",
    },
    {
      keys: ['human', 'real person', 'agent', 'speak to someone', 'actual person'],
      reply: "I'm a chatbot — but a real human at ClickClick would love to chat! Email hello@clickclick.video or book a discovery call below. We're pretty quick at getting back 😊",
      book: true,
    },
  ];

  const FALLBACKS = [
    "Great question! That's probably best answered on a call — we can really dig into the detail there. Want to book one? 📅",
    "Hmm, not sure I caught that! Try asking about our services, pricing, or how to get started — or just book a call and chat directly with the team.",
    "I want to make sure you get the right answer — drop us an email at hello@clickclick.video or book a call and we'll sort you out!",
  ];
  let fallbackIndex = 0;

  const QUICK_REPLIES = [
    'What services do you offer?',
    'How much does it cost?',
    'Can you help with TikTok?',
    'I want to book a call',
  ];

  // ── Styles ─────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
    #cc-btn {
      position:fixed;bottom:28px;right:28px;z-index:9999;
      width:58px;height:58px;border-radius:50%;
      background:linear-gradient(135deg,#00bcd4,#e83e8c);
      border:none;cursor:pointer;
      display:flex;align-items:center;justify-content:center;
      box-shadow:0 4px 24px rgba(0,188,212,0.35);
      transition:transform .2s,box-shadow .2s;
    }
    #cc-btn:hover{transform:scale(1.08);box-shadow:0 6px 30px rgba(232,62,140,0.35);}
    #cc-btn svg{transition:transform .3s;}
    #cc-btn.open svg{transform:rotate(45deg);}
    #cc-panel {
      position:fixed;bottom:100px;right:28px;z-index:9998;
      width:360px;max-height:540px;
      background:#FDF5E6;border-radius:16px;
      box-shadow:0 16px 60px rgba(26,26,26,0.18);
      display:flex;flex-direction:column;overflow:hidden;
      font-family:'Poppins',sans-serif;
      opacity:0;transform:translateY(16px) scale(0.97);pointer-events:none;
      transition:opacity .25s,transform .25s;
    }
    #cc-panel.visible{opacity:1;transform:translateY(0) scale(1);pointer-events:all;}
    #cc-head {
      background:#1a1a1a;padding:18px 20px;
      display:flex;align-items:center;gap:12px;flex-shrink:0;
    }
    #cc-avatar {
      width:36px;height:36px;border-radius:50%;flex-shrink:0;
      background:linear-gradient(135deg,#00bcd4,#e83e8c);
      display:flex;align-items:center;justify-content:center;font-size:1rem;
    }
    #cc-hname{font-size:.88rem;font-weight:600;color:#FDF5E6;line-height:1.2;}
    #cc-hstatus{font-size:.72rem;font-weight:300;color:rgba(253,245,230,.5);}
    #cc-hstatus span{display:inline-block;width:6px;height:6px;background:#00bcd4;border-radius:50%;margin-right:5px;vertical-align:middle;}
    #cc-msgs {
      flex:1;overflow-y:auto;padding:20px 16px 12px;
      display:flex;flex-direction:column;gap:12px;scroll-behavior:smooth;
    }
    #cc-msgs::-webkit-scrollbar{width:4px;}
    #cc-msgs::-webkit-scrollbar-thumb{background:rgba(26,26,26,.1);border-radius:4px;}
    .cc-m{max-width:84%;font-size:.875rem;line-height:1.55;font-weight:300;animation:ccUp .25s ease forwards;}
    .cc-bot{align-self:flex-start;background:#fff;color:#1a1a1a;padding:11px 15px;border-radius:4px 16px 16px 16px;box-shadow:0 2px 8px rgba(26,26,26,.06);}
    .cc-usr{align-self:flex-end;background:#1a1a1a;color:#FDF5E6;padding:11px 15px;border-radius:16px 4px 16px 16px;}
    .cc-typing{align-self:flex-start;background:#fff;padding:11px 16px;border-radius:4px 16px 16px 16px;display:flex;gap:5px;align-items:center;box-shadow:0 2px 8px rgba(26,26,26,.06);}
    .cc-typing span{width:6px;height:6px;background:#888;border-radius:50%;animation:ccBounce 1.2s infinite;}
    .cc-typing span:nth-child(2){animation-delay:.2s;}
    .cc-typing span:nth-child(3){animation-delay:.4s;}
    #cc-qr{padding:0 16px 12px;display:flex;flex-wrap:wrap;gap:7px;flex-shrink:0;}
    .cc-qb{
      background:transparent;border:1.5px solid rgba(26,26,26,.15);border-radius:100px;
      padding:6px 14px;font-family:'Poppins',sans-serif;font-size:.75rem;font-weight:400;
      color:#555;cursor:pointer;transition:border-color .2s,color .2s,background .2s;white-space:nowrap;
    }
    .cc-qb:hover{border-color:#00bcd4;color:#00bcd4;background:rgba(0,188,212,.05);}
    #cc-book{
      margin:0 16px 12px;display:none;
      background:linear-gradient(135deg,#00bcd4,#e83e8c);
      color:#fff;border:none;border-radius:100px;padding:11px 20px;
      font-family:'Poppins',sans-serif;font-size:.82rem;font-weight:600;
      cursor:pointer;text-align:center;text-decoration:none;
      transition:opacity .2s,transform .2s;flex-shrink:0;
    }
    #cc-book:hover{opacity:.88;transform:translateY(-1px);}
    #cc-foot{display:flex;gap:10px;padding:12px 16px 16px;border-top:1px solid rgba(26,26,26,.07);flex-shrink:0;}
    #cc-inp{
      flex:1;border:1.5px solid rgba(26,26,26,.15);border-radius:100px;
      padding:10px 18px;font-family:'Poppins',sans-serif;font-size:.875rem;font-weight:300;
      color:#1a1a1a;background:#fff;outline:none;transition:border-color .2s;
    }
    #cc-inp:focus{border-color:#00bcd4;}
    #cc-inp::placeholder{color:#aaa;}
    #cc-send{
      width:40px;height:40px;border-radius:50%;background:#1a1a1a;border:none;cursor:pointer;
      display:flex;align-items:center;justify-content:center;flex-shrink:0;
      transition:background .2s,transform .2s;
    }
    #cc-send:hover{background:#00bcd4;transform:scale(1.05);}
    @keyframes ccUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
    @keyframes ccBounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}
    @media(max-width:420px){
      #cc-panel{width:calc(100vw - 32px);right:16px;bottom:90px;}
      #cc-btn{right:16px;bottom:16px;}
    }
  `;
  document.head.appendChild(style);

  // ── HTML ───────────────────────────────────────────────────
  document.body.insertAdjacentHTML('beforeend', `
    <button id="cc-btn" aria-label="Open chat">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FDF5E6" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    </button>
    <div id="cc-panel" role="dialog" aria-label="ClickClick chat">
      <div id="cc-head">
        <div id="cc-avatar">✨</div>
        <div><div id="cc-hname">ClickClick Assistant</div><div id="cc-hstatus"><span></span>Online now</div></div>
      </div>
      <div id="cc-msgs"></div>
      <div id="cc-qr"></div>
      <a id="cc-book" href="${CALENDAR_URL}" target="_blank" rel="noopener">📅 &nbsp;Book a Free Discovery Call</a>
      <div id="cc-foot">
        <input id="cc-inp" type="text" placeholder="Ask me anything…" autocomplete="off"/>
        <button id="cc-send" aria-label="Send">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FDF5E6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>
    </div>
  `);

  // ── Logic ──────────────────────────────────────────────────
  const panel  = document.getElementById('cc-panel');
  const btn    = document.getElementById('cc-btn');
  const msgs   = document.getElementById('cc-msgs');
  const inp    = document.getElementById('cc-inp');
  const send   = document.getElementById('cc-send');
  const qr     = document.getElementById('cc-qr');
  const book   = document.getElementById('cc-book');
  let open = false, qrShown = false;

  function addMsg(text, role) {
    const d = document.createElement('div');
    d.className = 'cc-m ' + (role === 'user' ? 'cc-usr' : 'cc-bot');
    d.textContent = text;
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function typing(show) {
    if (show) {
      const d = document.createElement('div');
      d.className = 'cc-typing'; d.id = 'cc-t';
      d.innerHTML = '<span></span><span></span><span></span>';
      msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight;
    } else {
      const t = document.getElementById('cc-t');
      if (t) t.remove();
    }
  }

  function showQR() {
    if (qrShown) return; qrShown = true;
    QUICK_REPLIES.forEach(label => {
      const b = document.createElement('button');
      b.className = 'cc-qb'; b.textContent = label;
      b.addEventListener('click', () => { qr.innerHTML = ''; send_msg(label); });
      qr.appendChild(b);
    });
  }

  function getResponse(text) {
    const low = text.toLowerCase();
    for (const r of RESPONSES) {
      if (r.keys.some(k => low.includes(k))) return r;
    }
    return null;
  }

  function send_msg(text) {
    text = text.trim(); if (!text) return;
    inp.value = ''; qr.innerHTML = '';
    addMsg(text, 'user');
    typing(true);
    setTimeout(() => {
      typing(false);
      const match = getResponse(text);
      if (match) {
        addMsg(match.reply, 'bot');
        if (match.book) book.style.display = 'block';
      } else {
        addMsg(FALLBACKS[fallbackIndex++ % FALLBACKS.length], 'bot');
        book.style.display = 'block';
      }
    }, 900 + Math.random() * 400);
  }

  function toggle() {
    open = !open;
    panel.classList.toggle('visible', open);
    btn.classList.toggle('open', open);
    if (open && msgs.children.length === 0) {
      setTimeout(() => {
        addMsg("Hi! 👋 I'm the ClickClick assistant — ask me anything about our services, pricing, or how to get started!", 'bot');
        setTimeout(showQR, 400);
      }, 200);
    }
  }

  btn.addEventListener('click', toggle);
  send.addEventListener('click', () => send_msg(inp.value));
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') send_msg(inp.value); });

})();

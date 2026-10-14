import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Zap,
  Palette,
  Sparkles,
  Dices,
  Skull,
  Megaphone,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Check
} from 'lucide-react';
import ChickenMascot from '../components/ChickenMascot';
import UpdateModal from '../components/UpdateModal';
import TiltCard from '../components/TiltCard';

const SERVICES = [
  {
    id: 'dbd-perks',
    badge: 'Dead by Daylight',
    badgeColor: '#A855F7',
    badgeBg: 'rgba(168, 85, 247, 0.12)',
    title: 'DBD Perk Roulette',
    subtitle: 'วงล้อสุ่มเปิร์ค Dead by Daylight สำหรับสตรีมเมอร์',
    icon: Dices,
    gradient: 'linear-gradient(135deg, #A855F7, #6366F1)',
    image: '/dbd-perks-showcase.webp',
    desc: 'สุ่มเปิร์ค 4 ช่องให้คนดูช่วยเลือกบทบาทเพิ่มความสนุก สั่งสุ่มได้ทั้งจากแต้มช่อง Twitch หรือพิมพ์คำสั่งในแชท และเลือกตัดเปิร์คที่ไม่ชอบออกได้เอง',
    highlights: [
      'เลือกปิดเปิร์คที่ไม่อยากเล่น หรือยังไม่ปลดล็อกได้',
      'ให้คนดูสั่งสุ่มผ่านแต้มช่อง (Channel Points) หรือพิมพ์ในแชท',
      'ข้อมูลเปิร์คอัปเดตใหม่ล่าสุดตลอดเวลา ไม่ต้องพิมพ์ใส่เอง',
      'เปลี่ยนสี ปรับขนาด และปรับความเร็วการหมุนได้ตามใจชอบ'
    ]
  },
  {
    id: 'random-killer',
    badge: 'ร่วมสนุกกับคนดู',
    badgeColor: '#EF4444',
    badgeBg: 'rgba(239, 68, 68, 0.12)',
    title: 'DBD Killer Roulette',
    subtitle: 'วงล้อสุ่มฆาตกร Dead by Daylight',
    icon: Skull,
    gradient: 'linear-gradient(135deg, #EF4444, #B91C1C)',
    image: '/random-killer-showcase.webp',
    desc: 'ให้คนดูช่วยเลือกหรือกดสุ่มฆาตกรเองในแต่ละรอบ มาพร้อมรูปโปรไฟล์สวยๆ เสียงเอฟเฟกต์ตอนสุ่ม และเก็บบันทึกประวัติการสุ่มย้อนหลังให้เปิดดูได้ตลอด',
    highlights: [
      'เลือกตัดฆาตกรตัวที่ไมยากเล่นออกจากการสุ่มได้',
      'รูปภาพฆาตกรคมชัด พร้อมเอฟเฟกต์เปิดตัวเท่ๆ',
      'มีระบบจดประวัติการสุ่มย้อนหลัง ไม่ต้องกลัวลืมว่าเคยสุ่มได้ตัวไหน',
      'ปรับเวลาหมุนและระยะเวลาที่การ์ดโชว์บนจอได้อิสระ'
    ]
  },
  {
    id: 'twitch-shoutout',
    badge: 'โปรโมตเพื่อนสตรีมเมอร์',
    badgeColor: '#0EA5E9',
    badgeBg: 'rgba(14, 165, 233, 0.12)',
    title: 'Twitch Shoutout Overlay',
    subtitle: 'ป้ายแนะนำและต้อนรับสตรีมเมอร์คนพิเศษ',
    icon: Megaphone,
    gradient: 'linear-gradient(135deg, #0EA5E9, #0284C7)',
    image: '/twitch-shoutout-showcase.webp',
    desc: 'ป้ายต้อนรับและช่วยโปรโมตช่องเพื่อนสตรีมเมอร์ เด้งขึ้นจอน่ารักๆ ทันทีที่มีคนเรด (Raid) มาหา หรือเมื่อพิมพ์คำสั่ง /shoutout ในแชท',
    highlights: [
      'ดึงรูปโปรไฟล์และชื่อเกมที่เพื่อนเพิ่งเล่นมาโชว์บนจอให้อัตโนมัติ',
      'ป้ายเด้งเข้า-ออกนุ่มนวล ดูสบายตา ไม่เกะกะเกม',
      'เลือกใส่เสียงแจ้งเตือน ปรับเวลาแสดงผล และเปลี่ยนสีธีมได้เอง',
      'มีปุ่มกดทดสอบให้ลองดูหน้าตาก่อนเปิดสตรีมจริง'
    ]
  },
  {
    id: 'loyalty-card',
    badge: 'สะสมแสตมป์คนดู',
    badgeColor: '#F59E0B',
    badgeBg: 'rgba(245, 158, 11, 0.12)',
    title: 'Twitch Loyalty Card',
    subtitle: 'สมุดสะสมแต้มแสตมป์สำหรับผู้ชมในช่อง',
    icon: Award,
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    image: '/loyalty-card-showcase.webp',
    desc: 'สมุดสะสมแสตมป์สุดน่ารัก ชวนคนดูมาร่วมสนุกและเช็คอินสะสมแต้มทุกครั้งที่เปิดสตรีม มีระบบบอทช่วยตอบกลับในแชทให้เสร็จสรรพ',
    highlights: [
      'สมุดสะสมแสตมป์สไตล์มินิมอล เปลี่ยนสี เปลี่ยนฟอนต์ และเปลี่ยนลายแสตมป์ได้',
      'มีตารางจัดอันดับ (Leaderboard) แฟนคลับตัวยงประจำช่อง',
      'เวลาคนดูปั๊มแสตมป์จะเด้งโชว์บนจอสตรีมทันที พร้อมพิมพ์บอกในแชท',
      'สั่งเช็คอินได้ง่ายๆ ทั้งพิมพ์คำสั่งในแชท หรือกดแลกแต้มช่อง Twitch'
    ]
  }
];

const PLATFORM_FEATURES = [
  {
    icon: Zap,
    title: 'ตอบสนองไว ไร้ดีเลย์',
    desc: 'เชื่อมต่อกับ Twitch โดยตรง คนดูกดแลกแต้มหรือพิมพ์สั่งปุ๊บ ภาพขึ้นบนจอทันที ไม่ต้องรอนาน'
  },
  {
    icon: Palette,
    title: 'ปรับแต่งง่าย เห็นผลทันที',
    desc: 'เปลี่ยนสี ปรับขนาด เลือกฟอนต์ หรือใส่เสียงที่ชอบได้ตามใจ พร้อมกดดูตัวอย่างหน้าตาจริงได้ก่อนเปิดสตรีม'
  },
  {
    icon: ShieldCheck,
    title: 'ปลอดภัย ไร้กังวล',
    desc: 'ลิงก์และรหัสตั้งค่าทั้งหมดเป็นของคุณคนเดียว ไม่มีการส่งข้อมูลส่วนตัวออกไปภายนอก ปลอดภัยแน่นอน'
  },
  {
    icon: Sparkles,
    title: 'อัปเดตข้อมูลใหม่อยู่เสมอ',
    desc: 'มีเปิร์คหรือฆาตกรตัวใหม่เข้ามาในเกมเมื่อไหร่ ระบบดึงข้อมูลให้อัตโนมัติ ไม่ต้องคอยพิมพ์เพิ่มเอง'
  }
];

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'เข้าสู่ระบบด้วย Twitch',
    desc: 'กดล็อกอินด้วยบัญชี Twitch ของคุณได้ทันที ไม่ต้องเสียเวลาสมัครใหม่'
  },
  {
    step: '02',
    title: 'เลือกวิดเจ็ตที่ชอบ',
    desc: 'เลือกวิดเจ็ตที่อยากใช้ แล้วปรับแต่งสีและเสียงให้เข้ากับสไตล์ช่องของคุณ'
  },
  {
    step: '03',
    title: 'ก๊อปลิงก์ไปใส่ใน OBS',
    desc: 'คัดลอกลิงก์ Browser Source ไปวางในโปรแกรม OBS หรือ Streamlabs แล้วเริ่มสตรีมได้เลย'
  }
];

export default function Landing() {
  const navigate = useNavigate();
  const [activeServiceTab, setActiveServiceTab] = useState('dbd-perks');
  const [showUpdateModal, setShowUpdateModal] = useState(null);

  const activeService = SERVICES.find((s) => s.id === activeServiceTab) || SERVICES[0];

  // Viewport Reveal Observer
  useEffect(() => {
    // IntersectionObserver for entrance reveal on scroll
    const elements = document.querySelectorAll('.scroll-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="landing-container animate-fade-up">
        {/* Update Announcement Popup Modal */}
        <UpdateModal
          isOpen={showUpdateModal}
          onClose={() => setShowUpdateModal(false)}
        />

        {/* 1. HERO SECTION */}
        <section className="hero-section hero-layout">
          <div className="hero-content">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              <div className="hero-badge-pill" style={{ marginBottom: 0 }}>
                <span className="pill-dot" />
                <span>วิดเจ็ตสำหรับสตรีมเมอร์ TWITCH</span>
              </div>
              <button
                type="button"
                className="hero-update-badge-btn cursor-target"
                data-cursor-label="Security v1.4"
                onClick={() => setShowUpdateModal(true)}
                title="ดูรายละเอียดการอัปเดตระบบความปลอดภัยล่าสุด (v1.4)"
              >
                <Sparkles size={13} style={{ color: '#f59e0b' }} />
                <span>อัปเดตความปลอดภัย v1.4</span>
                <span className="hero-update-badge-hot">สำคัญ</span>
              </button>
            </div>
            <h1 className="hero-title">
              เพิ่มลูกเล่นให้สตรีมสนุกขึ้นด้วย <span className="gradient-text">FASTCHICK </span>
            </h1>
            <p className="hero-desc">
              รวมวิดเจ็ตและลูกเล่นน่ารักๆ สำหรับสตรีมเมอร์ Twitch ใช้งานง่าย ไม่ยุ่งยาก ให้คนดูมีส่วนร่วมและสนุกไปกับสตรีมของคุณได้ตลอดเวลา
            </p>

            <div className="hero-actions">
              <button
                className="btn-island accent hero-btn cursor-target"
                data-cursor-label="Dashboard"
                onClick={() => navigate('/dashboard')}
              >
                <span>เข้าสู่แผงควบคุม</span>
                <div className="btn-icon-wrapper">
                  <ArrowRight size={14} strokeWidth={2.5} />
                </div>
              </button>

              <a
                href="#services"
                className="btn-island ghost cursor-target"
                data-cursor-label="Widgets"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('services');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <span>ดูตัวอย่างวิดเจ็ต</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="hero-trust-row">
              <div className="trust-item">
                <CheckCircle2 size={15} className="trust-icon" />
                <span>ใช้ได้ทั้ง OBS & Streamlabs</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={15} className="trust-icon" />
                <span>ตอบสนองไว ไม่หน่วง</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={15} className="trust-icon" />
                <span>เปิดผ่านเว็บได้เลย ไม่ต้องลงโปรแกรมเพิ่ม</span>
              </div>
            </div>
          </div>

          {/* Mascot Interactive Stage */}
          <div className="hero-mascot-wrapper">
            <ChickenMascot />
          </div>
        </section>

      {/* 2. SERVICES & SPOTLIGHT SHOWCASE */}
      <section id="services" className="services-section">
        <div className="section-header text-center scroll-reveal">
          <span className="eyebrow">SERVICES & OVERLAYS</span>
          <h2 className="section-title">วิดเจ็ตยอดนิยมสำหรับสตรีมเมอร์</h2>
          <p className="section-subtitle">
            เลือกวิดเจ็ตที่ชอบไปแต่งช่องของคุณ ปรับแต่งง่าย ไม่กี่คลิกก็พร้อมขึ้นจอ
          </p>
        </div>

        {/* Services Tab Switcher */}
        <div className="services-tabs-container scroll-reveal scroll-stagger-1">
          <div className="services-tabs-pills">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              const isActive = activeServiceTab === s.id;
              return (
                <button
                  key={s.id}
                  className={`service-tab-btn cursor-target ${isActive ? 'active' : ''}`}
                  data-cursor-label={s.title}
                  onClick={() => setActiveServiceTab(s.id)}
                >
                  <Icon size={16} />
                  <span>{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Service Spotlight Showcase Card */}
        <div className="doppel-shell service-showcase-shell scroll-reveal scroll-stagger-2">
          <div className="doppel-core service-showcase-grid">
            {/* Left: Info */}
            <div className="service-info-col">
              <div
                className="service-badge"
                style={{ borderColor: activeService.badgeColor, color: activeService.badgeColor }}
              >
                <span className="service-badge-dot" style={{ backgroundColor: activeService.badgeColor }} />
                {activeService.badge}
              </div>
              <h3 className="service-detail-title">{activeService.title}</h3>
              <p className="service-detail-subtitle">{activeService.subtitle}</p>
              <p className="service-detail-desc">{activeService.desc}</p>

              <div className="service-highlights-list">
                {activeService.highlights.map((h, i) => (
                  <div key={i} className="highlight-item">
                    <div className="highlight-check">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="service-cta-row">
                <button
                  className="btn-island accent cursor-target"
                  data-cursor-label="Setup"
                  onClick={() => navigate(`/dashboard?widget=${activeService.id}`)}
                >
                  <span>ลองใช้งานวิดเจ็ตนี้</span>
                  <div className="btn-icon-wrapper">
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </div>
                </button>
              </div>
            </div>

            {/* Right: Clean 3D Interactive Tilt Card Showcase */}
            <div className="service-preview-col">
              <div className="holo-showcase-wrapper">
                <TiltCard
                  key={activeService.id}
                  image={activeService.image}
                  alt={activeService.title}
                  width={430}
                  borderRadius={16}
                  maxTilt={14}
                  scale={1.03}
                  className="cursor-target"
                  data-cursor-label={activeService.title}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLATFORM FEATURES GRID */}
      <section className="features-section">
        <div className="section-header text-center scroll-reveal">
          <span className="eyebrow">FASTCHICK ADVANTAGES</span>
          <h2 className="section-title">ทำไมสตรีมเมอร์ถึงชอบใช้ FASTCHICK?</h2>
          <p className="section-subtitle">
            ออกแบบมาเพื่อการสตรีมโดยเฉพาะ ลื่นไหล สบายตา และไม่กินสเปกคอมพิวเตอร์
          </p>
        </div>

        <div className="features-grid">
          {PLATFORM_FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className={`feature-card scroll-reveal scroll-stagger-${idx + 1}`}>
                <div className="feature-icon-wrapper">
                  <Icon size={22} className="feature-icon" />
                </div>
                <h3 className="feature-title">{feat.title}</h3>
                <p className="feature-desc">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. HOW IT WORKS 3-STEP */}
      <section className="instructions-section doppel-shell scroll-reveal">
        <div className="doppel-core">
          <div className="section-header">
            <span className="eyebrow">HOW TO USE</span>
            <h2 className="section-title">วิธีเริ่มต้นใช้งานใน 3 สเต็ปง่ายๆ</h2>
            <p className="section-subtitle">ไม่ต้องลงโปรแกรมเพิ่ม ไม่ต้องเขียนโค้ด แค่ก๊อปลิงก์ไปแปะใน OBS ก็ใช้ได้ทันที</p>
          </div>

          <div className="steps-grid">
            {HOW_IT_WORKS.map((st, i) => (
              <div key={i} className={`step-card scroll-reveal scroll-stagger-${i + 1}`}>
                <span className="step-number">{st.step}</span>
                <h3 className="step-card-title">{st.title}</h3>
                <p className="step-card-desc">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="cta-banner doppel-shell scroll-reveal">
        <div className="doppel-core cta-content">
          <div className="cta-text-side">
            <h2 className="cta-title">พร้อมเพิ่มความสนุกให้สตรีมของคุณแล้วหรือยัง?</h2>
            <p className="cta-desc">
              ล็อกอินด้วยบัญชี Twitch แล้วเลือกวิดเจ็ตไปใส่บนจอได้เลย ฟรี ใช้งานง่าย ไม่ยุ่งยาก
            </p>
          </div>
          <div className="cta-action-side">
            <button
              className="btn-island accent hero-btn cursor-target"
              data-cursor-label="Start"
              onClick={() => navigate('/dashboard')}
            >
              <span>เข้าสู่แผงควบคุม</span>
              <div className="btn-icon-wrapper">
                <ArrowRight size={14} strokeWidth={2.5} />
              </div>
            </button>
            <button
              className="btn-island ghost cursor-target"
              data-cursor-label="FAQ"
              onClick={() => navigate('/faq')}
            >
              <span>คำถามที่พบบ่อย (FAQ)</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

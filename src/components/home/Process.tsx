import { useTranslations } from 'next-intl';
import FadeIn from '@/components/ui/FadeIn';

function StepQuoteIcon() {
  return (
    <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="19" y="24" width="56" height="70" rx="6" fill="#b8ccee" opacity="0.5"/>
      <rect x="17" y="21" width="56" height="70" rx="6" fill="white" stroke="#c5d0e8" strokeWidth="1.5"/>
      <rect x="34" y="13" width="22" height="13" rx="4" fill="#9ab8e0"/>
      <rect x="37" y="16" width="16" height="7" rx="2.5" fill="#ccdff5"/>
      <rect x="30" y="40" width="32" height="5" rx="2.5" fill="#dde8f8"/>
      <rect x="30" y="52" width="26" height="5" rx="2.5" fill="#dde8f8"/>
      <rect x="30" y="64" width="29" height="5" rx="2.5" fill="#dde8f8"/>
      <polyline points="30,42 33,45.5 38,39" stroke="#1e40af" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="30,54 33,57.5 38,51" stroke="#1e40af" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="30,66 33,69.5 38,63" stroke="#1e40af" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="66" cy="75" r="18" fill="#28a745"/>
      <circle cx="66" cy="75" r="14" fill="#22963c"/>
      <text x="66" y="81.5" textAnchor="middle" fontSize="19" fontWeight="900" fill="white" fontFamily="Plus Jakarta Sans,sans-serif">$</text>
    </svg>
  );
}

function StepPackIcon() {
  return (
    <svg width="116" height="108" viewBox="0 0 116 108" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="58" y="22" width="36" height="34" rx="3.5" fill="#e0a020" stroke="#b87e10" strokeWidth="1.4"/>
      <line x1="76" y1="22" x2="76" y2="56" stroke="#b87e10" strokeWidth="1.4"/>
      <rect x="60" y="35" width="32" height="5" rx="2.5" fill="#b87e10" opacity="0.38"/>
      <rect x="70" y="10" width="22" height="16" rx="3" fill="#f0b830" stroke="#c99015" strokeWidth="1.2"/>
      <line x1="81" y1="10" x2="81" y2="26" stroke="#c99015" strokeWidth="1.2"/>
      <rect x="18" y="54" width="50" height="40" rx="4" fill="#f0b830" stroke="#c99015" strokeWidth="1.5"/>
      <line x1="43" y1="54" x2="43" y2="94" stroke="#c99015" strokeWidth="1.5"/>
      <rect x="22" y="70" width="42" height="5.5" rx="2.5" fill="#c99015" opacity="0.42"/>
      <rect x="70" y="56" width="30" height="26" rx="3.5" fill="#e0a020" stroke="#b87e10" strokeWidth="1.3"/>
      <line x1="85" y1="56" x2="85" y2="82" stroke="#b87e10" strokeWidth="1.3"/>
      <rect x="73" y="66" width="24" height="4" rx="2" fill="#b87e10" opacity="0.38"/>
      <circle cx="10" cy="34" r="8" fill="#e8c08a"/>
      <ellipse cx="10" cy="30" rx="9" ry="4.5" fill="#1e3a8a"/>
      <rect x="5" y="26" width="10" height="5" rx="2" fill="#1e3a8a"/>
      <path d="M3 52 Q7 43 10 45 Q13 43 17 52 L15 65 L5 65 Z" fill="#1e40af"/>
      <line x1="17" y1="47" x2="26" y2="56" stroke="#1e40af" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="3" y1="47" x2="1" y2="58" stroke="#1e40af" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="8" y1="65" x2="6" y2="80" stroke="#1e40af" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="14" y1="65" x2="16" y2="80" stroke="#1e40af" strokeWidth="3.5" strokeLinecap="round"/>
    </svg>
  );
}

function StepTransportIcon() {
  return (
    <svg width="116" height="108" viewBox="0 0 116 108" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="46" width="66" height="38" rx="7" fill="white" stroke="#c5d0e8" strokeWidth="2"/>
      <rect x="4" y="46" width="22" height="30" rx="5" fill="#d6e8ff" stroke="#b0c8ea" strokeWidth="1.5"/>
      <rect x="7" y="50" width="16" height="15" rx="2" fill="#7aabf0" opacity="0.75"/>
      <rect x="30" y="51" width="14" height="11" rx="2" fill="#b8d5f0" opacity="0.55"/>
      <rect x="48" y="51" width="14" height="11" rx="2" fill="#b8d5f0" opacity="0.55"/>
      <circle cx="18" cy="86" r="11" fill="#2c2c3a"/>
      <circle cx="18" cy="86" r="5" fill="#606070"/>
      <circle cx="18" cy="86" r="2" fill="#9090a0"/>
      <circle cx="56" cy="86" r="11" fill="#2c2c3a"/>
      <circle cx="56" cy="86" r="5" fill="#606070"/>
      <circle cx="56" cy="86" r="2" fill="#9090a0"/>
      <ellipse cx="36" cy="18" rx="10" ry="12" fill="#e53e3e"/>
      <circle cx="36" cy="15" r="5" fill="white"/>
      <polygon points="30,26 42,26 36,36" fill="#e53e3e"/>
      <rect x="76" y="32" width="34" height="58" rx="7" fill="white" stroke="#c5d0e8" strokeWidth="2"/>
      <rect x="79" y="38" width="28" height="36" rx="3" fill="#d6e8ff"/>
      <path d="M82 60 Q88 50 96 55 Q104 60 106 52" stroke="#7aabf0" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      <path d="M82 68 Q90 66 98 70" stroke="#c5d0e8" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <circle cx="82" cy="60" r="3" fill="#28a745"/>
      <circle cx="106" cy="52" r="3" fill="#e53e3e"/>
      <ellipse cx="94" cy="44" rx="6" ry="7" fill="#e53e3e"/>
      <circle cx="94" cy="42" r="3" fill="white"/>
      <polygon points="90,49 98,49 94,55" fill="#e53e3e"/>
      <circle cx="93" cy="85" r="4" fill="#c5d0e8"/>
    </svg>
  );
}

function StepDeliveryIcon() {
  return (
    <svg width="118" height="108" viewBox="0 0 118 108" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="62" width="86" height="28" rx="5" fill="#c8a46a" stroke="#9e7c3e" strokeWidth="1.5"/>
      <line x1="59" y1="62" x2="59" y2="90" stroke="#9e7c3e" strokeWidth="1.5"/>
      <rect x="16" y="62" width="86" height="5" rx="3" fill="#d8b478" opacity="0.5"/>
      <circle cx="38" cy="76" r="3.5" fill="#9e7c3e"/>
      <circle cx="80" cy="76" r="3.5" fill="#9e7c3e"/>
      <rect x="22" y="88" width="7" height="12" rx="2.5" fill="#8a6030"/>
      <rect x="89" y="88" width="7" height="12" rx="2.5" fill="#8a6030"/>
      <rect x="30" y="26" width="58" height="38" rx="5" fill="#111827" stroke="#374151" strokeWidth="1.5"/>
      <rect x="33" y="29" width="52" height="32" rx="3" fill="#1e3a8a" opacity="0.4"/>
      <rect x="54" y="62" width="10" height="4" rx="2" fill="#374151"/>
      <rect x="96" y="76" width="14" height="12" rx="3" fill="#7c5c38"/>
      <ellipse cx="103" cy="76" rx="8" ry="5" fill="#4a7c3e"/>
      <path d="M96 72 Q100 60 103 56 Q106 60 110 72" fill="#3a6c30"/>
      <circle cx="103" cy="54" r="5" fill="#4a7c3e"/>
      <circle cx="8" cy="36" r="7.5" fill="#e0b882"/>
      <ellipse cx="8" cy="31" rx="9" ry="4" fill="#1e3a8a"/>
      <rect x="3" y="27" width="10" height="5" rx="2" fill="#1e3a8a"/>
      <path d="M1 52 Q5 42 8 44 Q11 42 15 52 L14 64 L2 64 Z" fill="#1e40af"/>
      <line x1="15" y1="46" x2="22" y2="54" stroke="#1e40af" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="1" y1="48" x2="-1" y2="60" stroke="#1e40af" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="5" y1="64" x2="3" y2="78" stroke="#1e40af" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="12" y1="64" x2="14" y2="78" stroke="#1e40af" strokeWidth="3.5" strokeLinecap="round"/>
      <rect x="18" y="48" width="18" height="16" rx="3" fill="#f0b830" stroke="#c99015" strokeWidth="1.3"/>
      <line x1="27" y1="48" x2="27" y2="64" stroke="#c99015" strokeWidth="1.2"/>
      <rect x="20" y="55" width="14" height="3.5" rx="1.5" fill="#c99015" opacity="0.45"/>
      <circle cx="110" cy="36" r="7.5" fill="#e0b882"/>
      <ellipse cx="110" cy="31" rx="9" ry="4" fill="#1e3a8a"/>
      <rect x="105" y="27" width="10" height="5" rx="2" fill="#1e3a8a"/>
      <path d="M103 52 Q107 42 110 44 Q113 42 117 52 L116 64 L104 64 Z" fill="#1e40af"/>
      <line x1="103" y1="46" x2="100" y2="58" stroke="#1e40af" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="117" y1="46" x2="119" y2="60" stroke="#1e40af" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="107" y1="64" x2="105" y2="78" stroke="#1e40af" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="114" y1="64" x2="116" y2="78" stroke="#1e40af" strokeWidth="3.5" strokeLinecap="round"/>
    </svg>
  );
}

function ArrowConnector() {
  return (
    <svg width="68" height="44" viewBox="0 0 68 44" fill="none" className="flex-shrink-0">
      <path d="M4 36 C16 36 28 8 64 20" stroke="#93bdf5" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      <polyline points="55,12 64,20 55,25" stroke="#93bdf5" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

export default function Process() {
  const t = useTranslations('Process');

  const steps = [
    {
      icon: <StepQuoteIcon />,
      step: '1',
      title: t('steps.quote.title'),
      description: t('steps.quote.description'),
    },
    {
      icon: <StepPackIcon />,
      step: '2',
      title: t('steps.pack.title'),
      description: t('steps.pack.description'),
    },
    {
      icon: <StepTransportIcon />,
      step: '3',
      title: t('steps.transport.title'),
      description: t('steps.transport.description'),
    },
    {
      icon: <StepDeliveryIcon />,
      step: '4',
      title: t('steps.delivery.title'),
      description: t('steps.delivery.description'),
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#e8edf4]" id="process">
      <div className="max-w-[1160px] mx-auto px-5 text-center">
        <FadeIn direction="up">
          <p className="text-[13px] font-bold tracking-[0.2em] uppercase text-[#1e40af] mb-3.5">
            {t('sectionTitle')}
          </p>
          <h2 className="text-[2.85rem] font-extrabold text-[#0d1f5c] leading-[1.12] mb-4 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-base text-[#6b7a9a] font-medium mb-16 leading-relaxed">
            {t('description')}
          </p>
        </FadeIn>

        {/* Desktop xl+: horizontal with arrows */}
        <div className="hidden xl:flex items-start justify-center">
          {steps.map((item, index) => (
            <FadeIn key={index} delay={index * 100} direction="up" className="contents">
              <div className="flex flex-col items-center w-[235px] flex-shrink-0">
                <div className="w-[162px] h-[162px] rounded-full bg-[radial-gradient(circle_at_38%_38%,#ddeaff_0%,#c2d5f5_100%)] flex items-center justify-center relative mb-[22px]">
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white border-[3px] border-[#1e40af] flex items-center justify-center text-xl font-extrabold text-[#0d1f5c] z-[5]">
                    {item.step}
                  </div>
                  {item.icon}
                </div>
                <p className="text-[1.05rem] font-extrabold text-[#0d1f5c] mb-2.5">{item.title}</p>
                <p className="text-[0.855rem] text-[#6b7a9a] leading-[1.7] font-medium max-w-[178px] mx-auto">
                  {item.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-shrink-0 flex items-start justify-center pt-12">
                  <ArrowConnector />
                </div>
              )}
            </FadeIn>
          ))}
        </div>

        {/* Tablet md-xl: 2x2 grid */}
        <div className="hidden md:grid xl:hidden grid-cols-2 gap-x-8 gap-y-12 max-w-[560px] mx-auto">
          {steps.map((item, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <div className="flex flex-col items-center">
                <div className="w-[142px] h-[142px] rounded-full bg-[radial-gradient(circle_at_38%_38%,#ddeaff_0%,#c2d5f5_100%)] flex items-center justify-center relative mb-5">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-[3px] border-[#1e40af] flex items-center justify-center text-lg font-extrabold text-[#0d1f5c] z-[5]">
                    {item.step}
                  </div>
                  <div className="scale-[0.85]">{item.icon}</div>
                </div>
                <p className="text-base font-extrabold text-[#0d1f5c] mb-2">{item.title}</p>
                <p className="text-[0.84rem] text-[#6b7a9a] leading-[1.7] font-medium max-w-[200px] mx-auto">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="flex flex-col items-center gap-10 md:hidden">
          {steps.map((item, index) => (
            <FadeIn key={index} delay={index * 100} direction="up">
              <div className="flex flex-col items-center">
                <div className="w-[162px] h-[162px] rounded-full bg-[radial-gradient(circle_at_38%_38%,#ddeaff_0%,#c2d5f5_100%)] flex items-center justify-center relative mb-[22px]">
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white border-[3px] border-[#1e40af] flex items-center justify-center text-xl font-extrabold text-[#0d1f5c] z-[5]">
                    {item.step}
                  </div>
                  {item.icon}
                </div>
                <p className="text-[1.05rem] font-extrabold text-[#0d1f5c] mb-2.5">{item.title}</p>
                <p className="text-[0.855rem] text-[#6b7a9a] leading-[1.7] font-medium max-w-[178px] mx-auto">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

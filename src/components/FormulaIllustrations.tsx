type FormulaKind = "occupied" | "free" | "term";

export function FormulaIllustration({
  kind,
  className,
}: {
  kind: FormulaKind;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 220 160"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {kind === "occupied" ? (
        <>
          <path d="M49 20h122v111H49zM55 27h110v97H55M110 27v97" />
          <path d="m49 20-30-12v136l30-13M19 8l7 8v117l-7 11M26 16l17 7v45l-17-1M26 74l17 1v47l-17 11M43 23v99M171 20l30-12v136l-30-13M201 8l-7 8v117l7 11M194 16l-17 7v45l17-1M194 74l-17 1v47l17 11M177 23v99" />
          <path d="M44 134h131M33 144h154M10 151h196M59 132l-5 7M160 132l7 7M77 145l-3 4M146 145l8 4" opacity={0.6} />
          <path d="M91 121h38l-7 27h-24l-7-27ZM89 116h42v5H89z" />
          <g stroke="#ff5b04">
            <path d="M110 116V64M110 102c-8-8-14-16-17-24M110 93c9-6 17-12 21-21M110 114c8-7 18-13 24-16" />
            <path d="M110 87c-12-10-14-26-2-42 8 11 12 28 2 42ZM107 82l1-31M99 100c-13-1-22-12-25-29 14 2 25 12 25 29ZM96 96 79 77M116 88c0-14 9-25 25-27-2 14-11 24-25 27ZM120 83l15-16M115 115c5-16 20-23 37-21-8 15-20 20-37 21ZM120 111l25-13" />
          </g>
          <path d="m62 32-4 9M68 33l-9 22M149 32l8 16" opacity={0.35} />
        </>
      ) : kind === "free" ? (
        <>
          <path d="m42 31 49-21 49 21M38 31h106v7H38zM44 38h94M50 38v105M132 38v105M49 143h84M41 143v6h99v-6M31 149v6h119v-6" />
          <path d="M62 44h59v98H62zM68 50h46v40H68zM68 102h46v32H68z" />
          <circle cx="113" cy="97" r="2" />
          <path d="M54 29 91 14l37 15M56 143h8M119 143h9M138 49h10v6M144 55l-5 10h10l-5-10ZM140 65v11h8V65M141 76h6" />
          <path d="M17 125h24l-4 23H22l-5-23ZM15 120h28v5H15zM29 120v-19M29 112l-9-7M29 108l8-8M18 115c-9-1-12-9-7-15-6-6-1-14 6-14-1-9 8-13 14-7 6-7 16-2 15 5 8 1 12 10 7 16 5 8-2 15-11 14" />
          <path d="M10 155h158M21 151h12M146 150h8" opacity={0.6} />
          <g transform="rotate(18 175 83)">
            <circle cx="175" cy="75" r="24" stroke="#ff5b04" strokeWidth={2.8} />
            <circle cx="175" cy="67" r="6" stroke="#ff5b04" strokeWidth={2.4} />
            <path d="M169 98v40l6 10 7-8v-10h-7v-8h7v-8h-7V99M172 101v35l3 6" />
          </g>
        </>
      ) : (
        <>
          <rect x="52" y="24" width="116" height="104" rx="9" />
          <path d="M52 47h116M73 24v-8a3 3 0 0 1 6 0v14a3 3 0 0 1-6 0M98 24v-8a3 3 0 0 1 6 0v14a3 3 0 0 1-6 0M123 24v-8a3 3 0 0 1 6 0v14a3 3 0 0 1-6 0M148 24v-8a3 3 0 0 1 6 0v14a3 3 0 0 1-6 0" />
          <rect x="69" y="59" width="11" height="11" rx="2" />
          <rect x="93" y="59" width="11" height="11" rx="2" />
          <rect x="117" y="59" width="11" height="11" rx="2" />
          <rect x="141" y="59" width="11" height="11" rx="2" />
          <rect x="69" y="81" width="11" height="11" rx="2" />
          <rect x="93" y="81" width="11" height="11" rx="2" stroke="#ff5b04" />
          <rect x="117" y="81" width="11" height="11" rx="2" stroke="#ff5b04" />
          <rect x="141" y="81" width="11" height="11" rx="2" />
          <rect x="69" y="103" width="11" height="11" rx="2" />
          <rect x="93" y="103" width="11" height="11" rx="2" />
          <rect x="117" y="103" width="11" height="11" rx="2" />
          <path d="M12 149h196m-7-7 7 7-7 7" />
          {[43, 110, 177].map((position) => (
            <g key={position}>
              <circle cx={position} cy="149" r="7.5" fill="#ff5b04" stroke="#ff5b04" />
              <circle cx={position} cy="149" r="4" stroke="white" strokeWidth={1} />
              <circle cx={position} cy="149" r="1.5" stroke="white" strokeWidth={0.8} />
            </g>
          ))}
        </>
      )}
    </svg>
  );
}

export function FormulaArchitecture({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 260"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="m172 40 165-42M174 34 337-8M162 47l175-45v9L171 54zM175 54v184M181 55v184M337 11v248M179 239l158 18M181 148l156 1M175 145l162-4M170 150l167 4M179 232l158 19" />
      <path d="m197 63 37-8v75l-37 4V63ZM204 68l24-5v60l-24 3V68ZM216 66v58M243 53l39-9v84l-39 1V53ZM250 58l25-6v69h-25V58ZM262 55v65M292 42l30-7v92l-30 1V42ZM298 47l18-4v77h-18V47ZM307 45v75" />
      <path d="M190 132h143v9H190zM193 132v-14l140-9v18M197 118v13M205 118v13M213 117v14M222 116v15M230 116v15M240 115v16M249 114v17M258 114v17M268 113v18M277 112v19M286 112v19M296 111v20M306 111v20M316 110v21M325 110v21" />
      <path d="M201 234v-54c0-18 30-18 30 0v57M208 235v-54c0-9 16-9 16 0v55M245 239v-64c0-20 31-20 31 0v68M252 240v-65c0-11 17-11 17 0v67M291 245v-69c0-22 31-22 31 0v74M298 246v-70c0-13 17-13 17 0v73" />
      <path d="M71 230c-8-9-7-17-1-25-5-7-4-15 1-22-4-7-3-15 2-22-4-7-3-17 2-23-4-8-1-16 3-22-3-9 0-17 4-24-3-8 0-17 3-24-2-9 1-18 4-26 1-15 4-34 8-35 4 2 6 24 7 38 4 8 5 17 3 25 4 8 5 16 2 24 4 8 4 16 1 24 5 7 6 16 2 23 5 7 6 16 1 23 5 7 5 15 1 22 6 9 6 17 1 25 7 10 6 19-2 26M97 54v177" />
      <path d="M22 234c-7-6-5-13 1-16-5-6-1-12 6-13-2-8 4-14 11-11 5-8 14-6 17 1 8-1 13 6 9 13 7 5 7 12 0 16 2 5-1 10-6 13M43 210v28M43 224l-8-8M43 230l10-12M117 237c-4-8 0-15 7-17-2-10 7-15 15-10 4-10 15-9 18-1 9-3 16 6 12 14 6 5 6 13-1 18" />
      <path d="M12 240h164M21 247h89M116 248h48" opacity={0.65} />
    </svg>
  );
}

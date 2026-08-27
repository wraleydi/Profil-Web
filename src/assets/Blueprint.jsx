function Blueprint() {
  return (
    <div>
      <div className="absolute -top-8 sm:-top-12 left-0 sm:left-2 w-36 sm:w-52 h-28 sm:h-36 opacity-40 blueprint-glow">
        <svg
          viewBox="0 0 220 140"
          className="w-full h-full text-slate-800 stroke-current fill-none"
        >
          <defs>
            <marker
              id="arrow-sensor"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="4"
              markerHeight="4"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
            </marker>
          </defs>

          {/* Sensor */}
          <rect x="10" y="45" width="42" height="28" rx="3" strokeWidth="1.3" />

          <text
            x="31"
            y="62"
            textAnchor="middle"
            className="fill-current font-mono text-[8px]"
          >
            SENSOR
          </text>

          {/* Signal */}
          <line
            x1="52"
            y1="59"
            x2="75"
            y2="59"
            strokeWidth="1.3"
            markerEnd="url(#arrow-sensor)"
          />

          {/* ADC */}
          <rect x="75" y="40" width="42" height="38" rx="3" strokeWidth="1.3" />

          <text
            x="96"
            y="57"
            textAnchor="middle"
            className="fill-current font-mono text-[8px]"
          >
            ADC
          </text>

          <text
            x="96"
            y="68"
            textAnchor="middle"
            className="fill-current font-mono text-[6px]"
          >
            12-bit
          </text>

          {/* MCU */}
          <line
            x1="117"
            y1="59"
            x2="140"
            y2="59"
            strokeWidth="1.3"
            markerEnd="url(#arrow-sensor)"
          />

          <rect
            x="140"
            y="40"
            width="55"
            height="38"
            rx="3"
            strokeWidth="1.3"
          />

          <text
            x="167.5"
            y="57"
            textAnchor="middle"
            className="fill-current font-mono text-[8px]"
          >
            MCU
          </text>

          <text
            x="167.5"
            y="68"
            textAnchor="middle"
            className="fill-current font-mono text-[6px]"
          >
            PROCESS
          </text>

          {/* Sampling waveform */}
          <path
            d="M10 95 C18 80,26 110,34 95 S50 80,58 95 S74 110,82 95"
            strokeWidth="1"
          />

          <text
            x="45"
            y="120"
            textAnchor="middle"
            className="fill-current font-mono text-[7px]"
          >
            fs = 10.24 kHz
          </text>
        </svg>
      </div>
      <div className="absolute -top-10 right-0 sm:right-4 w-44 sm:w-60 h-32 sm:h-40 opacity-55 blueprint-glow">
        <svg
          viewBox="0 0 240 150"
          className="w-full h-full text-slate-800 stroke-current fill-none"
        >
          <defs>
            <marker
              id="arrow-control"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="4"
              markerHeight="4"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
            </marker>
          </defs>

          <text x="5" y="55" className="fill-current font-mono text-[7px]">
            r(t)
          </text>

          <line
            x1="22"
            y1="50"
            x2="48"
            y2="50"
            strokeWidth="1.3"
            markerEnd="url(#arrow-control)"
          />

          <circle cx="60" cy="50" r="12" strokeWidth="1.3" />
          <text
            x="60"
            y="54"
            textAnchor="middle"
            className="fill-current font-mono text-[10px]"
          >
            Σ
          </text>

          <line
            x1="72"
            y1="50"
            x2="92"
            y2="50"
            strokeWidth="1.2"
            markerEnd="url(#arrow-control)"
          />
          <rect x="92" y="35" width="45" height="30" rx="3" strokeWidth="1.3" />
          <text
            x="114.5"
            y="53"
            textAnchor="middle"
            className="fill-current font-mono text-[8px]"
          >
            C(s)
          </text>

          <line
            x1="137"
            y1="50"
            x2="155"
            y2="50"
            strokeWidth="1.2"
            markerEnd="url(#arrow-control)"
          />
          <rect
            x="155"
            y="35"
            width="45"
            height="30"
            rx="3"
            strokeWidth="1.3"
          />
          <text
            x="177.5"
            y="53"
            textAnchor="middle"
            className="fill-current font-mono text-[8px]"
          >
            G(s)
          </text>

          <line
            x1="200"
            y1="50"
            x2="230"
            y2="50"
            strokeWidth="1.2"
            markerEnd="url(#arrow-control)"
          />
          <text x="225" y="42" className="fill-current font-mono text-[7px]">
            y(t)
          </text>

          <path
            d="M215 50 V105 H60 V62"
            strokeWidth="1"
            strokeDasharray="3,3"
            markerEnd="url(#arrow-control)"
          />

          <text
            x="125"
            y="118"
            textAnchor="middle"
            className="fill-current font-mono text-[7px]"
          >
            H(s) / feedback
          </text>

          <text
            x="145"
            y="140"
            textAnchor="middle"
            className="fill-current font-mono text-[7px]"
          >
            PID CONTROL LOOP
          </text>
        </svg>
      </div>

      <div className="absolute top-24 right-40 sm:right-50 w-40 sm:w-56 h-32 sm:h-40 opacity-40">
        <svg
          viewBox="0 0 220 150"
          className="w-full h-full text-slate-800 fill-current"
        >
          <text x="10" y="25" className="font-mono text-[13px]">
            ∇ · E = ρ / ε₀
          </text>
          <text x="10" y="48" className="font-mono text-[12px]">
            Q = mcΔT
          </text>
          <text x="10" y="70" className="font-mono text-[11px]">
            P = VI = I²R
          </text>
          <text x="10" y="92" className="font-mono text-[11px]">
            λ = hc / E
          </text>
          <text x="10" y="114" className="font-mono text-[10px]">
            q = -k∇T
          </text>
          <text x="10" y="136" className="font-mono text-[9px]">
            ∂T/∂t = α∇²T
          </text>
        </svg>
      </div>

      <div className="absolute top-[380px] left-[-10px] w-40 sm:w-56 h-32 sm:h-40 opacity-45">
        <svg
          viewBox="0 0 220 150"
          className="w-full h-full text-slate-800 stroke-current fill-none"
        >
          <path
            d="M10 75 C20 35,30 35,40 75 S60 115,70 75 S90 35,100 75 S120 115,130 75 S150 35,160 75 S180 115,190 75 S210 35,220 75"
            strokeWidth="1.5"
          />

          <line
            x1="10"
            y1="75"
            x2="220"
            y2="75"
            strokeWidth="0.6"
            strokeDasharray="2,3"
          />

          <line
            x1="40"
            y1="35"
            x2="40"
            y2="75"
            strokeWidth="0.7"
            strokeDasharray="2,2"
          />

          <line x1="40" y1="120" x2="100" y2="120" strokeWidth="0.8" />

          <text x="20" y="25" className="fill-current font-mono text-[8px]">
            ACOUSTIC WAVE
          </text>
          <text x="25" y="115" className="fill-current font-mono text-[7px]">
            λ
          </text>
          <text x="45" y="45" className="fill-current font-mono text-[7px]">
            A
          </text>
          <text x="130" y="140" className="fill-current font-mono text-[7px]">
            λ = v / f
          </text>
          <text x="130" y="150" className="fill-current font-mono text-[7px]">
            SPL [dB]
          </text>
        </svg>
      </div>

      <div className="absolute -bottom-10 right-0 sm:right-2 w-44 sm:w-56 h-36 sm:h-44 opacity-35 blueprint-glow">
        <svg
          viewBox="0 0 220 170"
          className="w-full h-full text-slate-800 stroke-current fill-none"
        >
          <defs>
            <marker
              id="arrow-energy"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="4"
              markerHeight="4"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
            </marker>
          </defs>

          <rect x="15" y="35" width="65" height="55" strokeWidth="1.4" />

          <path d="M15 53 H80 M15 71 H80" strokeWidth="0.7" />
          <path d="M37 35 V90 M59 35 V90" strokeWidth="0.7" />

          <circle cx="48" cy="15" r="8" strokeWidth="1" />
          <path d="M48 25 V30 M58 18 L64 22 M38 18 L32 22" strokeWidth="1" />

          <line
            x1="80"
            y1="62"
            x2="105"
            y2="62"
            strokeWidth="1.3"
            markerEnd="url(#arrow-energy)"
          />
          <rect
            x="105"
            y="45"
            width="45"
            height="34"
            rx="3"
            strokeWidth="1.3"
          />
          <text
            x="127"
            y="66"
            textAnchor="middle"
            className="fill-current font-mono text-[8px]"
          >
            DC/DC
          </text>

          <line
            x1="150"
            y1="62"
            x2="180"
            y2="62"
            strokeWidth="1.3"
            markerEnd="url(#arrow-energy)"
          />
          <rect x="180" y="45" width="25" height="34" strokeWidth="1.3" />
          <text
            x="192"
            y="66"
            textAnchor="middle"
            className="fill-current font-mono text-[7px]"
          >
            R
          </text>

          <text x="110" y="105" className="fill-current font-mono text-[7px]">
            P = ηAG
          </text>
          <text x="110" y="120" className="fill-current font-mono text-[7px]">
            V × I → P
          </text>
          <text x="110" y="135" className="fill-current font-mono text-[7px]">
            PV SYSTEM
          </text>
        </svg>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-44 sm:w-60 h-28 sm:h-36 opacity-30">
        <svg
          viewBox="0 0 240 140"
          className="w-full h-full text-slate-800 fill-current"
        >
          <text x="10" y="20" className="font-mono text-[9px]">
            NUMERICAL MODEL
          </text>
          <text x="10" y="45" className="font-mono text-[8px]">
            ∂u/∂t = α∇²u
          </text>
          <text x="10" y="65" className="font-mono text-[8px]">
            FEM / FDM / CFD
          </text>
          <text x="10" y="85" className="font-mono text-[8px]">
            Δx → 0
          </text>
          <text x="10" y="105" className="font-mono text-[8px]">
            error ≤ ε
          </text>
          <text x="10" y="125" className="font-mono text-[7px]">
            ITERATION : 1024
          </text>
        </svg>
      </div>
    </div>
  )
}

export default Blueprint
